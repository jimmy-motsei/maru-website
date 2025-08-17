# Asset Sourcing Guide (Unsplash)

This guide helps you source the conceptual images listed in `README-assets.md` from Unsplash (https://unsplash.com) and convert them into the required WebP responsive variants.

## Brand Visual Direction
- Tone: Stoic, strategic, intelligent, calm confidence ("Wisdom meets AI").
- Palette Tendencies: Deep charcoal / near-black anchors, desaturated neutrals, selective cool highlights (cyan / teal) or warm gold accent, but avoid loud primary saturation.
- Style: Clean, abstract, systems-thinking visuals; minimal clutter; prefer geometric light, network structures, subtle human silhouettes or hands for collaboration themes.
- Aspect Ratio Target: 16:9 (final exported at widths 1600, 1200, 800).

## Workflow Overview
1. For each concept below, open the provided Unsplash search URLs.
2. Shortlist 2–3 candidate images per concept (download highest available resolution).
3. Record attribution (Photographer Name + Unsplash URL) in `CREDITS.md` (optional but recommended for internal tracking).
4. Crop to 16:9, centered on the compositional focal point (avoid tight crops on edges with important visual elements).
5. Export WebP at widths 1600, 1200, 800 (quality ~78; enable perceptual / auto tone mapping off if present).
6. File naming MUST match the required filenames in `README-assets.md`.
7. Place in `img/home/` or `img/blog/` as specified; keep existing JPEG fallbacks if you also export them.
8. Run a local Lighthouse or WebPageTest sample after adding several to confirm no CLS shifts (dimensions already hard‑coded in markup).

## Concept-to-Query Mapping
| Target Filenames (grouped) | Concept Intent | Suggested Unsplash Search Queries (open each) | Visual Notes |
|----------------------------|----------------|-----------------------------------------------|--------------|
| wisdom-meets-ai-* (home) | Human wisdom integrating with AI lattice | "abstract bust light", "geometric head data", "ai network sculpture" | Prefer a single focal bust or profile dissolving into nodes / lines; avoid obvious stock robot heads. |
| ethical-data-pipelines-cover-* | Observability + governance instrumentation | "abstract data flow", "neon data grid", "system monitoring abstract" | Look for flowing lines or grids suggesting traceability; avoid financial charts. |
| productizing-insight-cover-* | Turning dashboards into decisions | "data decision interface", "analytics dashboard abstract", "layers glass ui" | Layered panes of light / glass metaphor. |
| technology-* | Core technology domain hub | "futuristic circuit abstract", "digital mesh" | Balanced symmetry works; subtle depth. |
| strategy-governance-* | Strategic oversight & governance | "aerial chess board", "strategic planning abstract", "overhead grid" | Prefer metaphor (chess / aerial city grid) minimal clutter. |
| design-experience-* | Adaptive design & experience | "interface minimal abstract", "ux pattern light", "gradient shapes" | Soft gradients + structured geometry. |
| data-analytics-* | Data & analytics maturation | "data visualization abstract", "network nodes dark" | Emphasize connectedness / clarity. |
| creative-burnout-* | Managing creative energy sustainably | "creative workspace calm", "focus deep work", "sunlight desk minimal" | Should feel restorative, not exhausted or chaotic. |
| brand-operating-system-* | Cohesive brand system architecture | "modular grid design", "brand system abstract", "structured blocks" | Modular blocks or repeating panels. |
| ethical-data-pipelines-* (article hero) | Same as cover but hero variant | Same as cover queries (ensure distinct image) | Should differ from cover—maybe a closer or alternate angle motif. |
| human-machine-collaboration-* | Collaboration rituals | "human hands technology", "teamwork interface light", "human ai collaboration" | Subtle human element + digital overlay; avoid cliché handshakes. |
| adaptive-ai-ux-pattern-language-* | Adaptive UI patterns | "adaptive interface", "dynamic ui abstract", "responsive grid" | Pattern repetition with variation. |

> Open search quickly by appending your query: `https://unsplash.com/s/photos/<url-encoded-query>`

### Example Search URL Formats
- Ethical Data Pipelines: https://unsplash.com/s/photos/abstract-data-flow
- Human + Machine Collaboration: https://unsplash.com/s/photos/human-ai-collaboration
- Adaptive UX Patterns: https://unsplash.com/s/photos/responsive-grid

## Selection Criteria Checklist
- [ ] High resolution (≥ 3000px width before downscaling)
- [ ] Composable crop to 16:9 without losing semantic focus
- [ ] No watermarks, logos, or identifiable sensitive content
- [ ] Consistent mood (avoid overly warm noisy orange or saturated neon unless purposeful accent)
- [ ] Avoid overused generic AI imagery (silhouettes of brains with circuits, glowing humanoid heads)
- [ ] Works in grayscale if colors removed (test for structural clarity)
- [ ] Clean negative space for overlay text if needed (current markup doesn’t overlay, but future-proof)

## Export Commands (ImageMagick Examples)
Assuming you have a master file `source.jpg` and want the `ethical-data-pipelines-cover-*` set:
```bash
# 1600 wide (primary)
magick source.jpg -resize 1600x -gravity center -crop 1600x900+0+0 +repage -quality 78 img/blog/ethical-data-pipelines-cover-1600.webp
# 1200 wide
magick source.jpg -resize 1200x -gravity center -crop 1200x675+0+0 +repage -quality 78 img/blog/ethical-data-pipelines-cover-1200.webp
# 800 wide
magick source.jpg -resize 800x -gravity center -crop 800x450+0+0 +repage -quality 78 img/blog/ethical-data-pipelines-cover-800.webp
```
Repeat for each concept, substituting the slug.

## Optional JPEG Fallback Regeneration
If you need new JPEG fallbacks (not strictly required if existing are acceptable):
```bash
magick source.jpg -resize 1600x -gravity center -crop 1600x900+0+0 +repage -quality 82 img/blog/ethical-data-pipelines-cover-hero.jpg
```
Keep JPEG quality slightly higher than WebP to preserve fallback fidelity.

## Performance Validation
After placing a batch of assets:
1. Open the page in Chrome DevTools → Network → Disable cache → reload; ensure WebP variants load.
2. Run Lighthouse (Performance + Best Practices) – confirm no major layout shifts.
3. Inspect `<picture>` to verify correct candidate selected at various viewport widths (resize browser / use device toolbar).

## Accessibility & Alt Text
Alt text already authored in markup. If you significantly change visual semantics, update the `<img alt="...">` to reflect the new conceptual depiction (short, descriptive, not stuffed with keywords).

## Attribution (Internal)
Create a `CREDITS.md` (not publicly required by Unsplash, but good practice):
```
### Image Credits
ethical-data-pipelines-cover: Photo by <Name> on Unsplash (URL)
warm-example ...
```

## Future Automation (Optional Next Step)
Consider adding a lightweight Node or Python script to:
- Validate presence of each required WebP file
- Report missing sizes
- (Optional) Generate a manifest JSON used by a build step for automatic `<picture>` injection (already manually done here)

---
Need assistance evaluating selected candidates? Drop the candidate URLs and request a quality pass.
