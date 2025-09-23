# CSS Standards for Maru Website

## Overview

This document outlines the CSS standards and best practices for maintaining consistency across the Maru website. These standards ensure proper CSS organization, maintainability, and performance.

## CSS Load Order

All HTML pages must follow this exact CSS link order in the `<head>` section:

```html
<!-- bootstrap grid css -->
<link rel="stylesheet" href="css/plugins/bootstrap-grid.css" />
<!-- font awesome css -->
<link rel="stylesheet" href="css/plugins/font-awesome.min.css" />
<!-- swiper css -->
<link rel="stylesheet" href="css/plugins/swiper.min.css" />
<!-- fancybox css -->
<link rel="stylesheet" href="css/plugins/fancybox.min.css" />
<!-- maru scss -->
<link rel="stylesheet" href="css/style.css?v=3.4" />
<!-- site overrides -->
<link rel="stylesheet" href="assets/css/site-overrides.css" />
```

### Rationale

1. **Bootstrap Grid**: Foundation layout system
2. **Font Awesome**: Icon fonts
3. **Swiper**: Carousel/slider functionality
4. **Fancybox**: Lightbox functionality
5. **Maru SCSS**: Main theme styles (Ashley kit based)
6. **Site Overrides**: Custom styles and overrides (loaded last for specificity)

## File Organization

### Core CSS Files

- `css/style.css` - Main Ashley kit theme (DO NOT MODIFY)
- `assets/css/site-overrides.css` - All custom styles and overrides

### Plugin CSS Files

- `css/plugins/bootstrap-grid.css` - Bootstrap grid system
- `css/plugins/font-awesome.min.css` - Font Awesome icons
- `css/plugins/swiper.min.css` - Swiper carousel
- `css/plugins/fancybox.min.css` - Fancybox lightbox

## Site Overrides Structure

The `assets/css/site-overrides.css` file is organized into logical sections:

```css
/* ===========================================
   SECTION NAME
   =========================================== */

/* Component styles here */
```

### Sections Include:

1. **Partners Section Styles** - Partner logo carousel
2. **Mobile Framework & Responsive System** - Mobile-first responsive design
3. **Mobile Menu System** - Mobile navigation
4. **Contact Form Styles** - Form styling and validation
5. **Footer Responsive Fixes** - Footer layout fixes
6. **Calendly Widget Styles** - Calendar widget styling
7. **Safari Scrolling Fixes** - Safari-specific fixes
8. **Utility Classes** - Reusable utility classes
9. **Demo Page Specific Styles** - Page-specific styling

## Footer Standards

### Canonical Footer Structure

All pages must use the standardized footer template located in `canical-footer.html`. The footer includes:

- Logo with homepage link
- Newsletter subscription form
- Main navigation (Home, Services, Resources, Contact)
- Legal links (Privacy Policy, Terms, Cookie Policy, Careers)
- Contact information (Gauteng, Western Cape)
- Social media icons (LinkedIn, Twitter, Facebook, Instagram)
- Copyright notice

### Active Menu Item

Set the `mil-active` class on the appropriate menu item based on the current page:

```html
<!-- For home page -->
<li class="mil-up mil-active">
  <a href="index.html">Home</a>
</li>

<!-- For services page -->
<li class="mil-up mil-active">
  <a href="services.html">Services</a>
</li>
```

## Prohibited Practices

### ❌ DO NOT:

1. **Inline Styles**: Never use `style="..."` attributes
2. **Inline Style Blocks**: Never use `<style>...</style>` blocks in HTML
3. **Modify Core CSS**: Never edit `css/style.css` directly
4. **Duplicate CSS**: Avoid duplicating styles already in the Ashley kit
5. **Important Overuse**: Minimize use of `!important` declarations

### ✅ DO:

1. **Use Utility Classes**: Leverage existing Ashley kit classes
2. **Create Specific Classes**: Add specific classes in `site-overrides.css`
3. **Follow Mobile-First**: Write responsive styles mobile-first
4. **Document Changes**: Comment all custom styles with origin
5. **Test Responsively**: Test all changes across breakpoints

## Utility Classes

Common utility classes available in `site-overrides.css`:

```css
.mil-hidden                    /* display: none */
/* display: none */
.mil-letter-spacing-lg         /* letter-spacing: 6.5px */
.mil-object-cover             /* object-fit: cover; width: 100%; height: 100% */
.mil-object-cover-rounded     /* object-fit: cover; width: 100%; height: 100%; border-radius: 50% */
.mil-object-cover-center      /* object-fit: cover; object-position: center */
.mil-padding-bottom-160       /* padding-bottom: 160% */
.mil-padding-bottom-56        /* padding-bottom: 56.25% */
.mil-position-top-right       /* top: 300px; right: -100px */
.mil-position-left            /* left: 150px */
.mil-inline-block-middle; /* display: inline-block; vertical-align: middle; margin-right: 30px */
```

## Responsive Breakpoints

Follow the Ashley kit breakpoint system:

```css
/* Large Desktop (1400px+) */
@media screen and (max-width: 1400px) {
}

/* Desktop (1200px) */
@media screen and (max-width: 1200px) {
}

/* Tablet (992px) */
@media screen and (max-width: 992px) {
}

/* Mobile (768px) */
@media screen and (max-width: 768px) {
}

/* Small Mobile (576px) */
@media screen and (max-width: 576px) {
}

/* Very Small Mobile (500px) */
@media screen and (max-width: 500px) {
}
```

## Adding New Styles

### Process:

1. **Identify Need**: Determine if style is needed
2. **Check Existing**: Look for existing Ashley kit classes
3. **Create Utility**: Add utility class if reusable
4. **Add to Overrides**: Place in appropriate section of `site-overrides.css`
5. **Document**: Add comment explaining purpose and origin
6. **Test**: Test across all breakpoints

### Example:

```css
/* ===========================================
   NEW COMPONENT STYLES
   =========================================== */

/* Custom button variant for special pages */
.mil-special-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 15px 30px;
  border-radius: 25px;
  transition: transform 0.3s ease;
}

.mil-special-button:hover {
  transform: scale(1.05);
}
```

## Maintenance

### Regular Tasks:

1. **Audit Inline Styles**: Check for any new inline styles
2. **Review Overrides**: Ensure overrides are still needed
3. **Update Documentation**: Keep this document current
4. **Test Performance**: Monitor CSS file sizes
5. **Validate HTML**: Ensure no CSS validation errors

### Before Deploying:

1. ✅ All inline styles removed
2. ✅ CSS load order consistent
3. ✅ Footer standardized
4. ✅ Responsive design tested
5. ✅ Cross-browser compatibility verified

## Tools

### Automation Scripts:

- `audit_html.py` - Audits all HTML files for CSS usage
- `standardize_footers.py` - Standardizes footers across all pages

### Reports Generated:

- `reports/css-usage-matrix.csv` - CSS usage analysis
- `reports/footer-diff-report.md` - Footer standardization report
- `reports/inline-style-migration.md` - Inline style migration log

## Support

For questions or issues with CSS standards:

1. Check this documentation first
2. Review existing Ashley kit classes
3. Consult the site-overrides.css file
4. Test changes in isolation before applying globally

---

_Last updated: January 2025_
_Version: 1.0_
