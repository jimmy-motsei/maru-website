#!/usr/bin/env node
/**
 * Replace <img src="img/.../head_X.png"> (and Office_, Dissolve_) with <picture> including AVIF+WebP+fallback and srcset sizes.
 * Assumes optimized derivatives in img/optimized/... created by optimize-images.js
 */
const fs = require('fs');
const path = require('path');

const FILE_GLOBS = [/\.html$/];

function walk(dir) {
  return fs.readdirSync(dir).flatMap(n => {
    const f = path.join(dir, n); const st = fs.statSync(f);
    if (st.isDirectory()) { if (n === 'img' || n === 'node_modules' || n.startsWith('.git')) return []; return walk(f);} return FILE_GLOBS.some(g=>g.test(n))? [f]:[]; });
}

const mapping = [
  { key: 'blog', pattern: /<img([^>]*?)src="img\/blog\/head_(\d)\.png"([^>]*)>/g, build: (num, pre, post) => buildPicture('blog', `head_${num}`, 'png', pre, post, [320,640,960,1280]) },
  { key: 'works', pattern: /<img([^>]*?)src="img\/works\/Office_(\d)\.png"([^>]*)>/g, build: (num, pre, post) => buildPicture('works', `Office_${num}`, 'png', pre, post, [320,640,960]) },
  { key: 'faces', pattern: /<img([^>]*?)src="img\/faces\/Dissolve_(\d)\.png"([^>]*)>/g, build: (num, pre, post) => buildPicture('faces', `Dissolve_${num}`, 'png', pre, post, [320,640]) },
];

function buildPicture(folder, base, ext, preAttr, postAttr, sizes){
  // Extract alt attribute if present
  const attrsCombined = (preAttr + postAttr).replace(/\s+/g,' ');
  const altMatch = attrsCombined.match(/alt="([^"]*)"/);
  const altText = altMatch? altMatch[1]: '';
  const clsMatch = attrsCombined.match(/class="([^"]*)"/);
  const cls = clsMatch? clsMatch[1]: '';
  const loading = /loading=/.test(attrsCombined)? '' : ' loading="lazy"';
  const decoding = /decoding=/.test(attrsCombined)? '' : ' decoding="async"';
  const widthAttr = ''; // optional explicit sizing could be added
  const srcFallback = `img/${folder}/${base}.${ext}`;
  const srcsetFallback = sizes.map(w=>`img/optimized/${folder}/${base}-${Math.min(w,1280)}.${ext} ${w}w`).join(', ');
  const srcsetWebp = sizes.map(w=>`img/optimized/${folder}/${base}-${Math.min(w,1280)}.webp ${w}w`).join(', ');
  const srcsetAvif = sizes.map(w=>`img/optimized/${folder}/${base}-${Math.min(w,1280)}.avif ${w}w`).join(', ');
  const sizesAttr = '(max-width: 768px) 100vw, 50vw';
  return `<picture class="${cls}">
    <source type="image/avif" srcset="${srcsetAvif}" sizes="${sizesAttr}">
    <source type="image/webp" srcset="${srcsetWebp}" sizes="${sizesAttr}">
    <img src="${srcFallback}" srcset="${srcsetFallback}" sizes="${sizesAttr}" alt="${altText}"${loading}${decoding}${widthAttr} />
  </picture>`;
}

const files = walk(process.cwd());
let changed = 0;
files.forEach(f=>{
  let text = fs.readFileSync(f,'utf8');
  let orig = text;
  mapping.forEach(m=>{ text = text.replace(m.pattern, (all, pre, num, post)=> m.build(num, pre, post)); });
  if(text!==orig){ fs.writeFileSync(f,text,'utf8'); console.log('Updated', path.relative(process.cwd(), f)); changed++; }
});
console.log('Responsive image upgrade complete. Files changed:', changed);
