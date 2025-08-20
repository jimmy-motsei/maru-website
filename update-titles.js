#!/usr/bin/env node
/**
 * Replace <title>Ashley</title> with <title>Aurellius</title> across all HTML files.
 * Skips files already updated.
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let updated = 0;
htmlFiles.forEach((f) => {
  const full = path.join(ROOT, f);
  const original = fs.readFileSync(full, "utf8");
  if (!original.includes("<title>Ashley</title>")) return;
  const modified = original.replace(
    /<title>Ashley<\/title>/g,
    "<title>Aurellius</title>"
  );
  if (modified !== original) {
    fs.writeFileSync(full, modified, "utf8");
    updated++;
  }
});
console.log(
  `Title update complete. Files processed: ${htmlFiles.length}. Updated: ${updated}.`
);
