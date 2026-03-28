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
description: "...",         // meta description
tagline: "Line one<br>\nLine two",  // shown below your name; supports <br> for line breaks
lang: "zh-Hant",            // html[lang] attribute

url: "https://example.com",         // canonical base URL for OG/SEO
socialImage: "/assets/og/screenshot.png",  // OG/Twitter preview image path (served from public/)
imageUrl: avatar,           // avatar — import ImageMetadata from src/assets/images/
coverImage: cover,          // blurred background — import ImageMetadata from src/assets/images/

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
    imgUrl: vrcLogo,         // import ImageMetadata from src/assets/images/links/
  },
],
```

Images (`imageUrl`, `coverImage`, `imgUrl`) are imported as ES modules at the top of `config.ts` — place files in `src/assets/images/` and add an import like `import avatar from "../assets/images/avatar.webp"`. Astro's `<Image />` component then handles optimization (resize, WebP conversion) at build time.

To disable a link, remove or comment it out of the array.

## Open Graph screenshot

```bash
npm run ss
```

Defaults to `http://localhost:4000/`, saving to `public/assets/og/screenshot.png`. Override with `SCREENSHOT_URL`, `SCREENSHOT_DIR`, or `SCREENSHOT_OUTPUT`.

## License

[MIT](./LICENSE).
