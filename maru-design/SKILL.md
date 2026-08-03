---
name: maru-design
description: Use this skill to generate well-branded interfaces and assets for Maru Online — an AI & automation consultancy for South African SMEs — for production or throwaway prototypes/mocks. Contains essential design guidelines, colours, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it carries the brand context, voice, visual foundations, iconography, and the decisions that keep the system coherent (cyan = interactive accent, gold = credential accent only; one card system; one set of numbers; light-only). Then explore the other files.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of `assets/` and write static HTML files for the user to view, linking `styles.css` for the real tokens and fonts. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

**Key files**
- `styles.css` — the one stylesheet to link; it `@import`s all tokens + `@font-face` (Outfit + Inter, self-hosted in `assets/fonts/`).
- `tokens/` — colours, typography, spacing/radius/shadow/motion, base element + utility classes.
- `components/` — React primitives (`core/`, `cards/`, `forms/`, `feedback/`, `actions/`). In a compiled design-system context they live on `window.<Namespace>`; in plain HTML, recreate them with the documented inline styles.
- `ui_kits/website/` — a full homepage recreation (latest copy) you can lift section patterns from.
- `guidelines/` — foundation specimen cards (colours, type, spacing, brand).
- `assets/` — logo (`brand/maru-logo.png`, invert for navy backgrounds), integration tool SVGs (`tools/`), illustrations.

**Always honour the brand voice:** pragmatic, evidence-led, second-person ("you"), South African English, no AI hype, no emoji. Show Rand pricing plainly, keep WhatsApp reachable, state POPIA/trust cues plainly. Mobile-first at 360px, WCAG 2.1 AA, light and fast.

If the user invokes this skill without other guidance, ask what they want to build or design, ask a few focused questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
