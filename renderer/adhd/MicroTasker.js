'use strict';

window.MicroTasker = {
  isEnabled: false,

  enable: async function() {
    this.isEnabled = true;
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    try {
      await webview.executeJavaScript(`
        (function() {
          if (window.__microtasker_active) return;
          window.__microtasker_active = true;

          const rootContent = document.body;

          const detectForms = () => {
            const inputs = Array.from(rootContent.querySelectorAll('input:not([type="hidden"]), select, textarea'));
            if (inputs.length < 3) return null;

            const visibleInputs = inputs.filter(i => {
              const rect = i.getBoundingClientRect();
              return rect.width > 0 && rect.height > 0 && getComputedStyle(i).display !== 'none';
            });

            if (visibleInputs.length < 3) return null;

            const wrappers = visibleInputs.map(input => input.closest('.form-group, .input-container, .mb-4, fieldset, div')).filter(Boolean);
            const uniqueWrappers = Array.from(new Set(wrappers));

            if (uniqueWrappers.length < 3) return null;
            return uniqueWrappers;
          };

          const wrappers = detectForms();
          if (!wrappers) {
            window.__microtasker_active = false;
            return;
          }

          window.__microtasker_wrappers = wrappers;

          const c = document.createElement('div');
          c.className = '__microtasker_progress_container__';
          c.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; height: 6px; z-index: 1000001; background: rgba(0,0,0,0.1); overflow: hidden; pointer-events: none;';
          
          const b = document.createElement('div');
          b.className = '__microtasker_progress_bar__';
          b.style.cssText = 'height: 100%; background: #2563eb; width: 0%; transition: width 0.5s ease-out;';
          
          c.appendChild(b);
          document.body.appendChild(c);

          wrappers.forEach((w, i) => {
            if (i !== 0) {
              w.style.opacity = '0.3';
              w.style.pointerEvents = 'none';
              w.style.filter = 'blur(2px)';
              w.style.transition = 'all 0.4s ease';
            } else {
              w.style.opacity = '1';
              w.style.pointerEvents = 'all';
              w.style.filter = 'none';
              w.style.transition = 'all 0.4s ease';
            }
          });

          window.__microtasker_handle_input = (e) => {
            const target = e.target;
            const myWrapper = wrappers.find(w => w.contains(target));
            if (!myWrapper) return;

            const idx = wrappers.indexOf(myWrapper);
            if (idx === wrappers.length - 1) {
              b.style.width = '100%';
            } else {
              const nextIdx = idx + 1;
              b.style.width = ((nextIdx / wrappers.length) * 100) + '%';
              setTimeout(() => {
                const nextWrapper = wrappers[nextIdx];
                if (nextWrapper) {
                  nextWrapper.style.opacity = '1';
                  nextWrapper.style.pointerEvents = 'all';
                  nextWrapper.style.filter = 'none';
                  nextWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }, 300);
            }
          };

          rootContent.addEventListener('input', window.__microtasker_handle_input);
          rootContent.addEventListener('change', window.__microtasker_handle_input);
        })()
      `);
    } catch (e) {
      console.error('[MicroTasker] Failed to enable:', e);
    }
  },

  disable: async function() {
    this.isEnabled = false;
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    const script = `
      (function() {
        window.__microtasker_active = false;
        if (window.__microtasker_handle_input) {
          document.body.removeEventListener('input', window.__microtasker_handle_input);
          document.body.removeEventListener('change', window.__microtasker_handle_input);
          window.__microtasker_handle_input = null;
        }
        if (window.__microtasker_wrappers) {
          window.__microtasker_wrappers.forEach((w) => {
            w.style.opacity = '';
            w.style.pointerEvents = '';
            w.style.filter = '';
            w.style.transition = '';
          });
          window.__microtasker_wrappers = null;
        }
        const prog = document.querySelector('.__microtasker_progress_container__');
        if (prog) prog.remove();
      })()
    `;

    try {
      await Promise.race([
        webview.executeJavaScript(script),
        new Promise(resolve => setTimeout(resolve, 2000))
      ]);
    } catch (e) {
      console.error('[MicroTasker] Failed to disable (non-fatal):', e);
    }
  }
};
