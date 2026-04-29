# Maru Online — Rebuild Build Status
> Branch: `rebuild` · Last updated: 2026-04-05

---

## 1. What This Rebuild Is

A ground-up rebuild of the Maru Online website on the existing repo's `rebuild` branch. The old site (still on `main`) was a dark navy theme with legacy components. The rebuild introduces a white canvas design system, a navy hero, and a clean component library built to the credentials document spec.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Vercel

---

## 2. Committed to `rebuild` Branch

| Commit | Message |
|---|---|
| `82afef4` | feat(rebuild): complete design system — white canvas, navy hero, all card and list components |
| `c2a1727` | feat(rebuild): remove light/dark toggle — single navy theme locked |
| `23e5e45` | fix(rebuild): realign colours and typography to credentials doc reference |
| `c3da2a5` | fix(rebuild): clean Footer — remove all old component references |
| `97228bc` | feat(rebuild): replace old homepage with new design system shell |
| `6402625` | feat(rebuild): wire Nav and Footer into root layout |
| `ea01af5` | feat(rebuild): Nav, Footer, WhatsAppWidget components |
| `92b36d1` | feat(rebuild): design system foundation — globals, tailwind config, layout, UI components |

All commits pushed to `origin/rebuild`.

---

## 3. Design Token System — `app/globals.css`

### `:root` variables (current)

| Token | Value | Use |
|---|---|---|
| `--color-bg-primary` | `#FFFFFF` | Page background |
| `--color-bg-secondary` | `#F5F4F0` | Tinted section backgrounds |
| `--color-bg-tertiary` | `#EEEDE8` | Subtle card/panel backgrounds |
| `--color-bg-navy` | `#1A3A5C` | Hero, navy card backgrounds |
| `--color-bg-navy-deep` | `#0D1B2A` | Footer background |
| `--color-bg-darkest` | `#060E15` | Mobile menu overlay |
| `--color-ink-primary` | `#0D1B2A` | Body text on white |
| `--color-ink-secondary` | `#4A5568` | Supporting text on white |
| `--color-ink-tertiary` | `#718096` | Captions, labels on white |
| `--color-ink-inverted` | `#FAFAF8` | Text on navy backgrounds |
| `--color-ink-inverted-muted` | `rgba(250,250,248,0.75)` | Muted text on navy |
| `--color-cyan` | `#3DB8C6` | Brand accent — buttons, links, icons |
| `--color-cyan-light` | `rgba(61,184,198,0.1)` | Icon container bg, hover tints |
| `--color-cyan-dark` | `#2DA8B6` | Button hover state |
| `--color-gold` | `#CDAA53` | Gold accent — labels, highlights |
| `--color-gold-light` | `#FDF8EE` | Gold card background |
| `--color-gold-border` | `rgba(205,170,83,0.25)` | Gold card border |
| `--color-navy` | `#1A3A5C` | Navy accent alias |
| `--color-border-default` | `#E2E8F0` | Standard card/divider borders |
| `--color-border-subtle` | `rgba(26,58,92,0.1)` | Subtle borders |
| `--color-border-strong` | `#CBD5E0` | Strong borders |
| `--shadow-focus` | `0 0 0 3px rgba(61,184,198,0.3)` | Focus rings |
| `--tracking-display` | `-0.02em` | Display heading letter-spacing |
| `--tracking-label` | `0.12em` | Label/uppercase letter-spacing |

### Typography base (`@layer base`)

| Element | Font | Weight | Size | Colour |
|---|---|---|---|---|
| `body` | DM Sans | 300 | 15px | `--color-ink-primary` |
| `h1` | Cormorant Garamond | 300 | (caller sets) | `#FFFFFF` |
| `h2` | Cormorant Garamond | 400 | (caller sets) | `#1A3A5C` |
| `h3` | DM Sans | 600 | 18px | `#1A3A5C` |

---

## 4. Components Built

### Layout / Shell

| Component | Path | Status | Notes |
|---|---|---|---|
| Root layout | `app/layout.tsx` | ✅ Done | Cormorant + DM Sans via next/font, ThemeProvider, Nav, Footer wired |
| Global CSS | `app/globals.css` | ✅ Done | Full token system, base typography |

### UI Components

| Component | Path | Status | Notes |
|---|---|---|---|
| `Nav` | `components/ui/Nav.tsx` | ✅ Done | Scroll-aware: dark/translucent on hero, white/bordered on page; mobile overlay |
| `Footer` | `components/ui/Footer.tsx` | ✅ Done | `bg-bg-navy-deep` (#0D1B2A), WhatsApp widget wired |
| `Button` | `components/ui/Button.tsx` | ✅ Done | Pill shape, 11px uppercase tracking, primary/secondary/tertiary/outline variants |
| `WhatsAppWidget` | `components/ui/WhatsAppWidget.tsx` | ✅ Done | Fixed floating widget |
| `CardFeature` | `components/ui/CardFeature.tsx` | ✅ Done | White bg, cyan icon, hover bg shift, title + body |
| `CardGold` | `components/ui/CardGold.tsx` | ✅ Done | Cream bg, gold border, gold label, light body |
| `CardMetric` | `components/ui/CardMetric.tsx` | ✅ Done | Cormorant value (38px), DM Sans label |
| `CardNavy` | `components/ui/CardNavy.tsx` | ✅ Done | Navy bg, Cormorant title (24px), muted body |
| `ListItem` | `components/ui/ListItem.tsx` | ✅ Done | Cyan bullet dot, bold navy leader, grey body after em dash |
| `ListGroup` | `components/ui/ListGroup.tsx` | ✅ Done | `<ul>` wrapper with list-none, used with ListItem |

### Legacy components (exist from old build — not yet migrated or removed)

These are in `components/ui/` but were built for the dark theme. Do not use in new pages without auditing against the new token system.

`Card.tsx` · `AtmosphericBackground.tsx` · `BookingModal.tsx` · `Checkbox.tsx` · `CloudWireframe.tsx` · `CookieConsent.tsx` · `CTAPrimary.tsx` · `DecorativeLines.tsx` · `Input.tsx` · `IsometricWorkflow.tsx` · `Label.tsx` · `Link.tsx` · `OptimizedLoading.tsx` · `SafeLink.tsx` · `SectionDivider.tsx` · `SectionTitle.tsx` · `Select.tsx` · `ServiceAccordion.tsx` · `ServiceCard.tsx` · `SplitHeadline.tsx` · `Testimonial.tsx` · `Textarea.tsx` · `WireframeDecahedron.tsx` · `WireframePolyhedron.tsx`

---

## 5. Pages Built

| Route | File | Status | Notes |
|---|---|---|---|
| `/` | `app/page.tsx` | ✅ Shell done | Navy hero + white placeholder section. Full content sections not yet built. |

### Existing routes (from old build — not rebuilt yet)

All routes below exist in `app/` but were built for the dark theme. They will need to be rebuilt or audited page by page.

`/about` · `/services` · `/process` · `/pricing` · `/contact` · `/insights` · `/resources` · `/careers` · `/booking` · `/briefing` · `/partners` · `/ai-readiness` · `/ai-implementation-assessment` · `/ai-implementation-audit` · `/website-audit` · `/assessments` · `/privacy-policy` · `/cookie-policy` · `/terms-conditions` · `/[slug]` (dynamic) · `/studio` (Sanity) · `/admin`

---

## 6. What Still Needs to Be Built

### Homepage sections (priority — unblock before any other page)

| Section | Status |
|---|---|
| Hero — full content, final copy | ✅ Shell done |
| Services overview | Not started |
| How we work (process steps) | Not started |
| Credentials / proof section | Not started |
| Pricing / diagnostic CTA | Not started |
| Testimonials | Not started |
| Final CTA section | Not started |

### Pages to rebuild (in order of priority)

1. `/services` — service list + individual service pages
2. `/process` — how we work
3. `/pricing` — diagnostic + project packages
4. `/contact` — contact form (Resend)
5. `/about` — founder story, positioning
6. `/insights` — article index + `[slug]` article pages

### Components still to design/build

| Component | Purpose |
|---|---|
| `SectionHeader` | Reusable section label + heading block |
| `TestimonialCard` | Rebuilt for white canvas (replaces legacy `Testimonial.tsx`) |
| `ProcessStep` | Numbered step card for how-we-work section |
| `PricingCard` | Package/diagnostic pricing display |
| `ContactForm` | Form wired to Resend API |
| `InsightCard` | Article card for `/insights` index |

### Infrastructure

| Item | Status |
|---|---|
| Vercel deployment (rebuild branch preview) | Not confirmed |
| Resend email (contact form) | Not wired |
| Neon DB | Exists from old build — not yet needed for rebuild pages |
| Analytics | Old HubSpot script exists; confirm if keeping |
| Sanity CMS | Configured but `/studio` and `[slug]` not rebuilt |

---

## 7. Design Rules (from credentials doc)

- **White canvas** — default page bg is `#FFFFFF`, not navy
- **Navy** (`#1A3A5C`) is used for hero sections, `CardNavy`, and Footer
- **H1** always white (intended for navy/dark backgrounds)
- **H2** always `#1A3A5C` (navy) — on white sections
- **H3** DM Sans 600, `#1A3A5C`
- **Buttons** — pill shape (rounded-full), uppercase, 11px, tracking 0.15em
- **Section padding** — `px-6 md:px-[60px]`, max-width `900px` centred
- **No dark mode toggle** — single theme, no ThemeProvider theme switching (ThemeProvider kept for SSR hydration only)
- **Asset filenames** — always lowercase (Vercel is case-sensitive)
- **Database** — Neon via Vercel integration if needed

---

## 8. Copy Documents Available (in `_build-brief/`)

| File | Content |
|---|---|
| `copy-homepage.md` | Homepage copy — all sections |
| `copy-services.md` | Services page copy |
| `copy-how-we-work.md` | Process page copy |
| `copy-pricing.md` | Pricing page copy |
| `copy-contact.md` | Contact page copy |
| `copy-about.md` | About page copy |
| `copy-ai-readiness-check.md` | AI readiness tool copy |
| `copy-whatsapp-widget-spec.md` | WhatsApp widget spec |
| `maru-design-tokens.md` | Design token reference |
| `maru-article-image-philosophy.md` | Article image guidelines |
