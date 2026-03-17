'use strict';

window.BionicRenderer = {
  isEnabled: false,

  enable: async function() {
    this.isEnabled = true;
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    try {
      await webview.executeJavaScript(`
        (function() {
          if (window.__bionic_active) return;
          window.__bionic_active = true;

          function isIgnored(node) {
            let curr = node;
            while (curr && curr !== document.body) {
              if (curr.nodeType === Node.ELEMENT_NODE) {
                const tag = curr.tagName.toLowerCase();
                if (['input', 'textarea', 'button', 'nav', 'pre', 'code', 'script', 'style', 'noscript'].includes(tag)) return true;
                if (curr.isContentEditable) return true;
                if (curr.classList && (curr.classList.contains('bionic-reading-node') || curr.classList.contains('spotlight-bionic-node'))) return true;
                if (curr.id === '__tldr_bar__' || curr.id === '__spotlight_container__') return true;
              }
              curr = curr.parentNode;
            }
            return false;
          }

          function bionicWord(word) {
            const letters = word.replace(/[^a-zA-Z0-9]/g, '');
            if (letters.length === 0) return word;
            if (letters.length === 1) return '<b>' + word + '</b>';
            const mid = Math.ceil(letters.length / 2);
            let letterCount = 0;
            let splitIdx = 0;
            while (splitIdx < word.length && letterCount < mid) {
              if (/[a-zA-Z0-9]/.test(word[splitIdx])) letterCount++;
              splitIdx++;
            }
            return '<b>' + word.substring(0, splitIdx) + '</b>' + word.substring(splitIdx);
          }

          function applyBionic(root) {
            if (!window.__bionic_active) return;
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
            const nodesToReplace = [];

            while (walker.nextNode()) {
              const node = walker.currentNode;
              if (!node.nodeValue || !node.nodeValue.trim() || isIgnored(node)) continue;
              
              const parent = node.parentNode;
              if (!parent) continue;
              if (!parent.hasAttribute('data-original-html')) {
                parent.setAttribute('data-original-html', parent.innerHTML);
              }

              const words = node.nodeValue.split(/(\\s+)/);
              const newHtml = words.map(w => w.trim() ? bionicWord(w) : w).join('');
              nodesToReplace.push({ node, newHtml });
            }

            nodesToReplace.forEach(item => {
              const span = document.createElement('span');
              span.className = 'bionic-reading-node';
              span.innerHTML = item.newHtml;
              if (item.node.parentNode) {
                item.node.parentNode.replaceChild(span, item.node);
              }
            });
          }

          applyBionic(document.body);

          if (window.__bionic_observer) window.__bionic_observer.disconnect();
          window.__bionic_observer = new MutationObserver(mutations => {
            if (!window.__bionic_active) return;
            mutations.forEach(mutation => {
              mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) applyBionic(node);
              });
            });
          });
          window.__bionic_observer.observe(document.body, { childList: true, subtree: true });
        })()
      `);
    } catch (e) {
      console.error('[BionicRenderer] Failed to enable:', e);
    }
  },

  disable: async function() {
    this.isEnabled = false;
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    const script = `
      (function() {
        window.__bionic_active = false;
        if (window.__bionic_observer) {
          window.__bionic_observer.disconnect();
          window.__bionic_observer = null;
        }
        document.querySelectorAll('[data-original-html]').forEach(el => {
          el.innerHTML = el.getAttribute('data-original-html');
          el.removeAttribute('data-original-html');
        });
        document.querySelectorAll('.bionic-reading-node').forEach(span => {
          const parent = span.parentNode;
          if (parent) parent.replaceChild(document.createTextNode(span.textContent), span);
        });
      })()
    `;

    try {
      await Promise.race([
        webview.executeJavaScript(script),
        new Promise(resolve => setTimeout(resolve, 2000))
      ]);
    } catch (e) {
      console.error('[BionicRenderer] Failed to disable (non-fatal):', e);
    }
  }
};
