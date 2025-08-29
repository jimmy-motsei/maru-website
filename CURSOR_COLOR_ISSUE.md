# Cursor Color Issue - Pending Resolution

## Issue Summary

The custom cursor (`.mil-ball.mil-accent`) persistently reverts to orange color (`#fd7e14`) instead of maintaining the accent color (`#f0b265`).

## Root Cause Analysis

1. **Bootstrap Conflict**: `css/plugins/bootstrap-grid.css` defines `--bs-orange: #fd7e14;`
2. **GSAP Animation Interference**: GSAP animations override CSS color settings
3. **CSS Specificity Wars**: Multiple conflicting CSS rules with different specificity levels
4. **Timing Issues**: Animation delays cause color reversion after initial application

## Attempted Solutions (All Failed)

1. ✅ **CSS Overrides**: Added `!important` rules and higher specificity selectors
2. ✅ **JavaScript Inline Styles**: Applied inline styles with `!important` via `setAttribute()`
3. ✅ **Bootstrap Variable Override**: Set `--bs-orange: #f0b265 !important;`
4. ✅ **Continuous Monitoring**: Added `setInterval` to detect and fix orange color
5. ✅ **GSAP Replacement**: Replaced GSAP animations with direct CSS transforms
6. ✅ **Cache Busting**: Incremented CSS version from v=1.1 to v=2.7

## Current State

- **Last Attempt**: Disabled all GSAP animations, replaced with direct CSS transforms
- **CSS Version**: v=2.7
- **Status**: Still showing orange color despite all interventions
- **Files Modified**: `css/style.css`, `js/main.js`, all HTML files

## Key Files Involved

- `css/style.css` - Main stylesheet with cursor color rules
- `js/main.js` - JavaScript handling cursor interactions
- `css/plugins/bootstrap-grid.css` - Contains conflicting orange variable
- All HTML files - Updated with cache-busting CSS links

## Next Steps (When Returning)

1. **Complete GSAP Removal**: Remove GSAP library entirely if not needed elsewhere
2. **Bootstrap Isolation**: Move Bootstrap grid to separate scope or remove if unused
3. **CSS Architecture Review**: Restructure cursor styles with proper specificity hierarchy
4. **Alternative Approach**: Consider rebuilding cursor functionality from scratch
5. **Browser DevTools Analysis**: Deep dive into computed styles and inheritance chain

## Technical Notes

- Cursor element: `.mil-ball.mil-accent`
- Target color: `#f0b265` (accent color)
- Conflicting color: `#fd7e14` (Bootstrap orange)
- Animation library: GSAP (partially disabled)
- CSS framework: Bootstrap (conflicting variables)

---

**Date**: Current session
**Status**: Paused for future resolution
**Priority**: Medium (visual issue, not functional)
