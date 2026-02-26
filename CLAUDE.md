<!-- updated: 2026-02-26T14:00:00Z -->
# website

## Purpose

Commercial static website for Supervizio — a SaaS platform for real-time infrastructure monitoring. Built with Nunjucks templates, compiled to static HTML, hosted on GitHub Pages behind Cloudflare.

## Project Structure

```
/workspace
├── .devcontainer/   # Container config, features, hooks, images
├── .github/         # GitHub Actions (deploy to Pages)
├── .githooks/       # Git hooks (pre-commit)
├── templates/       # Nunjucks source templates
│   ├── layouts/base.njk       # Base layout (extends/block)
│   ├── partials/head.njk      # Shared <head> (meta, fonts, CSS)
│   ├── partials/header.njk    # Shared header + mobile menu
│   ├── partials/footer.njk    # Shared footer (GH link only)
│   └── pages/*.njk            # 11 page templates
├── build.js         # Nunjucks → HTML compiler
├── watch.js         # File watcher for dev mode
├── site/            # Generated HTML (deployed to GitHub Pages)
│   ├── css/style.css        # Design system (dark theme, responsive)
│   ├── js/main.js           # Interactive components
│   ├── *.html               # 11 compiled pages
│   └── .nojekyll            # GitHub Pages static marker
├── CLAUDE.md        # This file
├── AGENTS.md        # Specialist agents
└── README.md        # Repository README
```

## Tech Stack

- **Templates**: Nunjucks (extends/block inheritance, partials)
- **Language**: HTML, CSS, JavaScript (vanilla, no framework)
- **Font**: Inter (Google Fonts)
- **Hosting**: GitHub Pages (site/ deployed as-is)
- **CDN**: Cloudflare (DDoS protection, caching, edge delivery)
- **CI/CD**: GitHub Actions (push site/ to Pages)
- **Dev server**: browser-sync (live-reload on file changes)

## How to Work

1. **Build**: `npm run build` — compile templates → site/
2. **Local dev**: `npm run dev` — build + live-reload at http://localhost:3000
3. **Watch**: `npm run watch` — rebuild on template changes
4. **New page**: Create `.njk` in `templates/pages/`, run build
5. **Header/footer changes**: Edit `templates/partials/`, run build
6. **Style changes**: Edit `site/css/style.css`
7. **Deploy**: Push to `main` → GitHub Actions → GitHub Pages

## Key Principles

- **DRY**: Header, footer, and head are single-source partials
- **SEO-first**: Every page has meta title, description, canonical URL, Open Graph tags
- **Dark theme**: Professional SaaS aesthetic (indigo accent #6366f1)
- **Conversion-driven**: Clear CTA on every page
- **Mobile-first**: Responsive design with breakpoints at 768px and 1024px

## Verification

- `npm run build` compiles all 11 pages without errors
- All internal links resolve (no broken hrefs)
- All pages serve HTTP 200
- Lighthouse audit > 90 on Performance, SEO, Accessibility
- Responsive on mobile
- No secrets in commits
