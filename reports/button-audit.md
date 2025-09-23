# Button Audit Report - Ashley Canonical Standardization

## Canonical Ashley Button Structure

### Required Markup

```html
<a href="..." class="mil-button mil-arrow-place">
  <span>Button Text</span>
  <svg>
    <path d="M5 12h14m-7-7l7 7-7 7" fill="currentColor" />
  </svg>
</a>
```

### Required Classes

- `.mil-button` - Base button class (required)
- `.mil-arrow-place` - Arrow button variant (for CTAs)
- `.mil-icon-button` - Icon-only button
- `.mil-icon-button-sm` - Small icon button
- `.mil-arrow-down` - Down arrow variant

### Canonical CSS Properties (Ashley Theme)

- **Display**: `inline-flex`
- **Align**: `center` (items and content)
- **Border**: `none`
- **Border Radius**: `70px`
- **Height**: `70px` (desktop), `60px` (tablet), `44px+` (mobile)
- **Padding**: `0 15px 0 50px` (desktop), `0 10px 0 40px` (tablet)
- **Font**: `12px`, `500 weight`, `uppercase`, `2px letter-spacing`
- **Background**: `rgb(0, 188, 212)` (Ashley teal) - **OVERRIDDEN**
- **Color**: `rgb(0, 0, 0)` (black text) - **OVERRIDDEN**
- **Transition**: `0.4s cubic-bezier(0, 0, 0.3642, 1)`
- **Hover**: `scale(1.015)`, `brightness(110%)`
- **SVG**: `40px x 40px`, `30px margin-left`, `black background`, `teal path fill` - **OVERRIDDEN**

## Button Audit Results

### index.html

| Line | Element    | Classes                                                     | Status | Notes                           |
| ---- | ---------- | ----------------------------------------------------------- | ------ | ------------------------------- |
| 1215 | `<button>` | `mil-button mil-cookie-accept`                              | MATCH  | Cookie button with brand colors |
| 1218 | `<button>` | `mil-button mil-cookie-settings`                            | MATCH  | Cookie button with brand colors |
| 1221 | `<button>` | `mil-button mil-cookie-decline`                             | MATCH  | Cookie button with brand colors |
| 1462 | `<a>`      | `mil-button mil-arrow-place mil-btn-space`                  | MATCH  | Fixed SVG, brand colors         |
| 1506 | `<a>`      | `mil-button mil-arrow-place mil-icon-button mil-arrow-down` | MATCH  | Fixed SVG, aria-label           |
| 1692 | `<a>`      | `mil-services-button mil-button mil-arrow-place`            | MATCH  | Fixed SVG, brand colors         |
| 1713 | `<a>`      | `mil-button mil-arrow-place mil-btn-space`                  | MATCH  | Fixed SVG, brand colors         |
| 1733 | `<a>`      | `mil-button mil-arrow-place mil-btn-space`                  | MATCH  | Fixed SVG, brand colors         |
| 1755 | `<a>`      | `mil-button mil-arrow-place mil-btn-space`                  | MATCH  | Fixed SVG, brand colors         |
| 1777 | `<a>`      | `mil-button mil-arrow-place mil-btn-space`                  | MATCH  | Fixed SVG, brand colors         |
| 1843 | `<a>`      | `mil-button mil-arrow-place mil-mb-60`                      | MATCH  | Fixed SVG, brand colors         |
| 2223 | `<button>` | `mil-button mil-arrow-place`                                | MATCH  | Fixed SVG, brand colors         |

### contact.html

| Line | Element    | Classes                      | Status | Notes                   |
| ---- | ---------- | ---------------------------- | ------ | ----------------------- |
| 590  | `<button>` | `mil-button mil-arrow-place` | MATCH  | Fixed SVG, brand colors |

### services.html

| Line | Element    | Classes                      | Status | Notes                   |
| ---- | ---------- | ---------------------------- | ------ | ----------------------- |
| 508  | `<button>` | `mil-button mil-arrow-place` | MATCH  | Fixed SVG, brand colors |

### request-demo.html

| Line | Element    | Classes                      | Status | Notes                   |
| ---- | ---------- | ---------------------------- | ------ | ----------------------- |
| 606  | `<button>` | `mil-button mil-arrow-place` | MATCH  | Fixed SVG, brand colors |

## Summary

### Status Counts (After Correction)

- **MATCH**: 15 buttons (all buttons now match canonical structure)
- **NEAR_MATCH**: 0 buttons
- **DIVERGED**: 0 buttons

### Issues Resolved

1. ✅ **Fixed SVG Structure**: Changed from `stroke` to `fill` for SVG paths
2. ✅ **Implemented Correct Brand Colors**: Using `#03b6d1` (correct brand blue)
3. ✅ **Maintained Ashley Theme Structure**: Preserved all canonical classes and structure
4. ✅ **Ensured SVG Background**: Ashley theme CSS handles circular background on SVG
5. ✅ **Standardized Markup**: All buttons now use exact Ashley theme structure
6. ✅ **Fixed Nested Anchor Elements**: Removed invalid nested `<a>` elements causing duplicate circles/arrows

### Completed Actions

1. ✅ **Fixed SVG Structure**: All buttons now use `fill="currentColor"` instead of stroke
2. ✅ **Implemented Correct Brand Colors**: Updated CSS variables to use correct brand blue
3. ✅ **Maintained Ashley Theme**: Preserved all spacing, typography, transitions, and animations
4. ✅ **Ensured Accessibility**: All icon-only buttons have proper `aria-label` attributes
5. ✅ **Standardized Markup**: All buttons use canonical Ashley theme structure
6. ✅ **Fixed Nested Elements**: Removed invalid nested `<a>` elements and added proper click handlers

## Canonical SVG Arrow Icon (Correct)

The Ashley theme expects this SVG structure for arrow buttons:

```html
<svg>
  <path d="M5 12h14m-7-7l7 7-7 7" fill="currentColor" />
</svg>
```

**Key Differences from Current Implementation:**

- Uses `fill="currentColor"` instead of `stroke="currentColor"`
- No `stroke-width`, `stroke-linecap`, `stroke-linejoin` attributes
- Ashley theme CSS handles the circular background and sizing

## Brand Color Strategy (Correct)

### CSS Variables (Correct Implementation)

```css
:root {
  --brand-btn-bg: #03b6d1; /* correct brand blue */
  --brand-btn-fg: #0b0b0b; /* text/icon on blue */
  --brand-btn-bg-hover: #02a2ba; /* hover blue */
  --brand-btn-fg-hover: #0b0b0b;
  --brand-btn-outline: #7addeb; /* focus ring colour */
}

.mil-button {
  background-color: var(--brand-btn-bg);
  color: var(--brand-btn-fg);
}

.mil-button:hover {
  background-color: var(--brand-btn-bg-hover);
  color: var(--brand-btn-fg-hover);
}

.mil-button svg {
  background-color: var(--brand-btn-fg);
}

.mil-button svg path {
  fill: var(--brand-btn-bg);
}
```

## Edge Cases

### Nested Anchor Elements (RESOLVED)

- **Problem**: Service cards had nested `<a>` elements causing duplicate circles/arrows
- **Solution**: Removed outer `<a>` elements, converted to `<div>` with click handlers
- **Implementation**: Added `onclick="window.location.href='...'"` and `onclick="event.stopPropagation();"` for buttons
- **Result**: Single clean button structure without duplication

### Cookie Banner Buttons

- These are special-purpose buttons that may need different styling
- Should maintain Ashley theme structure but may need different colors
- Consider keeping current styling but ensuring accessibility

### Icon-Only Buttons

- `.mil-icon-button` and `.mil-icon-button-sm` variants
- Should maintain Ashley theme sizing and transitions
- Ensure proper `aria-label` attributes

### Mobile Responsiveness

- All buttons should maintain Ashley theme responsive behavior
- Touch targets should be ≥44px minimum
- Hover effects should be disabled on touch devices

---

_Audit completed: January 2025_
_Total buttons audited: 15 across all pages_
_Status: All buttons require correction to match Ashley canonical structure_
