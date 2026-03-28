# personal-links

My landing page for social profiles, built with Astro.

## Local development

You need Node.js >= 22.

```bash
npm install
npm run dev
```

Open `http://localhost:4000`.

## Configuration

Everything is in [`src/data/config.ts`](./src/data/config.ts):

```ts
name: "Your Name",          // displayed as the page heading; also used as avatar alt text
title: "Your Name | Site",  // browser tab title
description: "...",          // meta description
tagline: "Line one<br>\nLine two",  // shown below your name; supports <br> for line breaks
lang: "zh-Hant",            // html[lang] attribute

url: "https://example.com",          // canonical base URL for OG/SEO
socialImage: "/assets/og/screenshot.png",  // OG/Twitter preview image
imageUrl: "https://...",             // avatar image (run through weserv.nl for WebP + caching)
coverImage: "https://...",           // blurred background image

analytics: {               // remove either key to disable that service
  googleTag: "G-XXXXXXX",
  clarityId: "xxxxxxxxx",
},

links: [
  {
    name: "GitHub",                // button label
    url: "https://github.com",     // base URL; if username is set, final href is url/username
    username: "yourname",          // optional
    color: "#cccccc",              // button background; omit for white-border style
    textColor: "#000000",          // icon + text color; defaults to white
    iconClass: "fab fa-github",    // Font Awesome class
  },
],

imgLinks: [
  {
    name: "VRChat",
    url: "https://vrchat.com/home/user/...",
    color: "#003333",
    textColor: "#ffffff",
    imgUrl: "vrc-logo-cropped.svg",  // filename inside public/assets/images/links/
  },
],
```

To disable a link, remove or comment it out of the array.

## Open Graph screenshot

```bash
npm run ss
```

Defaults to `http://localhost:4000/`, saving to `public/assets/og/screenshot.png`. Override with `SCREENSHOT_URL`, `SCREENSHOT_DIR`, or `SCREENSHOT_OUTPUT`.

## Credits

Based on [Links](https://github.com/harsh98trivedi/Links).

## License

[MIT](./LICENSE).
