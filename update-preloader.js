#!/usr/bin/env node
/**
 * Replace preloader branding text 'ashley.com' with 'Aurellius.Online'
 * across all HTML files. Skips files already updated.
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;
const TARGET_OLD = "ashley.com";
const TARGET_NEW = "Aurellius.Online";

const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let updated = 0;
htmlFiles.forEach((f) => {
  const full = path.join(ROOT, f);
  const original = fs.readFileSync(full, "utf8");
  if (!original.includes(TARGET_OLD)) return;
  const modified = original.replace(new RegExp(TARGET_OLD, "g"), TARGET_NEW);
  if (modified !== original) {
    fs.writeFileSync(full, modified, "utf8");
    updated++;
  }
});
console.log(
  `Preloader update complete. Files processed: ${htmlFiles.length}. Updated: ${updated}.`
);
