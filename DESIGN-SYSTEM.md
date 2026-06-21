# Maru Online — Design System

**Status:** v1 (unified) · Light only · Last updated 2026-06-21
**Live reference:** [`/design-system`](app/design-system/page.tsx) — every token and component, rendered with live states.

> This document is the single source of truth for Maru's visual system. It **supersedes**
> `_build-brief/maru-design-tokens.md` (the v1.0 brief specced Cormorant Garamond + DM Sans +
> a dodecahedron hero + sharp corners — none of which match the built site).

---

## 1. What changed and why

The site began as **Ashley-html-kit**, then was ported to Next.js 16 (App Router, Tailwind v4,
Turbopack). The port left two design systems layered together, which caused every inconsistency:

- A canonical Maru layer in `app/globals.css` (Outfit + Inter, cyan `#3DB8C6`, navy, warm neutral).
- An **Ashley remnant** in `styles/tokens.css` (a different palette: `#04B3CC` cta, `#00A1A5`
  accent, `#E8A020` amber, 70px pill radius, near-black surfaces) plus `highlight` / `*-dark`
  utility classes whose variables (`--color-highlight`, `--color-dark`) were **never defined** —
  i.e. dead utilities rendering on fallbacks.

**This system removes the Ashley layer entirely** and standardises on one token source.

### Decisions locked (this engagement)
| Decision | Value | Rationale |
|---|---|---|
| Primary accent | **Cyan `#3DB8C6`** | The one interactive/action/structural colour. Already the canonical brand cyan. |
| Secondary accent | **Ochre `#C36A36`** (replaces gold) | SA-rooted (San rock-art / Highveld soil pigment) and the textbook complement to teal, so proof-points sit with cyan CTAs without fighting. Reserved for proof / results / credentials. |
| Theme | **Light only** | Matches the strict data/weight budget; halves the state matrix; no `next-themes`. |
| CTA system | **One** — `Button` | Two parallel CTAs (`Button` + Ashley-pill `CTAPrimary`) collapsed to one. |
| Config source | **`app/globals.css` `@theme inline`** | Tailwind v4 has no `@config`, so the JS `tailwind.config.ts` was dead and was deleted. |

---

## 2. Tokens (source of truth: `app/globals.css`)

All colour/type/spacing tokens live in `:root` and are exposed to Tailwind via `@theme inline`.
There is no second token file.

### Colour
| Token | Value | Use |
|---|---|---|
| `--color-cyan` / `-dark` / `-light` | `#3DB8C6` / `#2DA8B6` / `#E8F8FA` | Actions, links, structural accents, focus rings |
| `--color-ochre` | `#C36A36` | Secondary accent — proof / result left-rules, credential highlights |
| `--color-ochre-tint` | `#F7EDE4` | Ochre callout backgrounds |
| `--color-ochre-ink` | `#6E3A19` | Text/eyebrows on ochre tint |
| `--color-ochre-border` | `rgba(195,106,54,.25)` | Ochre card borders |
| `--color-bg-primary/secondary/canvas` | `#FFFFFF` / `#F5F4F0` / `#FAFAF8` | Surfaces (warm neutral) |
| `--color-bg-navy/-deep/-darkest` | `#1A3A5C` / `#0D1B2A` / `#060E15` | Dark sections, hero |
| `--color-ink-primary/secondary/tertiary` | `#0D1B2A` / `#4A5568` / `#718096` | Text on light |
| `--color-border-default/strong` | `#E2E8F0` / `#CBD5E0` | Rules, dividers |

> **Gold is retired.** Do not reintroduce `--color-gold*` or `bg-gold`/`text-gold`. Use ochre.

### Type
- **Display / headings:** Outfit (`--font-display`). **Body:** Inter (`--font-body`).
- Split-headline weights: light `100` + strong `500` (`--font-weight-headline-*`).
- Eyebrow label: 11px / `0.2em` / uppercase / cyan (`.label-eyebrow`); ochre variant `.label-eyebrow-ochre`.
- Scale + line-heights are tokenised (`--text-*`, `--leading-*`, `--tracking-*`).

---

## 3. Components & when to use each

| Component | File | Use |
|---|---|---|
| `Button` | `components/ui/Button.tsx` | **The** CTA. `variant="primary"` (cyan fill), `"secondary"` (cyan outline), `"tertiary"` (inline link, auto `→`). Handles internal + external (`target`/`rel`) links, `ariaLabel`, full hover/focus/active/disabled states. |
| `CTAPrimary` | `components/ui/CTAPrimary.tsx` | **Deprecated** — thin wrapper over `Button variant="primary"` kept for old call sites. New work should import `Button` directly. |
| `CardFeature` | `components/ui/CardFeature.tsx` | Capabilities / services — icon chip + title + body. |
| `CardMetric` | `components/ui/CardMetric.tsx` | A single stat (value + label). Use in 2-up (mobile) / 4-up (desktop) grids. |
| `CardNavy` | `components/ui/CardNavy.tsx` | Emphasis / dark callouts — cyan accents on navy. |
| `CardProof` | `components/ui/CardProof.tsx` | **Ochre** proof / result / credential card (was `CardGold`). |
| `.card-ochre` / `.label-eyebrow-ochre` | `app/globals.css` | The raw ochre callout pattern for inline proof blocks. |

**Card rule:** default surface → `CardFeature`; a number → `CardMetric`; emphasis → `CardNavy`;
a *result/proof* → `CardProof` (ochre). One purpose per variant.

---

## 4. How the migration was done (for future reference)
- Ashley utilities migrated repo-wide: `*-highlight`→`*-cyan`, `*-highlight-hover`→`*-cyan-dark`,
  `text-dark`→`text-ink-primary`, `bg-dark`→`bg-bg-navy-deep`, `brand-accent`/`brand-cta`→`cyan`,
  `brand-amber`→`ochre`, `gold`→`ochre`, `rounded-pill`→`rounded-[8px]`.
- `styles/tokens.css` and `tailwind.config.ts` (both dead in Tailwind v4) were deleted.
- `AshleySpine` → `ProcessSpine`; `CardGold` → `CardProof`.
- Verify no regressions:
  `grep -rE "ashley|highlight|--color-gold|brand-cta|brand-accent|rounded-pill" app components` → 0.

---

## 5. Resolved content/IA decisions
The brief's content/IA inconsistencies have been reconciled:
1. **Stat numbers** — diagnostic turnaround is **48 hours** everywhere (home, assessment form,
   design-system); total engagement is **4–8 weeks** (the process FAQ's "six to ten weeks"
   was aligned). Left intentionally: contact's "respond within 24 hours" (a separate SLA),
   automation *examples* in articles, and legitimate "30 days" support/warranty/measurement windows.
2. **Service taxonomy** — canonical set is the **4 rate-card services**: Operations Diagnostic,
   Workflow Integration, Team Training & Handover, Results Optimisation — named identically on
   home, pricing, services index and nav. Site Infrastructure & POPIA remain on home as clearly
   tagged **specialised** offerings (Foundation / Compliance), not renamed core services. All
   `/services/*` detail routes preserved (presentation-only change).
3. **Nav vs footer** — both now say **Insights** → `/insights`. The Ashley-era mega-menu
   (`components/layout/Header.tsx`), which carried the conflicting "Resources" label, was deleted;
   `components/ui/Nav.tsx` is the sole nav.

## 6. Dead-code purge
The html-kit → Next.js rebuilds left ~60 orphaned components (0 imports). All were removed
(build-verified green at each step): `components/` went from 102 → 42 `.tsx` files. This included
the Ashley mega-menu and the `AshleySpine`/`ServicesContent` lineage. `components/ui/Nav.tsx`,
`Footer.tsx`, `Button`, the card set, and form primitives are the live, supported components.
