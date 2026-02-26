<!-- updated: 2026-02-26T12:00:00Z -->
# website

## Purpose

Commercial static website for Supervizio — a SaaS platform for real-time infrastructure monitoring. Pure HTML/CSS/JS, hosted on GitHub Pages behind Cloudflare.

## Project Structure

```
/workspace
├── .devcontainer/   # Container config, features, hooks, images
├── .github/         # GitHub Actions (deploy to Pages)
├── .githooks/       # Git hooks (pre-commit)
├── site/            # Website source (deployed as-is to GitHub Pages)
│   ├── css/style.css        # Design system (dark theme, responsive)
│   ├── js/main.js           # Interactive components
│   ├── index.html           # Home / landing page
│   ├── features.html        # Product features
│   ├── enterprise.html      # Enterprise offering
│   ├── customers.html       # Customer stories + case studies
│   ├── pricing.html         # Plans + FAQ
│   ├── about.html           # Company mission + values
│   ├── contact.html         # Contact information
│   ├── terms.html           # Terms of Service
│   ├── privacy.html         # Privacy Policy
│   ├── legal.html           # Legal notices
│   ├── 404.html             # Custom 404 page
│   └── .nojekyll            # GitHub Pages static marker
├── CLAUDE.md        # This file
├── AGENTS.md        # Specialist agents
└── README.md        # Repository README
```

## Tech Stack

- **Language**: HTML, CSS, JavaScript (vanilla, no framework)
- **Font**: Inter (Google Fonts)
- **Hosting**: GitHub Pages (site/ deployed as-is)
- **CDN**: Cloudflare (DDoS protection, caching, edge delivery)
- **CI/CD**: GitHub Actions (push site/ to Pages)
- **Dev server**: browser-sync (live-reload on file changes)

## How to Work

1. **Local dev**: `npm run dev` — live-reload server at http://localhost:3000
2. **New page**: Create `.html` in `site/`, add links in nav/footer
3. **Style changes**: Edit `site/css/style.css`
4. **Deploy**: Push to `main` → GitHub Actions → GitHub Pages

## Key Principles

- **SEO-first**: Every page has meta title, description, canonical URL, Open Graph tags
- **Dark theme**: Professional SaaS aesthetic (indigo accent #6366f1)
- **Conversion-driven**: Clear CTA on every page
- **Static only**: No frameworks, no build step, no SSG
- **Mobile-first**: Responsive design with breakpoints at 768px and 1024px

## Verification

- All internal links resolve (no broken hrefs)
- All pages serve HTTP 200
- Lighthouse audit > 90 on Performance, SEO, Accessibility
- Responsive on mobile
- No secrets in commits
