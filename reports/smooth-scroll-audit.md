# Smooth Scroll Standardization Audit

## Summary
- Replaced the former SmoothScroll polyfill and CSS `scroll-behavior` smoothing with a single GSAP ScrollToPlugin workflow managed in `js/smooth-anchors.js`.
- Added interruption handlers (wheel/touchstart/keydown/mousedown) and Swup hooks so animations cancel instantly on user input and rebind after asynchronous page transitions.
- Implemented prefers-reduced-motion handling with instant jumps plus focus management so anchor navigation remains accessible while keeping history updates in sync.

## Test Matrix
| Scenario | Result |
| --- | --- |
| Desktop wheel/trackpad scroll on hero (no anchor) | Scrolls immediately; no residual locking |
| Hero “scroll down” control → `#about` | GSAP tween plays; manual scroll during motion stops the tween instantly |
| Mid-page anchor links (`#services`, `#contact`) | Smooth animation with offset computation; focus placed on the heading |
| Mobile touch fling & anchor taps | Native scrolling unaffected; anchor taps animate smoothly |
| Prefers-reduced-motion enabled | Anchors jump instantly with focus applied; no tween starts |
| Deep link load (`index.html#about`) | On load the page scrolls once to the section and focuses it without re-trigger |
| Swup navigation between pages | Anchor handling rebinds after `swup:contentReplaced`; scrolling remains responsive |
| GSAP ScrollTrigger/Swiper animations | Continue to run during and after anchor tweens without regression |

## Notes
- A fixed header can expose `data-anchor-offset` to customise the offset calculation if future layouts require it.
- `smooth-anchors.js` emits a warning only when GSAP ScrollToPlugin is absent, aiding debugging without breaking navigation.
