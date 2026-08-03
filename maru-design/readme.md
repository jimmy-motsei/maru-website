# Maru Online — Design System

A coherent, **trust-forward, light-and-fast** design system for **Maru Online**, an AI & automation consultancy serving South African SMEs (Gauteng). The voice is pragmatic and evidence-led — **no AI hype**. The system is **mobile-first at 360px**, light-only (leanest, matches the data-cost brief), built for WCAG 2.1 AA, and treats **WhatsApp** and **plain Rand pricing** as first-class, trust-building elements.

> **The 5-second test:** a sceptical SA SME owner, on a phone, should believe this is legit in five seconds. Every decision below serves that.

---

## Sources (audited)

This system was reverse-engineered from the production codebase. If you have access, explore it for deeper context:

- **Website repo:** `github.com/jimmy-motsei/maru-website` (Next.js). Tokens live in `app/globals.css` + `styles/tokens.css`; UI primitives in `components/ui/`.
- Org repos worth a look for product context: `github.com/maru-online/*`.

The repo carries **two eras**: an older HTML-template starter ("Ashley" primitives — black background, amber accent, uppercase forms) and the newer **warm Maru system** (white/canvas, cyan + gold + navy, the split-headline pattern). **This design system standardises on the newer Maru system** and resolves the leftover inconsistencies (see _Decisions_).

---

## Decisions & rationale (resolving the audit conflicts)

1. **Two accents, strict rule.** Cyan `#3DB8C6` is the **only interactive accent** — buttons, links, focus rings, active states, eyebrows. Gold `#B8860B / #CDAA53` is the **credential accent only** — proof, results, guarantees, POPIA notes (`CardGold`, gold eyebrow). Gold is never a button or link. This keeps the warm SA-rooted gold without it competing with the call-to-action.
2. **One card system.** Five named registers, each with a job: `CardMetric` (a stat), `CardFeature` (benefit/service on light), `ServiceCard` (navy service tile, links out), `CardNavy` (emphasis statement on light), `CardGold` (credential/proof). No ad-hoc `card-lift` variants.
3. **One set of numbers.** Stats are a brand asset rendered in Outfit. Use a single source of truth: **Free / 24-Hour / 30 Days / Fixed**, and a 4-step process **01 Diagnose → 02 Design → 03 Build → 04 Launch & Measure**. Don't reintroduce competing figures (24h vs 48h, 10min vs 15min).
4. **One IA.** Nav = About · Services · How We Work · Pricing · Insights · Contact. "Insights" (not "Resources"). One service taxonomy across home/pricing/footer.
5. **Light only.** No dark mode — leanest payload for a data-cost-conscious audience. Navy is a *section* colour, not a theme.
6. **Clouds metaphor = quiet signature.** Kept in the logo mark (the cyan double-hump cloud) and in naming, not as loud decoration.

---

## Content fundamentals (voice & tone)

- **Pragmatic, evidence-led, plain.** Short declaratives. Claims are specific and measurable ("plain-language gap report within 24 hours"), never breathless ("revolutionary AI").
- **Second person, "you" / "your".** Speaks to the business owner. Maru is "we".
- **Outcomes over technology.** Lead with revenue, time saved, quotes turned around — not model names.
- **Casing:** Sentence case for body and most headings; **UPPERCASE only** for eyebrows, button labels, and small meta labels (with wide tracking). Split headlines pair a light-weight phrase with a strong-weight emphasis: _"You've invested in AI. **Now get the ROI.**"_
- **Trust cues, stated plainly:** Rand pricing shown openly, "Fixed price", "Free", POPIA-aligned, 30-day support. WhatsApp is always one tap away.
- **No emoji.** Icons are line-style SVG, not emoji.
- **Spelling:** South African English (-ise, prioritise, optimise).

Example copy lifted from production:
> "We turn disconnected AI tools into one revenue system your team can run, measure, and scale."
> "Audit your current stack before buying anything new."

---

## Visual foundations

- **Palette.** Warm off-white canvas `#FAFAF8`; white cards `#FFFFFF`; warm grey alt sections `#F5F4F0`. Ink is deep navy `#0D1B2A` (headings), slate `#4A5568` (body), grey `#718096` (meta). Navy `#1A3A5C` for dark sections. Cyan `#3DB8C6` interactive; gold `#B8860B` credential. WhatsApp green `#25D366` for that CTA only.
- **Type.** **Outfit** (variable 100–900) for display/headings and numerals; **Inter** (variable) for body. Body is light (weight 300) at a generous 1.7 line-height. Numerals are a brand asset — stats render large in Outfit.
- **Backgrounds.** Flat colour fields — **no gradients**, no busy textures. Dark sections are solid navy. Real photography/illustration (warm, human) where imagery is used; the cloud wireframe is a subtle decorative motif on navy only.
- **Corners & borders.** Low radius: 8px buttons/metric cards, 12px navy cards, hairline `#E2E8F0` rules. Signature card treatment: a **4px left rail** (cyan on navy cards, antique gold on gold cards) with the opposite corners rounded.
- **Shadows.** Restrained. `0 2px 12px rgba(0,0,0,.06)` at rest, lifting to `0 8px 24px rgba(0,0,0,.10)`. Navy cards carry deeper shadows; cyan CTAs get a cyan-tinted glow on hover.
- **Motion.** Calm and quick. Hover lifts cards `translateY(-2px)` + slight scale (300ms ease-out); buttons scale `1.02` on hover, `0.98` on press. The signature ease is `cubic-bezier(0,0,0.3642,1)`. The only loop is the WhatsApp FAB pulse. `prefers-reduced-motion` is honoured.
- **States.** Hover = darker accent + lift; press = scale down; focus = 3px cyan ring `rgba(61,184,198,.3)`; disabled = 40% opacity, no pointer events.
- **Layout.** Mobile-first, container max 1200px, gutters 1.5rem. Sticky translucent header (navy-tinted over hero, white when scrolled).

---

## Iconography

- **Line-style SVG icons**, ~1.5–2px stroke, rounded caps/joins — drawn inline in components (arrows, chevrons, plus/close, check). No icon font, no emoji, no unicode glyphs as icons.
- **Brand tool logos** ship in `assets/tools/` as SVG (ChatGPT, Claude, Zapier, Make, HubSpot, Notion, Google, Calendly, Perplexity) — used in "tools we integrate" scrollers. Use the real SVGs; don't redraw.
- The **WhatsApp glyph** is the official path, baked into `WhatsAppButton`.
- For new icons, match the existing line style. Lucide is the closest CDN match if you need more.

---

## Index / manifest

**Root**
- `styles.css` — the one entry point consumers link (`@import` manifest only).
- `tokens/` — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css` (spacing/radius/shadow/motion), `base.css` (element + utility classes).
- `assets/` — `fonts/` (Outfit + Inter woff2), `brand/` (logo, founder), `illustrations/`, `tools/` (integration SVGs).

**Components** (`window.MaruOnlineDesignSystem_422da4.<Name>`)
- `core/` — **Button**, **SplitHeadline**, **Eyebrow**, **Badge**
- `cards/` — **CardMetric**, **CardFeature**, **ServiceCard**, **CardNavy**, **CardGold**
- `forms/` — **Input**, **Select**, **Checkbox**, **Textarea**
- `feedback/` — **AccordionFAQ**
- `actions/` — **WhatsAppButton**

**Foundation specimens** (`guidelines/`) populate the **Design System tab** — Colors (backgrounds, accents, ink), Type (display, body, split/numerals), Spacing (scale, radius/shadow), Brand (logo, tool logos).

**UI kits** (`ui_kits/website/`) — faithful recreations built on the system, all using the latest live copy:
- `index.html` — **Homepage** (hero "312 hours of Busywork", operational-gap cards, metrics, 6-service filter, foundation services, 4-step process, assessment CTA).
- `services.html` — **Services** (four fixed-scope services, image split, vendor-agnostic band).
- `process.html` — **How We Work** (four-phase process, tools scroller, 8-question FAQ).
- `pricing.html` — **Pricing** (three fixed-scope engagements, "how we price" FAQ).
- `assessment.html` — **Operations Assessment**: an interactive 10-question flow with **live per-area scoring**, email gate, and confirmation.
- `mobile.html` — the pages framed at Maru's **360px mobile-first baseline**.
- `Header.jsx` / `Footer.jsx` — shared site chrome reused across pages.

**Font note:** Outfit + Inter are the genuine brand fonts, self-hosted from the repo — no substitution.

---

## Known data conflict (flagged, not silently resolved)

The brief asked for "one set of numbers", but the live repo carries a genuine conflict the UI kits faithfully preserve:
- **Homepage** presents the diagnostic as **Free**, **24-hour** turnaround, **~10 minutes**.
- **Pricing** charges the diagnostic at **R4,500**, **48-hour** turnaround, **~15 minutes** (offset against build cost).

This is a **business decision** (is the entry diagnostic free or R4,500?), so the system surfaces it rather than picking. Once Maru decides, update both kits and the stat tokens to the single agreed source of truth.
