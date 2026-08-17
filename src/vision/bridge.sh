#!/bin/bash
# Vision Bridge - Helper scripts for Claude Code to interact with Vision overlay
# Usage: source src/vision/bridge.sh && vision_inject

VISION_SCRIPT="src/vision/inject.js"
VISION_URL="${VISION_URL:-http://localhost:3000}"

vision_inject() {
  echo "[Vision] Reading inject script..."
  local script
  script=$(cat "$VISION_SCRIPT" 2>/dev/null)
  if [ -z "$script" ]; then
    echo "[Vision] ERROR: Cannot read $VISION_SCRIPT"
    return 1
  fi
  echo "[Vision] Script ready ($(echo "$script" | wc -c) bytes)"
  echo "[Vision] Use Playwright MCP browser_evaluate to inject."
  echo "[Vision] Then: Ctrl+Shift+V to toggle, Ctrl+Click to select."
}

vision_read() {
  echo "window.__vision__.getSelected()"
}

vision_history() {
  echo "window.__vision__.getHistory()"
}

vision_clear() {
  echo "window.__vision__.clear()"
}

echo "[Vision Bridge] Loaded. Commands: vision_inject, vision_read, vision_history, vision_clear"
