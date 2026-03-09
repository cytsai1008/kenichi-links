# personal-links

Personal landing page for social profiles, built with Jekyll.

## Local development

Prerequisites:
- Ruby + Bundler
- Node.js (only needed for screenshot tooling)

Install and run:
```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`.

## Configuration

All content is in [`_config.yml`](./_config.yml):
- Profile identity: `name`, `title`, `description`, `tagline`
- Branding: `Image_URL`, `Cover_Image`
- Links: `links` and `imglinks`
- SEO/social: `url`, `social_image`, `lang`
- Analytics (optional): `analytics.google_tag`, `analytics.clarity_id`

## Open Graph screenshot

Generate/update OG screenshot:
```bash
npm install
npm run ss
```

Optional env vars:
- `SCREENSHOT_URL`
- `SCREENSHOT_DIR`
- `SCREENSHOT_OUTPUT`

## Quality checks

Run project checks locally:
```bash
npm run check
```

CI runs the same checks plus `bundle exec jekyll build` via [quality.yml](./.github/workflows/quality.yml).

## Credits

Based on [Links](https://github.com/harsh98trivedi/Links).

## License

This repository is licensed under [GNU GPL v2](./LICENSE).
