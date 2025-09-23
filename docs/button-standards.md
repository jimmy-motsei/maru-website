# Ashley Button Standards

## Canonical Button Patterns

### Hero Pill CTA (Ashley)

```html
<a href="..." class="mil-button mil-arrow-place mil-btn-space">
  <span>Button Text</span>
</a>
```

**Key Characteristics:**

- **Classes**: `mil-button mil-arrow-place mil-btn-space`
- **Structure**: Text in `<span>`, icon auto-injected by JavaScript
- **Styling**: Full pill button with padding and height
- **Icon**: JavaScript auto-injected from `.mil-arrow` template

**CSS Selectors:**

- `.mil-button` - Base button styling (70px height, 70px border-radius, padding)
- `.mil-btn-space` - Margin spacing (30px right, 15px bottom on mobile)
- `.mil-button svg` - Auto-injected icon styling

### Card CTA — Circular Arrow (Ashley)

```html
<a
  href="..."
  class="mil-button mil-arrow-place mil-card-action"
  aria-label="Learn more"
>
  <svg
    class="mil-arrow"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <path
      d="M8 5l7 7-7 7"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</a>
```

**Key Characteristics:**

- **Classes**: `mil-button mil-arrow-place mil-card-action`
- **Structure**: Icon-only button with inline SVG and `aria-label`
- **Styling**: Small circular button (40px height/width)
- **Icon**: Inline SVG with `currentColor` for color inheritance

**CSS Selectors:**

- `.mil-service-card-sm .mil-button.mil-card-action` - Circular button styling (40px, border-radius: 50%)
- `.mil-service-card-sm .mil-button.mil-card-action svg` - Icon sizing (16px)
- `.mil-service-card-sm .mil-button` - Card-specific scaling and effects
- `.mil-service-card-sm:hover .mil-button` - Hover state (scale: 1, opacity: 1)

## Icon Implementation

### JavaScript Auto-injection

The Ashley kit uses JavaScript to automatically inject icons:

```javascript
$(".mil-arrow").clone().appendTo(".mil-arrow-place");
```

**Template Source**: Hidden `.mil-arrow` SVG elements in HTML
**Target**: All elements with `.mil-arrow-place` class
**Process**: Clone template → Append to target → Apply styling

### Template Structure

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  class="mil-arrow"
  aria-hidden="true"
>
  <path d="M 14 5.3417969 C 13.744125 5.3417969..." />
</svg>
```

## CSS Architecture

### Load Order

1. **Kit Base/Reset**: `css/style.css`
2. **Kit Components**: Button styles included
3. **Site Theme**: Brand colors and overrides
4. **Site Overrides**: `assets/css/site-overrides.css` (LAST)

### Color Customization

```css
/* Brand color variables */
:root {
  --brand-hero-bg: #03b6d1;
  --brand-hero-bg-hover: #02a2ba;
  --brand-hero-fg: #0b0b0b;
  --brand-cta-bg: #03b6d1;
  --brand-cta-bg-hover: #02a2ba;
  --brand-cta-fg: #0b0b0b;
}

/* Hero pill button */
.mil-button.mil-btn-space {
  background-color: var(--brand-hero-bg);
  color: var(--brand-hero-fg);
}

.mil-button.mil-btn-space:hover,
.mil-button.mil-btn-space:focus-visible {
  background-color: var(--brand-hero-bg-hover);
}

/* Card circular button */
.mil-service-card-sm .mil-button.mil-icon-button-sm:hover,
.mil-service-card-sm .mil-button.mil-icon-button-sm:focus-visible {
  background-color: var(--brand-cta-bg);
  color: var(--brand-cta-fg);
}
```

## Do's and Don'ts

### ✅ DO

- Use exact Ashley class combinations
- Let JavaScript handle icon injection
- Use `aria-label` for icon-only buttons
- Keep button text in `<span>` elements
- Follow the canonical HTML structure

### ❌ DON'T

- Add inline SVG elements to buttons
- Use `!important` in CSS overrides
- Modify the JavaScript injection logic
- Remove the hidden `.mil-arrow` templates
- Add inline styles to buttons
- Create custom icon implementations
