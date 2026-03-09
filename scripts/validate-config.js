#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const configPath = path.resolve(__dirname, "..", "_config.yml");
const raw = fs.readFileSync(configPath, "utf8");

const requiredTopLevelKeys = [
  "name",
  "title",
  "description",
  "tagline",
  "Image_URL",
  "Cover_Image",
  "url",
  "social_image",
  "links",
];

const errors = [];
const warnings = [];

for (const key of requiredTopLevelKeys) {
  const pattern = new RegExp(`^${key}:`, "m");
  if (!pattern.test(raw)) {
    errors.push(`Missing required key: ${key}`);
  }
}

if (/\t/.test(raw)) {
  warnings.push("Tabs detected in _config.yml. Prefer spaces for YAML indentation.");
}

const lines = raw.split(/\r?\n/);
for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];
  const trimmed = line.trim();

  if (!trimmed || trimmed.startsWith("#")) {
    continue;
  }

  const isUrlLine =
    /(^|\s)URL:\s*\S+/.test(line) || /^(Image_URL|Cover_Image|url):\s*\S+/.test(line);

  if (!isUrlLine) {
    continue;
  }

  const match = line.match(/:\s*(.+?)\s*$/);
  if (!match) {
    continue;
  }

  const rawValue = match[1].trim();
  const unquoted = rawValue.replace(/^['"]|['"]$/g, "");

  try {
    const parsed = new URL(unquoted);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      errors.push(`Line ${i + 1}: URL must use http/https -> ${unquoted}`);
    }
  } catch {
    errors.push(`Line ${i + 1}: Invalid URL -> ${unquoted}`);
  }
}

if (!/analytics:\s*[\r\n]+\s+google_tag:/m.test(raw)) {
  warnings.push("analytics.google_tag is not configured.");
}
if (!/analytics:\s*[\s\S]*?\s+clarity_id:/m.test(raw)) {
  warnings.push("analytics.clarity_id is not configured.");
}

if (errors.length > 0) {
  console.error("Config validation failed:");
  for (const e of errors) {
    console.error(`- ${e}`);
  }
  process.exit(1);
}

console.log("Config validation passed.");
for (const w of warnings) {
  console.warn(`Warning: ${w}`);
}
