# Button Class Rewrite Report

## Summary

Successfully standardized all buttons to match the exact Ashley kit class patterns and markup structure.

## Canonical Patterns Extracted

### Hero Pill CTA (Ashley)

```html
<a href="..." class="mil-button mil-arrow-place mil-btn-space">
  <span>Button Text</span>
</a>
```

**CSS Selectors:**

- `.mil-button` - Base button styling (70px height, 70px border-radius, padding)
- `.mil-btn-space` - Margin spacing (30px right, 15px bottom on mobile)
- `.mil-button svg` - Auto-injected icon styling

### Card CTA — Circular Arrow (Ashley)

```html
<a
  href="..."
  class="mil-button mil-arrow-place mil-icon-button-sm"
  aria-label="Learn more"
>
</a>
```

**CSS Selectors:**

- `.mil-button.mil-icon-button-sm` - Small icon button (40px, padding: 0)
- `.mil-service-card-sm .mil-button` - Card-specific scaling and effects
- `.mil-service-card-sm:hover .mil-button` - Hover state (scale: 1, opacity: 1)

## Changes Made

### 1. Hero Button Standardization

**"What we do" Button (index.html:1692)**

**BEFORE:**

```html
<a href="services.html" class="mil-button mil-arrow-place">
  <span>What we do</span>
</a>
```

**AFTER:**

```html
<a href="services.html" class="mil-button mil-arrow-place mil-btn-space">
  <span>What we do</span>
</a>
```

**Changes:**

- ✅ Added `mil-btn-space` class for proper spacing
- ✅ Now matches "Our Services" button pattern

### 2. Card CTA Standardization

**All 4 Card CTAs (index.html:1712-1788)**

**BEFORE:**

```html
<a
  href="services.html"
  class="mil-button mil-arrow-place mil-btn-space"
  onclick="event.stopPropagation()"
>
  <span>Learn More</span>
</a>
```

**AFTER:**

```html
<a
  href="services.html"
  class="mil-button mil-arrow-place mil-icon-button-sm"
  onclick="event.stopPropagation()"
  aria-label="Learn more"
>
</a>
```

**Changes:**

- ✅ Changed from `mil-btn-space` to `mil-icon-button-sm` for circular button
- ✅ Removed `<span>Learn More</span>` text content
- ✅ Added `aria-label="Learn more"` for accessibility
- ✅ Now icon-only circular buttons as per Ashley kit

### 3. CSS Variables Update

**Updated Color Variables:**

```css
:root {
  --brand-hero-bg: #03b6d1;
  --brand-hero-bg-hover: #02a2ba;
  --brand-hero-fg: #0b0b0b;
  --brand-cta-bg: #03b6d1;
  --brand-cta-bg-hover: #02a2ba;
  --brand-cta-fg: #0b0b0b;
}
```

**Changes:**

- ✅ Separated hero and card CTA color variables
- ✅ Removed unused variables
- ✅ Cleaner variable naming

### 4. CSS Selector Updates

**Hero Pill Button Colors:**

```css
.mil-button.mil-btn-space {
  background-color: var(--brand-hero-bg);
  color: var(--brand-hero-fg);
}

.mil-button.mil-btn-space:hover,
.mil-button.mil-btn-space:focus-visible {
  background-color: var(--brand-hero-bg-hover);
}
```

**Card Circular Button Colors:**

```css
.mil-service-card-sm .mil-button.mil-icon-button-sm:hover,
.mil-service-card-sm .mil-button.mil-icon-button-sm:focus-visible {
  background-color: var(--brand-cta-bg);
  color: var(--brand-cta-fg);
}
```

**Changes:**

- ✅ Targeted specific Ashley selectors
- ✅ Removed generic `.mil-button` overrides
- ✅ Proper hover state targeting

### 5. CurrentColor Implementation

**Added SVG Color Inheritance:**

```css
.mil-arrow,
.mil-arrow * {
  fill: currentColor;
  stroke: currentColor;
}
```

**Changes:**

- ✅ Ensures SVG icons inherit button text color
- ✅ Automatic color changes on hover
- ✅ Removed hard-coded SVG fills

## Classes Removed

### Non-Kit Classes Removed

- **Generic `.mil-button` overrides** - Replaced with specific Ashley selectors
- **Hard-coded SVG fills** - Replaced with `currentColor` inheritance
- **Unused color variables** - Cleaned up variable naming

### Conflicting Classes Resolved

- **Card CTAs**: Changed from `mil-btn-space` (pill) to `mil-icon-button-sm` (circular)
- **Hero Button**: Added missing `mil-btn-space` class
- **SVG Styling**: Removed hard-coded fills, using `currentColor`

## Verification Results

### ✅ **All Buttons Now Use Exact Ashley Classes**

1. **"Our Services" Button** - ✅ `mil-button mil-arrow-place mil-btn-space`
2. **"What we do" Button** - ✅ `mil-button mil-arrow-place mil-btn-space`
3. **Card CTAs (4x)** - ✅ `mil-button mil-arrow-place mil-icon-button-sm`
4. **"Let's talk" Button** - ✅ `mil-button mil-arrow-place mil-mb-60`
5. **"Subscribe" Button** - ✅ `mil-button mil-arrow-place`

### **Icon Implementation**

- ✅ **Single Source**: JavaScript auto-injection from `.mil-arrow` template
- ✅ **No Inline SVG**: All buttons rely on JavaScript injection
- ✅ **CurrentColor**: SVG icons inherit button text color
- ✅ **Accessibility**: Proper `aria-label` for icon-only buttons

### **Color Implementation**

- ✅ **Variables Only**: All colors via CSS variables
- ✅ **No Inline Styles**: Zero inline styles added
- ✅ **No !important**: Clean CSS without !important
- ✅ **Proper Targeting**: Specific Ashley selectors used

## Files Modified

1. **`index.html`** - Updated button classes and structure
2. **`assets/css/site-overrides.css`** - Updated color variables and selectors
3. **`docs/button-standards.md`** - Created canonical Ashley patterns documentation
4. **`reports/button-class-rewrite.md`** - This report

## Final Status

## ✅ **BUTTON CLASS REWRITE COMPLETED SUCCESSFULLY**

All buttons now use the exact Ashley kit class patterns:

- ✅ Hero pill buttons use `mil-button mil-arrow-place mil-btn-space`
- ✅ Card circular buttons use `mil-button mil-arrow-place mil-icon-button-sm`
- ✅ Colors applied via CSS variables only
- ✅ SVG icons use `currentColor` for automatic inheritance
- ✅ No inline styles or `!important` declarations
- ✅ Single icon source via JavaScript auto-injection

The buttons now match the Ashley kit exactly! 🎉
