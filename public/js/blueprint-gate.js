/**
 * Blueprint Gate — Lead capture before blueprint access
 * Calls /api/blueprint-access (Cloudflare Pages Function → Resend)
 * Sets a 30-day cookie on success so returning visitors go straight through.
 */
(function () {
  'use strict';

  var COOKIE_NAME = 'jcp_blueprint_access';
  var COOKIE_DAYS = 30;

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) +
      '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  // Already authenticated — let them straight through
  if (getCookie(COOKIE_NAME)) return;

  // Block page scroll while gate is visible
  document.documentElement.style.overflow = 'hidden';

  var overlay = document.createElement('div');
  overlay.id = 'jcp-gate';
  overlay.innerHTML = [
    '<style>',
    '#jcp-gate{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;',
    'background:rgba(28,25,23,0.85);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);',
    'font-family:"DM Sans",ui-sans-serif,system-ui,sans-serif;}',

    '#jcp-gate-box{background:#fafaf8;border-radius:20px;padding:40px 36px;max-width:400px;',
    'width:90%;box-shadow:0 24px 80px rgba(0,0,0,0.4);}',

    '#jcp-gate-logo{font-family:"Cormorant Garamond",Georgia,serif;font-size:18px;font-weight:700;',
    'color:#c2410c;margin-bottom:24px;}',

    '#jcp-gate h2{margin:0 0 8px;font-family:"Cormorant Garamond",Georgia,serif;',
    'font-size:24px;font-weight:700;color:#1c1917;line-height:1.2;}',

    '#jcp-gate p{margin:0 0 24px;font-size:13px;color:#78716c;line-height:1.6;}',

    '#jcp-gate label{display:block;font-size:10px;font-family:"DM Mono",monospace;',
    'text-transform:uppercase;letter-spacing:.14em;color:#78716c;margin-bottom:5px;}',

    '#jcp-gate input[type=text],#jcp-gate input[type=email]{',
    'width:100%;box-sizing:border-box;padding:10px 14px;border:1px solid #e7e2dc;',
    'border-radius:10px;font-size:14px;color:#1c1917;background:#fff;',
    'margin-bottom:14px;outline:none;transition:border-color .15s;}',
    '#jcp-gate input:focus{border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.1);}',

    '#jcp-submit{width:100%;padding:12px;background:#c2410c;color:#fff;border:none;',
    'border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;',
    'transition:background .15s;margin-top:4px;}',
    '#jcp-submit:hover:not(:disabled){background:#a83209;}',
    '#jcp-submit:disabled{background:#e7e2dc;color:#a8a29e;cursor:not-allowed;}',

    '#jcp-gate-msg{margin-top:12px;font-size:12px;text-align:center;min-height:16px;}',
    '#jcp-gate-note{margin-top:16px;font-size:11px;color:#a8a29e;text-align:center;}',
    '</style>',

    '<div id="jcp-gate-box">',
    '  <div id="jcp-gate-logo">Jay Prakash</div>',
    '  <h2>Access this blueprint</h2>',
    '  <p>Enter your details once to unlock all 256 security blueprints for 30 days.</p>',
    '  <form id="jcp-gate-form" novalidate>',
    '    <label for="jcp-name">Full Name</label>',
    '    <input type="text" id="jcp-name" name="name" placeholder="Your name" required autocomplete="name" />',
    '    <label for="jcp-email">Work Email</label>',
    '    <input type="email" id="jcp-email" name="email" placeholder="you@company.com" required autocomplete="email" />',
    '    <button type="submit" id="jcp-submit">Continue to Blueprint →</button>',
    '  </form>',
    '  <div id="jcp-gate-msg"></div>',
    '  <p id="jcp-gate-note">Used only to notify the author. No spam, ever.</p>',
    '</div>',
  ].join('');

  document.body.appendChild(overlay);

  document.getElementById('jcp-gate-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var name  = document.getElementById('jcp-name').value.trim();
    var email = document.getElementById('jcp-email').value.trim();
    var btn   = document.getElementById('jcp-submit');
    var msg   = document.getElementById('jcp-gate-msg');

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.style.color = '#c2410c';
      msg.textContent = 'Please enter your name and a valid email.';
      return;
    }

    btn.disabled    = true;
    btn.textContent = 'Sending…';
    msg.textContent = '';

    var data = new FormData();
    data.append('name',      name);
    data.append('email',     email);
    data.append('blueprint', document.title);
    data.append('page',      window.location.href);

    fetch('/api/blueprint-access', { method: 'POST', body: data })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.ok) {
          setCookie(COOKIE_NAME, '1', COOKIE_DAYS);
          msg.style.color  = '#15803d';
          msg.textContent  = 'Verified — opening blueprint…';
          btn.textContent  = '✓ Done';
          setTimeout(function () {
            document.documentElement.style.overflow = '';
            overlay.remove();
          }, 700);
        } else {
          throw new Error(json.error || 'failed');
        }
      })
      .catch(function () {
        btn.disabled    = false;
        btn.textContent = 'Continue to Blueprint →';
        msg.style.color = '#c2410c';
        msg.textContent = 'Something went wrong — please try again.';
      });
  });
})();
