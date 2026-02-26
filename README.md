# Supervizio Website

Commercial website for [Supervizio](https://supervizio.io) — a SaaS platform for real-time infrastructure monitoring. Static site built with MkDocs Material, hosted on GitHub Pages behind Cloudflare.

## Quick Start

```bash
# Install dependencies
pip install mkdocs-material

# Local development
mkdocs serve

# Build
mkdocs build --strict
```

## Stack

| Component | Technology |
|-----------|-----------|
| Generator | MkDocs + Material theme |
| Hosting | GitHub Pages |
| CDN | Cloudflare |
| CI/CD | GitHub Actions |
| Content | Markdown |

## Structure

```
docs/
├── index.md          # Landing page
├── features.md       # Product features
├── enterprise.md     # Enterprise offering
├── customers.md      # Logos + testimonials
├── pricing.md        # Plans + FAQ
├── about.md          # Mission + team
├── contact.md        # Contact info
├── terms.md          # Terms of Service
├── privacy.md        # Privacy Policy
├── legal.md          # Legal notices
└── stylesheets/
    └── theme.css     # Custom theme
```

## Deploy

Push to `main` triggers automatic build and deploy via GitHub Actions.

## License

MIT
