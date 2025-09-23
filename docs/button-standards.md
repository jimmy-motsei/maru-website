# Ashley Button Standards

## Canonical Button Structure

### HTML Markup

```html
<a href="..." class="mil-button mil-arrow-place">
  <span>Button Text</span>
  <!-- SVG icon auto-injected by JavaScript -->
</a>
```

### Required Classes

- `mil-button`: Base button styling
- `mil-arrow-place`: Enables JavaScript icon injection
- Additional modifiers: `mil-btn-space`, `mil-icon-button`, `mil-arrow-down`, etc.

### JavaScript Auto-injection

The Ashley kit uses JavaScript to automatically inject icons:

```javascript
$(".mil-arrow").clone().appendTo(".mil-arrow-place");
```

**Template Source**: Hidden `.mil-arrow` SVG elements in HTML
**Target**: All elements with `.mil-arrow-place` class
**Process**: Clone template → Append to target → Apply styling

## Icon Implementation

### Single Source of Truth

- **Template**: Hidden `.mil-arrow` SVG elements (one per page)
- **Injection**: JavaScript clones and injects icons
- **No Inline SVG**: Buttons should NOT contain inline SVG elements

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

### Accessibility

- **Template**: `aria-hidden="true"` on SVG
- **Injected**: Inherits accessibility from template
- **Text**: Always wrapped in `<span>` for screen readers

## Button Variants

### Primary CTA

```html
<a href="..." class="mil-button mil-arrow-place mil-btn-space">
  <span>Call to Action</span>
</a>
```

### Icon-only Button

```html
<a
  href="..."
  class="mil-button mil-arrow-place mil-icon-button"
  aria-label="Action"
>
</a>
```

### Scroll Button

```html
<a
  href="#section"
  class="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
  aria-label="Scroll down"
>
</a>
```

### Newsletter Button

```html
<button type="submit" class="mil-button mil-arrow-place">
  <span>Subscribe</span>
</button>
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
  --brand-btn-bg: #03b6d1;
  --brand-btn-fg: #0b0b0b;
  --brand-btn-bg-hover: #02a2ba;
  --brand-btn-fg-hover: #0b0b0b;
  --brand-btn-outline: #7addeb;
}

/* Button color overrides */
.mil-button {
  background-color: var(--brand-btn-bg);
  color: var(--brand-btn-fg);
}

.mil-button:hover {
  background-color: var(--brand-btn-bg-hover);
  color: var(--brand-btn-fg-hover);
}

.mil-button:focus-visible {
  box-shadow: 0 0 0 3px var(--brand-btn-outline);
}
```

## Do's and Don'ts

### ✅ DO

- Use `mil-arrow-place` class for icon injection
- Keep button text in `<span>` elements
- Let JavaScript handle icon injection
- Use semantic HTML (`<a>` for navigation, `<button>` for actions)
- Maintain proper ARIA attributes
- Follow the canonical HTML structure

### ❌ DON'T

- Add inline SVG elements to buttons
- Use `!important` in CSS overrides
- Modify the JavaScript injection logic
- Remove the hidden `.mil-arrow` templates
- Add inline styles to buttons
- Create custom icon implementations

## States and Behavior

### Hover State

- Background color change via CSS variables
- Icon scaling and rotation (handled by kit CSS)
- Smooth transitions (kit default)

### Focus State

- Visible focus ring with brand color
- Keyboard navigation support
- WCAG compliant contrast

### Active State

- Pressed appearance
- Maintains accessibility

### Disabled State

- Reduced opacity
- Prevents interaction
- Clear visual indication

## Responsive Behavior

### Mobile (≤992px)

- Reduced button height: 60px
- Adjusted padding: `0 10px 0 40px`
- Icon margin: `25px`
- Maintains touch target size

### Desktop (>992px)

- Full button height and padding
- Standard icon positioning
- Hover effects enabled

## Troubleshooting

### Duplicate Icons

- **Cause**: Both inline SVG and JavaScript injection
- **Fix**: Remove inline SVG, rely on JavaScript
- **Prevention**: Never add SVG to `.mil-arrow-place` buttons

### Missing Icons

- **Cause**: Missing `.mil-arrow` template or JavaScript error
- **Fix**: Ensure template exists and JavaScript loads
- **Check**: Browser console for errors

### Styling Issues

- **Cause**: CSS load order or specificity conflicts
- **Fix**: Ensure `site-overrides.css` loads last
- **Debug**: Use browser dev tools to inspect computed styles

## Maintenance

### Adding New Buttons

1. Use canonical HTML structure
2. Apply appropriate classes
3. Include `mil-arrow-place` for icons
4. Test JavaScript injection works
5. Verify accessibility

### Updating Colors

1. Modify CSS variables in `site-overrides.css`
2. Test all button states
3. Ensure sufficient contrast
4. Update documentation

### Debugging

1. Check browser console for JavaScript errors
2. Inspect element to verify icon injection
3. Test keyboard navigation
4. Validate HTML structure
