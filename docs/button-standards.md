# Ashley HTML Kit Button Standards - Canonical Reference

## Canonical Button Structure

### Required HTML Markup

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

## Canonical CSS Selectors

### Base Button

```css
.mil-button
```

### Button Variants

```css
.mil-button.mil-arrow-place
  .mil-button.mil-icon-button
  .mil-button.mil-icon-button-sm
  .mil-button.mil-arrow-down;
```

### Button Elements

```css
.mil-button span .mil-button svg .mil-button svg path;
```

## Canonical CSS Properties (Ashley Theme)

### Base Button (.mil-button)

```css
.mil-button {
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: none;
  letter-spacing: 2px;
  font-size: 12px;
  background-color: rgb(0, 188, 212);
  color: rgb(0, 0, 0);
  border-radius: 70px;
  padding: 0 15px 0 50px;
  height: 70px;
  text-transform: uppercase;
  font-weight: 500;
  -webkit-transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
  transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
}
```

### Button Text (.mil-button span)

```css
.mil-button span {
  white-space: nowrap;
}
```

### Button SVG (.mil-button svg)

```css
.mil-button svg {
  margin-left: 30px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: rgb(0, 0, 0);
  -webkit-transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
  transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
}
```

### Button SVG Path (.mil-button svg path)

```css
.mil-button svg path {
  fill: rgb(0, 188, 212);
}
```

### Icon Button Variant (.mil-button.mil-icon-button)

```css
.mil-button.mil-icon-button {
  padding: 15px;
}

.mil-button.mil-icon-button svg {
  margin-left: 0;
}
```

### Small Icon Button Variant (.mil-button.mil-icon-button-sm)

```css
.mil-button.mil-icon-button-sm {
  padding: 0;
  height: 40px;
}

.mil-button.mil-icon-button-sm svg {
  margin-left: 0;
  background-color: rgb(0, 188, 212);
}

.mil-button.mil-icon-button-sm svg path {
  fill: rgb(0, 0, 0);
}
```

### Arrow Down Variant (.mil-button.mil-arrow-down)

```css
.mil-button.mil-arrow-down svg {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
```

## State Rules

### Hover State (.mil-button:hover)

```css
.mil-button:hover {
  -webkit-transform: scale(1.015);
  transform: scale(1.015);
  -webkit-filter: brightness(110%);
  filter: brightness(110%);
}

.mil-button:hover svg {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}
```

### Arrow Down Hover (.mil-button.mil-arrow-down:hover)

```css
.mil-button.mil-arrow-down:hover {
  -webkit-transform: scale(1.015);
  transform: scale(1.015);
  -webkit-filter: brightness(110%);
  filter: brightness(110%);
}

.mil-button.mil-arrow-down:hover svg {
  -webkit-transform: scale(1.15) rotate(90deg);
  transform: scale(1.15) rotate(90deg);
}
```

### Active State (.mil-button:active)

```css
.mil-button:active {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}
```

### Touch Device States

```css
@media (hover: none) and (pointer: coarse) {
  .mil-button:hover {
    transform: none;
    filter: none;
  }

  .mil-button:active {
    transform: scale(0.95);
    filter: brightness(90%);
  }

  .mil-button:active svg {
    transform: scale(1.05);
  }
}
```

## Responsive Breakpoints

### Tablet (max-width: 992px)

```css
@media screen and (max-width: 992px) {
  .mil-button {
    height: 60px;
    padding: 0 10px 0 40px;
  }
  .mil-button svg {
    margin-left: 25px;
  }
}
```

### Mobile (max-width: 768px)

```css
@media screen and (max-width: 768px) {
  .mil-button {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 70px;
    background-color: rgb(0, 188, 212);
    color: rgb(0, 0, 0);
    transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
  }

  .mil-button svg {
    margin-left: 20px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 8px;
    background-color: rgb(0, 0, 0);
    transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
  }

  .mil-button svg path {
    fill: rgb(0, 188, 212);
  }
}
```

### Small Mobile (max-width: 480px)

```css
@media screen and (max-width: 480px) {
  .mil-button {
    min-height: 55px;
    padding: 0 12px 0 40px;
    font-size: 11px;
    letter-spacing: 1.5px;
  }

  .mil-button span {
    max-width: 150px;
  }

  .mil-button svg {
    margin-left: 25px;
    width: 35px;
    height: 35px;
    padding: 8px;
  }
}
```

## Color Properties (For Brand Override)

### Background Colors

- `background-color: rgb(0, 188, 212)` - Ashley teal (override with brand blue)
- `background-color: rgb(0, 0, 0)` - SVG background (override with brand text color)

### Text Colors

- `color: rgb(0, 0, 0)` - Button text (override with brand text color)
- `fill: rgb(0, 188, 212)` - SVG path fill (override with brand background color)

### Hover Effects

- `filter: brightness(110%)` - Hover brightness (maintain for brand colors)

## Key Design Tokens

### Typography

- **Font Size**: `12px` (desktop), `11px` (mobile)
- **Font Weight**: `500`
- **Letter Spacing**: `2px`
- **Text Transform**: `uppercase`

### Layout

- **Height**: `70px` (desktop), `60px` (tablet), `44px+` (mobile)
- **Border Radius**: `70px`
- **Padding**: `0 15px 0 50px` (desktop), `0 10px 0 40px` (tablet)

### SVG Icon

- **Size**: `40px x 40px` (desktop), `35px x 35px` (mobile)
- **Margin**: `30px` (desktop), `25px` (tablet), `20px` (mobile)
- **Padding**: `10px` (desktop), `8px` (mobile)
- **Border Radius**: `50%` (circular)

### Transitions

- **Duration**: `0.4s`
- **Timing Function**: `cubic-bezier(0, 0, 0.3642, 1)`
- **Hover Scale**: `1.015`
- **SVG Scale**: `1.15`

---

_Canonical Ashley HTML Kit button structure documented: January 2025_
_Source: css/style.css - Ashley theme button component_
_Use this as single source of truth for all button implementations_
