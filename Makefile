.PHONY: dev clean help
.DEFAULT_GOAL := help

SHELL := /bin/bash
PORT ?= 3000

## dev: Start Vite dev server with HMR (live reload on file changes)
dev:
	@pid=$$(lsof -ti:$(PORT) 2>/dev/null); \
	if [ -n "$$pid" ]; then \
		echo "[make] Killing process on port $(PORT) (pid $$pid)"; \
		kill -9 $$pid 2>/dev/null; \
		sleep 1; \
	fi
	@echo "[make] Starting Vite dev server on http://localhost:$(PORT)"
	@npm run dev

## clean: Remove build artifacts
clean:
	@rm -rf dist
	@echo "[make] Cleaned."

## help: Show available targets
help:
	@echo "Supervizio Website"
	@echo ""
	@grep -E '^## ' Makefile | sed 's/^## /  /'
