/**
 * Cloudflare Worker — portfolio + blueprint gate
 *
 * /blueprints/*.html  → check cookie; redirect to gate if not authenticated
 * /api/blueprint-access POST → send Resend email, set cookie
 * everything else → static assets
 */

const COOKIE_NAME = 'jcp_blueprint_access';
const COOKIE_DAYS = 30;

function hasCookie(request) {
  const cookie = request.headers.get('Cookie') || '';
  return cookie.split(';').some(c => c.trim().startsWith(COOKIE_NAME + '='));
}

function gateRedirect(requestUrl) {
  const url = new URL(requestUrl);
  const dest = encodeURIComponent(url.pathname + url.search);
  return Response.redirect(`${url.origin}/blueprint-gate.html?redirect=${dest}`, 302);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ── Server-side blueprint protection ──────────────────────────────────
    if (url.pathname.startsWith('/blueprints/') && url.pathname.endsWith('.html')) {
      if (!hasCookie(request)) {
        return gateRedirect(request.url);
      }
    }

    // ── Blueprint lead capture ─────────────────────────────────────────────
    if (url.pathname === '/api/blueprint-access' && request.method === 'POST') {
      try {
        const data      = await request.formData();
        const name      = (data.get('name')      || '').trim();
        const email     = (data.get('email')     || '').trim();
        const blueprint = (data.get('blueprint') || '').trim();
        const page      = (data.get('page')      || '').trim();

        if (!name || !email) {
          return Response.json({ ok: false, error: 'Missing fields' }, { status: 400 });
        }

        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type':  'application/json',
          },
          body: JSON.stringify({
            from:    'Blueprint Gate <noreply@jayakrishnancp.com>',
            to:      ['jay@jayakrishnancp.com'],
            subject: `Blueprint access: ${name} <${email}>`,
            html: `
              <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;">
                <h2 style="color:#c2410c;margin:0 0 16px;">New Blueprint Access Request</h2>
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;color:#78716c;font-size:13px;width:100px;">Name</td>
                      <td style="padding:8px 0;font-size:13px;font-weight:600;">${name}</td></tr>
                  <tr><td style="padding:8px 0;color:#78716c;font-size:13px;">Email</td>
                      <td style="padding:8px 0;font-size:13px;font-weight:600;">${email}</td></tr>
                  <tr><td style="padding:8px 0;color:#78716c;font-size:13px;">Blueprint</td>
                      <td style="padding:8px 0;font-size:13px;">${blueprint}</td></tr>
                  <tr><td style="padding:8px 0;color:#78716c;font-size:13px;">Page</td>
                      <td style="padding:8px 0;font-size:13px;">
                        <a href="${page}" style="color:#c2410c;">${page}</a>
                      </td></tr>
                </table>
              </div>
            `,
          }),
        });

        if (!res.ok) {
          const err = await res.text();
          console.error('Resend error:', err);
          return Response.json({ ok: false, error: 'Email send failed' }, { status: 500 });
        }

        // Set the cookie server-side too for extra security
        const maxAge = COOKIE_DAYS * 24 * 60 * 60;
        return new Response(JSON.stringify({ ok: true }), {
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `${COOKIE_NAME}=1; Path=/; Max-Age=${maxAge}; SameSite=Lax; Secure`,
          },
        });

      } catch (err) {
        console.error('Worker error:', err);
        return Response.json({ ok: false, error: 'Server error' }, { status: 500 });
      }
    }

    // ── Everything else → static assets ──────────────────────────────────
    return env.ASSETS.fetch(request);
  },
};
