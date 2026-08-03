# maruonline.com — GA4 Audit Since Inception

**Property:** maruonline.com · ID `503120745` · Account `366821254` · Measurement ID `G-RKBNFTLK64`
**Stream:** "Ai Powered Marketing Automation" → `https://www.maruonline.com` (stream `12098309385`)
**Range queried:** 1 Jan 2024 – 31 Jul 2026 (full available history)
**Date of audit:** 31 July 2026 · First audit since inception

---

## Headline

Two-thirds of everything GA4 has ever recorded for this site is not human. Once you strip it out, the picture is small but genuinely encouraging: **South African visitors engage for 2m 50s at a 63% engagement rate.** The site works on the people it was built for. There just aren't many of them yet, and not one conversion has ever been measured — because conversion tracking has never been switched on.

---

## Lifetime totals

| Metric | Value |
|---|---|
| Sessions | 906 |
| Active users | 729 |
| New users | 726 |
| Page views | 2,262 |
| Events | 5,651 |
| Engaged sessions | 309 |
| Engagement rate | 34.11% |
| Avg engagement / session | 30s |
| Events per session | 6.24 |
| **Key events (conversions)** | **0** |
| **Revenue** | **R0.00** |

726 new users out of 729 active — a ~99.6% new-user ratio across the entire history. Almost nobody has ever come back.

---

## 1. Geography — the most important category

| Country | Users | Engagement rate | Avg engagement | Events |
|---|---|---|---|---|
| Singapore | 212 (29.1%) | 6.6% | **0s** | 716 |
| United States | 186 (25.5%) | 15.4% | 6s | 720 |
| **South Africa** | **127 (17.4%)** | **62.95%** | **2m 50s** | **3,215 (56.9%)** |
| China | 40 (5.5%) | 2.5% | 0s | 125 |
| France | 31 (4.3%) | 96.8% | 50s | 145 |
| Netherlands | 15 (2.1%) | 60% | 6s | 76 |
| Vietnam | 14 (1.9%) | 0% | 0s | 47 |
| India | 13 (1.8%) | 50% | 16s | 66 |
| United Kingdom | 12 (1.7%) | 73.3% | 47s | 72 |
| Brazil | 11 (1.5%) | 9.1% | 0s | 30 |

*(54 countries recorded in total.)*

**Interpretation.** Singapore, the US, China, Vietnam and Brazil together account for **63.4% of all users** and post engagement times of 0s, 6s, 0s, 0s and 0s. Singapore alone is your largest "market" at 212 users with a **zero-second** average engagement. That is not an audience — Singapore and the US East Coast are the world's densest datacentre regions, and this is automated traffic: crawlers, scrapers, uptime monitors and LLM bots.

South Africa — the only market you actually sell to — is 17% of users but **57% of all engagement events**, at an average engagement time **28× higher than Singapore's**.

France at 96.8% engagement over 31 users is the anomaly worth a second look; that pattern (very high engagement, moderate volume) looks human, not botted. Possibly a referral or a diaspora/agency audience.

**Realistic human audience since inception: roughly 190 people** (127 SA + France, UK, India, Netherlands). Everything else is noise.

---

## 2. Acquisition channels

| Channel | Sessions | Engagement rate | Avg engagement |
|---|---|---|---|
| Direct | 775 (85.5%) | 30.6% | 29s |
| Organic Search | 42 (4.6%) | 52.4% | 26s |
| Organic Social | 41 (4.5%) | **70.7%** | 39s |
| Referral | 35 (3.9%) | 54.3% | 52s |
| Unassigned | 9 (1.0%) | 0% | 25s |
| AI Assistant | 4 (0.4%) | 50% | 14s |

**Interpretation.**

- **Direct at 85.5% is not a channel — it's the absence of one.** Cross-referenced against the geography, most of it is bots hitting the domain directly with no referrer. Real direct traffic (people typing your URL) is a small fraction of this.
- **Organic Search: 42 sessions in the property's entire lifetime.** SEO has never meaningfully started. Whatever is in `/insights` has produced almost nothing. This is a factual statement about effort, not quality — you haven't run an SEO programme, so there's no SEO result.
- **Organic Social has the highest engagement rate of any channel at 70.7%.** Only 41 sessions, but they're your most engaged visitors. Your own posting is empirically your best-performing channel.
- **Referral at 52s average engagement** is the longest of any channel — referred visitors read.
- **"AI Assistant" — 4 sessions.** GA4 now breaks out ChatGPT/Perplexity/Copilot referrals as their own channel. Tiny, but non-zero, and it will grow. Relevant to the AI-visibility work you already have tooling for.

---

## 3. Content

| Page | Views | Active users | Views/user | Avg engagement |
|---|---|---|---|---|
| `/index.html` | 858 (37.9%) | **7** | **122.57** | 14m 22s |
| `/` | 553 (24.5%) | 345 | 1.60 | 28s |
| `/services` | 118 (5.2%) | 71 | 1.66 | 37s |
| `/contact` | 83 (3.7%) | 39 | 2.13 | **53s** |
| `/resources` | 67 (3.0%) | 67 | 1.00 | **0s** |
| `/knowledge` | 43 (1.9%) | 23 | 1.87 | 1m 00s |
| `/request-demo.html` | 34 (1.5%) | 6 | 5.67 | 1m 05s |
| `/contact.html` | 33 (1.5%) | 8 | 4.13 | 22s |
| `/knowledge.html` | 27 (1.2%) | 7 | 3.86 | 1m 39s |
| `/request-demo` | 26 (1.2%) | 16 | 1.63 | 25s |

*(80 distinct pages recorded.)*

**Three findings, in order of severity.**

**a) The legacy static site is still live and is your #1 "page".** `/index.html` has 858 views from **7 users** — 122 views per user. That is a monitoring bot or scraper hammering a single legacy URL. Add the other `.html` pages (`/request-demo.html`, `/contact.html`, `/knowledge.html`) and legacy accounts for **952 views, roughly 42% of all traffic ever recorded**. This is the "Ashley-era" static site your design-system readme describes as superseded. It is still serving, still being indexed, and competing with your Next.js pages for the same keywords. **This is the single biggest hygiene problem in the property.**

**b) `/resources` — 67 views, 67 users, exactly 1.00 views per user, 0s engagement.** A textbook bot fingerprint: one hit each, no engagement, never a second page. Yet in the last 7 days "Resources" was your *most-viewed page* (40 views). Do not read that as content success.

**c) Your real front door works.** `/` has 553 views from 345 users at 28s — that's the genuine homepage. `/contact` holds visitors for **53s**, the longest of any real page: people who reach it are reading it properly. `/services` at 71 users and 37s is doing its job.

**d) Route mismatch.** `/request-demo` still receives traffic, but your live CTA is `/operations-assessment`. Another legacy remnant splitting your funnel.

---

## 4. Conversion

**Zero key events. Zero revenue. For the entire life of the property.**

Not one measurable conversion has ever been recorded. This is not a performance finding — it's an instrumentation finding. The code confirms it: `components/analytics/ConversionTracking.tsx` exists, is fully written, and is **mounted nowhere**. `AnalyticsTracker` fires pageviews only.

You therefore have no idea, and have never had any idea, how many people started your free assessment, how far they got, or where they dropped out. Your primary business funnel has never been observed.

---

## 5. Engagement quality

Overall engagement rate is **34.11%**, well below the 55–65% typical of a healthy B2B site. But that number is dragged down by the bot majority. **South Africa alone runs at 62.95%** — squarely healthy.

Read plainly: the site is not underperforming with its target audience. It is underperforming with robots, which is fine.

---

## 6. Technology

| Browser | Users | Engagement rate | Avg engagement |
|---|---|---|---|
| Chrome | 618 (84.8%) | 32.4% | 35s |
| Safari | 53 (7.3%) | 52.6% | 1m 08s |
| Firefox | 13 (1.8%) | 43.8% | 31s |
| Edge | 11 (1.5%) | 50% | 1m 32s |
| Opera | 7 (1.0%) | 14.3% | 9s |
| Samsung Internet | 7 (1.0%) | 54.6% | 1m 09s |
| Mozilla Compatible Agent | 4 (0.6%) | **0%** | 0s |
| Safari (in-app) | 3 | 66.7% | 1m 25s |
| BlackBerry / Internet Explorer | 2 / 2 | 0% | ~2s |

**Interpretation.** Chrome's 84.8% share is inflated by headless bots (headless Chrome reports as Chrome). The human signal is in the tail: **Safari at 1m 08s, Samsung Internet at 1m 09s, Safari in-app at 1m 25s, Edge at 1m 32s** — all far above the Chrome average. Safari + Samsung Internet is the classic South African mobile profile, and those users engage 2–3× longer than the average. "Mozilla Compatible Agent" at 0% engagement is a self-identifying bot.

**Gap:** device category (mobile vs desktop split) was not retrievable in this pass. Given your mobile-first-at-360px design mandate, this should be pulled before the next review.

---

## 7. Recent period, for context

**Last 7 days (24–30 Jul):** 140 users, 138 new, 491 events, 0 key events. Singapore accounted for **114 of the 140** (+1,167% week on week). South Africa: 3.

**Yesterday (30 Jul):** 3 users, 3 new users, 14 events.

The 7-day figure is a bot burst, not growth. Yesterday's 3 users is closer to your true baseline.

---

## What this audit is, and isn't

This is a **measurement and hygiene audit**, not a marketing performance audit — because there is not yet enough real traffic to evaluate marketing performance. Any conclusion drawn about copy, layout or conversion rate from 190 lifetime humans and zero tracked conversions would be invented.

### Three genuine business signals

1. **The proposition lands.** SA visitors give you 2m 50s and a 63% engagement rate. Positioning and copy are not your problem.
2. **Social is your best channel, empirically.** 70.7% engagement — the highest of any source. Your own posting outperforms everything else you do.
3. **Search has never started.** 42 organic sessions in the property's lifetime. Content marketing has produced nothing measurable to date.

### Priority actions

| # | Action | Why | Effort |
|---|---|---|---|
| P0 | **Retire the legacy `.html` site** (301 redirect to Next.js equivalents) | 42% of all recorded views are phantom; duplicate content is competing with your real pages | Half day |
| P0 | **Mount `ConversionTracking`** — `assessment_start`, `assessment_step_complete`, `assessment_submit`, `whatsapp_click`; mark submit as a key event | You have never observed your own funnel | ~1 hour |
| P1 | **Filter bots** — enable internal traffic exclusion; consider a datacentre-region filter | Two-thirds of your data is unusable as-is | 1 hour |
| P1 | **Fix the 404s** — 18 views in 7 days, 3rd most-viewed page | Pure loss, and a trust signal to any human who hits it | Half day |
| P2 | **Resolve `/request-demo` vs `/operations-assessment`** | Split funnel, split measurement | 1 hour |
| P2 | **Set up Search Console** and link it to GA4 | Still marked "To Do" in your notes from January | 1 hour |
| P2 | **Decide the canonical property** — `maruonline` vs `maruonline-v2` | Same sprawl pattern as the three design systems | 30 min |

### The strategic conclusion

With ~190 real humans since inception and zero tracked conversions, **your constraint is demand generation, not conversion optimisation.** No amount of page-level tuning changes a number that starts this small. Fix the measurement so the next 190 visitors are readable, kill the legacy site, and put the effort into the channels that work at your scale — Organic Social, referral, and the outbound/proof tracks already written into your 90-Day Growth Plan.

Re-run this audit in 90 days. The metric that matters between now and then is not traffic — it's whether `assessment_submit` has fired even once.
