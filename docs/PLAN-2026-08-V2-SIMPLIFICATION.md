# Plan — maru-website v2: Simplify, Clear the Debris, Spread the Fresh UI

**Written:** 3 Aug 2026 · **Status:** ready to execute
**Branch:** `design/v2-disconnect-diagram` (10 commits, pushed, deployment Ready)
**Preview:** https://maru-website-git-design-v2-disconnect-diagram-maru-online.vercel.app
**Companion:** `docs/HANDOVER-2026-08-03.md` (state + gotchas) · this file is the *plan*

> **Cold-start brief.** This document is written to be picked up by a fresh session with
> no prior context. Read this file and `HANDOVER-2026-08-03.md`, then start at Phase 0.

---

## 1. The job

> Simplify the website, clean up the debris from the past, stick to the fresh-design UI
> and apply it across various pages and components.

Under the governing strategy (`docs/STRATEGY-2026-H2-OPTION-A.md`) the site's job is
**due-diligence credibility** for corporate ESD managers and programme SMEs who look Maru
up — not conversion. ~190 real human visitors ever. That means *fewer, better, consistent*
beats *more*.

---

## 2. What is already built (do not redo)

The fresh UI exists and is deployed. It is not a proposal — it is shipped code.

| Asset | Where | What it does |
|---|---|---|
| **Warm Stone tokens** | `app/globals.css` | Gold primary, cyan functional. `--color-bg-card` #FDFCF9 → #FFFFFF on hover, warm `--color-border-card`, warm-tinted shadows, `--gradient-surface` ground |
| **`DisconnectDiagram`** | `components/ui/DisconnectDiagram.tsx` | Five SA SME systems converge through a gold hub into "One live view". Scroll-triggered, reduced-motion safe |
| **`Glyph`** | `components/ui/Glyph.tsx` | 16 icons, one 24×24 grid, 1.6px stroke, `currentColor` |
| **`.glyph-chip`** | `app/globals.css` | Tinted icon chip — cyan for core, gold for foundation/compliance; scales on card hover |
| **`.card-lift`** | `app/globals.css` | Owns card surface, edge, elevation, hover brighten |
| **`StatBand` / `StatFigure`** | `components/ui/` | Metrics band: icon → counting figure → gold rule → label, staggered |

**The system works. The problem is it reaches 5 of 178 `.tsx` files.**

Also concluded this session, and load-bearing: the assessment synthesis moved Gemini →
Claude (`claude-opus-5`, structured outputs), the wizard's reCAPTCHA break was fixed, and
`lib/recaptcha.ts` was committed (it had been failing two remote builds).

---

## 3. The finding that reframes the job

A reachability scan on 3 Aug found:

### **50 of 109 components (46%) are imported by nothing.**

This changes the shape of the work. The instinct is "restyle 178 files". The reality is
**delete first, then restyle what survives** — and what survives is a fraction.

The overlap is stark:

- **9 of the 12** files carrying black-era `#161616` are dead code
- The whole `components/broken-playbook/` directory (8 files) is dead
- 12 of 15 `components/homepage/*` are dead
- `Header.tsx`, `FooterCTA.tsx`, `PageFrame.tsx`, `HomePageClient.tsx` — all dead
- Unused primitives the DS plan wanted adopted — `CardMetric`, `CardFeature`,
  `ServiceCard`, `Checkbox` — are themselves unimported

**Do not restyle a single dead file.** Every hour spent on `broken-playbook/` is wasted.

---

## 4. Measured inventory (3 Aug 2026)

### 4a. Components

| | Count |
|---|---:|
| Total `.tsx` in `app/` + `components/` | 178 |
| Components in `components/` | 109 |
| — imported somewhere | **59** |
| — imported by nothing | **50** |
| Files using `card-lift` | 5 |
| Files using `glyph-chip` | 3 |

### 4b. Routes — 40 total, heavily duplicated

**Service pages: 13 exist. The homepage advertises 6. The rate card has 4.**

| Layer | Count | Detail |
|---|---:|---|
| `/services/*` detail pages | **13** | vs 6 in `PrimaryServicesFilter`, vs 4 in the CLAUDE.md rate card |
| Scoring tools | **5** | `/operations-assessment` (the real CTA, 11 inbound), `/website-audit`, `/assessments/{lead-score,pipeline-leak,tech-audit,proposal}` |
| Orphaned (0 inbound links) | **2** | `/assessments/proposal`, `/admin/login` |
| `/briefing/*` | 4 | Likely duplicates the separate `maru-briefing-forms` repo (Netlify) — see `MARU-SYSTEM.md` |

### 4c. Design debris in *live* files only

| Signal | Total | Of which dead | **Live, needs work** |
|---|---:|---:|---:|
| Files on `bg-navy` / `bg-darkest` | 18 | 1 | **17** |
| Files with `#161616` | 12 | 9 | **3** |
| Files with impostor cyan `#04B3CC` | 4 | — | ≤4 |

The real restyle surface is **~20 files**, not 178.

### 4d. Dead integrations (referenced in code, no key on Vercel)

`HUBSPOT_API_KEY` (**115 references**), `SERPER_API_KEY`, `FIRECRAWL_API_KEY`,
`RESEND_API_KEY`, `SUPABASE_*`, `SMTP_*`, and `ADMIN_PASSWORD_HASH` / `ADMIN_EMAIL` /
`CSRF_SECRET` (so `/admin/leads` login is likely unusable).

Still Gemini-dependent and therefore dead: `lib/gemini.ts`, `lib/ai.ts`,
`lib/assessments/lead-score*.ts`, `/api/test-apis`.

---

## 5. Phase 0 — Unblock (do this first, nothing else is safe)

Two gates. Neither is optional.

### 0a. Settle gold-vs-ochre and merge

`origin/main` (PR #9) did the **inverse** refactor of this branch: replaced gold with
ochre, made cyan the sole action accent, deleted `styles/tokens.css` and
`tailwind.config.ts`, purged 60 components. **Eight files collide.**

Any page restyled before this is settled may need redoing.

- A verified-green rebase is parked at **`backup/light-refresh-rebased`** (`4b45ab8`) —
  conflicts resolved, `ConversionTracking` rescued, build passing. **Reuse it.**
- Resolution rule used there: *branch design intent wins, `origin/main` structure wins.*
- **Trap:** PR #9 deleted `components/analytics/ConversionTracking.tsx`. This branch mounts
  it in `app/layout.tsx:74`. Merging without restoring it breaks the build.

**Decision needed from Jimmy:** gold primary (this branch, Warm Stone, already shipped and
reviewed) or ochre (PR #9). Recommendation: **gold** — it is the more recent explicit
decision (token sheet approved 31 Jul, after PR #9 merged 14 Jul), it is what is deployed
and reviewed, and it keeps Maru visually distinct from GrowthIQ's blue-teal.

**Gate:** branch merged to `main`, build green, production verified live.

### 0b. Prove the assessment funnel

The funnel has **never run end-to-end**. The wizard 400'd on every submit, and the Claude
synthesis has never executed in production. Both fixed, neither confirmed.

1. Check Vercel's `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is a real key (local is the placeholder
   `"your_..."`). 30 seconds.
2. Run **one real submission** on the preview with an address Jimmy controls. This creates
   a Brevo contact and sends two live emails — his call, not the agent's.
3. Confirm: lead in Brevo · prospect email received · internal brief received · report URL
   resolves · **observations block present** (first ever).

**Gate:** a real report, with personalised observations, in an inbox.

> **Do not begin Phase 1 until both gates pass.** If the palette flips to ochre, Phases 2–4
> change materially.

---

## 6. Phase 1 — Delete (the biggest simplification, lowest risk)

Deletion is safer than restyling and shrinks everything downstream.

**1a. Remove the 50 unimported components.** Delete, don't restyle. Run the reachability
scan fresh first (it is in §9), because Phase 0's merge changes the set.

**1b. Remove dead integration code.** `lib/gemini.ts`, `lib/ai.ts`,
`lib/assessments/lead-score*.ts`, `/api/test-apis`, and the `@google/generative-ai`
dependency. Drop `GEMINI_API_KEY` from `.env.local`.

**1c. HubSpot — decide, then act.** 115 references, no key, and CLAUDE.md says contacts
still live in WhatsApp and email. Either provision the key and make it real, or delete it.
It cannot stay as-is. **This is Jimmy's call, not the agent's.**

**Acceptance:** `npm run build` green · every route still 200 · component count down from
109 to ~59 · `git diff --stat` shows deletions only.

---

## 7. Phase 2 — Consolidate routes

**2a. Scoring tools: 5 → 1.** `/operations-assessment` is the funnel (11 inbound links, the
real CTA, now Claude-backed). The other four are duplicative:

| Tool | Action |
|---|---|
| `/assessments/proposal` | **Delete** — 0 inbound links |
| `/assessments/lead-score` | **Delete or rebuild.** Black-era UI (`bg-black`, `text-zinc-400`) and its accents use `bg-highlight` / `text-highlight` — **`highlight` is not a defined token, so those 8 usages render with no colour at all.** It is linked from the homepage hero. Whatever happens, that hero link must not point at a broken page |
| `/assessments/pipeline-leak`, `/assessments/tech-audit` | Delete, or fold into one "free tools" page if they earn their keep |
| `/website-audit` | Decide vs `/operations-assessment` — they do overlapping jobs |

Add 301s for anything deleted (`next.config.ts` already has a redirects block).

**2b. Service pages: 13 → 6 (or 4).** Align to what the homepage actually advertises. Each
retired page gets a 301 to its nearest survivor. Update `app/sitemap.ts`.

**2c. `/briefing/*`** — confirm against the separate `maru-briefing-forms` repo (Netlify).
If duplicated, delete here and link out.

**2d. `/admin/*`** — either provision `ADMIN_PASSWORD_HASH` / `ADMIN_EMAIL` / `CSRF_SECRET`
or remove the surface. A login page that cannot authenticate is worse than none.

**Acceptance:** sitemap matches reality · no 404 from any internal link · every deleted
route 301s · nav/footer IA consistent.

---

## 8. Phase 3 — Spread the fresh UI (~20 live files)

Only now, and only across what survived. Work in this order so the shared layer lands once:

1. **Shared chrome first** — `components/ui/Nav.tsx`, `Footer`, `CookieConsent`,
   `ImageSplit`. These appear on every page; fixing them moves the whole site at once.
2. **High-traffic routes** — `/services` (18 inbound), `/contact` (15), `/booking` (11),
   `/operations-assessment` (11).
3. **The rest** — `/about`, `/pricing`, `/process`, `/resources`, `/insights`, and the
   surviving `/services/*` detail pages.

**Per-file checklist:**

- [ ] Section grounds use `--gradient-surface` / `--color-bg-secondary`; dark surfaces only
      in hero, footer, and the assessment band
- [ ] Cards use `.card-lift` with **no inline `background`** (inline beats the class and
      silently kills the hover)
- [ ] Card borders use `--color-border-card` (warm), not `--color-border-default` (cool)
- [ ] Icons come from `Glyph` in a `.glyph-chip` — never a one-off inline SVG
- [ ] No raw hex: `#161616`, `#04B3CC`, `#00F0FF`, `#FF9900` all gone
- [ ] Body copy trimmed toward show-don't-explain
- [ ] Text contrast ≥ 4.5:1

**Acceptance:** zero `bg-navy`/`bg-darkest` outside hero/footer/assessment band · zero
off-brand hex · `card-lift` and `glyph-chip` usage counts up from 5 and 3 to cover every
card-bearing page.

---

## 9. Phase 4 — Lock it in

**4a. Fix the known accessibility defect.** Gold CTA contrast is **3.99:1** (navy `#1A3A5C`
on `#C39F45`) at 11–13px — below the 4.5:1 AA threshold, on **every primary button
site-wide**. Darkening the gradient's dark stop to roughly `#A8862F` clears it without
changing the look much. On a site whose job is due-diligence credibility, this matters.

**4b. Write the design system down.** One `docs/DESIGN-SYSTEM.md`: tokens, when to use
`card-lift` vs `foundation-cell`, the Glyph grid rules, the inline-background trap, the
globals-vs-Tailwind specificity trap. Without this, drift restarts immediately.

**4c. Add a drift guard.** A CI check (or `npm run lint:design`) that fails on raw hex in
`.tsx` and on unimported components. This is what stops 46% dead code from re-accumulating.

**4d. Re-run the scans** in §10 and record the numbers in the doc.

---

## 10. Repeatable scans (paste these)

```bash
# Unimported components — the delete list
for f in $(find components -name "*.tsx"); do b=$(basename "$f" .tsx);
  n=$(grep -rl --include="*.tsx" --include="*.ts" -E "from ['\"].*/${b}['\"]" app components lib 2>/dev/null | grep -v "^$f$" | wc -l);
  [ "$n" -eq 0 ] && echo "UNUSED $f"; done

# Route inbound links — the consolidation list
for p in $(find app -name "page.tsx" | sed 's|^app||;s|/page.tsx||;s|^$|/|' | grep -v "\[" | sort); do
  printf "%-46s %s\n" "$p" "$(grep -rl --include="*.tsx" "\"$p\"" app components 2>/dev/null | grep -v "^app$p/page.tsx$" | wc -l)"; done

# Design debris
grep -rl --include="*.tsx" -E "bg-navy|bg-darkest" app components | wc -l
grep -rlE --include="*.tsx" "#161616|#04B3CC|#00F0FF|#FF9900" app components | wc -l
grep -rl --include="*.tsx" "card-lift|glyph-chip" app components | wc -l
```

---

## 11. Session plan

| Session | Phase | Output |
|---|---|---|
| **1** | 0a + 0b | Palette settled, branch merged, production live, funnel proven with a real report |
| **2** | 1 | ~50 components deleted, dead integrations removed, build green |
| **3** | 2 | Routes consolidated, 301s in place, sitemap true |
| **4** | 3 (chrome + top routes) | Nav/Footer/CookieConsent + 4 highest-traffic pages on the system |
| **5** | 3 (remainder) + 4 | Rest of the pages, contrast fix, design system doc, drift guard |

Roughly five build sessions. Phases 1 and 2 are mostly deletion and will move faster than
they look; Phase 3 is the long pole.

---

## 12. Guardrails

- **Verify the deployment after every push.** A green local build does **not** mean a green
  deploy — two pushes failed on Vercel while building locally because a file was untracked.
  `npx vercel ls maru-website`.
- **`globals.css` loads after Tailwind at equal specificity.** A `display` declaration on a
  class there silently beats `hidden` / `sm:block`. Own such breakpoints in `globals.css`.
- **Inline `background` on a card beats `.card-lift`** and kills the hover silently.
- **`rm -rf .next`** before trusting a CSS change — Turbopack served stale CSS twice.
- **Deletion needs a 301**, not just a removed file.
- **The Browser pane is unreliable** in this environment (hidden pane → stale screenshots,
  scroll not committing). Verify via computed styles / `curl` and say so rather than
  claiming visual confirmation.
- **Standing Rule 2:** this is a design/content programme, the category the website freeze
  covers, and it is past the light-refresh's 3-session box. Worth an explicit decision
  rather than drift. **Compliance gate (CIPC + PAIA, due 30 Aug) outranks all non-delivery
  work if still open.**
- **Don't touch:** `D app/favicon.ico` / `D app/icon.png` (deleting breaks the favicon) and
  `D public/images/people/integration-looks-like.png` (still referenced by
  `app/services/page.tsx`). These are pre-existing uncommitted deletions — restore them.

---

## 13. Definition of done

- [ ] One palette, merged to `main`, live on maruonline.com
- [ ] Assessment funnel proven: real submission → Brevo → email → report with observations
- [ ] Component count roughly halved; zero unimported components
- [ ] One scoring tool; service pages match what the site advertises
- [ ] Zero raw off-brand hex; zero dark surfaces outside hero/footer/assessment band
- [ ] Gold CTA contrast passes AA
- [ ] `docs/DESIGN-SYSTEM.md` written; drift guard in CI
- [ ] Every deleted route 301s; sitemap true
