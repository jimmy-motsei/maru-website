# Maru Online — Design Token Brief
**Version:** 1.0 — locked 5 Apr 2026
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
**Reference aesthetic:** Jimmy Motsei credentials document (Cormorant Garamond + DM Sans, warm neutral)

---

## 1. Colour tokens

### Light mode (default — warm neutral)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#FAFAF8` | Page background |
| `--color-bg-secondary` | `#F0EFE9` | Card backgrounds, section fills |
| `--color-bg-tertiary` | `#E8E7E0` | Subtle dividers, input backgrounds |
| `--color-bg-dark` | `#1A3A5C` | Section dividers, hero moments, callout blocks |
| `--color-bg-darkest` | `#0D1B2A` | Deep accent backgrounds |
| `--color-ink-primary` | `#0D1B2A` | Primary body text, headings |
| `--color-ink-secondary` | `#4A5568` | Secondary text, captions, labels |
| `--color-ink-tertiary` | `#718096` | Placeholder text, disabled states |
| `--color-ink-inverted` | `#FAFAF8` | Text on dark backgrounds |
| `--color-ink-inverted-muted` | `rgba(250,250,248,0.7)` | Muted text on dark backgrounds |
| `--color-cyan` | `#3DB8C6` | Brand accent — CTAs, highlights, links |
| `--color-cyan-light` | `#E8F8FA` | Cyan tint backgrounds |
| `--color-cyan-dark` | `#2DA8B6` | Cyan hover state |
| `--color-gold` | `#B8860B` | Result callouts, success highlights |
| `--color-gold-light` | `#FDF8EE` | Gold tint backgrounds |
| `--color-border-default` | `#E2E8F0` | Default borders, dividers |
| `--color-border-strong` | `#CBD5E0` | Stronger borders, input focus |

### Dark mode

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0D1B2A` | Page background |
| `--color-bg-secondary` | `#1A3A5C` | Card backgrounds |
| `--color-bg-tertiary` | `#1E3F63` | Subtle fills |
| `--color-bg-dark` | `#0A1520` | Deeper sections |
| `--color-ink-primary` | `#FAFAF8` | Primary text |
| `--color-ink-secondary` | `rgba(250,250,248,0.7)` | Secondary text |
| `--color-ink-tertiary` | `rgba(250,250,248,0.45)` | Tertiary text |
| `--color-cyan` | `#3DB8C6` | Unchanged — works on both |
| `--color-cyan-light` | `rgba(61,184,198,0.12)` | Cyan tint on dark |
| `--color-border-default` | `rgba(255,255,255,0.1)` | Subtle borders |
| `--color-border-strong` | `rgba(255,255,255,0.2)` | Stronger borders |

### Implementation — Tailwind config

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      ink: {
        primary: 'var(--color-ink-primary)',
        secondary: 'var(--color-ink-secondary)',
        tertiary: 'var(--color-ink-tertiary)',
        inverted: 'var(--color-ink-inverted)',
      },
      bg: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        dark: 'var(--color-bg-dark)',
        darkest: 'var(--color-bg-darkest)',
      },
      cyan: {
        DEFAULT: '#3DB8C6',
        light: 'var(--color-cyan-light)',
        dark: '#2DA8B6',
      },
      gold: {
        DEFAULT: '#B8860B',
        light: '#FDF8EE',
      },
      border: {
        default: 'var(--color-border-default)',
        strong: 'var(--color-border-strong)',
      }
    }
  }
}
```

### Theme toggle implementation

```tsx
// Use next-themes
// globals.css — light mode (default)
:root {
  --color-bg-primary: #FAFAF8;
  --color-bg-secondary: #F0EFE9;
  --color-bg-tertiary: #E8E7E0;
  --color-bg-dark: #1A3A5C;
  --color-bg-darkest: #0D1B2A;
  --color-ink-primary: #0D1B2A;
  --color-ink-secondary: #4A5568;
  --color-ink-tertiary: #718096;
  --color-ink-inverted: #FAFAF8;
  --color-ink-inverted-muted: rgba(250,250,248,0.7);
  --color-cyan: #3DB8C6;
  --color-cyan-light: #E8F8FA;
  --color-border-default: #E2E8F0;
  --color-border-strong: #CBD5E0;
}

// Dark mode
[data-theme='dark'] {
  --color-bg-primary: #0D1B2A;
  --color-bg-secondary: #1A3A5C;
  --color-bg-tertiary: #1E3F63;
  --color-bg-dark: #0A1520;
  --color-ink-primary: #FAFAF8;
  --color-ink-secondary: rgba(250,250,248,0.7);
  --color-ink-tertiary: rgba(250,250,248,0.45);
  --color-ink-inverted: #0D1B2A;
  --color-cyan-light: rgba(61,184,198,0.12);
  --color-border-default: rgba(255,255,255,0.1);
  --color-border-strong: rgba(255,255,255,0.2);
}
```

---

## 2. Typography tokens

### Font families

| Font | Role | Source |
|------|------|--------|
| Cormorant Garamond | Display, H1, hero moments | Google Fonts |
| DM Sans | Body, H2–H6, UI, labels | Google Fonts |

```tsx
// next/font in layout.tsx
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})
```

### Type scale

| Token | Font | Size | Weight | Line height | Usage |
|-------|------|------|--------|-------------|-------|
| `display-xl` | Cormorant Garamond | 80px / 5rem | 300 | 1.05 | Hero H1 (desktop) |
| `display-lg` | Cormorant Garamond | 56px / 3.5rem | 300 | 1.1 | Hero H1 (mobile), page H1s |
| `display-md` | Cormorant Garamond | 36px / 2.25rem | 400 | 1.2 | Section headings, pull quotes |
| `display-sm` | Cormorant Garamond | 28px / 1.75rem | 400 | 1.3 | Card headings, article titles |
| `heading-lg` | DM Sans | 22px / 1.375rem | 500 | 1.4 | H2 subheadings |
| `heading-md` | DM Sans | 18px / 1.125rem | 500 | 1.5 | H3 section headings |
| `heading-sm` | DM Sans | 15px / 0.9375rem | 500 | 1.5 | H4 labels, card titles |
| `body-lg` | DM Sans | 17px / 1.0625rem | 300 | 1.8 | Lead paragraphs, hero body |
| `body-md` | DM Sans | 15px / 0.9375rem | 300 | 1.8 | Standard body copy |
| `body-sm` | DM Sans | 13px / 0.8125rem | 300 | 1.7 | Captions, footnotes, labels |
| `label` | DM Sans | 11px / 0.6875rem | 500 | 1.4 | Eyebrows, tags, uppercase labels |
| `mono` | System mono | 13px | 400 | 1.6 | Code, URLs |

### Typography rules

- Display type (Cormorant Garamond): used for H1s and major display moments only. Never for UI elements, buttons, or labels.
- Body type (DM Sans): weight 300 for all body copy. Weight 500 for headings H2–H6, button text, and labels only. Never weight 600 or 700 — too heavy against the refined aesthetic.
- Letter spacing: `--tracking-display: -0.02em` for display type. `--tracking-label: 0.12em` for uppercase labels.
- Sentence case always. No all-caps except eyebrow labels (11px, letter-spaced).
- Italic Cormorant Garamond used sparingly — pull quotes, the name on the cover, moments of editorial emphasis.

---

## 3. Spacing tokens

Based on a 4px base unit.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Component internal gaps |
| `space-3` | 12px | Tight spacing |
| `space-4` | 16px | Standard gaps |
| `space-5` | 20px | Medium gaps |
| `space-6` | 24px | Section internal spacing |
| `space-8` | 32px | Card padding, generous gaps |
| `space-10` | 40px | Section padding (mobile) |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Large section gaps |
| `space-20` | 80px | Hero padding, major sections |
| `space-24` | 96px | Between major page sections |
| `space-32` | 128px | Generous hero breathing room |

### Layout widths

| Token | Value | Usage |
|-------|-------|-------|
| `max-w-content` | 900px | Standard content width |
| `max-w-text` | 680px | Prose / reading width |
| `max-w-wide` | 1200px | Wide layouts, full-bleed sections |
| `gutter-mobile` | 24px | Side padding on mobile |
| `gutter-desktop` | 60px | Side padding on desktop |

---

## 4. Component tokens

### Border radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 3px | Badges, small pills |
| `radius-md` | 6px | Buttons, input fields |
| `radius-lg` | 8px | Cards, callout blocks |
| `radius-xl` | 12px | Large cards, modals |
| `radius-none` | 0px | Sharp corners — section dividers, full-bleed blocks |

Note: Sharp corners preferred for the primary aesthetic. Rounded only where softness is intentional (form inputs, small badges).

### Borders

- Default: `1px solid var(--color-border-default)`
- Strong: `1px solid var(--color-border-strong)`
- Accent left: `4px solid var(--color-cyan)` — used on case study cards, callout blocks
- None: full-bleed section dividers use no border

### Shadows

Minimal shadow usage — the aesthetic relies on colour and spatial separation rather than elevation.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | none | Default for most elements |
| `shadow-sm` | `0 1px 3px rgba(13,27,42,0.08)` | Subtle card lift (light mode only) |
| `shadow-focus` | `0 0 0 3px rgba(61,184,198,0.3)` | Focus rings on interactive elements |

---

## 5. CTA component tokens

### Primary CTA button

```tsx
// Tailwind classes
className="
  inline-flex items-center justify-center
  px-7 py-3.5
  bg-cyan text-bg-darkest
  font-body font-medium text-[15px]
  tracking-normal
  rounded-none              // Sharp corners — brand signature
  border-none
  transition-all duration-200
  hover:bg-cyan-dark hover:-translate-y-px
  focus:outline-none focus:ring-[3px] focus:ring-cyan/30
  active:translate-y-0
"
```

### Secondary CTA button

```tsx
className="
  inline-flex items-center justify-center
  px-7 py-3.5
  bg-transparent text-cyan
  font-body font-medium text-[15px]
  border border-cyan
  rounded-none
  transition-all duration-200
  hover:bg-cyan/10
  focus:outline-none focus:ring-[3px] focus:ring-cyan/30
"
```

### Tertiary — inline text link

```tsx
className="
  text-cyan
  font-body font-300 text-[15px]
  no-underline
  hover:underline
  transition-colors duration-150
"
// Always append → character for directional links
// e.g. "See how we work →"
```

### Mobile sticky CTA bar

```tsx
// Fixed bottom bar — mobile only (hidden md:hidden)
className="
  fixed bottom-0 left-0 right-0
  bg-bg-dark border-t border-border-default
  px-6 py-4
  flex items-center justify-between
  md:hidden z-50
"
// Contains: short label left, primary CTA button right
```

---

## 6. Section patterns

### Standard content section

```tsx
<section className="py-24 px-6 md:px-[60px] max-w-[900px] mx-auto">
  {/* content */}
</section>
```

### Full-bleed dark section divider

Drawn directly from credentials doc. Used 2–3 times per page maximum.

```tsx
<div className="
  bg-bg-dark
  py-16 px-6 md:px-[80px]
  flex items-end gap-6
">
  <span className="
    font-display text-[80px] font-light leading-none
    text-cyan/30
  ">01</span>
  <div className="pb-3">
    <h2 className="font-display text-[32px] font-light text-ink-inverted tracking-tight">
      Section title
    </h2>
    <p className="text-[13px] font-light text-ink-inverted-muted mt-1.5">
      Section subtitle
    </p>
  </div>
</div>
```

### Callout block — cost / result highlight

Used in diagnostic report and article content.

```tsx
<div className="
  bg-gold-light border border-gold/20
  rounded-lg p-5 my-6
">
  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-gold mb-2">
    Estimated annual cost
  </p>
  <p className="text-[15px] font-medium text-ink-primary leading-relaxed">
    R[amount] — based on [specific calculation]
  </p>
</div>
```

### Testimonial pull quote

```tsx
<blockquote className="
  border-l-4 border-cyan
  pl-8 py-2 my-10
">
  <p className="
    font-display text-[22px] font-light italic
    text-ink-primary leading-relaxed
    max-w-[640px]
  ">
    "[Quote text]"
  </p>
  <cite className="
    block mt-4
    text-[12px] font-medium tracking-[0.1em] uppercase
    text-ink-tertiary not-italic
  ">
    — Name, Organisation
  </cite>
</blockquote>
```

### Metric / stat card

```tsx
<div className="bg-bg-secondary rounded-lg p-7 text-center">
  <div className="
    font-display text-[38px] font-semibold
    text-bg-dark leading-none mb-2
  ">
    R250m+
  </div>
  <div className="
    text-[11px] font-medium tracking-[0.1em] uppercase
    text-ink-secondary
  ">
    Label text
  </div>
</div>
```

---

## 7. Navigation tokens

### Nav structure

```
Logo (left) | Home · Services · How We Work · Pricing · Insights · Contact (centre/right) | Theme toggle + CTA button (right)
```

### Nav component spec

- Background: `bg-bg-primary/90 backdrop-blur-sm` — slightly translucent, blurs content behind on scroll
- Border bottom: `border-b border-border-default` — appears after scrolling 80px
- Height: 64px desktop, 56px mobile
- Logo: Maru wordmark, `text-ink-primary`
- Nav links: DM Sans 14px weight 400, `text-ink-secondary`, hover `text-ink-primary`
- Active link: `text-cyan`
- Theme toggle: sun/moon SVG icon, 20px, `text-ink-secondary` hover `text-cyan`
- CTA: Primary button style, reduced padding — `px-5 py-2` — label "Start diagnostic"
- Mobile: hamburger menu, full-screen overlay on open, same link styles

---

## 8. Dodecahedron component spec

Built as a first-class hero component — not retrofitted.

- Geometry: mathematically correct pentagon faces with clean vertex joins. All edges must meet precisely — no floating vertices.
- Rendering: WebGL via Three.js or CSS 3D transform — decision based on performance testing. Three.js preferred for geometry precision.
- Logo application: Simple Icons SVGs sourced from CDN, applied as textures to pentagon faces. All rendered in brand cyan `#3DB8C6`.
- Animation: slow continuous rotation on Y axis, slight drift on X. Speed: one full rotation every 20 seconds. Easing: linear, no acceleration.
- Back-face culling: enabled — logos on faces rotated away from viewer not visible.
- Depth alpha: faces further from viewer render at reduced opacity — creates depth without z-fighting.
- Size: 480px × 480px desktop, scales to 280px on mobile.
- Position: right side of hero section on desktop, centred below hero text on mobile.
- Dark mode: no change — cyan on dark background is the strongest treatment. Light mode: same cyan, `#FAFAF8` canvas background — test contrast before confirming.

---

## 9. Logo scroller component spec

- Content: 12 platform logos — OpenAI, Anthropic/Claude, HubSpot, Zapier, Make, Notion, Google Workspace, Microsoft 365, WhatsApp Business, Brevo, Airtable, Typeform
- Source: Simple Icons CDN (`https://cdn.simpleicons.org/[name]/3DB8C6`)
- All logos rendered in brand cyan `#3DB8C6` — no mixed colours
- Animation: continuous horizontal scroll, seamless loop. Speed: 40 seconds per full cycle. Pause on hover.
- Layout: single row, logos at 32px height, 48px minimum width, 64px gap between
- Label above: eyebrow text — "Tools we work with" — 11px, uppercase, letter-spaced, `text-ink-tertiary`
- Light mode: logos on `#FAFAF8` — cyan works cleanly
- Dark mode: logos on `#0D1B2A` — cyan is more dramatic, equally clean
- No logo labels — the icons are recognisable without text

---

## 10. Motion tokens

Framer Motion used for page transitions and scroll-triggered reveals.

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 0.15s | Hover states, colour transitions |
| `duration-base` | 0.25s | Button states, small UI changes |
| `duration-reveal` | 0.6s | Content reveals on scroll |
| `duration-stagger` | 0.08s | Stagger delay between items |
| `easing-standard` | `[0.25, 0.1, 0.25, 1]` | Standard transitions |
| `easing-reveal` | `[0.16, 1, 0.3, 1]` | Content reveals — fast out, slow settle |

### Reveal pattern

Applied to all major content sections:

```tsx
// Standard reveal — fade up
const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

// Staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}
```

### Motion rules

- One orchestrated page load reveal per page — staggered, not scattered
- Scroll-triggered reveals on major sections — not every element
- Hover states CSS only — no Framer Motion for simple hover
- Dodecahedron rotation: CSS 3D or Three.js animation loop — not Framer Motion
- Reduced motion: always respect `prefers-reduced-motion` — disable all reveals and slow the dodecahedron to near-static

---

## 11. Form component tokens

### Input fields

```tsx
className="
  w-full
  px-4 py-3
  bg-bg-tertiary
  border border-border-default
  rounded-md
  font-body text-[15px] font-light text-ink-primary
  placeholder:text-ink-tertiary
  transition-colors duration-150
  focus:outline-none focus:border-cyan focus:ring-[3px] focus:ring-cyan/20
  hover:border-border-strong
"
```

### Form labels

```tsx
className="
  block mb-1.5
  font-body text-[13px] font-medium
  text-ink-secondary
"
```

### Select / dropdown

Same as input field, with chevron icon right-aligned in cyan.

---

## 12. Build notes for Claude Code

**Package decisions:**
- `next-themes` for dark/light toggle — system preference detected on first visit, manual override persisted to localStorage
- `framer-motion` for reveals and page transitions
- `three` for dodecahedron if CSS 3D proves insufficient for geometry precision
- `@simpleicons/react` or direct CDN fetch for logo scroller

**File structure:**
```
/app
  /globals.css          — CSS variables, both themes
  /layout.tsx           — Font setup, ThemeProvider, Nav, Footer
  /page.tsx             — Homepage
  /services/page.tsx
  /about/page.tsx
  /pricing/page.tsx
  /process/page.tsx
  /contact/page.tsx
  /faq/page.tsx
  /insights/page.tsx
  /insights/[slug]/page.tsx
/components
  /ui
    Button.tsx          — Primary, Secondary, Tertiary variants
    Nav.tsx
    Footer.tsx
    ThemeToggle.tsx
    SectionDivider.tsx  — Full-bleed dark divider
    Testimonial.tsx     — Pull quote component
    MetricCard.tsx
    CalloutBlock.tsx
  /features
    Dodecahedron.tsx    — Hero 3D component
    LogoScroller.tsx    — Continuous scroll logo bar
    AIReadinessCheck.tsx
    NewsletterCapture.tsx
/lib
  /tokens.ts            — Design token constants in TypeScript
/styles
  /typography.css       — Type scale utility classes
```

**TypeScript strict mode:** on. Run `tsc --noEmit` before every push.

**Tailwind dark mode strategy:** `class` strategy with `data-theme` attribute — controlled by next-themes.

**Vercel deployment:** Auto-deploy from `main` branch. Build command `npm run build`. Region `iad1`.

**Environment variables needed before build:**
- `ANTHROPIC_API_KEY` — AI Readiness Check results generation
- `BREVO_API_KEY` — Newsletter and lead capture
- `NEXT_PUBLIC_SITE_URL` — For OG tags and canonical URLs

---

## 13. Quick reference — locked decisions

| Decision | Value |
|----------|-------|
| Primary background | `#FAFAF8` warm neutral |
| Dark mode background | `#0D1B2A` deep navy |
| Brand cyan | `#3DB8C6` |
| Display font | Cormorant Garamond (300, 400, 600) |
| Body font | DM Sans (300, 400, 500) |
| Button corners | Sharp — radius 0 |
| Primary CTA | Cyan fill, dark text |
| Secondary CTA | Cyan outline, transparent fill |
| Theme default | Light (warm neutral) — system preference detected |
| Toggle icon | Sun / moon — top right nav |
| Dodecahedron | First-class component, mathematically correct geometry |
| Logo scroller | 12 platforms, all cyan, continuous scroll |
| Max content width | 900px |
| Max prose width | 680px |


---

## 14. Responsive design system

### Breakpoints

Tailwind default breakpoints — used consistently throughout. Mobile-first approach: base styles are mobile, breakpoints add complexity upward.

| Token | Value | Tailwind prefix | Description |
|-------|-------|-----------------|-------------|
| `xs` | 375px | — (base) | Small phones — iPhone SE |
| `sm` | 640px | `sm:` | Large phones, small tablets |
| `md` | 768px | `md:` | Tablets, landscape phones |
| `lg` | 1024px | `lg:` | Small laptops, large tablets |
| `xl` | 1280px | `xl:` | Standard desktops |
| `2xl` | 1536px | `2xl:` | Large desktops |

Primary design targets: **375px** (mobile base) and **1280px** (desktop). Everything between scales gracefully.

---

### Typography — responsive scale

| Token | Mobile (base) | Tablet (md) | Desktop (xl) |
|-------|--------------|-------------|--------------|
| `display-xl` H1 hero | 40px | 56px | 80px |
| `display-lg` page H1s | 32px | 44px | 56px |
| `display-md` section heads | 24px | 30px | 36px |
| `display-sm` card heads | 20px | 24px | 28px |
| `heading-lg` H2 | 19px | 20px | 22px |
| `heading-md` H3 | 16px | 17px | 18px |
| `body-lg` lead copy | 16px | 16px | 17px |
| `body-md` standard copy | 15px | 15px | 15px |
| `body-sm` captions | 13px | 13px | 13px |
| `label` eyebrows | 11px | 11px | 11px |

```tsx
// Example — H1 responsive implementation
<h1 className="
  font-display font-light tracking-tight
  text-[40px] leading-[1.1]
  md:text-[56px]
  xl:text-[80px]
  text-ink-primary
">
```

---

### Spacing — responsive section padding

| Context | Mobile | Tablet (md) | Desktop (xl) |
|---------|--------|-------------|--------------|
| Page horizontal gutter | 24px | 40px | 60px |
| Section vertical padding | 48px | 64px | 96px |
| Hero vertical padding | 64px | 80px | 120px |
| Card internal padding | 20px | 28px | 32px |
| Between major sections | 64px | 80px | 96px |

```tsx
// Standard section wrapper
<section className="
  px-6 md:px-10 xl:px-[60px]
  py-12 md:py-16 xl:py-24
  max-w-[900px] mx-auto
">
```

---

### Navigation — responsive behaviour

**Mobile (base → md):**
- Height: 56px
- Logo left, hamburger icon right
- CTA button hidden
- Theme toggle visible
- On hamburger tap: full-screen overlay slides in from right
  - Background: `bg-bg-dark` (dark navy regardless of theme)
  - Links: DM Sans 24px, weight 300, `text-ink-inverted`, stacked vertically with 32px gaps
  - Primary CTA button at bottom of overlay — full width
  - Close icon top right
  - Framer Motion: overlay slides in from right, links stagger in with 0.05s delay each

**Tablet (md → lg):**
- Height: 60px
- Condensed nav — show only key links: Services, Pricing, Contact
- CTA button visible — condensed label "Diagnostic"

**Desktop (lg+):**
- Height: 64px
- Full nav — all links visible
- CTA button full label "Start diagnostic"

---

### Hero section — responsive layout

**Mobile:**
- Single column
- H1 first, subheading below, CTA below that
- Dodecahedron below all text, centred, 280px × 280px
- Logo scroller below dodecahedron

**Tablet (md):**
- Single column but increased spacing
- Dodecahedron 360px × 360px

**Desktop (lg+):**
- Two column grid: text left (55%), dodecahedron right (45%)
- Dodecahedron 480px × 480px, vertically centred against text column
- Logo scroller full width below both columns

```tsx
// Hero layout
<div className="
  grid grid-cols-1 lg:grid-cols-[55fr_45fr]
  gap-12 lg:gap-0
  items-center
  px-6 md:px-10 xl:px-[60px]
  pt-16 md:pt-20 xl:pt-28
  pb-12 md:pb-16 xl:pb-20
">
  <div>{/* Text content */}</div>
  <div className="flex justify-center lg:justify-end">
    {/* Dodecahedron */}
  </div>
</div>
```

---

### Section divider — responsive

**Mobile:**
- Padding: 40px 24px
- Ghost number: 56px
- Title: 24px Cormorant Garamond

**Desktop:**
- Padding: 64px 80px
- Ghost number: 80px
- Title: 32px Cormorant Garamond

```tsx
<div className="
  bg-bg-dark
  py-10 px-6 md:py-16 md:px-[80px]
  flex items-end gap-5 md:gap-6
">
  <span className="
    font-display font-light leading-none
    text-cyan/30
    text-[56px] md:text-[80px]
  ">01</span>
  <div className="pb-2 md:pb-3">
    <h2 className="
      font-display font-light text-ink-inverted tracking-tight
      text-[24px] md:text-[32px]
    ">Section title</h2>
    <p className="
      text-[12px] md:text-[13px] font-light
      text-ink-inverted-muted mt-1 md:mt-1.5
    ">Subtitle</p>
  </div>
</div>
```

---

### Cards and grids — responsive

**Metric cards:**
- Mobile: 2 columns
- Desktop: 4 columns

```tsx
<div className="
  grid grid-cols-2 md:grid-cols-4
  gap-3 md:gap-5
">
```

**Service/feature cards:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 2 or 3 columns depending on content density

```tsx
<div className="
  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
  gap-4 md:gap-6
">
```

**Sector modules (3 sectors):**
- Mobile: 1 column, stacked
- Tablet: 3 columns

```tsx
<div className="
  grid grid-cols-1 md:grid-cols-3
  gap-4 md:gap-6
">
```

---

### AI Readiness Check — responsive

**Mobile:**
- Full width, single column
- Question text at 16px
- Answer options as full-width stacked buttons — minimum 48px tap height
- Progress indicator at top — step dots, not a bar

**Desktop:**
- Constrained to 680px max width, centred
- Answer options as 2×2 grid where content allows

Tap targets: minimum 48px height on all interactive elements — buttons, links, toggle. Critical for mobile usability.

---

### Logo scroller — responsive

**Mobile:**
- Logo height: 24px
- Gap between logos: 40px
- Speed: 30 seconds per cycle (slightly faster — fewer logos visible at once)

**Desktop:**
- Logo height: 32px
- Gap between logos: 64px
- Speed: 40 seconds per cycle

Both: fade masks on left and right edges using CSS `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` — creates clean fade-in/out effect on scroll edges.

---

### Dodecahedron — responsive

| Breakpoint | Size | Position |
|------------|------|----------|
| Mobile (base) | 280px × 280px | Centred, below hero text |
| Tablet (md) | 360px × 360px | Centred, below hero text |
| Desktop (lg) | 480px × 480px | Right column, vertically centred |

Touch devices: rotation animation continues but at 60% speed — conserves battery. On very slow connections (detected via Network Information API if available): static fallback image of the dodecahedron in brand cyan.

---

### Forms — responsive

**Mobile:**
- All form fields full width
- Labels above fields always (never inline)
- CTA buttons full width
- Minimum input height: 48px for tap accessibility

**Desktop:**
- Fields constrained to max 560px
- Two-column layout for short fields (name + email) where appropriate

---

### Contact page — two path layout

**Mobile:**
- Stacked — Option 1 above Option 2
- Each option in its own card, full width

**Desktop:**
- Side by side — equal width columns with a vertical divider between

```tsx
<div className="
  grid grid-cols-1 md:grid-cols-2
  gap-6 md:gap-0 md:divide-x md:divide-border-default
">
```

---

### Sticky mobile CTA bar

Appears after scrolling 300px past the hero CTA. Hidden on desktop.

```tsx
// Scroll threshold detection
const [showSticky, setShowSticky] = useState(false)

useEffect(() => {
  const handleScroll = () => setShowSticky(window.scrollY > 300)
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

// Component
<AnimatePresence>
  {showSticky && (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      exit={{ y: 80 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="
        fixed bottom-0 left-0 right-0
        bg-bg-dark border-t border-border-default
        px-6 py-4
        flex items-center justify-between
        md:hidden z-50
      "
    >
      <span className="text-[13px] text-ink-inverted-muted font-light">
        Ready to start?
      </span>
      <a href="/contact" className="
        px-5 py-2.5
        bg-cyan text-bg-darkest
        font-medium text-[14px]
        rounded-none
      ">
        Book diagnostic
      </a>
    </motion.div>
  )}
</AnimatePresence>
```

---

### Image and media — responsive

- All images use Next.js `<Image>` component with `sizes` prop defined
- Hero images: `sizes="(max-width: 768px) 100vw, 50vw"`
- Card images: `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`
- Always define `width` and `height` to prevent layout shift
- WebP format preferred, AVIF where supported

---

### Accessibility baseline

- Colour contrast: all text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text) — verify cyan on warm neutral in light mode specifically
- Focus states: visible on all interactive elements — `focus:ring-[3px] focus:ring-cyan/30`
- Skip to content link: first focusable element on every page
- Reduced motion: `@media (prefers-reduced-motion: reduce)` disables all reveals and slows dodecahedron to near-static
- Semantic HTML: correct heading hierarchy on every page — one H1, logical H2/H3 structure
- Alt text: all images require descriptive alt text
- Tap targets: minimum 48px × 48px on mobile for all interactive elements
- ARIA labels: theme toggle, hamburger menu, logo scroller (role="marquee" with aria-label)


---

## 15. Motion philosophy & animation system

### The governing principle

Motion at Maru serves reading — it never interrupts it. Every animation either helps the visitor understand what they're looking at, or delivers a moment of quiet delight. Never both at once. Never at the expense of clarity.

The editorial aesthetic — Cormorant Garamond, warm neutral, generous whitespace, sharp corners — communicates through restraint. Motion must belong to the same sensibility. Measured. Purposeful. Nothing that calls attention to itself.

**The test for every animation:** if it draws attention to itself, it's too much. If removing it makes the page feel flat and dead, it was earning its place.

---

### Category 1 — Structural reveals

Applied to all major content sections as they scroll into view.

**Behaviour:**
- Fade in + rise from below
- Triggers once on scroll into view — never repeats on scroll back up
- Staggered children create reading rhythm, not a cascade

**Variants:**

```tsx
// Single element reveal
const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

// Container — staggers children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// Usage with Framer Motion + IntersectionObserver
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
  <motion.h2 variants={revealVariants}>Heading</motion.h2>
  <motion.p variants={revealVariants}>Body copy</motion.p>
</motion.div>
```

**Rules:**
- `viewport={{ once: true }}` always — reveals happen once only
- `margin: "-80px"` on viewport — triggers reveal slightly before element reaches centre screen, feels natural
- Maximum stagger depth: 5 children. Beyond 5, group remaining items and reveal as one.
- Never apply reveal to elements above the fold — they should be immediately visible on load

---

### Category 2 — Hero entrance sequence

The homepage hero is the one place where motion is slightly more expressive. It sets the tone for the entire site visit. Happens once on page load — never again.

**Sequence (desktop):**

| Element | Delay | Duration | Motion |
|---------|-------|----------|--------|
| Eyebrow label | 0.2s | 0.5s | Fade in only — no y movement |
| H1 | 0.4s | 0.7s | Fade in + y: 32 → 0 |
| Subheading | 0.6s | 0.6s | Fade in + y: 24 → 0 |
| Primary CTA | 0.8s | 0.5s | Fade in + y: 16 → 0 |
| Secondary CTA | 0.9s | 0.5s | Fade in — no y movement |
| Dodecahedron | 0s | 1.5s | Opacity 0.4 → 1.0, no movement |
| Logo scroller | 1.2s | 0.6s | Fade in only |

**Implementation:**

```tsx
// Each element uses initial/animate with delay
<motion.span
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="label text-cyan uppercase tracking-widest"
>
  AI Implementation Consultancy
</motion.span>

<motion.h1
  initial={{ opacity: 0, y: 32 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  You've invested in AI tools...
</motion.h1>
```

**Mobile:** Same sequence, delays reduced by 30% — mobile visitors are more impatient. H1 y-offset reduced to 20px.

**Dodecahedron:** Begins rotating immediately at 40% opacity. Fades to 100% over 1.5s. The rotation should already be in motion when the page loads — not starting from static. This makes it feel alive rather than activated.

---

### Category 3 — Micro-interactions

CSS transitions only — no Framer Motion. Fast, subtle, purposeful.

**Button hover — primary:**
```css
/* Already in token brief — confirmed here */
transition: background-color 0.2s ease, transform 0.2s ease;
/* hover: background darkens, translateY(-1px) */
```

**Button hover — secondary:**
```css
transition: background-color 0.15s ease, border-color 0.15s ease;
/* hover: bg-cyan/10 fill appears */
```

**Nav links:**
```css
transition: color 0.15s ease;
/* hover/active: text-ink-primary or text-cyan */
```

**Card hover (subtle — not all cards, only interactive ones):**
```css
transition: border-color 0.2s ease;
/* hover: border shifts from border-default to border-strong */
/* No lift, no shadow — keep it flat */
```

**Form field focus:**
```css
transition: border-color 0.15s ease, box-shadow 0.15s ease;
/* focus: border-cyan + ring-cyan/20 */
```

**Inline text links:**
```css
text-decoration: none;
transition: text-decoration 0.1s ease;
/* hover: underline appears */
```

---

### Category 4 — Theme toggle transition

When the visitor switches themes, the experience should feel like a smooth environmental shift — not a jarring snap.

**Colour crossfade:**
```css
/* Applied to :root — transitions all CSS variables simultaneously */
*, *::before, *::after {
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

/* Exception — disable transition on elements where it would look wrong */
.no-theme-transition {
  transition: none !important;
}
```

**Toggle icon animation:**
```tsx
// Sun ↔ Moon icon rotates 180° on switch
<motion.div
  animate={{ rotate: isDark ? 180 : 0 }}
  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
>
  {isDark ? <MoonIcon /> : <SunIcon />}
</motion.div>
```

**Rule:** The dodecahedron does not transition — it maintains its current rotation state. Only colours transition.

---

### Category 5 — Section divider entrance

The full-bleed dark section dividers are chapter markers. Their entrance should feel like a deliberate pause in the reading rhythm.

**Ghost number:** fades from 0% to 30% opacity with a subtle rightward settle (x: -8 → 0) over 0.8s.

**Title:** fades in + y: 16 → 0 at 0.15s delay after number.

**Subtitle:** fades in at 0.25s delay after number.

```tsx
const dividerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const ghostNumberVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 0.3,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const dividerTitleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}
```

---

### Category 6 — AI Readiness Check interactions

The most interactive element on the site. Motion makes the questionnaire feel responsive and the results feel earned.

**Answer selection:**
```css
/* CSS transition — immediate feedback on tap/click */
.answer-option {
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.answer-option.selected {
  background-color: var(--color-cyan-light);
  border-color: var(--color-cyan);
}
.answer-option.unselected-after-choice {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
```

**Question transition — page turn:**
```tsx
// Current question slides out left, next slides in from right
const questionVariants = {
  enter: { x: 60, opacity: 0 },
  centre: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  },
  exit: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }
  }
}

<AnimatePresence mode="wait">
  <motion.div
    key={currentQuestion}
    variants={questionVariants}
    initial="enter"
    animate="centre"
    exit="exit"
  >
    {/* Question content */}
  </motion.div>
</AnimatePresence>
```

**Progress dots:**
```tsx
// Each dot fills with cyan as question is completed
<motion.div
  animate={{
    backgroundColor: isCompleted ? '#3DB8C6' : 'var(--color-border-strong)',
    scale: isCurrent ? 1.3 : 1
  }}
  transition={{ duration: 0.2 }}
  className="w-2 h-2 rounded-full"
/>
```

**Results reveal — the payoff sequence:**

| Element | Delay | Duration | Motion |
|---------|-------|----------|--------|
| Score number ticker | 0s | 1.2s | Counts from 0 to actual score |
| Result band heading | 0.8s | 0.6s | Fade in + y: 16 → 0 |
| Insight paragraph | 1.2s | 0.6s | Fade in + y: 12 → 0 |
| CTA button | 1.6s | 0.5s | Fade in only |

```tsx
// Score number ticker
const [displayScore, setDisplayScore] = useState(0)

useEffect(() => {
  const duration = 1200 // ms
  const steps = 40
  const increment = actualScore / steps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= actualScore) {
      setDisplayScore(actualScore)
      clearInterval(timer)
    } else {
      setDisplayScore(Math.round(current))
    }
  }, duration / steps)

  return () => clearInterval(timer)
}, [actualScore])
```

---

### Category 7 — Mobile hamburger menu

Full-screen overlay — the motion here needs to feel substantial because it's a major state change.

**Overlay entrance:**
```tsx
const overlayVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }
  }
}
```

**Nav links stagger in after overlay arrives:**
```tsx
// Links stagger with 0.05s delay each, starting at 0.2s
const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + i * 0.05,
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  })
}
```

**Close:** overlay slides back out right. Links do not animate on close — overlay moves as one unit.

---

### Category 8 — Sticky mobile CTA bar

Already specced in Section 14 with Framer Motion slide up/down. Additional detail:

- Slides up from bottom on appearance: y: 80 → 0 over 0.25s
- Slides down on dismissal: y: 0 → 80 over 0.2s
- Does not appear on pages where a primary CTA is visible in the current viewport — avoids doubling up

---

### What we explicitly do not animate

| Element | Reason |
|---------|--------|
| Parallax scrolling | Conflicts with reading-first philosophy. Poor mobile performance. |
| Page route transitions | Adds complexity, minimal benefit at this stage |
| Background animations | Dodecahedron is the one ambient element — no competition |
| Card hover lifts | Keeps flat aesthetic — border colour shift only |
| Loading spinners | Skeleton states preferred on AI Readiness Check |
| Scroll-hijacking | Never |
| Looping animations beyond dodecahedron | Ambient motion earns attention budget — only one |
| Text scramble / typewriter effects | Conflicts with editorial tone |
| Bounce or spring on content reveals | Too energetic for this aesthetic — ease-out only |

---

### Reduced motion — full spec

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all reveals */
  [data-framer-motion] {
    animation: none !important;
    transition: none !important;
  }

  /* Slow dodecahedron to near-static */
  .dodecahedron {
    animation-duration: 120s !important;
  }

  /* Disable theme transition crossfade */
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
  }

  /* Disable question slide transitions in AI Readiness Check */
  .question-transition {
    transition: opacity 0.1s ease !important;
    transform: none !important;
  }
}
```

All Framer Motion components must check `useReducedMotion()` hook and disable variants when true:

```tsx
import { useReducedMotion } from 'framer-motion'

const prefersReducedMotion = useReducedMotion()

const variants = prefersReducedMotion
  ? {} // No animation
  : revealVariants // Full animation
```

---

### Performance rules

- Animate `opacity` and `transform` only — these run on the GPU compositor thread and do not trigger layout recalculation
- Never animate `height`, `width`, `padding`, `margin`, `top`, `left` — these trigger layout and paint, causing jank
- Use `will-change: transform` sparingly — only on the dodecahedron and the mobile overlay
- Framer Motion's `LazyMotion` with `domAnimation` feature set — reduces bundle size
- All scroll-triggered animations use `IntersectionObserver` via Framer Motion's `whileInView` — never scroll event listeners

```tsx
// Optimised Framer Motion import
import { LazyMotion, domAnimation, m } from 'framer-motion'

// In layout.tsx
<LazyMotion features={domAnimation}>
  {children}
</LazyMotion>

// Use m instead of motion throughout
<m.div variants={revealVariants} />
```

---

### Motion summary — quick reference for Claude Code

| Category | Tool | Duration | Rule |
|----------|------|----------|------|
| Structural reveals | Framer Motion whileInView | 0.6s | once: true always |
| Hero entrance | Framer Motion initial/animate | 0.2s–0.9s staggered | Page load only |
| Micro-interactions | CSS transition | 0.15s–0.25s | Hover/focus states |
| Theme toggle | CSS transition + Framer rotate | 0.3s–0.4s | Colour crossfade |
| Section dividers | Framer Motion whileInView | 0.8s | Staggered children |
| AI Readiness Check | CSS + Framer AnimatePresence | 0.15s–0.3s | Page turn pattern |
| Results reveal | Framer Motion + JS ticker | 1.2s–1.6s | Earned payoff |
| Mobile menu | Framer Motion AnimatePresence | 0.35s | Slide from right |
| Sticky CTA bar | Framer Motion AnimatePresence | 0.25s | Scroll threshold |
| Dodecahedron | Three.js / CSS 3D loop | 20s/rotation | Always running |
| Reduced motion | useReducedMotion() | Disabled/slowed | Respect always |

