# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev            # Start Astro dev server at localhost:4000

# Build
npm run build          # Build static site to dist/
npm run preview        # Serve built site locally

# Quality checks
npm run lint           # ESLint on JS and Astro files
npm run format         # Prettier formatting

# OpenGraph screenshot
npm run ss             # Generate OG preview image via Puppeteer (saves to public/assets/og/)
```

Node >= 22 is required.

## Architecture

**Static site:** Astro processes `src/pages/index.astro` and `src/pages/404.astro` through layouts in `src/layouts/`, using components from `src/components/`. All profile data, social links, and image links are configured in `src/data/config.ts` — the templates reference this data rather than hardcoding content.

**CSS pipeline:** Tailwind CSS v4 is integrated via `@tailwindcss/vite` (Vite plugin). Source styles are in `src/styles/global.css`. Tailwind scans all `src/**/*.astro` files for classes. No separate build step — Vite handles compilation with HMR in dev and minification in production.

**Key files:**

- `src/data/config.ts` — all site content (profile, links list, image links, analytics IDs)
- `src/layouts/Layout.astro` — main page layout with head, meta, OG tags, analytics scripts
- `src/layouts/PageLayout.astro` — minimal centered layout for 404
- `src/pages/index.astro` — main page with background, avatar, links grid, GSAP script
- `src/styles/global.css` — Tailwind v4 source with custom component classes

**Interactive features:** GSAP (installed via npm) animates the avatar image (draggable with elastic bounce-back). The script is bundled by Vite and imported as an ES module in `index.astro`. Avatar is loaded via weserv.nl CDN for WebP conversion and caching.

**CI:** `.github/workflows/quality.yml` runs linting and Astro build on every push.
