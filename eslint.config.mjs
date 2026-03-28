import js from "@eslint/js";
import astro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        URL: "readonly",
        setTimeout: "readonly",
      },
    },
  },
];
