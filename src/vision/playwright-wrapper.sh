#!/bin/bash
# Wrapper to launch Playwright MCP with --no-sandbox for containers
export PLAYWRIGHT_CHROMIUM_SANDBOX=0
export CHROME_FLAGS="--no-sandbox --disable-setuid-sandbox"
exec npx -y @playwright/mcp@0.x --headless --caps core,pdf,testing,tracing --launch-options '{"args":["--no-sandbox","--disable-setuid-sandbox"]}'
