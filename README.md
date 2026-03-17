# AccessAI Browser

An agentic, Chromium-based web browser designed for people with disabilities. Navigate any website using **voice or text commands** powered by **Mistral AI** — the browser reads, understands, and acts on the live DOM for you.

---

## Features

| Feature | Description |
|---|---|
| 🎤 Voice Commands | Speak naturally to navigate, click, type, or search |
| 🤖 Mistral AI Backend | Understands full page context (DOM, links, forms, headings) |
| 🖱 Action Execution | Click elements, fill forms, scroll, submit — all hands-free |
| 🌓 High Contrast | Forces black/white colours for low-vision users |
| 🔊 Text-to-Speech | Reads any section aloud with adjustable speed & voice |
| 📄 Page Simplifier | Strips ads, sidebars, banners — leaves clean readable text |
| Dy Dyslexia Font | Dyslexia-friendly typography with wide spacing |
| 🌈 Colour Filters | Protanopia, deuteranopia, tritanopia, greyscale |
| 🔍 Smart Zoom | 50%–300% zoom applied live to the page |
| 💬 Conversation History | Remembers context across multiple commands |

---

## Quick Start

### 1. Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- A free [Mistral API key](https://console.mistral.ai)

### 2. Install

```bash
cd AF2
npm install
```

### 3. Configure

```bash
cp .env.example .env
# Edit .env and add your Mistral API key
```

Or skip this step — the browser will prompt you for your API key when it first opens.

### 4. Run

```bash
npm start
```

To run in developer mode (DevTools open):

```bash
npm run start:dev
```

---

## How to Use

### Voice Commands
Press **Ctrl+Shift+V** (or click the 🎤 button in the toolbar or chat panel) to activate voice input. Speak your command naturally:

> *"Go to Wikipedia"*
> *"Read me the main article"*
> *"Click the search button"*
> *"Fill in the search box with 'accessible travel'"*
> *"Make the text bigger"*
> *"Turn on high contrast mode"*
> *"Simplify this page"*
> *"What is on this page?"*
> *"Scroll down"*
> *"Go back"*

### Text Commands
Type any command in the chat panel and press **Enter** (or click Send).

### Quick Accessibility Buttons
The six buttons in the AI panel header give instant one-click access to:
- 🌓 High contrast toggle
- **Aᴬ** Larger text (cycles through sizes)
- 📄 Page simplification
- 🔗 Highlight all links
- 🔊 Read page aloud
- **Dy** Dyslexia-friendly font

### Accessibility Settings Drawer
Click ♿ in the toolbar for full control:
- Precise zoom slider
- TTS voice and speed selection
- Colour-blindness filters
- Auto-read on page load

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+Shift+V` | Toggle voice command |
| `Ctrl+L` | Focus address bar |
| `F5` | Reload page |
| `Alt+←` | Go back |
| `Alt+→` | Go forward |
| `Esc` | Stop speaking / close panel |
| `Enter` in chat | Send command |
| `Shift+Enter` | New line in chat |

---

## Architecture

```
AF2/
├── main.js                  # Electron main process — window, IPC, Mistral bridge
├── preload.js               # Context bridge — exposes safe APIs to renderer
├── src/
│   └── mistral-service.js   # Mistral AI client, prompt engineering, JSON parsing
└── renderer/
    ├── index.html            # Browser shell — navigation, AI panel, modals
    ├── styles.css            # Accessibility-first dark-theme stylesheet
    ├── app.js                # All renderer logic: DOM extraction, action executor,
    │                         #   voice recognition, TTS, chat UI, a11y engine
    └── home.html             # Custom home/new-tab page
```

### Data Flow

```
User speaks/types command
  → app.js extracts page DOM (executeJavaScript)
    → IPC → main.js → Mistral API (with DOM + command + history)
      → Mistral returns: { speech, actions[], explanation }
        → IPC → app.js renders chat message + speaks response
          → Executes each action on the webview (click/type/navigate/a11y…)
```

---

## API Key Setup

1. Visit [console.mistral.ai](https://console.mistral.ai)
2. Sign up for a free account
3. Create an API key
4. Either:
   - Add it to your `.env` file as `MISTRAL_API_KEY=sk-…`
   - Or enter it in the browser Settings (⚙️ button) at runtime

The **Mistral Large** model is recommended for best comprehension. Use **Mistral Small** for faster, cheaper responses.

---

## Accessibility Compliance

This browser is designed to meet **WCAG 2.1 AA** guidelines:
- All interactive elements have ARIA labels
- Focus is always visible (2.5px accent outline)
- Colour contrast ratios exceed 4.5:1
- Reduced motion respected via `prefers-reduced-motion`
- Screen reader compatible structure (`role`, `aria-live`, `aria-label`)
- All functionality accessible via keyboard alone

---

## Troubleshooting

**Voice not working?**
Voice recognition requires a microphone. On Linux, you may need to allow the `media` permission. The Web Speech API requires Chromium (included in Electron).

**Page not loading?**
Some pages block embedding. The webview uses a real Chromium engine — most public sites will load normally.

**Mistral returns errors?**
Check your API key in Settings. If you hit rate limits, switch to `mistral-small-latest` (faster, cheaper).

**Actions fail on a page?**
Modern SPAs (React, Vue) may re-render after an action. Try adding a command like "wait then click…" or repeat the action.
