# Maru Online — Design System

**Status:** v2 (Warm Stone) · Light only · Last updated 2026-08-03
**Live reference:** [`/design-system`](app/design-system/page.tsx) — every token and component, rendered with live states.

---

## 1. The Warm Stone System

The "Warm Stone" design system standardises the site's job as **due-diligence credibility**. It replaces the high-contrast "black-era" UI with a more sophisticated, approachable palette.

### Primary Tokens (source: `app/globals.css`)
- **Primary Accent:** Gold gradient (`--gradient-gold`) — used for primary CTAs.
- **Functional Accent:** Cyan (`--color-cyan`) — used for secondary actions and structural accents.
- **Surfaces:** Warm Stone neutrals (`--color-bg-primary`, `--color-bg-secondary`, `--gradient-surface`).
- **Cards:** `.card-lift` pattern with warm borders (`--color-border-card`).
- **Icons:** `Glyph` component in `.glyph-chip` containers.

---

## 2. Component Guidelines

### Card Lift (`.card-lift`)
- Owns card surface, edge, elevation, and hover brighten.
- **Trap:** Never set an inline background on a card using `.card-lift`. The inline style beats the class and kills the hover effect.

### Glyph Chips (`.glyph-chip`)
- Icons should always sit in a `.glyph-chip`.
- Cyan for core work, gold (`.glyph-chip-gold`) for foundation/compliance.

### Surfaces
- Section backgrounds should use `--gradient-surface` or `--color-bg-secondary`.
- Dark surfaces (`--color-bg-navy`) are reserved for:
    1. Hero sections
    2. Footer
    3. The assessment band / CTA sections

---

## 3. Deployment Guardrails
- **Build before push:** `npm run build` must pass.
- **CSS specificity:** `globals.css` loads after Tailwind at equal specificity. Own layout overrides in `globals.css`.
- **No raw hex:** Never use raw hex codes (e.g., `#161616`) in `.tsx` files. Always use brand tokens.
- **Redirects:** Every deleted route must have a 301/302 redirect in `next.config.ts`.
