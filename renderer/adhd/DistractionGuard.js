'use strict';

window.DistractionGuard = {
  isEnabled: false,

  enable: async function() {
    this.isEnabled = true;
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    try {
      await webview.executeJavaScript(`
        (function() {
          if (window.__distraction_guard_active) return;
          window.__distraction_guard_active = true;

          const freeze = () => {
            document.querySelectorAll('video').forEach(v => {
              if (!v.paused) {
                v.pause();
                if (!v.parentElement.querySelector('.__media_overlay__')) {
                  const o = document.createElement('div');
                  o.className = '__media_overlay__';
                  o.style.cssText = 'position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); border-radius: inherit; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 1000;';
                  o.innerHTML = '<span style="background:#2563eb;color:#ffffff;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;">▶️ Focus Mode (Click to Play)</span>';
                  o.onclick = (e) => { e.stopPropagation(); v.play(); o.remove(); };
                  if (getComputedStyle(v.parentElement).position === 'static') v.parentElement.style.position = 'relative';
                  v.parentElement.appendChild(o);
                }
              }
            });
            document.querySelectorAll('img[src$=".gif"]').forEach(img => { img.style.filter = 'grayscale(100%) opacity(50%)'; });
          };

          freeze();
          window.__distraction_interval = setInterval(freeze, 3000);

          let lastInactivity = Date.now();
          let lastFocus = null;

          // Store named references so they can be removed on disable
          window.__dg_focusin_handler = (e) => { lastFocus = e.target; };
          window.__dg_visibility_handler = () => {
            if (!window.__distraction_guard_active) return;
            if (document.visibilityState === 'visible') {
              if ((Date.now() - lastInactivity) / 60000 >= 10) {
                const r = document.createElement('div');
                r.id = '__where_was_i__';
                r.style.cssText = 'position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%); background: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.2); z-index: 1000002; display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 500; cursor: pointer;';
                r.innerHTML = '<span>👋 Welcome back! You were reading this section.</span><button style="margin-left:8px;padding:4px;border-radius:50%;background:rgba(255,255,255,0.2);width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:none;color:inherit;cursor:pointer" aria-label="Dismiss">✕</button>';
                
                const btn = r.querySelector('button');
                if (btn) {
                  btn.onclick = (e) => { e.stopPropagation(); r.remove(); };
                }
                
                r.onclick = () => {
                  if (lastFocus) { lastFocus.scrollIntoView({ behavior: 'smooth', block: 'center' }); lastFocus.focus(); }
                  r.remove();
                };
                document.body.appendChild(r);
                setTimeout(() => { if (r.parentNode) r.remove(); }, 8000);
              }
            } else {
              lastInactivity = Date.now();
            }
          };

          document.addEventListener('focusin', window.__dg_focusin_handler);
          document.addEventListener('visibilitychange', window.__dg_visibility_handler);
        })()
      `);
    } catch (e) {
      console.error('[DistractionGuard] Failed to enable:', e);
    }
  },

  disable: async function() {
    this.isEnabled = false;
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    const script = `
      (function() {
        window.__distraction_guard_active = false;
        if (window.__distraction_interval) { clearInterval(window.__distraction_interval); window.__distraction_interval = null; }
        if (window.__dg_focusin_handler) { document.removeEventListener('focusin', window.__dg_focusin_handler); window.__dg_focusin_handler = null; }
        if (window.__dg_visibility_handler) { document.removeEventListener('visibilitychange', window.__dg_visibility_handler); window.__dg_visibility_handler = null; }
        document.querySelectorAll('.__media_overlay__').forEach(el => el.remove());
        document.querySelectorAll('video').forEach(v => { v.style.filter = ''; });
        document.querySelectorAll('img[src$=".gif"]').forEach(img => { img.style.filter = ''; });
        const rem = document.getElementById('__where_was_i__');
        if (rem) rem.remove();
      })()
    `;
    try {
      await Promise.race([
        webview.executeJavaScript(script),
        new Promise(resolve => setTimeout(resolve, 2000))
      ]);
    } catch (e) {
      console.error('[DistractionGuard] Failed to disable (non-fatal):', e);
    }
  }
};
