'use strict';
/* ============================================================================
   DOM Reader — Extracts structural text from the webview's loaded page.
   Runs inside the webview via executeJavaScript().
   ============================================================================ */

/**
 * Returns a JavaScript string that, when executed inside a webview,
 * extracts a structural text description of the page (headings, labels,
 * buttons, dropdowns, and visible text).
 */
window.ISL_DOM_READER = {
  /**
   * Script to inject into webview — returns a plain-text structural summary.
   */
  EXTRACT_SCRIPT: `(function(){
    try {
      var parts = [];
      function traverse(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          var text = (node.textContent || '').trim();
          if (text) parts.push(text);
          return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        var el = node;
        var style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        var tagName = el.tagName.toLowerCase();
        if (['h1','h2','h3','h4','h5','h6'].indexOf(tagName) !== -1) {
          parts.push('[Heading: ' + (el.textContent || '').trim() + ']');
          return;
        }
        if (tagName === 'label') {
          parts.push('[Label: ' + (el.textContent || '').trim() + ']');
          return;
        }
        if (tagName === 'button') {
          var text = (el.textContent || '').trim();
          if (text && text.length < 50) parts.push('[Button: ' + text + ']');
          return;
        }
        if (tagName === 'select' || el.getAttribute('role') === 'combobox') {
          var trigger = el.querySelector('[class*="SelectValue"]');
          if (trigger && (trigger.textContent || '').trim()) {
            parts.push('[Dropdown value: ' + trigger.textContent.trim() + ']');
          }
          return;
        }
        if (tagName === 'input') {
          var iType = el.type || 'text';
          var iLabel = el.placeholder || el.getAttribute('aria-label') || el.name || '';
          parts.push('[Input (' + iType + '): ' + iLabel + ']');
          return;
        }
        el.childNodes.forEach(traverse);
      }
      var root = document.querySelector('main,[role="main"],article,#content,.main-content') || document.body;
      traverse(root);
      var unique = [];
      var seen = {};
      for (var i = 0; i < parts.length; i++) {
        if (!seen[parts[i]]) { seen[parts[i]] = true; unique.push(parts[i]); }
      }
      return unique.join('\\n');
    } catch(e) {
      return 'Error reading page: ' + e.message;
    }
  })()`
};
