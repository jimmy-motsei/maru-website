# Button Computed Style Diff Analysis

## Reference Button: Primary Hero CTA

**Location**: `index.html` line 1462
**Selector**: `.mil-button.mil-arrow-place.mil-btn-space`
**HTML**:

```html
<a href="services.html" class="mil-button mil-arrow-place mil-btn-space">
  <span>Our Services</span>
  <svg>
    <path d="M5 12h14m-7-7l7 7-7 7" fill="currentColor" />
  </svg>
</a>
```

## Ashley Kit Canonical Button

**Expected Selector**: `.mil-button.mil-arrow-place`
**Expected HTML**:

```html
<a href="..." class="mil-button mil-arrow-place">
  <span>Button Text</span>
  <svg>
    <path d="M5 12h14m-7-7l7 7-7 7" fill="currentColor" />
  </svg>
</a>
```

## Computed Style Comparison

| Property             | Ashley Kit (Expected)                | Our Site (Actual)                    | Status       | Source                 |
| -------------------- | ------------------------------------ | ------------------------------------ | ------------ | ---------------------- |
| **background-color** | `rgb(0, 188, 212)`                   | `rgb(3, 182, 209)`                   | ❌ DIFFERENT | site-overrides.css:433 |
| **color**            | `rgb(0, 0, 0)`                       | `rgb(11, 11, 11)`                    | ❌ DIFFERENT | site-overrides.css:434 |
| **border-radius**    | `70px`                               | `70px`                               | ✅ MATCH     | css/style.css:701      |
| **padding**          | `0px 15px 0px 50px`                  | `0px 15px 0px 50px`                  | ✅ MATCH     | css/style.css:702      |
| **height**           | `70px`                               | `70px`                               | ✅ MATCH     | css/style.css:703      |
| **font-size**        | `12px`                               | `12px`                               | ✅ MATCH     | css/style.css:698      |
| **font-weight**      | `500`                                | `500`                                | ✅ MATCH     | css/style.css:705      |
| **letter-spacing**   | `2px`                                | `2px`                                | ✅ MATCH     | css/style.css:697      |
| **text-transform**   | `uppercase`                          | `uppercase`                          | ✅ MATCH     | css/style.css:704      |
| **display**          | `inline-flex`                        | `inline-flex`                        | ✅ MATCH     | css/style.css:689      |
| **align-items**      | `center`                             | `center`                             | ✅ MATCH     | css/style.css:692      |
| **justify-content**  | `center`                             | `center`                             | ✅ MATCH     | css/style.css:695      |
| **border**           | `none`                               | `none`                               | ✅ MATCH     | css/style.css:696      |
| **transition**       | `0.4s cubic-bezier(0, 0, 0.3642, 1)` | `0.4s cubic-bezier(0, 0, 0.3642, 1)` | ✅ MATCH     | css/style.css:707      |
| **cursor**           | `pointer`                            | `pointer`                            | ✅ MATCH     | css/style.css:686      |

## SVG Icon Analysis

| Property             | Ashley Kit (Expected)                | Our Site (Actual)                    | Status       | Source                 |
| -------------------- | ------------------------------------ | ------------------------------------ | ------------ | ---------------------- |
| **margin-left**      | `30px`                               | `30px`                               | ✅ MATCH     | css/style.css:713      |
| **border-radius**    | `50%`                                | `50%`                                | ✅ MATCH     | css/style.css:714      |
| **width**            | `40px`                               | `40px`                               | ✅ MATCH     | css/style.css:715      |
| **height**           | `40px`                               | `40px`                               | ✅ MATCH     | css/style.css:716      |
| **padding**          | `10px`                               | `10px`                               | ✅ MATCH     | css/style.css:717      |
| **background-color** | `rgb(0, 0, 0)`                       | `rgb(11, 11, 11)`                    | ❌ DIFFERENT | site-overrides.css:438 |
| **transition**       | `0.4s cubic-bezier(0, 0, 0.3642, 1)` | `0.4s cubic-bezier(0, 0, 0.3642, 1)` | ✅ MATCH     | css/style.css:720      |

## SVG Path Analysis

| Property | Ashley Kit (Expected) | Our Site (Actual)  | Status       | Source                 |
| -------- | --------------------- | ------------------ | ------------ | ---------------------- |
| **fill** | `rgb(0, 188, 212)`    | `rgb(3, 182, 209)` | ❌ DIFFERENT | site-overrides.css:442 |

## Hover State Analysis

| Property      | Ashley Kit (Expected) | Our Site (Actual)  | Status   | Source            |
| ------------- | --------------------- | ------------------ | -------- | ----------------- |
| **transform** | `scale(1.015)`        | `scale(1.015)`     | ✅ MATCH | css/style.css:744 |
| **filter**    | `brightness(110%)`    | `brightness(110%)` | ✅ MATCH | css/style.css:746 |

## CSS Rules Applied (Our Site)

### Base Button Rules

1. **css/style.css:685** - `.mil-button` (base styles)
2. **css/style.css:709** - `.mil-button span` (text styles)
3. **css/style.css:712** - `.mil-button svg` (icon styles)
4. **css/style.css:722** - `.mil-button svg path` (path styles)

### Override Rules

1. **assets/css/site-overrides.css:432** - `.mil-button` (color overrides)
2. **assets/css/site-overrides.css:437** - `.mil-button svg` (icon color overrides)
3. **assets/css/site-overrides.css:441** - `.mil-button svg path` (path color overrides)

### Hover Rules

1. **css/style.css:742** - `.mil-button:hover` (hover effects)
2. **css/style.css:748** - `.mil-button:hover svg` (icon hover effects)

## Root Cause Analysis

### Issue 1: Color Values Don't Match Ashley Kit

- **Expected**: `rgb(0, 188, 212)` (Ashley teal)
- **Actual**: `rgb(3, 182, 209)` (Our brand blue)
- **Cause**: CSS variables in site-overrides.css are overriding Ashley theme colors
- **Impact**: Buttons appear with wrong brand colors

### Issue 2: CSS Specificity Conflicts

- **Problem**: Using `!important` in site-overrides.css creates specificity conflicts
- **Impact**: Ashley theme behavior is being overridden unnecessarily
- **Solution**: Remove `!important` and use proper CSS specificity

### Issue 3: CSS Load Order Issues

- **Current Order**: ✅ Correct (kit base → kit components → site overrides)
- **Status**: Load order is correct, no changes needed

## Recommendations

### 1. Fix Color Variables

- Update CSS variables to match Ashley theme exactly
- Remove `!important` declarations
- Use proper CSS specificity

### 2. Clean Up Overrides

- Remove unnecessary button style overrides
- Keep only essential color customizations
- Preserve Ashley theme behavior

### 3. Test Computed Styles

- Verify computed styles match Ashley kit exactly
- Ensure no conflicting rules
- Test across different screen sizes

---

_Analysis completed: January 2025_
_Reference button: Primary hero CTA on index.html_
_Ashley kit comparison: css/style.css canonical button rules_
