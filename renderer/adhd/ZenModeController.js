'use strict';

window.ZenModeController = {
  isEnabled: false,

  init: function() {
    console.log('[ZenMode] Initialized');
  },

  toggle: function(state) {
    this.isEnabled = !!state;
    console.log('[ZenMode] Toggle requested:', this.isEnabled);
    if (this.isEnabled) {
      this.activate();
    } else {
      this.deactivate();
    }
  },

  activate: function() {
    console.log('[ZenMode] Activating...');
    this.injectBehavior();
  },

  deactivate: function() {
    console.log('[ZenMode] Deactivating...');
    this.removeBehavior();
  },

  reapply: function() {
    if (this.isEnabled) {
      console.log('[ZenMode] Re-applying for new page...');
      this.injectBehavior();
    }
  },

  injectBehavior: async function() {
    const modules = [
      ['BionicRenderer',   window.BionicRenderer],
      ['SpotlightOverlay', window.SpotlightOverlay],
      ['TLDRBar',          window.TLDRBar],
      ['MicroTasker',      window.MicroTasker],
      ['DistractionGuard', window.DistractionGuard],
    ];
    for (const [name, mod] of modules) {
      if (mod) {
        try { await mod.enable(); }
        catch (e) { console.error('[ZenMode] enable ' + name + ':', e); }
      }
    }
  },

  removeBehavior: async function() {
    console.log('[ZenMode] Removing all behaviors...');

    const modules = [
      ['BionicRenderer',   window.BionicRenderer],
      ['SpotlightOverlay', window.SpotlightOverlay],
      ['TLDRBar',          window.TLDRBar],
      ['MicroTasker',      window.MicroTasker],
      ['DistractionGuard', window.DistractionGuard],
    ];

    // Mark all disabled synchronously first — in-flight async work sees this immediately
    for (const [, mod] of modules) {
      if (mod) mod.isEnabled = false;
    }

    // Disable ALL modules in PARALLEL — total wait is max(individual timeouts) not sum
    await Promise.all(modules.map(async ([name, mod]) => {
      if (!mod) return;
      try { await mod.disable(); }
      catch (e) { console.error('[ZenMode] disable ' + name + ':', e); }
    }));

    // Safety nuke for any stragglers (JS-based modules)
    await this._nukeWebview();
  },

  _nukeWebview: async function() {
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    const script = `
      (function() {
        // Bionic
        window.__bionic_active = false;
        if (window.__bionic_observer) { window.__bionic_observer.disconnect(); window.__bionic_observer = null; }
        document.querySelectorAll('[data-original-html]').forEach(el => { el.innerHTML = el.getAttribute('data-original-html'); el.removeAttribute('data-original-html'); });
        document.querySelectorAll('.bionic-reading-node').forEach(span => { const p = span.parentNode; if (p) p.replaceChild(document.createTextNode(span.textContent), span); });

        // Spotlight
        window.__spotlight_active = false;
        if (window.__spotlight_mousemove) {
          document.removeEventListener('mousemove', window.__spotlight_mousemove);
          window.__spotlight_mousemove = null;
        }
        if (window.__spotlight_scroll) {
          document.removeEventListener('scroll', window.__spotlight_scroll);
          window.__spotlight_scroll = null;
        }
        const sContainer = document.getElementById('__spotlight_container__');
        if (sContainer) sContainer.remove();
        document.querySelectorAll('.spotlight-bionic-node').forEach(span => {
          const parent = span.parentNode;
          if (parent) parent.replaceChild(document.createTextNode(span.textContent), span);
        });

        // TL;DR
        const tldr = document.getElementById('__tldr_bar__');
        if (tldr) tldr.remove();
        document.body.style.marginTop = '';

        // MicroTasker
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

        // DistractionGuard
        window.__distraction_guard_active = false;
        if (window.__distraction_interval) { clearInterval(window.__distraction_interval); window.__distraction_interval = null; }
        if (window.__dg_focusin_handler) { document.removeEventListener('focusin', window.__dg_focusin_handler); window.__dg_focusin_handler = null; }
        if (window.__dg_visibility_handler) { document.removeEventListener('visibilitychange', window.__dg_visibility_handler); window.__dg_visibility_handler = null; }
        document.querySelectorAll('.__media_overlay__').forEach(el => el.remove());
        document.querySelectorAll('video').forEach(v => { v.style.filter = ''; });
        document.querySelectorAll('img[src$=".gif"]').forEach(img => { img.style.filter = ''; });
        const rem = document.getElementById('__where_was_i__');
        if (rem) rem.remove();

        console.log('[ZenMode] Nuke complete.');
      })()
    `;

    try {
      // 2 second timeout — never allow a frozen webview to block disable
      await Promise.race([
        webview.executeJavaScript(script),
        new Promise(resolve => setTimeout(resolve, 2000))
      ]);
    } catch (e) {
      console.warn('[ZenMode] Nuke failed (non-fatal):', e);
    }
  }
};
