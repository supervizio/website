/**
 * Vision Overlay - Element Selection Tracker
 *
 * Injected into the browser via Playwright MCP's browser_evaluate.
 * Tracks mouse hover, element selection, and exposes state via window.__vision__.
 *
 * Usage from Claude Code:
 *   1. browser_navigate → http://localhost:3000
 *   2. browser_evaluate → inject this script
 *   3. User selects elements (Ctrl+Click or toolbar toggle + Click)
 *   4. browser_evaluate → JSON.stringify(window.__vision__.selected)
 *   5. Claude Code reads element info → modifies source code
 */
(function () {
  if (window.__vision__) return;

  const state = {
    active: false,
    selected: null,
    history: [],
    hovered: null,
  };
  window.__vision__ = state;

  // --- Styles ---
  const HIGHLIGHT_COLOR = "rgba(99, 102, 241, 0.3)";
  const HIGHLIGHT_BORDER = "#6366f1";
  const SELECTED_COLOR = "rgba(34, 197, 94, 0.3)";
  const SELECTED_BORDER = "#22c55e";

  const style = document.createElement("style");
  style.textContent = `
    .__vision-highlight__ {
      outline: 2px solid ${HIGHLIGHT_BORDER} !important;
      background-color: ${HIGHLIGHT_COLOR} !important;
      cursor: crosshair !important;
    }
    .__vision-selected__ {
      outline: 2px dashed ${SELECTED_BORDER} !important;
      background-color: ${SELECTED_COLOR} !important;
    }
    .__vision-panel__ {
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 2147483647;
      background: #1e1b4b;
      color: #e0e7ff;
      border: 1px solid #6366f1;
      border-radius: 8px;
      padding: 12px;
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 12px;
      min-width: 280px;
      max-width: 400px;
      max-height: 300px;
      overflow-y: auto;
      box-shadow: 0 4px 24px rgba(0,0,0,0.5);
      user-select: none;
    }
    .__vision-panel__ h3 {
      margin: 0 0 8px 0;
      font-size: 13px;
      color: #a5b4fc;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .__vision-toggle__ {
      background: ${HIGHLIGHT_BORDER};
      color: white;
      border: none;
      border-radius: 4px;
      padding: 3px 10px;
      cursor: pointer;
      font-size: 11px;
      font-weight: 600;
    }
    .__vision-toggle__.active {
      background: ${SELECTED_BORDER};
    }
    .__vision-info__ {
      background: #0f0b2e;
      border-radius: 4px;
      padding: 8px;
      margin-top: 6px;
      font-family: monospace;
      font-size: 11px;
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: break-all;
    }
    .__vision-info__ .tag { color: #818cf8; }
    .__vision-info__ .attr { color: #34d399; }
    .__vision-info__ .val { color: #fbbf24; }
    .__vision-hint__ {
      color: #6b7280;
      font-size: 10px;
      margin-top: 6px;
      text-align: center;
    }
  `;
  document.head.appendChild(style);

  // --- Panel ---
  const panel = document.createElement("div");
  panel.className = "__vision-panel__";
  panel.innerHTML = `
    <h3>
      Vision
      <button class="__vision-toggle__" id="__vision-btn__">OFF</button>
    </h3>
    <div id="__vision-status__">Mode selection desactive</div>
    <div id="__vision-detail__" class="__vision-info__" style="display:none"></div>
    <div class="__vision-hint__">Ctrl+Shift+V : toggle | Ctrl+Click : select rapide</div>
  `;
  document.body.appendChild(panel);

  const btn = document.getElementById("__vision-btn__");
  const statusEl = document.getElementById("__vision-status__");
  const detailEl = document.getElementById("__vision-detail__");

  // --- Element info extraction ---
  function getXPath(el) {
    if (!el || el.nodeType !== 1) return "";
    const parts = [];
    let current = el;
    while (current && current.nodeType === 1) {
      let index = 0;
      let sibling = current.previousSibling;
      while (sibling) {
        if (sibling.nodeType === 1 && sibling.nodeName === current.nodeName)
          index++;
        sibling = sibling.previousSibling;
      }
      const tagName = current.nodeName.toLowerCase();
      parts.unshift(index > 0 ? `${tagName}[${index + 1}]` : tagName);
      current = current.parentNode;
    }
    return "/" + parts.join("/");
  }

  function getCssSelector(el) {
    if (!el || el.nodeType !== 1) return "";
    if (el.id) return `#${el.id}`;
    const parts = [];
    let current = el;
    let depth = 0;
    while (current && current.nodeType === 1 && depth < 4) {
      let selector = current.nodeName.toLowerCase();
      if (current.id) {
        selector = `#${current.id}`;
        parts.unshift(selector);
        break;
      }
      if (current.className && typeof current.className === "string") {
        const classes = current.className
          .split(/\s+/)
          .filter((c) => c && !c.startsWith("__vision"))
          .slice(0, 3);
        if (classes.length) selector += "." + classes.join(".");
      }
      parts.unshift(selector);
      current = current.parentNode;
      depth++;
    }
    return parts.join(" > ");
  }

  function getReactFiber(el) {
    const key = Object.keys(el).find(
      (k) =>
        k.startsWith("__reactFiber$") ||
        k.startsWith("__reactInternalInstance$"),
    );
    if (!key) return null;
    let fiber = el[key];
    const components = [];
    while (fiber) {
      if (fiber.type && typeof fiber.type === "function") {
        const name = fiber.type.displayName || fiber.type.name;
        if (name) {
          const info = { component: name };
          if (fiber._debugSource) {
            info.file = fiber._debugSource.fileName;
            info.line = fiber._debugSource.lineNumber;
            info.col = fiber._debugSource.columnNumber;
          }
          components.push(info);
        }
      }
      fiber = fiber.return;
      if (components.length >= 5) break;
    }
    return components.length ? components : null;
  }

  function extractInfo(el) {
    if (!el || el.nodeType !== 1) return null;
    const rect = el.getBoundingClientRect();
    const computed = window.getComputedStyle(el);

    const info = {
      tag: el.nodeName.toLowerCase(),
      id: el.id || null,
      classes: Array.from(el.classList).filter(
        (c) => !c.startsWith("__vision"),
      ),
      text: (el.textContent || "").trim().slice(0, 120),
      href: el.getAttribute("href") || null,
      src: el.getAttribute("src") || null,
      xpath: getXPath(el),
      cssSelector: getCssSelector(el),
      rect: {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
      },
      styles: {
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        padding: computed.padding,
        margin: computed.margin,
        display: computed.display,
        position: computed.position,
      },
      attributes: {},
      react: getReactFiber(el),
      timestamp: new Date().toISOString(),
    };

    for (const attr of el.attributes) {
      if (
        !["id", "class", "style", "href", "src"].includes(attr.name) &&
        !attr.name.startsWith("__")
      ) {
        info.attributes[attr.name] = attr.value;
      }
    }

    return info;
  }

  // --- Render detail ---
  function renderDetail(info) {
    if (!info) {
      detailEl.style.display = "none";
      return;
    }
    detailEl.style.display = "block";

    let html = `<span class="tag">&lt;${info.tag}</span>`;
    if (info.id)
      html += ` <span class="attr">id</span>=<span class="val">"${info.id}"</span>`;
    if (info.classes.length)
      html += ` <span class="attr">class</span>=<span class="val">"${info.classes.join(" ")}"</span>`;
    html += `<span class="tag">&gt;</span>\n`;

    if (info.text) html += `text: "${info.text.slice(0, 60)}"\n`;
    html += `css:  ${info.cssSelector}\n`;
    html += `size: ${info.rect.w}x${info.rect.h} @ (${info.rect.x},${info.rect.y})\n`;

    if (info.react && info.react.length) {
      html += `\n<span class="attr">React:</span>\n`;
      for (const r of info.react) {
        html += `  <span class="val">${r.component}</span>`;
        if (r.file) html += ` <span class="tag">${r.file}:${r.line}</span>`;
        html += "\n";
      }
    }

    detailEl.innerHTML = html;
  }

  // --- Hover tracking ---
  let lastHovered = null;

  function onMouseMove(e) {
    if (!state.active) return;
    const el = e.target;
    if (el === panel || panel.contains(el)) return;

    if (lastHovered && lastHovered !== el) {
      lastHovered.classList.remove("__vision-highlight__");
    }
    el.classList.add("__vision-highlight__");
    lastHovered = el;
    state.hovered = extractInfo(el);
  }

  function onMouseOut(e) {
    if (!state.active) return;
    if (lastHovered) {
      lastHovered.classList.remove("__vision-highlight__");
      lastHovered = null;
    }
  }

  // --- Selection ---
  let lastSelected = null;

  function selectElement(el) {
    if (el === panel || panel.contains(el)) return;

    if (lastSelected) lastSelected.classList.remove("__vision-selected__");

    el.classList.add("__vision-selected__");
    lastSelected = el;

    const info = extractInfo(el);
    state.selected = info;
    state.history.push(info);
    if (state.history.length > 20) state.history.shift();

    statusEl.textContent = `Selected: <${info.tag}>${info.id ? "#" + info.id : ""} ${info.classes.slice(0, 2).join(".")}`;
    renderDetail(info);
  }

  function onClick(e) {
    if (!state.active && !e.ctrlKey) return;
    if (e.target === panel || panel.contains(e.target)) return;

    if (state.active || e.ctrlKey) {
      e.preventDefault();
      e.stopPropagation();
      selectElement(e.target);
    }
  }

  // --- Toggle ---
  function toggle() {
    state.active = !state.active;
    btn.textContent = state.active ? "ON" : "OFF";
    btn.classList.toggle("active", state.active);
    statusEl.textContent = state.active
      ? "Survolez un element puis cliquez"
      : "Mode selection desactive";

    if (!state.active && lastHovered) {
      lastHovered.classList.remove("__vision-highlight__");
      lastHovered = null;
    }
  }

  btn.addEventListener("click", toggle);

  document.addEventListener("mousemove", onMouseMove, true);
  document.addEventListener("mouseout", onMouseOut, true);
  document.addEventListener("click", onClick, true);

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "V") {
      e.preventDefault();
      toggle();
    }
  });

  // --- API for Claude Code ---
  window.__vision__.toggle = toggle;
  window.__vision__.select = (selector) => {
    const el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
    if (el) selectElement(el);
    return window.__vision__.getSelected();
  };
  window.__vision__.getSelected = () =>
    JSON.parse(JSON.stringify(state.selected));
  window.__vision__.getHistory = () =>
    JSON.parse(JSON.stringify(state.history));
  window.__vision__.clear = () => {
    if (lastSelected) lastSelected.classList.remove("__vision-selected__");
    if (lastHovered) lastHovered.classList.remove("__vision-highlight__");
    state.selected = null;
    state.hovered = null;
    lastSelected = null;
    lastHovered = null;
    detailEl.style.display = "none";
    statusEl.textContent = state.active
      ? "Survolez un element puis cliquez"
      : "Mode selection desactive";
  };

  console.log(
    "[Vision] Overlay loaded. Ctrl+Shift+V to toggle, Ctrl+Click for quick select.",
  );
})();
