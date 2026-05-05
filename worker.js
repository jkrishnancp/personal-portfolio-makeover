/**
 * Cloudflare Worker — portfolio + blueprint gate
 *
 * /blueprints/*.html          → check cookie; redirect to gate if not authenticated
 * POST /api/blueprint-send    → validate email, send OTP via Resend, return signed token
 * POST /api/blueprint-verify  → verify OTP + token, set 30-day cookie
 * everything else             → static assets
 *
 * Required env vars in Cloudflare dashboard:
 *   RESEND_API_KEY  = re_xxxxxxxxxxxx
 *   OTP_SECRET      = any long random string (used to sign tokens)
 */

const COOKIE_NAME = 'jcp_blueprint_access';
const COOKIE_DAYS = 30;
const OTP_TTL_MS  = 15 * 60 * 1000; // 15 minutes

const FREE_DOMAINS = new Set([
  'gmail.com','googlemail.com','yahoo.com','yahoo.co.uk','yahoo.fr','yahoo.de',
  'yahoo.es','yahoo.it','yahoo.com.au','yahoo.ca','yahoo.in','yahoo.co.in',
  'hotmail.com','hotmail.co.uk','hotmail.fr','hotmail.de','hotmail.es','hotmail.it',
  'outlook.com','outlook.co.uk','outlook.fr','outlook.de','live.com','live.co.uk',
  'msn.com','aol.com','icloud.com','me.com','mac.com','protonmail.com','proton.me',
  'tutanota.com','tutamail.com','tuta.io','zohomail.com','yandex.com','yandex.ru',
  'mail.com','gmx.com','gmx.net','gmx.de','inbox.com','fastmail.com','fastmail.fm',
  'hey.com','duck.com','pm.me','rocketmail.com','qq.com','163.com','126.com',
]);

function isPublicDomain(email) {
  const domain = (email.split('@')[1] || '').toLowerCase().trim();
  return FREE_DOMAINS.has(domain);
}

function hasCookie(request) {
  const cookie = request.headers.get('Cookie') || '';
  return cookie.split(';').some(c => c.trim().startsWith(COOKIE_NAME + '='));
}

function gateRedirect(requestUrl) {
  const url = new URL(requestUrl);
  const dest = encodeURIComponent(url.pathname + url.search);
  return Response.redirect(`${url.origin}/blueprint-gate.html?redirect=${dest}`, 302);
}

// ── HMAC helpers (stateless OTP signing) ──────────────────────────────────

async function getKey(secret) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

function uint8ToBase64(bytes) {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function signToken(email, otp, timestamp, secret) {
  const data    = `${email}|${otp}|${timestamp}`;
  const key     = await getKey(secret);
  const sigBuf  = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  const sigB64  = uint8ToBase64(new Uint8Array(sigBuf));
  return btoa(unescape(encodeURIComponent(data))) + '.' + sigB64;
}

async function verifyToken(token, inputOtp, inputEmail, secret) {
  try {
    const dotIdx = token.lastIndexOf('.');
    const dataB64 = token.slice(0, dotIdx);
    const sigB64  = token.slice(dotIdx + 1);
    const data    = decodeURIComponent(escape(atob(dataB64)));
    const parts   = data.split('|');
    const email   = parts[0], otp = parts[1], ts = parts[2];

    if (email !== inputEmail) return { ok: false, reason: 'email_mismatch' };
    if (otp   !== inputOtp)   return { ok: false, reason: 'wrong_otp' };
    if (Date.now() - parseInt(ts) > OTP_TTL_MS) return { ok: false, reason: 'expired' };

    const key      = await getKey(secret);
    const sigBytes = new Uint8Array(Array.from(atob(sigB64), c => c.charCodeAt(0)));
    const valid    = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(data));

    return valid ? { ok: true } : { ok: false, reason: 'invalid_sig' };
  } catch (e) {
    return { ok: false, reason: 'bad_token: ' + e.message };
  }
}

// ── Main fetch handler ────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Server-side blueprint protection
    if (/^\/blueprints\/\d{3}-/.test(url.pathname)) {
      if (!hasCookie(request)) return gateRedirect(request.url);
    }

    // ── Step 1: Send OTP ─────────────────────────────────────────────────
    if (url.pathname === '/api/blueprint-send' && request.method === 'POST') {
      try {
        if (!env.OTP_SECRET)    return Response.json({ ok: false, error: 'config_error', detail: 'OTP_SECRET not set in Cloudflare env vars' }, { status: 500 });
        if (!env.RESEND_API_KEY) return Response.json({ ok: false, error: 'config_error', detail: 'RESEND_API_KEY not set in Cloudflare env vars' }, { status: 500 });

        const data  = await request.formData();
        const name  = (data.get('name')  || '').trim();
        const email = (data.get('email') || '').trim();

        if (!name || !email)       return Response.json({ ok: false, error: 'missing_fields' }, { status: 400 });
        if (isPublicDomain(email)) return Response.json({ ok: false, error: 'work_email' },     { status: 400 });

        const otp       = String(Math.floor(100000 + Math.random() * 900000));
        const timestamp = Date.now().toString();
        const token     = await signToken(email, otp, timestamp, env.OTP_SECRET);

        // Send OTP email
        try {
          const res = await fetch('https://api.resend.com/emails', {
            method:  'POST',
            headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              from:    'Jay Prakash <noreply@jayakrishnancp.com>',
              to:      [email],
              subject: `Your blueprint access code: ${otp}`,
              html: `
                <div style="font-family:sans-serif;max-width:420px;margin:0 auto;padding:32px 24px;">
                  <h2 style="font-family:Georgia,serif;color:#c2410c;margin:0 0 8px;">Your access code</h2>
                  <p style="color:#78716c;font-size:14px;margin:0 0 24px;">Hi ${name}, use this code to access the security blueprint. It expires in 15 minutes.</p>
                  <div style="background:#fafaf8;border:2px solid #c2410c;border-radius:12px;padding:20px;text-align:center;margin:0 0 24px;">
                    <span style="font-family:monospace;font-size:36px;font-weight:700;color:#c2410c;letter-spacing:8px;">${otp}</span>
                  </div>
                  <p style="color:#a8a29e;font-size:12px;">If you didn't request this, ignore this email.</p>
                </div>
              `,
            }),
          });
          if (!res.ok) console.error('Resend error:', await res.text());
        } catch (e) { console.error('Email failed:', e); }

        // Also notify Jay
        try {
          await fetch('https://api.resend.com/emails', {
            method:  'POST',
            headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              from:    'Blueprint Gate <noreply@jayakrishnancp.com>',
              to:      ['jay@jayakrishnancp.com'],
              subject: `Blueprint access attempt: ${name} <${email}>`,
              html:    `<p><b>${name}</b> (${email}) requested blueprint access.</p>`,
            }),
          });
        } catch (e) { console.error('Notify failed:', e); }

        return Response.json({ ok: true, token });

      } catch (err) {
        console.error('Send OTP error:', err);
        return Response.json({ ok: false, error: 'server_error' }, { status: 500 });
      }
    }

    // ── Step 2: Verify OTP ───────────────────────────────────────────────
    if (url.pathname === '/api/blueprint-verify' && request.method === 'POST') {
      try {
        const data  = await request.formData();
        const email = (data.get('email') || '').trim();
        const otp   = (data.get('otp')   || '').trim();
        const token = (data.get('token') || '').trim();

        const result = await verifyToken(token, otp, email, env.OTP_SECRET);

        if (!result.ok) {
          const msg = result.reason === 'expired'   ? 'Code expired — please request a new one.' :
                      result.reason === 'wrong_otp' ? 'Incorrect code — please try again.' :
                                                      'Verification failed — please try again.';
          return Response.json({ ok: false, error: msg }, { status: 400 });
        }

        const maxAge = COOKIE_DAYS * 24 * 60 * 60;
        return new Response(JSON.stringify({ ok: true }), {
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `${COOKIE_NAME}=1; Path=/; Max-Age=${maxAge}; SameSite=Lax; Secure`,
          },
        });

      } catch (err) {
        console.error('Verify OTP error:', err);
        return Response.json({ ok: false, error: 'server_error' }, { status: 500 });
      }
    }

    // Everything else → static assets
    return env.ASSETS.fetch(request);
  },
};
