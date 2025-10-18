# Ashley Diff Report

## Hero/About Structure & Key CSS
| Element | Ashley Reference | Maru After Fix | Notes |
| --- | --- | --- | --- |
| `.mil-wrapper` | `overflow: hidden` (`../projects/ashley-html-kit/css/style.css:97`) | `overflow: hidden` (`css/style.css:185`) | Restored hidden overflow to match Ashley after removing custom Safari overrides that exposed new stacking contexts. |
| `.mil-banner` | `height: 100vh` (`../projects/ashley-html-kit/css/style.css:1670`) | `height: 100vh` with dvh support (`css/style.css:2145`) | Reverted to fixed viewport height; previously forced `height: auto` which let following section rise under hero. |
| `.mil-banner .container` | `align-items: flex-end` (`../projects/ashley-html-kit/css/style.css:1673`) | `align-items: flex-end` (`css/style.css:2240`) | Restored flex alignment; overrides now mirror Ashley to keep hero content pinned without stacking gaps. |
| `.mil-banner .mil-banner-content` | `padding-bottom: 120px` (`../projects/ashley-html-kit/css/style.css:1682`) | `padding-bottom: 120px` (`css/style.css:2252`) | Removed custom margin-top; reinstated Ashley spacing so next section begins below hero. |
| `section#about` | No special positioning (`../projects/ashley-html-kit/home-1.html:272`) | No transforms/overrides (`index.html:1423`) | About section now flows immediately after hero with default stacking. |
| Safari handling | None (`../projects/ashley-html-kit/home-1.html:228`) | Minimal cleanup script only (`js/safari-scroll-fix.js#L1`) | Replaced aggressive inline CSS override (removed from `index.html`) with script that clears legacy styles, preventing unintended stacking contexts. |

## Scroll Listeners Audit
| Event type | Target element | Passive? | `preventDefault`? | Action |
| --- | --- | --- | --- | --- |
| `wheel` | `window` (`js/smooth-anchors.js:80`) | Yes | No | Left intact; only cancels GSAP tweens. |
| `touchstart` | `window` (`js/smooth-anchors.js:80`) | Yes | No | Left intact; ensures GSAP autoKill. |
| `keydown` | `window` (`js/smooth-anchors.js:80`) | Yes | No | Left intact; anchors remain interruptible. |
| `mousedown` | `window` (`js/smooth-anchors.js:80`) | Yes | No | Left intact; anchors remain interruptible. |

## Button Audit (Services Grid)
| Card | Before classes | After classes | Icon source |
| --- | --- | --- | --- |
| SmartGuest AI | `mil-button mil-arrow-place mil-btn-space` | `mil-button mil-icon-button-sm mil-arrow-place` (`index.html:1619`) | Single `.mil-arrow` injected by Ashley JS; circular metrics via `assets/css/site-overrides.css:9`. |
| BizInsight AI | `mil-button mil-arrow-place mil-btn-space` | `mil-button mil-icon-button-sm mil-arrow-place` (`index.html:1638`) | Same as above; no extra inline SVG. |
| AI Mastery Workshops | `mil-button mil-arrow-place mil-btn-space` | `mil-button mil-icon-button-sm mil-arrow-place` (`index.html:1658`) | Same; aria-label added for accessibility. |
| Custom AI Solutions | `mil-button mil-arrow-place mil-btn-space` | `mil-button mil-icon-button-sm mil-arrow-place` (`index.html:1678`) | Same; geometry handled by override stylesheet. |

Circular button geometry & colour mapped in `assets/css/site-overrides.css:9`. Each CTA now relies on Ashley's arrow cloning (`js/main.js:715`) so duplicate SVGs were removed.
