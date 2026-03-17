'use strict';

window.SpotlightOverlay = {
  isEnabled: false,

  enable: async function() {
    this.isEnabled = true;
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    try {
      await webview.executeJavaScript(`
        (function() {
          if (window.__spotlight_active) return;
          window.__spotlight_active = true;

          const overlayContainer = document.createElement('div');
          overlayContainer.id = '__spotlight_container__';
          overlayContainer.style.cssText = 'position: fixed; inset: 0; pointer-events: none; z-index: 2147483640; overflow: hidden;';
          
          const highlightBox = document.createElement('div');
          highlightBox.style.cssText = 'position: absolute; inset: 0; background-color: rgba(0,0,0,0.4); transition: all 0.2s ease-out; box-shadow: none; border-radius: 0;';
          
          overlayContainer.appendChild(highlightBox);
          document.body.appendChild(overlayContainer);

          let hoveredElement = null;
          let frameRef = null;

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

          function applyBionicToNode(root) {
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
              span.className = 'spotlight-bionic-node';
              span.innerHTML = item.newHtml;
              if (item.node.parentNode) {
                item.node.parentNode.replaceChild(span, item.node);
              }
            });
          }

          function removeBionicFromNode(root) {
            const spans = root.querySelectorAll('.spotlight-bionic-node');
            spans.forEach(span => {
              const parent = span.parentNode;
              if (parent) {
                parent.replaceChild(document.createTextNode(span.textContent), span);
              }
            });
          }

          const handleMouseMove = (e) => {
            const target = document.elementFromPoint(e.clientX, e.clientY);
            if (target) {
              let curr = target;
              while (curr && curr !== document.body) {
                const tag = curr.tagName.toUpperCase();
                if (['P', 'SECTION', 'ARTICLE', 'LI', 'H1', 'H2', 'H3', 'BUTTON', 'INPUT', 'A'].includes(tag) || (tag === 'DIV' && (curr.innerText || '').trim().length > 20)) {
                  if (hoveredElement !== curr) {
                    if (hoveredElement) {
                      removeBionicFromNode(hoveredElement);
                    }
                    if (!window.__bionic_active) {
                      applyBionicToNode(curr);
                    }
                    hoveredElement = curr;
                  }
                  
                  // Calculate position
                  const rect = curr.getBoundingClientRect();
                  highlightBox.style.top = (rect.top - 8) + 'px';
                  highlightBox.style.left = (rect.left - 8) + 'px';
                  highlightBox.style.width = Math.max(rect.width + 16, 0) + 'px';
                  highlightBox.style.height = Math.max(rect.height + 16, 0) + 'px';
                  highlightBox.style.boxShadow = '0 0 0 9999px rgba(0,0,0,0.4)';
                  highlightBox.style.borderRadius = '8px';
                  highlightBox.style.backgroundColor = 'transparent';
                  return;
                }
                curr = curr.parentElement;
              }
              if (hoveredElement) {
                removeBionicFromNode(hoveredElement);
                hoveredElement = null;
              }
              highlightBox.style.inset = '0';
              highlightBox.style.width = 'auto';
              highlightBox.style.height = 'auto';
              highlightBox.style.boxShadow = 'none';
              highlightBox.style.backgroundColor = 'rgba(0,0,0,0.4)';
            }
          };

          window.__spotlight_mousemove = (e) => {
            if (frameRef) cancelAnimationFrame(frameRef);
            frameRef = requestAnimationFrame(() => handleMouseMove(e));
          };

          window.__spotlight_scroll = () => {
            highlightBox.style.inset = '0';
            highlightBox.style.width = 'auto';
            highlightBox.style.height = 'auto';
            highlightBox.style.boxShadow = 'none';
            highlightBox.style.backgroundColor = 'rgba(0,0,0,0.4)';
          };

          document.addEventListener('mousemove', window.__spotlight_mousemove);
          document.addEventListener('scroll', window.__spotlight_scroll, { passive: true });
        })()
      `);
    } catch (e) {
      console.error('[SpotlightOverlay] Failed to inject:', e);
    }
  },

  disable: async function() {
    this.isEnabled = false;
    const webview = document.getElementById('main-webview');
    if (!webview) return;
    
    const script = `
      (function() {
        window.__spotlight_active = false;
        if (window.__spotlight_mousemove) {
          document.removeEventListener('mousemove', window.__spotlight_mousemove);
          window.__spotlight_mousemove = null;
        }
        if (window.__spotlight_scroll) {
          document.removeEventListener('scroll', window.__spotlight_scroll);
          window.__spotlight_scroll = null;
        }
        const container = document.getElementById('__spotlight_container__');
        if (container) container.remove();
        
        document.querySelectorAll('.spotlight-bionic-node').forEach(span => {
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
      console.error('[SpotlightOverlay] Failed to disable:', e);
    }
  }
};
