import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://link.photocat.blue",
  server: { port: 4000 },
  vite: {
    plugins: [tailwindcss()],
  },
});
