# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run serve          # Build CSS + start Jekyll dev server at localhost:4000
npm run watch:css      # Watch & rebuild Tailwind CSS only

# Build
npm run build:css      # Compile Tailwind CSS (input: _tailwind/input.css → assets/css/main.css)
bundle exec jekyll build  # Build static site

# Quality checks
npm run check          # Run both config & template validators
npm run lint           # ESLint on JS and HTML files
npm run format         # Prettier formatting

# OpenGraph screenshot
npm run ss             # Generate OG preview image via Puppeteer (saves to assets/og/)
```

Node >= 22 and Ruby 3.3 are required. Run `bundle install` for Ruby gems.

## Architecture

**Static site:** Jekyll processes `index.md` and `404.md` through layouts in `_layouts/`, inserting components from `_includes/`. All profile data, social links, and image links are configured in `_config.yml` — the templates loop over this data rather than hardcoding content.

**CSS pipeline:** Tailwind CSS v4 reads `_tailwind/input.css` and scans templates to generate `assets/css/main.css`. Custom font theming and component classes are defined in `_tailwind/input.css`. The compiled CSS is committed to the repo.

**Key files:**
- `_config.yml` — all site content (profile, links list, image links, analytics IDs)
- `_layouts/default.html` — main page layout, references `_includes/links.html` and `_includes/imglinks.html`
- `_includes/head.html` — metadata, fonts (Chiron GoRound TC, Poppins, Noto Sans TC, Font Awesome 7), analytics, OG tags
- `_tailwind/input.css` — Tailwind source with custom component classes

**Interactive features:** GSAP animates the avatar image (draggable with elastic bounce-back). Avatar is loaded via weserv.nl CDN for WebP conversion and caching.

**CI:** `.github/workflows/quality.yml` runs config validation, template linting, CSS build, and Jekyll build on every push.
