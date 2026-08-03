# Maru Website — Light-Theme Brand Refresh (Claude Design)

> **Status: PLANNED — 31 July 2026.**
> Authorised as a **scoped amendment to Standing Rule 2** (website freeze): Jimmy explicitly
> approved this refresh on 31 Jul 2026 knowing it overrides the freeze. The freeze otherwise
> stands: this is a bounded credibility reskin, not a redesign programme.
> **Design reference: https://growthiq.co.za/** — adopt its polish and lightness, not its identity.

---

## 1. Guardrails (what keeps this from becoming the thing Rule 2 banned)

- **Timebox: 3 sessions maximum** — 1 Planning (claude.ai/Claude Design, flat rate) +
  2 Build (Claude Code, API credits, est. $3–$6 total). Hard stop after session 3;
  anything unfinished goes to the 31 Jan 2027 freeze review.
- **Restyle only. No new pages, no new copy beyond what restyling forces, no content
  programme, no SEO work.** The sitemap and messaging are untouched.
- **The hygiene sprint ships inside this work** (§6) — it was already the freeze's one
  sanctioned exception and this is the cheapest moment to do it.
- **Purpose framing:** under Option A the site's job is due-diligence credibility for
  corporate ESD managers and programme SMEs who look Maru up. Every decision is judged
  against "does this read as a credible corporate supplier?" — not against conversion.
- **Maru brand identity is retained** — Maru gold stays as the signature accent;
  GrowthIQ informs *lightness, spacing, and polish*, not palette identity. Maru must not
  look like a GrowthIQ clone (they are client and partner; visual confusion hurts both).

## 2. Current state (audited 31 Jul)

- Fully token-based: all colour/type/spacing live as CSS custom properties in
  `app/globals.css` + `styles/tokens.css`; `tailwind.config.ts` only references them.
  **A theme change is therefore mostly a token-file change.**
- Already light-first: white `#FFFFFF` / warm off-white `#FAFAF8` / stone `#F5F4F0`
  backgrounds — but with heavy dark sections (`--color-bg-navy #1A3A5C`,
  `--color-bg-navy-deep #0D1B2A`, `--color-bg-darkest #060E15`).
- Type: Outfit (display) + Inter (body) — same family feel as GrowthIQ. Keep.
- Accents: cyan `#3DB8C6` + two golds (`#CDAA53` warm, `#B8860B` antique).

**Diagnosis:** the "dark" feel comes from how much page area the navy sections occupy,
not from the base theme. Lightening = shrinking dark real estate + softening the
remaining dark surfaces toward GrowthIQ's blue-teal register.

## 3. Reference extraction — growthiq.co.za

What to carry over (observed on the live site):

| Element | GrowthIQ treatment | Apply to Maru as |
|---|---|---|
| Nav | Clean white bar, logo left, ghost links, one bordered CTA button | Same pattern; Maru logo + gold-bordered CTA |
| Hero | One dark section only, deep blue-teal (not black), split-colour headline (white + teal on key phrase) | The single permitted dark section; recolour `navy-deep` toward GrowthIQ's blue-teal cast; keep Maru's SplitHeadline with gold on the key phrase |
| Badges | Pill outline badges ("Always audit-ready") | Reuse for eyebrow labels |
| Stat band | Muted teal panels, mono-font display words | Optional texture for the proof/metrics band |
| Everything below hero | Light, generous whitespace, thin rules | All non-hero sections move to `bg-primary`/`bg-secondary` only |

## 4. Design direction — "Lighter Maru" token targets

Draft targets for Claude Design to explore (final values come out of Phase B):

- `--color-bg-navy` sections → replaced by `--color-bg-secondary`/`tertiary` (light) in
  all mid-page sections; navy survives **only** in hero + footer.
- `--color-bg-navy-deep` → shift from `#0D1B2A` toward a blue-teal cast (GrowthIQ hero
  register) so the two remaining dark surfaces feel lighter and more modern.
- `--color-bg-darkest #060E15` → retire.
- Gold stays the primary accent; cyan demoted to functional/link accent so the two sites
  stay visually distinct.
- Increase section padding rhythm (~+25%) and use thin `--color-border-default` rules
  between light sections (GrowthIQ's whitespace discipline).
- Type scale, fonts, tracking: unchanged.

## 5. Workflow — Claude Design in the loop

**Phase A — Prep (this session, done):** this plan + current-state audit + reference notes.

**Phase B — Claude Design exploration (Planning session, claude.ai — flat rate):**
1. Open Claude Design; brief it with: this plan's §3–§4, the current `globals.css`
   token block, screenshots of growthiq.co.za, and 2–3 current Maru pages.
2. Ask for **2–3 light-theme directions** of the homepage (hero + one light section +
   footer) — enough to judge the system, not full-page comps for every route.
3. Pick one direction; have Claude Design output a **final token sheet** (hex values for
   every `--color-*` variable) + component notes (nav, buttons, badges, cards).
4. Export/share the chosen design; pull it into the repo via Design import
   (DesignSync / Vercel `import-claude-design-from-url`) or, minimally, as the token
   sheet committed to `docs/DESIGN-2026-light-theme-tokens.md`.

**Phase C — Build session 1 (Claude Code):**
1. Branch `design/light-refresh` off main. **All work stays on this branch** —
   client-review workflow per CLAUDE.md §7: stable Vercel preview URL, review banner
   not needed (own site) but `robots: noindex` on the branch is.
2. Apply the new token values to `globals.css`/`tokens.css`.
3. Sweep sections currently on `bg-navy`/`bg-darkest` to light equivalents; fix any
   contrast breakage (inverted-ink usages on now-light backgrounds — grep
   `ink-inverted` and `bg-navy` usages first, per the §7 grep-before-use rule).
4. Hygiene sprint items 1–2 (§6).

**Phase D — Build session 2 (Claude Code):**
1. Page-by-page QA at desktop + mobile widths of all main routes (`/`, `/about`,
   `/services`, `/pricing`, `/process`, `/contact`, `/resources`).
2. Hygiene items 3–4; `npm run build` zero-error; Lighthouse sanity check.
3. Preview link self-review → merge → verify production live URL (not the dashboard
   toast — §7 rule). End-of-session checklist runs.

## 6. Hygiene sprint (folded in — from STRATEGY-2026-H2-OPTION-A.md)

1. Mount the existing, never-mounted conversion-tracking code (assessment funnel
   observed for the first time).
2. 410/redirect legacy `.html` pages.
3. GA4 (`G-RKBNFTLK64`): define internal/bot traffic filter for datacentre traffic.
4. WhatsApp click-to-chat link above the fold.

## 7. Success criteria & exit

- Ships within 3 sessions; production live and verified.
- Zero dark sections outside hero + footer; new token sheet committed.
- Conversion tracking live — first funnel data flowing.
- After merge: **freeze resumes.** Next sanctioned website work is the 31 Jan 2027 review.

## Out of scope (explicitly)

New pages, copy rewrites, blog/insights content, SEO changes, logo redesign, the
Website Lead Grader, portal/admin surfaces, anything on growthiq.co.za itself.
