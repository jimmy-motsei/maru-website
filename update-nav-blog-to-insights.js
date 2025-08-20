#!/usr/bin/env node
/**
 * Patch existing navigation blocks (already marked with <!-- menu end -->)
 * replacing the Blog link with the Insights link.
 * Only touches content between <!-- menu --> and <!-- menu end --> markers.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));

let processed = 0;
let updated = 0;

htmlFiles.forEach((file) => {
  processed++;
  const full = path.join(ROOT, file);
  let html = fs.readFileSync(full, "utf8");

  const start = html.indexOf("<!-- menu -->");
  const end = html.indexOf("<!-- menu end -->");
  if (start === -1 || end === -1 || end < start) return; // no well-formed menu block

  const before = html.slice(0, start);
  const block = html.slice(start, end); // exclude end marker so we don't accidentally duplicate
  const after = html.slice(end);

  const replaced = block.replace(
    /<li><a href="blog\.html">Blog List<\/a><\/li>/,
    '<li><a href="insights.html">Insights</a></li>'
  );

  if (replaced !== block) {
    html = before + replaced + after;
    fs.writeFileSync(full, html, "utf8");
    updated++;
  }
});

console.log(
  `Nav blog->insights patch complete. Files processed: ${processed}. Updated: ${updated}.`
);
