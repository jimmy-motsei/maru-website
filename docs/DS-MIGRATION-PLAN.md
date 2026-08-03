# Maru Design System — Migration Plan

**Date:** 2026-07-31 · **Scope:** `maru-website` only · **Source of truth:** `maru-website/maru-design`
**Branch:** cut from `main` (clean tree, 0 uncommitted files)

---

## 1. What the scan actually found

I swept all 23 repos under `maru-online`. The framing of "replace the components" doesn't match what's on disk. Three corrections:

**a) The DS was reverse-engineered *from* this website, not for it.**
`maru-design/readme.md` says so directly: *"reverse-engineered from the production codebase… tokens lifted verbatim from `app/globals.css`."* The components in `components/ui/` are not stale predecessors to be swapped out — they are the origin. `Button.tsx` already matches `Button.jsx` spec for spec (same `#3DB8C6`/`#2DA8B6`, same `0.15em` tracking, same `1.02`/`0.98` scale, same focus ring). There is almost nothing to replace.

**b) The real gap is adoption, not existence.** The primitives exist and are barely imported:

| Component | Files importing it |
|---|---|
| `Card` | 0 |
| `CardFeature` | 0 |
| `CardMetric` | 0 |
| `CardNavy` | 0 |
| `ServiceCard` | 0 |
| `Eyebrow` / `Badge` / `Checkbox` | 0 |
| `Button` | 5 |
| `SplitHeadline` | 3 |
| `AccordionFAQ` | 2 |

43 `.tsx` files hardcode raw hex instead. Swapping component internals changes nothing when nothing imports them.

**c) The palette has drifted off-brand, and the wrong cyan is now winning.**

| Hex | Uses | Status |
|---|---|---|
| `#04B3CC` | 34 | ✗ wrong cyan |
| `#FF9900` | 19 | ✗ Ashley-era amber |
| `#00F0FF` | 15 | ✗ neon cyan |
| `#3DB8C6` | 15 | ✓ **the brand cyan** |
| `#161616` `#050505` `#0D1117` `#0A192F` | 45 | ✗ black-era backgrounds |

The correct brand cyan is used less than half as often as an impostor. Worst single file: `app/operations-assessment/page.tsx` (21 off-brand hex), then `components/homepage/DiagnosticSection.tsx` and `app/report/[token]/page.tsx` (6 each). The whole `components/broken-playbook/` directory is off-palette.

**d) Token drift: 51 of the DS's 102 tokens don't exist in the site.**
Every semantic and layout token is missing — `--surface-*`, `--text-*`, `--accent-*`, `--space-1..10`, `--radius-*`, `--shadow-card*`, `--motion-*`, `--ease-out`, `--tap-min`, `--container-max`, `--header-h`, `--color-whatsapp`. Only the raw colour layer made it across. This is *why* people hardcode: there's no `--space-6` to reach for.

**e) Sibling apps carry zero Maru brand colour.** `pipeline-leak-detector`, `tech-stack-audit`, `popia-compliance-grader`, `maru-ai-academy`, `pbc-platform`, `seokane-platform` — 0 hits on `#3DB8C6` across all of them. These are prospect-facing lead magnets. Out of scope this pass, but it's the biggest *visible* brand gap you have.

### Why literal component replacement was the wrong instinct

The DS export is plain `.jsx` with inline style objects and a `window.<Namespace>` bundle — the Claude Design artifact format, built for prototyping. The site is TypeScript + Tailwind + `next/link`. Dropping the JSX in would cost you: type safety, `next/link` prefetching, static CSS extraction (inline styles can't be critical-CSS'd or cached), and a style object rebuilt on every render. For an audience you've explicitly specced as *data-cost-conscious on mobile at 360px*, that's a payload regression in service of a cosmetic no-op. **Decision taken: DS is the spec, `components/ui/*.tsx` stays the implementation.**

---

## 2. The plan

Six phases. You approve each before I start it. Every phase is one PR-sized commit on a branch, reversible.

### Phase 0 — Freeze the source of truth
- Archive `maru-vault/01_BRAND/design-system` → `maru-vault/01_BRAND/_archive/design-system-superseded/` with a `README` pointer to `maru-design`.
- Harvest first: it holds 6 component specs `maru-design` lacks — `StatCard`, `StatusPill`, `Tabs`, `Avatar`, `ProgressBar`, `Tag`. Move those `prompt.md` files into `maru-design/components/core/` as a backlog, don't build them yet.
- `growthiq-design-system` stays untouched — different brand, correctly separate.
- **Deliverable:** one system on disk. **Risk:** none. **Effort:** 30 min.

### Phase 1 — Close the token gap ← *the highest-leverage step*
- Port the 51 missing tokens from `maru-design/tokens/` into `app/globals.css`, preserving existing names (no renames, nothing breaks).
- Extend `tailwind.config.ts` to expose them: `spacing`, `borderRadius`, `boxShadow`, `transitionTimingFunction`, plus the missing `whatsapp`, `gold.antique`, `navy` colours.
- **Deliverable:** `p-6` → `--space-6`, `shadow-card`, `rounded-lg`, `bg-whatsapp` all become available. Nothing visually changes yet.
- **Risk:** low — additive only. **Effort:** ~1 hr. **Approval gate:** I show you the token diff before commit.

### Phase 2 — Reconcile the primitives
- Audit all 15 DS components against their `.tsx` counterparts, line by line, and correct any real drift.
- Build the 3 genuinely missing ones as TSX: `Badge`, `Eyebrow`, `WhatsAppButton` (the last one supersedes the ad-hoc `WhatsAppWidget.tsx`).
- Rewrite each `.tsx` to consume Phase 1 tokens rather than repeating literals.
- Add a barrel `components/ui/index.ts` so imports are one line.
- **Deliverable:** a complete, token-backed primitive set. **Risk:** low — 0-import components can't regress. **Effort:** ~half day.

### Phase 3 — Adopt, route by route
Ordered by traffic × damage, worst first:

1. `app/page.tsx` + `components/homepage/*` — 9 off-palette files, the front door
2. `app/operations-assessment/page.tsx` — 21 off-brand hex, single worst file
3. `app/services/*` — 9 pages, the commercial core
4. `app/report/[token]/*` — what a diagnostic prospect actually receives
5. `components/broken-playbook/*` — 8 files, entirely off-palette
6. Everything else

Per route: replace raw hex with tokens, replace ad-hoc markup with primitives, screenshot before/after, you approve, commit. **Approval gate on every single route.**
**Risk:** medium — this is where visible change happens, hence the per-route gate. **Effort:** 1–2 routes per session.

### Phase 4 — Lock it in
- Wire `maru-design/_adherence.oxlintrc.json` (ships with the DS) into `eslint.config.mjs` — raw hex outside `globals.css` becomes a lint error.
- Add it to the `.github/workflows` CI gate so drift can't re-enter.
- **Deliverable:** the problem cannot recur. **Effort:** ~1 hr. *Without this, you're back here in six months.*

### Phase 5 — Verify
- `npm run build` + `tsc --noEmit` clean
- Visual diff at 360px (your mobile-first floor) and 1200px
- WCAG 2.1 AA contrast check on every token pair — `#3DB8C6` on white is ~2.3:1, so it **must not** be used for body text; I'll confirm the DS never does
- Lighthouse before/after on the homepage to prove no payload regression

### Backlog — sibling apps (not this pass)
`pipeline-leak-detector`, `tech-stack-audit`, `popia-compliance-grader` are prospect-facing and carry no Maru brand at all. Once Phases 1–2 land, `maru-design` becomes portable and each is a 1–2 day job. Recommend picking this up immediately after Phase 4.

---

## 3. How we work

- I drive; you approve at every gate marked above.
- Branch `ds-migration`, one commit per phase, each independently revertible.
- Phase 3 routes get a before/after screenshot each — no blind merges.
- If a phase runs longer than scoped, I stop and tell you rather than pushing through.

## 4. Open question for you

Phase 3 will surface copy that contradicts the DS `readme.md` — it mandates one set of numbers (*Free / 24-Hour / 30 Days / Fixed*) and one IA (*About · Services · How We Work · Pricing · Insights · Contact*). The site currently runs competing figures. When I hit those: fix the copy to match, or flag and leave for you?
