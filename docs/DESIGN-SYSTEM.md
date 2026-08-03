# Maru Online — Design System ("Warm Stone")

**Written:** 3 Aug 2026 · **Enforced by:** `npm run lint:design`
**Source of truth:** `app/globals.css`. This document explains it; the CSS defines it.

The site's job is **due-diligence credibility** for corporate ESD managers and programme
SMEs who look Maru up — not conversion (see `STRATEGY-2026-H2-OPTION-A.md`). Fewer,
better, consistent beats more.

---

## 1. The one rule

**Every colour comes from a token.** No raw hex in `.tsx`, no default Tailwind palette
(`blue-600`, `gray-50`, `cyan-400`), no invented class names. `npm run lint:design`
fails the build on all three.

The reason is not tidiness. Tailwind emits **nothing** for a class whose token doesn't
exist — `text-light-soft` is not an error, it is silence. Three legal pages, the careers
page and the POPIA checklist shipped with body copy that had no colour at all because of
this. A typo in a colour name is invisible until someone looks at the page.

---

## 2. Tokens

### Grounds

| Token | Value | Use |
|---|---|---|
| `--gradient-surface` | `#F4F2EC → #EDEAE2` | **The default page ground.** Section backgrounds |
| `--color-bg-primary` | `#FFFFFF` | Pure white — sparingly |
| `--color-bg-secondary` | `#F5F4F0` | Alternate band, input fills |
| `--color-bg-canvas` | `#FAFAF8` | Warm off-white |
| `--color-bg-navy` | `#1A3A5C` | Hero, footer, assessment band |
| `--color-bg-navy-deep` | `#16324F` | Deeper hero variant |
| `--color-bg-darkest` | `#122A45` | Mobile menu overlay |

**Dark surfaces appear only in the hero, the footer, and the assessment band.** Nowhere
else. A page whose `<main>` carries a navy background is a bug — that was the state of the
legal pages, `/careers` and `/about`'s old client component before 3 Aug 2026.

### Cards

| Token | Value |
|---|---|
| `--color-bg-card` | `#FDFCF9` (resting) |
| `--color-bg-card-hover` | `#FFFFFF` |
| `--color-border-card` | `#E4E0D6` (warm — cards only) |
| `--color-border-default` | `#E2E8F0` (cool — rules and dividers) |

Cards sit a step **above** their ground: the ground was darkened so the card has something
to lift off, and hover carries it to pure white.

### Ink

| Token | Value | Contrast on the light ground |
|---|---|---|
| `--color-ink-primary` | `#0D1B2A` | very high |
| `--color-ink-secondary` | `#4A5568` | 6.26:1 — body copy |
| `--color-ink-tertiary` | `#718096` | **3.34:1 — fails AA for normal text.** Large or non-essential text only |
| `--color-ink-inverted` | `#FAFAF8` | on navy |
| `--color-ink-inverted-muted` | `rgba(250,250,248,0.75)` | on navy |

### Accents

| Token | Value | Use |
|---|---|---|
| `--gradient-gold` | `#D6B76A → #A8862F` | Primary CTA fill |
| `--color-gold` | `#C39F45` | Solid fills, rules, the DisconnectDiagram hub |
| `--color-gold-light` | `#F3EAD3` | Gold chip tint |
| `--color-gold-antique` | `#6B5219` | Text on gold tint — 6.16:1 |
| `--color-ink-on-gold` | `#0D1B2A` | **The only correct label colour on the gold gradient** |
| `--color-cyan` | `#3DB8C6` | Functional accent. Text **on dark only** |
| `--color-cyan-ink` | `#1B6F79` | Cyan-coloured **text on light grounds** |
| `--color-cyan-light` | `#E8F8FA` | Chip tint |
| `--color-ochre` | `#C36A36` | SA-rooted secondary — proof, results, credentials |
| `--color-danger` / `--color-success` | `#B3261E` / `#1E6F4F` | Validation, pass/fail |

---

## 3. Contrast rules that are easy to get wrong

Three pairings in this palette fail AA if you reach for the obvious token. All three
have bitten this codebase.

**Gold CTA label.** Navy `#1A3A5C` on the gold gradient is **3.39:1** at the gradient's
dark stop — below the 4.5:1 threshold for the 13px button label. Use
`--color-ink-on-gold` (`#0D1B2A`): 5.07:1 at the dark stop, 8.98:1 at the light stop.

> The earlier plan recommended *darkening* the gradient to fix this. That is backwards —
> the text is dark, so darkening the fill lowers contrast. Darkening the **label** is the
> fix, and it leaves the gradient (the site's signature) untouched.

**Cyan as text.** `--color-cyan` is a dark-ground colour: 4.9–6.2:1 on the navies, but
only **1.97:1** on the light ground. For cyan-coloured text on a light surface use
`--color-cyan-ink` (4.86:1 on the surface gradient, 5.84:1 on white). Borders, fills and
icon chips may use `--color-cyan` anywhere — the rule is about *text*.

**Tertiary ink.** `--color-ink-tertiary` is 3.34:1 on the light ground. It is fine for
large type and decorative meta, not for anything a reader must actually read.

---

## 4. Component classes

`.card-lift` — **owns** the card surface, edge, elevation and hover brighten.

> **Trap:** an inline `background` on a card beats the class and silently kills the hover.
> Never set a card background inline. Let `.card-lift` do it.

`.foundation-cell` — flatter card variant for foundation/compliance grids.

`.card-lift-dark` — cards on navy sections; shadow tinted with cyan.

`.glyph-chip` — tinted icon chip. Cyan for core services, `.glyph-chip-gold` for
foundation and compliance. Scales on card hover.

`.legal-prose` — wrapper that owns typography for the legal, careers and policy page
bodies, so individual elements don't carry colour utilities.

`Glyph` (`components/ui/Glyph.tsx`) — 16 icons on one 24×24 grid, 1.6px stroke,
`currentColor`. **Icons come from `Glyph` in a `.glyph-chip`, never a one-off inline SVG.**

`DisconnectDiagram`, `StatBand` / `StatFigure` — scroll-triggered, reduced-motion safe.

---

## 5. Specificity traps

**`globals.css` loads after Tailwind at equal specificity.** A `display` declaration on a
class there silently beats `hidden` / `sm:block`. If a component's breakpoint behaviour
lives in `globals.css`, own the whole breakpoint there — don't mix.

**Tailwind v4 token → utility naming.** `@theme inline { --color-bg-canvas }` produces
`bg-bg-canvas`, **not** `bg-color-bg-canvas`. The doubled form is a phantom class. There
were 18 of them before 3 Aug 2026.

**`rm -rf .next` before trusting a CSS change** — Turbopack has served stale CSS.

---

## 6. Checks

```bash
npm run lint:design    # design drift — fails the build
npm run type-check     # tsc --noEmit
npm run build          # a green local build does NOT mean a green deploy
npx vercel ls maru-website   # verify the deployment after every push
```

`lint:design` (`scripts/drift-guard.mjs`) fails on:

1. **Retired brand hex** in `.tsx` — `#161616`, `#04B3CC`, `#00F0FF`, `#FF9900`, `#0D1B2A`.
2. **Phantom colour classes** — `accent`, `light-soft`, `card-dark`, `electric-cyan`,
   `deep-navy`, `warm-amber`, `highlight` and friends.
3. **Default Tailwind palette** colours.
4. **Unimported components** — matched on *path*, not basename. A basename check reported
   the stale `components/ui/CookieConsent.tsx` as live because `components/CookieConsent.tsx`
   shares its name.

Exemptions live in the `EXEMPT` map in that script, each with its reason. `app/global-error.tsx`
is exempt from the hex rule because it replaces the root layout — `globals.css` never loads
there, so literals are the only thing that works on the one page that must work when
everything else has failed.

---

## 7. Per-page checklist

- [ ] Ground is `--gradient-surface` or `--color-bg-secondary`; dark only in hero/footer/assessment band
- [ ] Cards use `.card-lift` with **no inline `background`**
- [ ] Card borders use `--color-border-card` (warm), not `--color-border-default` (cool)
- [ ] Icons are `Glyph` in a `.glyph-chip`
- [ ] Cyan text on a light ground uses `--color-cyan-ink`
- [ ] `npm run lint:design` passes
- [ ] Text contrast ≥ 4.5:1

---

## 8. Measured state — 3 Aug 2026

| | Before v2 | Now |
|---|---:|---:|
| `.tsx` in `app/` + `components/` | 178 | 67 |
| Components in `components/` | 109 | 36 |
| — unimported | 50 | **0** |
| Route files (`page.tsx`) | 40 | 25 |
| Scoring tools | 5 | 1 |
| Service detail pages | 13 | 4 |
| Files using `card-lift` / `glyph-chip` | 5 / 3 | 17 |
| Phantom colour classes | 100+ | **0** |
| Sitemap URLs that 404 | 13 | **0** |
