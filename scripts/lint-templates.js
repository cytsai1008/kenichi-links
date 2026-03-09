#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const files = [
  "_includes/links.html",
  "_includes/imglinks.html",
  "_layouts/default.html",
  "_includes/head.html",
].map((p) => path.resolve(__dirname, "..", p));

const errors = [];

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const rel = path.relative(path.resolve(__dirname, ".."), file).replace(/\\/g, "/");

  if (/<a[\s\S]*?<button/i.test(source)) {
    errors.push(`${rel}: Invalid nested interactive element (<a> contains <button>).`);
  }

  if (/id="links"/.test(source) || /id="link-content"/.test(source)) {
    errors.push(`${rel}: Repeated id-based link markup detected. Use classes instead of duplicated ids.`);
  }

  if (/href="\/assets\//.test(source) || /src="assets\//.test(source)) {
    errors.push(`${rel}: Found non-relative-url asset path. Prefer Liquid relative_url/absolute_url.`);
  }
}

if (errors.length > 0) {
  console.error("Template lint failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Template lint passed.");
