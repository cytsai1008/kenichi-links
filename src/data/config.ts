import type { ImageMetadata } from "astro";
import avatar from "../assets/images/avatar.webp";
import cover from "../assets/images/cover.webp";
import vrcLogo from "../assets/images/links/vrc-logo-cropped.svg";

export interface Link {
  name: string;
  url: string;
  username?: string;
  color?: string;
  textColor?: string;
  iconClass: string;
}

export interface ImgLink {
  name: string;
  url: string;
  username?: string;
  color?: string;
  textColor?: string;
  imgUrl: ImageMetadata;
}

export interface Analytics {
  googleTag?: string;
  clarityId?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  lang: string;
  url: string;
  socialImage: string;
  tagline: string;
  imageUrl: ImageMetadata;
  coverImage: ImageMetadata;
  links: Link[];
  imgLinks: ImgLink[];
  analytics: Analytics;
}

export const siteConfig: SiteConfig = {
  name: "健一 Kenichi",
  title: "健一 | Kenichi",
  description: "一隻寫程式和拍照的藍貓，大佬椒麻",
  lang: "zh-Hant",
  url: "https://link.photocat.blue",
  socialImage: "/assets/og/screenshot.png",
  tagline: "一隻寫程式和拍照的藍貓，大佬椒麻<br>\nA blue cat<br>\nwrites codes &amp; takes photos",
  imageUrl: avatar,
  coverImage: cover,
  links: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100065887264145",
      color: "#3b5998",
      iconClass: "fab fa-facebook",
    },
    {
      name: "Twitter",
      url: "https://x.com",
      username: "Saito_Kenichi_",
      color: "#1DA1F2",
      iconClass: "fab fa-twitter",
    },
    {
      name: "Bluesky",
      url: "https://furrybsky.photocat.blue",
      color: "#1185fe",
      iconClass: "fab fa-bluesky",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      username: "cytsai1008",
      color: "#cccccc",
      textColor: "#000000",
      iconClass: "fab fa-github",
    },
    {
      name: "相片集",
      url: "https://kenichi.photocat.blue/blog/photo-sets/",
      color: "#000000",
      textColor: "#ffffff",
      iconClass: "fab fa-camera",
    },
  ],
  imgLinks: [
    {
      name: "VRChat",
      url: "https://vrchat.com/home/user/usr_e8bc0487-8705-4a6e-9bcb-6739efc6bca0",
      color: "#003333",
      textColor: "#ffffff",
      imgUrl: vrcLogo,
    },
  ],
  analytics: {
    googleTag: "G-ZY2YYK5KX0",
    clarityId: "u750qhcmes",
  },
};
