#!/usr/bin/env node
/**
 * Inject <li><a href="knowledge.html">Knowledge</a></li> into existing processed menus
 * (those already containing <!-- menu end -->) under the Resources submenu,
 * immediately after the Insights link, if not already present.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let processed = 0,
  updated = 0;

htmlFiles.forEach((file) => {
  processed++;
  const full = path.join(ROOT, file);
  let html = fs.readFileSync(full, "utf8");
  const start = html.indexOf("<!-- menu -->");
  const end = html.indexOf("<!-- menu end -->");
  if (start === -1 || end === -1 || end < start) return; // not a processed menu block
  const block = html.slice(start, end); // exclude end marker
  if (block.includes("knowledge.html")) return; // already has link
  if (
    block.includes('<li><a href="insights.html">Insights</a></li>') &&
    block.includes('<li><a href="publication.html">Publication</a></li>')
  ) {
    const injected = block.replace(
      '<li><a href="insights.html">Insights</a></li>',
      '<li><a href="insights.html">Insights</a></li>\n                        <li><a href="knowledge.html">Knowledge</a></li>'
    );
    if (injected !== block) {
      html = html.slice(0, start) + injected + html.slice(end);
      fs.writeFileSync(full, html, "utf8");
      updated++;
    }
  }
});

console.log(
  `Knowledge link injection complete. Files processed: ${processed}. Updated: ${updated}.`
);
