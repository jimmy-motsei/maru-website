## Summary
- replace missing Safari scroll helper with a safe detector and guard GSAP progress animations to stop runtime warnings
- consolidate inline styling into reusable theme utilities and classes across HTML/JS fallbacks (hero padding, footers, loaders, success messages)
- add analytics and Calendly loaders that skip local hosts, preventing dev-time console errors while keeping production behaviour

## Testing
- `python -m http.server 8000` (manual)
- Headless Chromium checks on `index.html` and `request-demo.html` to confirm no console errors (via Playwright)

## Risk
- Low/Medium: analytics and Calendly scripts now load through local guards—verify on staging that external vendors still initialise as expected.

## Checklist
- [x] Build/serve flow works locally
- [x] No console errors on key pages
- [x] UI parity maintained after removing inline styles
