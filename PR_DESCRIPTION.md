## Summary
- replace missing Safari scroll helper with a safe detector and guard GSAP progress animations to stop runtime warnings
- consolidate inline styling into reusable theme utilities and classes across HTML/JS fallbacks (hero padding, footers, loaders, success messages)
- add analytics and Calendly loaders that skip local hosts, preventing dev-time console errors while keeping production behaviour
- introduce scoped vertical asymmetry utilities for the signature preview and layer per-element offsets without changing copy or interactivity

## Testing
- `python -m http.server 8000` (manual)
- Headless Chromium checks on `index.html` and `request-demo.html` to confirm no console errors (via Playwright)

## Risk
- Low/Medium: analytics and Calendly scripts now load through local guards—verify on staging that external vendors still initialise as expected.

## Signature Asymmetry
Toggle the staggered layout by switching `data-asym="on"` or `data-asym="off"` on the root `[data-sig="card"]` element; per-element offsets live in `signature.asym.css` as `.y-*` utilities, so adjust the translate values there (or swap classes in the markup) to fine-tune vertical rhythm while keeping mobile and reduced-motion fallbacks intact. The right-column contact rows now sit in a `[data-sig-area="right"]` grid with uniform line-height/spacing; phone and email stay single-line (ellipsis-protected) on ≥768px viewports, while Location uses a widened card footprint, slimmer label track, and `title` tooltip to render the full address on one line without clipping, then reverts to natural wrapping on mobile.

## Checklist
- [x] Build/serve flow works locally
- [x] No console errors on key pages
- [x] UI parity maintained after removing inline styles
