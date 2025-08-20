#!/usr/bin/env node
/**
 * Generate optimized responsive derivatives (WebP + AVIF + resized PNG/JPEG) for site images.
 * - Processes images under img/ excluding already optimized derivative folders (e.g., thumbs, optimized)
 * - Writes output to img/optimized/<relative path>/<basename>-<width>.<ext>
 * - Creates sizes: 320, 640, 960, 1280 (capped at original width)
 * - Formats: webp + avif; keeps original format only for the largest size.
 * - Skips if derivative already exists with newer mtime than source.
 */
const sharp = require("sharp");
const glob = require("glob");
const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(process.cwd(), "img");
const OUT_DIR = path.join(SRC_DIR, "optimized");
const SIZES = [320, 640, 960, 1280];
const FORMATS = ["webp", "avif"];

function listImages() {
  return glob.sync("img/**/*.{png,jpg,jpeg,gif}", {
    nodir: true,
    ignore: ["img/optimized/**"],
  });
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function processImage(file) {
  const rel = path.relative(SRC_DIR, file);
  const baseName = path.parse(rel).name; // without extension
  const subDir = path.dirname(rel);
  const input = sharp(file);
  const meta = await input.metadata();
  const width = meta.width || 0;
  for (const size of SIZES) {
    if (size > width) continue; // don't upscale
    for (const fmt of FORMATS) {
      const outDir = path.join(OUT_DIR, subDir);
      await ensureDir(outDir);
      const outPath = path.join(outDir, `${baseName}-${size}.${fmt}`);
      let need = true;
      if (fs.existsSync(outPath)) {
        const srcStat = fs.statSync(file);
        const dstStat = fs.statSync(outPath);
        if (dstStat.mtimeMs >= srcStat.mtimeMs) need = false;
      }
      if (!need) continue;
      await sharp(file)
        .resize(size)
        .toFormat(fmt, { quality: 70 })
        .toFile(outPath);
      console.log("Generated", path.relative(process.cwd(), outPath));
    }
    // Largest size keep original format (converted only if not present) for fallback at final size step
    if (
      size === Math.min(width, Math.max(...SIZES.filter((s) => s <= width)))
    ) {
      const ext = path.extname(file).toLowerCase();
      const outDir = path.join(OUT_DIR, subDir);
      await ensureDir(outDir);
      const outPath = path.join(outDir, `${baseName}-${size}${ext}`);
      if (!fs.existsSync(outPath)) {
        await sharp(file).resize(size).toFile(outPath);
        console.log("Generated", path.relative(process.cwd(), outPath));
      }
    }
  }
}

(async () => {
  const files = listImages();
  console.log(`Found ${files.length} source images`);
  for (const f of files) {
    try {
      await processImage(f);
    } catch (e) {
      console.error("Error", f, e.message);
    }
  }
  console.log("Optimization complete.");
})();
