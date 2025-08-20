#!/usr/bin/env node
/**
 * Bulk update legacy image paths to new asset filenames.
 * Mappings:
 *  blog: img/blog/{1-8}.jpg -> img/blog/head_{n}.png
 *  works: img/works/{1-7}.jpg -> img/works/Office_{n}.png
 *  faces (team avatars): img/faces/{1-8}.jpg -> img/faces/Dissolve_{n}.png
 *  customer faces: img/faces/customers/{1-7}.jpg -> img/faces/customers/face_{n}.png
 */
const fs = require("fs");
const path = require("path");

const exts = [".html", ".css", ".scss", ".js"];

function collectFiles(dir) {
  return fs.readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      // Skip node_modules just in case
      if (name === "node_modules" || name.startsWith(".git")) return [];
      return collectFiles(full);
    }
    if (exts.includes(path.extname(name))) return [full];
    return [];
  });
}

const files = collectFiles(process.cwd());

const patterns = [
  // Specific (customers) first
  {
    re: /img\/faces\/customers\/(\d)\.jpg/g,
    replace: (m, d) => `img/faces/customers/face_${d}.png`,
  },
  {
    re: /\.\.\/img\/faces\/customers\/(\d)\.jpg/g,
    replace: (m, d) => `../img/faces/customers/face_${d}.png`,
  },
  // Blog covers
  { re: /img\/blog\/(\d)\.jpg/g, replace: (m, d) => `img/blog/head_${d}.png` },
  // Works covers
  {
    re: /img\/works\/(\d)\.jpg/g,
    replace: (m, d) => `img/works/Office_${d}.png`,
  },
  // Team faces (generic)
  {
    re: /img\/faces\/(\d)\.jpg/g,
    replace: (m, d) => `img/faces/Dissolve_${d}.png`,
  },
];

let modifiedCount = 0;
let fileChanged = 0;

files.forEach((f) => {
  let txt = fs.readFileSync(f, "utf8");
  let orig = txt;
  patterns.forEach((p) => {
    txt = txt.replace(p.re, p.replace);
  });
  if (txt !== orig) {
    fs.writeFileSync(f, txt, "utf8");
    fileChanged++;
    const delta =
      (orig.match(/img\//g) || []).length - (txt.match(/img\//g) || []).length; // crude metric (not used)
    modifiedCount++;
    console.log(`Updated: ${path.relative(process.cwd(), f)}`);
  }
});

console.log(`Image path update complete. Files changed: ${fileChanged}`);
