<!-- updated: 2026-03-09T14:00:00Z -->
# website

## Purpose

Commercial SPA website for Supervizio — a SaaS platform for real-time infrastructure monitoring. Built with React + Tailwind CSS v4 on Vite, hosted on GitHub Pages behind Cloudflare.

## Project Structure

```
/workspace
├── .devcontainer/   # Container config, features, hooks, images
├── .github/         # GitHub Actions (deploy to Pages)
├── .githooks/       # Git hooks (pre-commit)
├── index.html       # Vite entry point (project root)
├── vite.config.js   # Vite + React + Tailwind plugins
├── package.json     # Dependencies and scripts
├── public/          # Static assets (images, favicon, CNAME)
├── src/
│   ├── main.jsx                  # React mount (StrictMode, Router, Helmet)
│   ├── App.jsx                   # Router + Layout (lazy-loaded pages)
│   ├── index.css                 # Tailwind @import + @theme tokens + custom CSS
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx        # Fixed header + mobile menu (useState)
│   │   │   ├── Footer.jsx        # Footer grid with nav links
│   │   │   └── Layout.jsx        # Outlet wrapper + scroll-to-top
│   │   ├── ui/
│   │   │   └── Seo.jsx           # react-helmet-async wrapper
│   │   ├── PricingToggle.jsx     # Monthly/annual toggle + pricing cards
│   │   └── FaqAccordion.jsx      # FAQ expand/collapse
│   ├── pages/                    # 11 lazy-loaded page components
│   │   ├── HomePage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── EnterprisePage.jsx
│   │   ├── CustomersPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── LegalPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── TermsPage.jsx
│   │   └── NotFoundPage.jsx
│   └── data/
│       └── seo.js                # Per-page SEO metadata
├── dist/            # Build output (deployed to GitHub Pages)
├── CLAUDE.md        # This file
├── AGENTS.md        # Specialist agents
└── README.md        # Repository README
```

## Tech Stack

- **Framework**: React 19 + react-dom
- **Routing**: react-router-dom v7 (SPA with lazy-loaded routes)
- **SEO**: react-helmet-async v3 (per-page meta tags)
- **CSS**: Tailwind CSS v4 (@tailwindcss/vite plugin, CSS-first config)
- **Build**: Vite v7 + @vitejs/plugin-react
- **Font**: Inter (Google Fonts)
- **Hosting**: GitHub Pages (dist/ deployed via Actions)
- **CDN**: Cloudflare (DDoS protection, caching, edge delivery)
- **CI/CD**: GitHub Actions (npm ci + vite build + deploy dist/)

## How to Work

1. **Build**: `npm run build` — compile React app → dist/ + copy 404.html
2. **Local dev**: `npm run dev` — Vite dev server with HMR at http://localhost:3000
3. **Preview**: `npm run preview` — serve production build locally
4. **New page**: Create component in `src/pages/`, add route in `App.jsx`, add SEO in `src/data/seo.js`
5. **Header/footer changes**: Edit `src/components/layout/Header.jsx` or `Footer.jsx`
6. **Style changes**: Use Tailwind utility classes inline; custom CSS in `src/index.css`
7. **Deploy**: Push to `main` → GitHub Actions builds and deploys dist/

## Key Principles

- **Component-based**: React components with Tailwind utility classes
- **SEO-first**: Every page has meta title, description, canonical URL, Open Graph tags via react-helmet-async
- **Dark theme**: Professional SaaS aesthetic (indigo accent #6366f1, custom @theme tokens)
- **SPA routing**: react-router-dom with 404.html fallback for GitHub Pages
- **Conversion-driven**: Clear CTA on every page
- **Mobile-first**: Responsive design with Tailwind breakpoints (md: 768px, lg: 1024px)
- **Code-split**: All pages lazy-loaded for fast initial load

## Verification

- `npm run build` succeeds and produces dist/ with index.html + 404.html
- `npm run dev` starts dev server with HMR on port 3000
- All 11 routes render correctly in the browser
- Navigation between pages works (SPA, no full reload)
- SEO: each page has correct `<title>` and meta tags
- Mobile: hamburger menu opens/closes, responsive layout works
- Pricing toggle switches monthly/annual prices
- FAQ accordion opens/closes items
- Static assets (logos, favicons) load correctly
- No secrets in commits
