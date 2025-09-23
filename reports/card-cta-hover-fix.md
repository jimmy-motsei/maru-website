# Card CTA Hover State Fix Report

## Summary

Fixed the hover state of the circular card CTAs to ensure proper brand blue background with black arrow on hover, using `currentColor` for automatic color inheritance.

## Issues Identified

### 1. **Incorrect Default State**

- **Problem**: Card CTAs were forced to have brand blue background by default
- **Expected**: Should use kit's default colors, only change on hover

### 2. **Hard-coded SVG Fills**

- **Problem**: CSS was setting hard-coded `fill` values on SVG paths
- **Expected**: Use `currentColor` for automatic color inheritance

### 3. **Missing Hover Behavior**

- **Problem**: Hover state wasn't properly configured for brand colors
- **Expected**: Blue background + black arrow on hover

## Fixes Applied

### 1. **Updated CSS Variables**

```css
:root {
  /* Card CTA specific variables */
  --brand-cta-bg: #03b6d1; /* blue bg on hover */
  --brand-cta-bg-hover: #02a2ba; /* optional slightly darker hover */
  --brand-cta-arrow: #0b0b0b; /* black arrow on hover */
  --brand-cta-outline: #7addeb;
}
```

### 2. **Fixed Base State**

```css
/* Base state – keep whatever arrow colour the kit uses (no forced blue bg by default) */
.mil-service-card-sm .mil-button.mil-icon-button-sm {
  border-radius: 50%; /* Ensure circular shape */
  width: 40px; /* Ensure equal width and height for perfect circle */
  height: 40px;
  /* Let the kit handle default colors */
}
```

**Key Changes:**

- ✅ Removed forced background color from base state
- ✅ Let Ashley kit handle default colors
- ✅ Maintained circular shape and sizing

### 3. **Fixed Hover State**

```css
/* Hover + focus-visible: blue bg + black arrow */
.mil-service-card-sm .mil-button.mil-icon-button-sm:hover,
.mil-service-card-sm .mil-button.mil-icon-button-sm:focus-visible {
  background-color: var(--brand-cta-bg);
  color: var(--brand-cta-arrow); /* arrow adopts currentColor */
}
```

**Key Changes:**

- ✅ Added proper hover state with brand blue background
- ✅ Set `color: var(--brand-cta-arrow)` for black arrow
- ✅ Combined hover and focus-visible states

### 4. **Enhanced Focus State**

```css
/* Focus-visible shadow geometry - keep kit's lengths, only change color if needed */
.mil-service-card-sm .mil-button.mil-icon-button-sm:focus-visible {
  box-shadow: 0 0 0 3px rgba(3, 182, 209, 0.35);
}
```

**Key Changes:**

- ✅ Added focus ring with brand color
- ✅ Maintained kit's focus ring geometry
- ✅ Used semi-transparent brand color

### 5. **Fixed SVG Color Inheritance**

```css
/* Ensure SVG uses currentColor for proper color inheritance */
.mil-arrow,
.mil-arrow * {
  fill: currentColor;
  stroke: currentColor;
}
```

**Key Changes:**

- ✅ Added `currentColor` inheritance for all SVG elements
- ✅ Ensures arrow color follows button text color
- ✅ Works for both `fill` and `stroke` attributes

### 6. **Removed Conflicting Rules**

```css
/* Removed hard-coded fills to allow currentColor inheritance */
```

**Removed:**

- ❌ `.mil-button svg path { fill: var(--brand-btn-bg); }`
- ❌ `.mil-button:hover svg path { fill: var(--brand-btn-bg-hover); }`
- ❌ `.mil-button.mil-icon-button-sm svg path { fill: var(--brand-btn-fg); }`
- ❌ `.mil-service-card-sm .mil-button svg path { fill: var(--brand-btn-bg); }`
- ❌ `.mil-service-card-sm:hover .mil-button svg path { fill: var(--brand-btn-bg-hover); }`

## Technical Implementation

### **Hover Behavior**

- **Default**: Kit's default colors (no forced background)
- **Hover**: Brand blue background (`#03b6d1`) + black arrow (`#0b0b0b`)
- **Focus**: Same as hover + focus ring with brand color

### **Color Inheritance**

- **Method**: Uses `currentColor` for automatic color inheritance
- **SVG**: All arrow elements inherit button text color
- **States**: Arrow color changes automatically with button color

### **CSS Selectors**

- **Base**: `.mil-service-card-sm .mil-button.mil-icon-button-sm`
- **Hover**: `.mil-service-card-sm .mil-button.mil-icon-button-sm:hover`
- **Focus**: `.mil-service-card-sm .mil-button.mil-icon-button-sm:focus-visible`
- **SVG**: `.mil-arrow, .mil-arrow *`

## Verification Results

### ✅ **All 4 Cards Successfully Fixed**

1. **SmartGuest AI** - ✅ Proper hover behavior
2. **BizInsight AI** - ✅ Proper hover behavior
3. **AI Mastery Workshops** - ✅ Proper hover behavior
4. **Custom AI Solutions** - ✅ Proper hover behavior

### **Expected Behavior**

- **Default**: Kit's default appearance (no forced colors)
- **Hover**: Blue background (#03b6d1) + black arrow (#0b0b0b)
- **Focus**: Same as hover + focus ring
- **Icon**: Automatically inherits button text color via `currentColor`

## Quality Gates Met

### ✅ **Technical Requirements**

- No inline styles added
- No `!important` declarations used
- CSS variables only for color overrides
- Ashley kit as single source of truth
- Clean, maintainable CSS

### ✅ **Color Inheritance**

- Uses `currentColor` for automatic SVG color inheritance
- Removed all hard-coded SVG fills
- Arrow color changes automatically with button state

### ✅ **Hover Behavior**

- Default state uses kit's colors
- Hover state shows brand blue background
- Arrow becomes black on hover
- Focus state matches hover behavior

### ✅ **Accessibility**

- Proper focus states with visible outline
- Color changes maintain sufficient contrast
- Keyboard navigation preserved

## Files Modified

1. **`assets/css/site-overrides.css`** - Fixed hover state and color inheritance
2. **`docs/button-standards.md`** - Updated with correct hover behavior
3. **`reports/card-cta-hover-fix.md`** - This fix report

## Final Status

## ✅ **HOVER STATE FIX COMPLETED SUCCESSFULLY**

All 4 circular card CTAs now have proper hover behavior:

- ✅ Default state uses kit's colors (no forced background)
- ✅ Hover state shows brand blue background (#03b6d1)
- ✅ Arrow becomes black on hover (#0b0b0b)
- ✅ Uses `currentColor` for automatic color inheritance
- ✅ No hard-coded SVG fills blocking color inheritance
- ✅ Proper focus states with brand color outline

The circular card CTAs now have the exact hover behavior as specified! 🎉
