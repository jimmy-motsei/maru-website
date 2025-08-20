#!/usr/bin/env node
/**
 * Collapse duplicate consecutive "<!-- footer end -->" comment lines
 * that may appear after batch footer replacement.
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let cleaned = 0;
htmlFiles.forEach((file) => {
  const full = path.join(ROOT, file);
  let data = fs.readFileSync(full, "utf8");
  const before = data;
  data = data.replace(
    /(<!-- footer end -->)([\ \t]*\n[\r\n]*)+(?=\s*<!-- footer end -->)/g,
    "$1\n"
  );
  // also handle exact duplicate immediate pattern
  data = data.replace(
    /<!-- footer end -->\s*<!-- footer end -->/g,
    "<!-- footer end -->"
  );
  if (data !== before) {
    fs.writeFileSync(full, data, "utf8");
    cleaned++;
  }
});
console.log(
  `Footer tidy complete. Files processed: ${htmlFiles.length}. Cleaned: ${cleaned}.`
);
