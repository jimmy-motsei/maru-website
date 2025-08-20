#!/usr/bin/env node
/**
 * Navigation active-state repair & assignment.
 * Rebuilds the canonical primary <ul> inside each menu and applies active classes.
 * Idempotent: re-running with no changes results in zero updates.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));

// Mapping: file -> { top: home|services|our-work|resources|other, sub: href|null }
const pageMap = {
  "home-1.html": { top: "home", sub: null },
  "services.html": { top: "services", sub: "services.html" },
  // Custom Automations (replaces prior Web Optimization & Performance)
  "custom-automations.html": {
    top: "services",
    sub: "custom-automations.html",
  },
  "ai-strategy.html": { top: "services", sub: "ai-strategy.html" },
  "ai-campaign-design.html": {
    top: "services",
    sub: "ai-campaign-design.html",
  },
  "ai-training.html": { top: "services", sub: "ai-training.html" },
  "our-work.html": { top: "our-work", sub: null },
  "insights.html": { top: "resources", sub: "insights.html" },
  "knowledge.html": { top: "resources", sub: "knowledge.html" },
  "publication.html": { top: "resources", sub: "publication.html" },
  "team.html": { top: "other", sub: "team.html" },
  "contact.html": { top: "other", sub: "contact.html" },
  "404.html": { top: "other", sub: "404.html" },
};

// Canonical base UL (without active states)
const canonicalBase = [
  "<ul>",
  '  <li class="mil-has-children"><a href="home-1.html">Homepage</a></li>',
  '  <li class="mil-has-children"><a href="#.">Services</a>',
  "    <ul>",
  '      <li><a href="services.html">Services List</a></li>',
  '      <li><a href="custom-automations.html">Custom Automations</a></li>',
  '      <li><a href="ai-strategy.html">AI Strategy Advisory</a></li>',
  '      <li><a href="ai-campaign-design.html">AI Campaign Design</a></li>',
  '      <li><a href="ai-training.html">AI Training & Enablement</a></li>',
  "    </ul>",
  "  </li>",
  '  <li><a href="our-work.html">Our Work</a></li>',
  '  <li class="mil-has-children"><a href="#.">Resources</a>',
  "    <ul>",
  '      <li><a href="insights.html">Insights</a></li>',
  '      <li><a href="knowledge.html">Knowledge</a></li>',
  '      <li><a href="publication.html">Publication</a></li>',
  "    </ul>",
  "  </li>",
  '  <li class="mil-has-children"><a href="#.">Other pages</a>',
  "    <ul>",
  '      <li><a href="team.html">Team</a></li>',
  '      <li><a href="contact.html">Contact</a></li>',
  '      <li><a href="404.html">404</a></li>',
  "    </ul>",
  "  </li>",
  "</ul>",
].join("\n");

function applyActive(base, cfg) {
  if (!cfg) return base;
  let out = base;
  switch (cfg.top) {
    case "home":
      out = out.replace(
        '<li class="mil-has-children"><a href="home-1.html">',
        '<li class="mil-has-children mil-active"><a href="home-1.html">'
      );
      break;
    case "services":
      out = out.replace(
        '<li class="mil-has-children"><a href="#.">Services</a>',
        '<li class="mil-has-children mil-active"><a href="#.">Services</a>'
      );
      break;
    case "our-work":
      out = out.replace(
        '<li><a href="our-work.html">Our Work</a></li>',
        '<li class="mil-active"><a href="our-work.html">Our Work</a></li>'
      );
      break;
    case "resources":
      out = out.replace(
        '<li class="mil-has-children"><a href="#.">Resources</a>',
        '<li class="mil-has-children mil-active"><a href="#.">Resources</a>'
      );
      break;
    case "other":
      out = out.replace(
        '<li class="mil-has-children"><a href="#.">Other pages</a>',
        '<li class="mil-has-children mil-active"><a href="#.">Other pages</a>'
      );
      break;
  }
  if (cfg.sub) {
    const subNeedle = `<li><a href="${cfg.sub}">`;
    out = out.replace(
      subNeedle,
      `<li class="mil-active"><a href="${cfg.sub}">`
    );
  }
  return out;
}

let processed = 0,
  updated = 0;

htmlFiles.forEach((f) => {
  const full = path.join(ROOT, f);
  let html = fs.readFileSync(full, "utf8");
  const start = html.indexOf("<!-- menu -->");
  const end = html.indexOf("<!-- menu end -->");
  if (start === -1 || end === -1 || end < start) return; // no menu block
  processed++;
  const cfg = pageMap[f];
  const block = html.slice(start, end);
  const navIdx = block.indexOf("<nav");
  if (navIdx === -1) return;
  const ulIdx = block.indexOf("<ul", navIdx);
  if (ulIdx === -1) return;
  const afterUl = block.slice(ulIdx);
  let depth = 0;
  let closeOffset = -1;
  const tokenRe = /<ul\b|<\/ul>/gi;
  let m;
  while ((m = tokenRe.exec(afterUl))) {
    if (m[0].toLowerCase().startsWith("<ul")) depth++;
    else depth--;
    if (depth === 0) {
      closeOffset = m.index + m[0].length;
      break;
    }
  }
  if (closeOffset === -1) return;
  const absUlStart = start + ulIdx;
  const absUlEnd = absUlStart + closeOffset;
  const desired = applyActive(canonicalBase, cfg);
  if (html.slice(absUlStart, absUlEnd) !== desired) {
    html = html.slice(0, absUlStart) + desired + html.slice(absUlEnd);
    fs.writeFileSync(full, html, "utf8");
    updated++;
  }
});

console.log(
  `Active state repair complete. Menus processed: ${processed}. Files updated: ${updated}.`
);
