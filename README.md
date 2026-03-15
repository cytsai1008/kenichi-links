# personal-links

My landing page for social profiles, built with Jekyll.

## Local development

You need Ruby + Bundler and Node.js >= 22.

```bash
bundle install
npm install
npm run serve
```

Open `http://localhost:4000`.

## Configuration

Everything is in [`_config.yml`](./_config.yml):

```yaml
name: Your Name          # displayed as the page heading; also used as avatar alt text
title: Your Name | Site  # browser tab title (defaults to name)
description: ...         # meta description (defaults to tagline, HTML stripped)
tagline: |               # shown below your name; supports <br> for line breaks
  Line one<br>
  Line two
lang: zh-Hant            # html[lang] attribute (defaults to en)

url: https://example.com        # canonical base URL for OG/SEO
social_image: /assets/og/screenshot.png  # OG/Twitter preview image
Image_URL: https://...          # avatar image (run through weserv.nl for WebP + caching)
Cover_Image: https://...        # blurred background image

analytics:               # remove either key to disable that service
  google_tag: G-XXXXXXX
  clarity_id: xxxxxxxxx

links:
  - Name: GitHub                # button label
    URL: https://github.com     # base URL; if Username is set, final href is URL/Username
    Username: yourname          # optional
    Color: "#cccccc"            # button background; omit for white-border style
    Text_Color: "#000000"       # icon + text color; defaults to white
    Icon-Class: fab fa-github   # Font Awesome class

imglinks:
  - Name: VRChat
    URL: https://vrchat.com/home/user/...
    Color: "#003333"
    Text_Color: "#ffffff"
    Img_URL: "vrc-logo-cropped.svg"  # filename inside assets/images/links/
```

To disable a link, comment it out.

## Open Graph screenshot

```bash
npm run ss
```

Defaults to `http://localhost:4000/`, saving to `assets/og/screenshot.png`. Override with `SCREENSHOT_URL`, `SCREENSHOT_DIR`, or `SCREENSHOT_OUTPUT`.

## Quality checks

```bash
npm run check
```

CI runs the same checks plus `bundle exec jekyll build` via [quality.yml](./.github/workflows/quality.yml).

## Credits

Based on [Links](https://github.com/harsh98trivedi/Links).

## License

[MIT](./LICENSE).
