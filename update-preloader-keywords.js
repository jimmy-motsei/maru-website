#!/usr/bin/env node
/**
 * Replace the three preloader keyword lines (Pioneering / Creative / Excellence)
 * with page-specific branding words.
 *
 * Mapping derived from prior assistant suggestion.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// Helper to build the triple lines with structure and classes kept
function triple(a, b, c) {
  // a and c use "mil-thin" per original pattern (first and third lines)
  return [
    `<p class="mil-h3 mil-muted mil-thin">${a}</p>`,
    `<p class="mil-h3 mil-muted">${b}</p>`,
    `<p class="mil-h3 mil-muted mil-thin">${c}</p>`,
  ].join("\n            ");
}

const map = {
  "home-1.html": ["Strategy", "Automation", "Growth"],
  "index.html": ["Insight", "Innovation", "Impact"],
  "services.html": ["Capabilities", "Solutions", "Results"],
  "custom-automations.html": ["Assess", "Automate", "Scale"],
  "ai-strategy.html": ["Assess", "Align", "Accelerate"],
  "ai-campaign-design.html": ["Attract", "Engage", "Convert"],
  "ai-training.html": ["Upskill", "Adopt", "Scale"],
  "blog.html": ["Ideas", "Insights", "Updates"],
  "blog-inner.html": ["Learn", "Apply", "Evolve"],
  "publication.html": ["Research", "Perspective", "Authority"],
  "articles.html": ["Curate", "Explore", "Share"],
  "Insights.html": ["Observe", "Interpret", "Forecast"],
  "cases.html": ["Challenge", "Approach", "Outcome"],
  "products.html": ["Quality", "Utility", "Value"],
  "our-work.html": ["Concept", "Craft", "Impact"],
  "team.html": ["Talent", "Collaboration", "Leadership"],
  "contact.html": ["Connect", "Discuss", "Begin"],
  "404.html": ["Lost", "Redirect", "Resume"],
};

const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let updated = 0;

htmlFiles.forEach((file) => {
  if (!map[file]) return; // skip unmapped
  const full = path.join(ROOT, file);
  let html = fs.readFileSync(full, "utf8");

  // Locate the three lines inside the preloader animation block.
  // We'll replace any contiguous trio matching the pattern of first line containing Pioneering|Strategy|Insight etc originally but we anchor on original baseline words if still present.
  const pattern = /<div class="mil-pos-abs mil-animation-1">([\s\S]*?)<\/div>/m;
  const m = html.match(pattern);
  if (!m) return; // no block
  const block = m[0];
  // Replace only if still contains one of baseline words or already any previous custom but we overwrite entirely.
  const words = map[file];
  const newLines = triple(words[0], words[1], words[2]);
  const newBlock = block.replace(
    /<p class="mil-h3 mil-muted mil-thin">[\s\S]*?<\/p>\s*<p class="mil-h3 mil-muted">[\s\S]*?<\/p>\s*<p class="mil-h3 mil-muted mil-thin">[\s\S]*?<\/p>/,
    newLines
  );
  if (newBlock !== block) {
    html = html.replace(block, newBlock);
    fs.writeFileSync(full, html, "utf8");
    updated++;
  }
});

console.log(
  `Preloader keyword update complete. Files processed: ${htmlFiles.length}. Updated: ${updated}.`
);
