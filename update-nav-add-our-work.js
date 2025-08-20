#!/usr/bin/env node
/**
 * Inject a top-level <li><a href="our-work.html">Our Work</a></li>
 * immediately after the Services menu (and BEFORE Resources) in already
 * processed menus (those containing <!-- menu end -->) if it's missing.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let processed = 0,
  updated = 0;

htmlFiles.forEach((file) => {
  const full = path.join(ROOT, file);
  let html = fs.readFileSync(full, "utf8");
  const start = html.indexOf("<!-- menu -->");
  const end = html.indexOf("<!-- menu end -->");
  if (start === -1 || end === -1 || end < start) return; // not a processed menu
  processed++;
  const block = html.slice(start, end);
  if (block.includes('href="our-work.html"')) return; // already has link

  // Find Resources top-level <li> start
  const resourcesMarker =
    '\n                    <li class="mil-has-children"\n                      <a href="#.">Resources</a>';
  // Actually spacing may differ; search for the anchor itself
  const resourcesAnchor = '<a href="#.">Resources</a>';
  const resIdx = block.indexOf(resourcesAnchor);
  if (resIdx === -1) return; // unexpected structure

  // We'll insert the new li just before the parent <li> that contains this anchor.
  // Find the start of that <li> by searching backwards from resIdx.
  const beforeRes = block.lastIndexOf("<li", resIdx);
  if (beforeRes === -1) return;

  const insertion =
    '                    <li>\n                      <a href="our-work.html">Our Work</a>\n                    </li>\n';

  // Insert with same indentation as other top-level items.
  const newBlock =
    block.slice(0, beforeRes) + insertion + block.slice(beforeRes);
  html = html.slice(0, start) + newBlock + html.slice(end);
  fs.writeFileSync(full, html, "utf8");
  updated++;
});

console.log(
  `Our Work link injection complete. Processed menus: ${processed}. Updated: ${updated}.`
);
