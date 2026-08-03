# CLAUDE.md — Maru Online Website

## What This Project Is

Maru Online (maruonline.com) is an AI implementation consultancy. This repo is the company website — built on Next.js 14 App Router, TypeScript, Tailwind CSS, deployed via GitHub to Vercel.

## Positioning (Locked 4 April 2026)

**Category:** AI Implementation Consultancy
**One-liner:** "We help businesses cut operating costs by building AI-powered workflows where it matters most."

**Benefit hierarchy:**
1. Primary: Cut operating costs through AI-powered workflows where it matters most
2. Secondary: Find the manual tasks eating your team's time, replace them with AI workflows, connect your existing tools so nothing falls through the cracks
3. Aspirational: Build a business that runs leaner and competes harder, regardless of what the economy does

**Geography:** NEVER use "South African" in positioning statements. SA-specific context lives only in the content layer (case studies, Rand pricing, POPIA references).

**What Maru is NOT** (embed in tone, don't list on site):
- Not a software company — doesn't sell tools, makes existing tools work together
- Not a marketing agency — doesn't run campaigns, fixes the systems behind them
- Not enterprise consultants — doesn't charge R250K for a PowerPoint deck
- Not an automation vendor — doesn't just automate tasks, reorganises how businesses operate

## Process (Locked 4 April 2026)

Four-phase client engagement: **Diagnose → Design → Build → Launch & Measure**, plus optional Phase 5 Optimise.

Key principle: **"Website is Infrastructure"** — every diagnostic includes a site health assessment. We won't build AI workflows on a broken website foundation.

Full process detail: `docs/maru-how-we-work.md`

## Brand Tokens

- **Maru Cyan:** #3db8c6
- **Dark background:** #0d1b2a
- **Aesthetic:** Dark, technical, confident. Bold/editorial. Not corporate.
- **Design reference:** Ashley theme (miller.bslthemes.com/ashley-demo/home-1.html)
- **Icons:** Simple Icons CDN for AI tool logos

## Foundational Documents

Read these before any content or copy work:

| File | Purpose | Read when... |
|------|---------|-------------|
| `docs/maru-positioning-brief.md` | Market data, competitive landscape, positioning rationale | Writing any page copy, making structural decisions |
| `docs/maru-how-we-work.md` | Four-phase process, client-facing language, differentiators | Building services/process pages, writing CTAs |
| `docs/maru-homepage-copy.md` | Approved homepage copy — section by section | Building/rebuilding homepage components |
| `docs/maru-copywriting-rules.md` | Voice, tone, language rules for all copy | Writing or editing ANY text on the site |

## Copy Rules (Quick Reference)

- **Clear over creative. Honest over clever.**
- Grade 9 reading level. Active voice. No hedging.
- NO buzzwords: "streamline," "leverage," "holistic," "cutting-edge," "world-class," "digital transformation," "end-to-end," "innovative solution"
- NO fabricated testimonials, stats, or case studies. If proof doesn't exist yet, use founder credibility and process credibility instead.
- Every claim must be specific. "We cut their admin time by 6 hours a week" beats "We save you time."
- CTAs: low-commitment first. "Book a free 30-minute call — no pitch, just a conversation" outperforms "Get Started" or "Contact Us."
- Full rules: `docs/maru-copywriting-rules.md`

## Proof Strategy

Maru currently has NO published case studies. Two client engagements are in progress. Until named outcomes exist:
- Lead with founder credibility (Jimmy Motsei, 20+ years)
- Show process credibility (the four-phase methodology)
- Use the Lead Grader tool as a live demonstration of capability
- NEVER fabricate testimonials, client names, or statistics

## Technical Notes

- **Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, Vercel
- **Deployment:** Auto-deploy from GitHub `main` branch, `iad1` region
- **TypeScript errors cause hard build failures** — run `tsc --noEmit` before every push
- **Vercel edge cache** can serve stale content after deploys — verify via `git log` and Vercel build logs
- **API integrations:** Claude API, Firecrawl, Gemini, Serper, Resend
- **CRM/email:** Brevo

## Current Site Issues (Priority Order)

1. **CRITICAL:** Remove fabricated testimonials (TechFlow Manufacturing, Khulisa Consulting, AfriStyle Online) — these are trust-destroying if a prospect checks
2. **CRITICAL:** /resources returns 404 — fix or redirect
3. **HIGH:** All copy uses rejected "Revenue Systems" / "Revenue Infrastructure" framing — needs full rewrite to cost/efficiency positioning
4. **HIGH:** Process shows "Audit → Architect → Integrate → Hand Over" — should be "Diagnose → Design → Build → Launch & Measure"
5. **HIGH:** Stats (187%, 92%) are unattributed — remove until real data exists
6. **MEDIUM:** H1 contains "South African" — remove per positioning rules
7. **MEDIUM:** Navigation structure needs simplifying
