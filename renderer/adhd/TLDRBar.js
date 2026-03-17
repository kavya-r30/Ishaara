'use strict';

window.TLDRBar = {
  isEnabled: false,
  _requestId: 0,   // incremented on each enable() — lets in-flight calls self-cancel

  enable: async function() {
    this.isEnabled = true;
    const myRequestId = ++this._requestId;   // capture this call's ID

    const webview = document.getElementById('main-webview');
    if (!webview) return;

    const pageContext = await window.extractPageContext();
    if (!pageContext) return;

    // Bail early if zen was toggled off while we were extracting context
    if (!this.isEnabled || this._requestId !== myRequestId) return;

    const prompt = 'Generate a TL;DR for this page. Return exactly 3 bullet points summarizing the main content. Also estimate the reading time in minutes. Context: Title: ' + pageContext.title + ' URL: ' + pageContext.url + ' Body Text: ' + pageContext.bodyText.slice(0, 2000) + ' Response format: JSON { "bullets": ["...", "...", "..."], "readingTime": "X min" }';

    try {
      const result = await window.electronAPI.queryMistral({
        command: prompt,
        pageContext: pageContext,
        history: []
      });

      // Check again — zen may have been toggled off while the LLM was thinking
      if (!this.isEnabled || this._requestId !== myRequestId) return;

      if (result.success && result.data) {
        let bullets = ["Summary 1", "Summary 2", "Summary 3"];
        let readingTime = "2 min";

        try {
          const jsonMatch = (result.data.explanation || result.data.speech).match(/\{.*\}/s);
          if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            bullets = parsed.bullets || bullets;
            readingTime = parsed.readingTime || readingTime;
          }
        } catch (e) {
          console.error('[TLDRBar] Failed to parse AI response', e);
        }

        // Final guard before injecting
        if (this.isEnabled && this._requestId === myRequestId) {
          await this.injectBar(bullets, readingTime);
        }
      }
    } catch (e) {
      console.error('[TLDRBar] Error generating TL;DR', e);
    }
  },

  injectBar: async function(bullets, readingTime) {
    const webview = document.getElementById('main-webview');
    if (!webview || !this.isEnabled) return;

    const bulletStr = bullets.map(b => '<li style="line-height: 1.6; margin-bottom: 8px;">' + b + '</li>').join('');

    try {
      await webview.executeJavaScript(`
        (function() {
          if (document.getElementById('__tldr_bar__')) return;
          const bar = document.createElement('div');
          bar.id = '__tldr_bar__';
          bar.style.cssText = 'position: fixed; top: 48px; left: 50%; transform: translateX(-50%); width: 91.666%; max-width: 576px; background: rgba(28, 33, 40, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); color: #eaeaeb; border: 1px solid rgba(255,255,255,0.1); z-index: 1000000; font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 8px 32px rgba(0,0,0,0.4); display: flex; flex-direction: column; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 12px; overflow: hidden;';

          const header = document.createElement('div');
          header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 8px 16px; background: rgba(22, 27, 34, 0.95); border-bottom: 1px solid rgba(255,255,255,0.05);';
          
          const svgSparkles = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #facc15;"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>';
          
          header.innerHTML = '<div style="display: flex; align-items: center; gap: 8px; font-size: 0.875rem; font-weight: 600;">' + svgSparkles + '<span>AI TL;DR</span><span style="font-size: 0.75rem; font-weight: 400; opacity: 0.7; margin-left: 8px;">' + ${JSON.stringify(readingTime)} + '</span></div><div style="display: flex; gap: 4px;"><button id="__tldr_collapse__" style="background: transparent; border: none; color: #8b949e; cursor: pointer; padding: 4px; border-radius: 4px; transform: rotate(180deg); display: flex; align-items: center; justify-content: center; transition: background 0.2s;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><button id="__tldr_dismiss__" style="background: transparent; border: none; color: #8b949e; cursor: pointer; padding: 4px; border-radius: 4px; display: flex; align-items: center; justify-content: center; transition: background 0.2s;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button></div>';

          const content = document.createElement('div');
          content.id = '__tldr_content__';
          content.style.cssText = 'padding: 12px 20px; font-size: 0.875rem; color: #e1e4e8; background: transparent;';
          content.innerHTML = '<ul style="margin: 0; padding-left: 1.5rem; list-style-type: disc;">' + ${JSON.stringify(bulletStr)} + '</ul>';

          bar.appendChild(header);
          bar.appendChild(content);
          document.body.appendChild(bar);

          // We don't push body down anymore since it's floating
          // document.body.style.marginTop = bar.offsetHeight + 'px';

          let collapsed = false;
          document.getElementById('__tldr_collapse__').addEventListener('click', () => {
            collapsed = !collapsed;
            content.style.display = collapsed ? 'none' : 'block';
            document.getElementById('__tldr_collapse__').style.transform = collapsed ? 'rotate(0deg)' : 'rotate(180deg)';
          });
          
          document.getElementById('__tldr_dismiss__').addEventListener('click', () => {
            bar.remove();
          });
        })()
      `);
    } catch (e) {
      console.error('[TLDRBar] Failed to inject bar:', e);
    }
  },

  disable: async function() {
    this.isEnabled = false;
    this._requestId++;    // invalidate any in-flight enable() calls
    const webview = document.getElementById('main-webview');
    if (!webview) return;

    const script = `
      (function() {
        const bar = document.getElementById('__tldr_bar__');
        if (bar) bar.remove();
        document.body.style.marginTop = '';
      })()
    `;
    try {
      await Promise.race([
        webview.executeJavaScript(script),
        new Promise(resolve => setTimeout(resolve, 2000))
      ]);
    } catch (e) {
      console.error('[TLDRBar] Failed to disable (non-fatal):', e);
    }
  }
};
