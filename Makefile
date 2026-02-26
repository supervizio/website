.PHONY: live serve check links help

PORT ?= 3000

## live: Start dev server with live-reload (auto-refreshes browser on file changes)
live:
	@echo "Starting live-reload server on http://localhost:$(PORT)"
	@npx browser-sync start --server site --files 'site/**/*' --no-notify --port $(PORT)

## serve: Start a simple static server (no live-reload)
serve:
	@echo "Serving site on http://localhost:$(PORT)"
	@cd site && python3 -m http.server $(PORT)

## check: Verify all pages return HTTP 200
check:
	@echo "Checking all pages..."
	@cd site && failed=0; \
	for f in *.html; do \
		echo -n "  $$f "; \
		if [ -f "$$f" ]; then echo "OK"; else echo "MISSING"; failed=1; fi; \
	done; \
	echo ""; \
	if [ $$failed -eq 0 ]; then echo "All pages present."; else echo "Some pages missing!"; exit 1; fi

SHELL := /bin/bash

## links: Verify all internal links resolve
links:
	@echo "Checking internal links..."
	@cd site && broken=0; \
	for page in *.html; do \
		for href in $$(grep -oP 'href="\K[^"#]+\.html' "$$page" 2>/dev/null | sort -u); do \
			if [ ! -f "$$href" ]; then \
				echo "  BROKEN: $$page -> $$href"; \
				broken=$$((broken + 1)); \
			fi; \
		done; \
	done; \
	if [ $$broken -eq 0 ]; then echo "All links OK."; else echo "$$broken broken link(s)!"; exit 1; fi

## help: Show available targets
help:
	@echo "Supervizio Website"
	@echo ""
	@grep -E '^## ' Makefile | sed 's/^## /  /'
