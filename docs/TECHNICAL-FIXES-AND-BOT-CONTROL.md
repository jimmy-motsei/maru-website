# maruonline.com — Technical Fixes & Bot Control

**Date:** 4 August 2026
**Basis:** `maruonline-performance-session-notes.md` (28 Jul) + `GA4-AUDIT-SINCE-INCEPTION.md` (31 Jul), each finding re-verified against the live site and the `maru-website` repo on 4 Aug.
**Status of the old notes:** two items are already fixed (see "Already done"). Four new defects surfaced during verification.

---

## Already done since the notes were written

| Item | Evidence |
|---|---|
| Legacy `.html` 301s | `next.config.ts` lines 58–71 — `/index.html` → `/`, `/:path.html` → `/:path`. The P0 in the audit is closed. |
| `/insights` vs `/resources` nav split | `Nav.tsx` and `Footer.tsx` both now point to `/insights` only. Partially closed — see T6. |
| `ConversionTracking` mounted | `app/layout.tsx` line 74. Mounted, but mis-wired — see T3 and T4. |

---

# Part 1 — Technical fixes

## T1 — Site-wide canonical tag 🔴 CONFIRMED LIVE

**What's wrong.** `app/layout.tsx` line 37–39 sets `alternates.canonical: 'https://maruonline.com'` in the root layout. No page overrides it. Verified live: `https://maruonline.com/pricing` returns `canonical: https://maruonline.com`.

Every page on the site tells Google it is a duplicate of the homepage and should not be indexed independently. This is the single best explanation for 42 organic sessions across the property's entire lifetime.

**Fix.**

1. Delete the `alternates` block from `app/layout.tsx`.
2. Add a relative canonical to each page's own `metadata` export. `metadataBase` is already set, so relative paths resolve correctly:

```ts
export const metadata: Metadata = {
  title: 'Pricing | Maru Online',
  description: '…',
  alternates: { canonical: '/pricing' },
}
```

3. Seven routes have no `metadata` export at all — `/operations-assessment`, `/cookie-policy`, `/booking`, `/[slug]`, `/partners/[partnerId]`, `/report/[token]`, `/studio`. Add one to the first three. The last three should be `robots: { index: false, follow: false }`, not canonicalised — they are private or generated.

**Implications.**

- **Recovery is not instant.** Google must re-crawl before anything changes. Expect 2–6 weeks. Do not judge the fix, or commission content work off the result, before then.
- Submit the sitemap in Search Console after deploying to accelerate the re-crawl.
- Verify in GSC → Pages that "Alternate page with proper canonical tag" and "Duplicate, Google chose different canonical" drain over that window. If they don't, the theory is wrong and we look elsewhere.

**Effort:** ~1 hour.

---

## T2 — Open Graph identical site-wide, and no OG image exists 🔴 CONFIRMED LIVE

**What's wrong.** Two problems, one commit.

1. `openGraph.title`, `description` and `url` are set once in the root layout and never overridden. `/pricing` shared to LinkedIn or WhatsApp renders the homepage message and the homepage URL.
2. **There is no OG image anywhere in the repo.** No `opengraph-image.*` file, no `images` array in the metadata. But `twitter.card` is set to `summary_large_image` — a large-image card with no image, which renders blank.

**Fix.**

1. Add `openGraph: { title, description, url: '/pricing' }` to each page's metadata.
2. Add `app/opengraph-image.tsx` (Next generates a 1200×630 image at build time from JSX) or drop a static `app/opengraph-image.png` at 1200×630. Next wires it automatically.
3. Consider per-page OG images for `/pricing` and the four service pages later — not now.

**Implications.**

- This matters more here than it would in a first-world market. Your buyers forward links in WhatsApp groups; a link with no preview card reads as spam or as a broken site. It is a credibility cost, not just a CTR cost.
- Low risk, no SEO downside, ships in the same PR as T1.

**Effort:** ~2 hours including making the image.

---

## T3 — `page_view` is being counted twice 🔴 NEW — this corrupts your data

**What's wrong.** `AnalyticsTracker` fires GA4 pageviews. `ConversionTracking` (mounted in the root layout since the audit) *also* fires `trackEvent('page_view', …)` on every pathname change — `components/analytics/ConversionTracking.tsx` lines 17–20, which calls `window.gtag('event', 'page_view', …)`.

Every page load is recorded as two pageviews.

**Fix.** Delete the first `useEffect` (lines 17–20) from `ConversionTracking`. Pageview tracking belongs in `AnalyticsTracker` only. Keep the `trackEvent` function and the global exposure — those are what the assessment funnel uses.

**Implications.**

- **Your page-view numbers have been inflated since the day this was mounted.** Any before/after comparison across that date is invalid. Note the deploy date and treat it as a break in the series.
- Session and user counts are unaffected — only views and events.

**Effort:** 10 minutes. Do this before anything else, because everything else gets measured against it.

---

## T4 — Zero key events, and the cause is not what the audit said 🔴 HIGHEST ROI

**What's wrong.** The audit concluded `ConversionTracking` was "mounted nowhere". It is now mounted, and `useAssessmentTracking` *is* used in `app/operations-assessment/page.tsx`. So events are firing.

GA4 still shows zero key events because **the events have never been marked as Key Events in the GA4 admin**. `assessment_step`, `assessment_completed` and `email_captured` are arriving as ordinary custom events and being ignored by every conversion report.

**Fix.**

1. GA4 → Admin → Events → toggle "Mark as key event" on `assessment_completed` and `email_captured`.
2. If the events don't appear in the list, they haven't fired yet — complete one assessment yourself with DebugView open to seed them.
3. **Add a `whatsapp_click` event.** `wa.me/27635643263` appears in the footer and as a floating button on every page. It is plausibly your highest-intent action and it is completely untracked. Wire an `onClick` that calls `window.trackConversion('whatsapp_click', …)` and mark it as a key event too.
4. Same for the `hello@maruonline.com` mailto and the `/booking` Calendly load.

**Implications.**

- This is the cheapest high-value item on the list. Until it's done you cannot tell whether any marketing change worked — which makes the entire restructure unmeasurable.
- WhatsApp tracking in particular changes the picture. If the site's real job is credibility verification before a WhatsApp message (as the July reframe argued), then `whatsapp_click` — not form fills — is your actual success metric.

**Effort:** ~1 hour total.

---

## T5 — Every pageview triggers a serverless function 🟠 NEW

**What's wrong.** `ConversionTracking` POSTs to `/api/analytics` on every tracked event, including every pageview — `ConversionTracking.tsx` lines 41–48. Two-thirds of your traffic is bots. You are paying Vercel function invocations to log bot pageviews into a second system nobody reads.

**Fix.** Either remove the `fetch` entirely (GA4 already has the data), or gate it to real conversion events only — `assessment_completed`, `email_captured`, `whatsapp_click` — never `page_view`.

**Implication.** Check your Vercel usage dashboard before and after. At 906 lifetime sessions this isn't a large bill, but it scales with the bot traffic, not with your business.

**Effort:** 15 minutes.

---

## T6 — `/resources` is now an orphan page 🟠

**What's wrong.** Nav and footer both point to `/insights`. `/resources` is still live, still listed in `app/sitemap.ts` (line 15), and has no internal links pointing at it. GA4 shows it at 67 views / 67 users / 1.00 views per user / 0s engagement — a pure bot fingerprint.

Meanwhile `next.config.ts` line 73 still 301s `/knowledge` → `/resources`.

**Fix.** Pick one:

- **Kill it** — 301 `/resources` → `/insights`, remove both `/resources` entries from the sitemap, and *repoint* `/knowledge` → `/insights` so you don't create a two-hop redirect chain. Keep `/resources/popia-ai-checklist` or redirect it to its new home.
- **Keep it** — link it from the footer and give it a distinct purpose (downloadable assets) separate from `/insights` (articles).

**Implication.** Redirect chains (`/knowledge` → `/resources` → `/insights`) leak the little authority you have and are a known Search Console flag. If you kill `/resources`, fix `/knowledge` in the same commit.

**Effort:** 30 minutes.

---

## T7 — `vercel.json` rewrites point at routes that no longer exist 🟠 NEW

**What's wrong.** `vercel.json` lines 45–62 rewrite `/lead-score` → `/assessments/lead-score`, `/pipeline-audit` → `/assessments/pipeline-leak`, `/proposal-generator` → `/assessments/proposal`, `/tech-audit` → `/assessments/tech-audit`.

None of those `/assessments/*` routes exist in `app/`. And `next.config.ts` lines 103–122 separately 301s all four `/assessments/*` paths to `/operations-assessment`.

A rewrite is internal — it does not redirect. So these four public URLs rewrite to a route that isn't there.

**Fix.** Delete the four rewrites from `vercel.json`. Add the four short URLs to the `redirects()` block in `next.config.ts`, pointing straight at `/operations-assessment`.

**Implication.** If any of these URLs is printed on a business card, in a proposal, or in an old LinkedIn post, it is currently dead. Worth a quick check before you delete rather than redirect.

**Effort:** 20 minutes.

---

## T8 — Free vs R4,500 diagnostic contradiction 🟠 NOT A BUG — A DECISION

**What's wrong.** Verified live on `/pricing` itself, not just across pages:

- Mid-page: "Operations Diagnostic · 48 hours · **R4,500**"
- Bottom of the same page: "The diagnostic — Find your leaks first. **It costs nothing to look.** It takes 15 minutes. A written report delivered in 48 hours."

Both CTAs point at `/operations-assessment`. Same name, same 48 hours, same "written report", two prices, on one page.

**Fix.** This needs a naming decision from you, not a code change. The structure you want is almost certainly:

| Tier | Name | Price | Deliverable |
|---|---|---|---|
| Free | e.g. *Operations Snapshot* | R0 | 15-min self-serve questionnaire → automated summary |
| Paid | *Operations Diagnostic* | R4,500 | Intake brief + verification call + gap report + 90-day roadmap |

Then make the free tier explicitly the on-ramp: "The Snapshot shows you where to look. The Diagnostic tells you what it's costing you and what to fix first."

**Implications.**

- The commercial ladder itself is right for the SA SME market — a low-risk paid tripwire that qualifies out tyre-kickers before you spend delivery time. Don't change the ladder. Change the labels.
- This is volume-independent. It is worth fixing at 3 visitors a day as much as at 300, because the cost is credibility, not conversion rate.
- Once T4 is live you can actually measure whether the free tier feeds the paid one.

**Effort:** naming decision, then ~2 hours of copy.

---

## T9 — Confirm www vs non-www 🟡 UNVERIFIED

The GA4 data stream is registered as `https://www.maruonline.com` (audit, line 4). The site canonicalises, sitemaps and serves `https://maruonline.com`. Confirm that `www` 301s to the apex (or vice versa) and that only one form is reachable. If both serve 200, you have a second duplicate-content problem sitting underneath T1.

Could not be verified from the sandbox. Check with `curl -I` from your machine, or in GSC by adding both properties.

**Effort:** 15 minutes.

---

## T10 — No structured data 🟡 relevant to AI visibility

No `Organization`, `LocalBusiness`, `Service` or `FAQPage` schema anywhere in the app. The `/pricing` FAQ block is a ready-made `FAQPage` candidate, and the four service pages are `Service` candidates.

**Why it's on this list rather than a general SEO list:** GA4 already shows an "AI Assistant" channel — 4 sessions from ChatGPT. That channel resolves entities from structured data. If you want to be the answer when a Gauteng SME asks an assistant "who does AI automation for small businesses in South Africa", schema is how you become legible to it. It's a small bet with a long runway.

**Effort:** ~2 hours.

---

## Suggested sequence

| Order | Item | Why here |
|---|---|---|
| 1 | T3 — kill duplicate `page_view` | Everything else is measured against this. Fix the ruler first. |
| 2 | T4 — mark key events + add `whatsapp_click` | Cheapest, highest value. Nothing is provable without it. |
| 3 | T1 + T2 — canonicals and OG, one PR | The organic-traffic root cause, plus the sharing fix that rides along free. |
| 4 | T5, T6, T7 — hygiene | Cheap, low risk, clears the noise. |
| 5 | T9 — www check | Confirms T1 is complete. |
| 6 | T8 — pricing naming | Your decision, not a build task. Do it while T1 re-crawls. |
| 7 | T10 — schema | Long-horizon bet. |

T1–T7 and T9 together are roughly **one to one-and-a-half days of build**.

---

# Part 2 — Reducing bot traffic

## The honest framing first

You cannot stop bots visiting a public website. What you can do is split into two separate goals, which have very different costs:

- **Goal A — stop bots polluting your GA4 data.** Cheap, fast, and this is where nearly all the value is. Your data becomes readable.
- **Goal B — stop bots reaching the server.** Costs money or adds risk, and mostly buys you bandwidth savings you don't currently need at 906 lifetime sessions.

**Do A properly. Do the free parts of B. Don't buy anything yet.**

One more caution before the tactics: **do not block the bots you want.** Googlebot, Bingbot, and the AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot) are how you get found. You already have a small AI Assistant channel and it will grow. An over-aggressive block is far more expensive than the bot traffic it prevents.

---

## Layer 1 — Stop bots firing GA4 at all (client-side guard)

**Highest value, ~30 minutes.**

GA4's built-in bot filtering uses the IAB known-spiders list. Headless Chrome running on an AWS instance in Singapore is not on that list, which is exactly why it's 29% of your users.

Add a guard in `AnalyticsTracker` that refuses to initialise gtag when the client fingerprints as automated:

```ts
function isLikelyBot(): boolean {
  if (typeof navigator === 'undefined') return true
  // Selenium/Puppeteer/Playwright announce themselves
  if ((navigator as any).webdriver === true) return true
  // Headless browsers frequently report an empty language list
  if (!navigator.languages || navigator.languages.length === 0) return true
  // Explicit self-identifying agents
  if (/bot|crawler|spider|headless|monitor|preview|lighthouse/i.test(navigator.userAgent)) return true
  return false
}
```

**Implications.**

- `navigator.webdriver` alone catches a large share of headless automation. It is not exhaustive — sophisticated scrapers patch it.
- **Keep the rule narrow.** Hardened privacy browsers and some assistive tech can trip broad heuristics, and a false positive means you stop measuring a real customer. The three checks above are conservative; resist adding more.
- This is collection-level. It fixes data going forward, not history.

---

## Layer 2 — GA4 configuration

**~1 hour.**

1. **Admin → Data Streams → Configure tag settings → Define internal traffic.** Add your own IPs (office, home, phone hotspot). Then **Admin → Data Filters** → set the Internal Traffic filter to **Active** (it ships as "Testing", which does nothing). This removes your own QA visits, which at your volume are a meaningful share.
2. **Confirm "Exclude known bots and spiders" is on** (Admin → Data Streams → the stream → it's on by default, verify it).
3. **Build a "Real Markets" audience** — Country in (South Africa, United Kingdom, France, Netherlands, India) — and use it as the default comparison on every report. GA4 has no views, so this comparison is your working equivalent of a clean view.
4. **Save an Exploration** with Country = South Africa as your standing performance report. Make that, not the default Reports snapshot, the thing you look at.

**Implication.** Items 3 and 4 are analysis-level, not collection-level. Raw totals stay dirty; your working reports become honest. Combined with Layer 1, new data gets clean at collection and old data stays readable through the filter.

---

## Layer 3 — robots.txt (free, partial)

**~15 minutes.** `app/robots.ts` currently allows everything.

Explicitly allow the crawlers that bring value and disallow the SEO-scraper class that brings none:

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot',
                    'PerplexityBot', 'ClaudeBot'],
        allow: '/', disallow: ['/api/', '/_next/', '/report/', '/partners/'] },
      { userAgent: ['SemrushBot', 'AhrefsBot', 'MJ12bot', 'DotBot',
                    'Bytespider', 'DataForSeoBot'],
        disallow: '/' },
      { userAgent: '*',
        allow: '/', disallow: ['/api/', '/_next/', '/report/', '/partners/'] },
    ],
    sitemap: 'https://maruonline.com/sitemap.xml',
  }
}
```

**Implications.**

- **robots.txt is voluntary.** Well-behaved crawlers obey it; the datacentre traffic causing your Singapore problem will ignore it entirely. This is hygiene, not a solution.
- **Blocking SemrushBot and AhrefsBot cuts both ways.** If you ever want to run a Semrush or Ahrefs site audit *on your own site*, the block prevents it. Since you have Semrush tooling, consider allowing `SemrushBot-SA` (the site-audit agent) while blocking the general `SemrushBot`.
- Adding `/report/` and `/partners/` to disallow is worth doing regardless — those are token-scoped client pages that should never be indexed.

---

## Layer 4 — Edge blocking (only if the volume starts costing you)

**Free option — Cloudflare in front of Vercel.** You already run this exact stack on GrowthIQ, so there's no new learning cost. Cloudflare's free tier gives you Bot Fight Mode and basic firewall rules. Point the domain's nameservers at Cloudflare, proxy the record, enable Bot Fight Mode.

- *Caution:* Bot Fight Mode issues JS challenges. It can occasionally interfere with legitimate crawlers and with link previews (including WhatsApp's). Turn it on, then re-test a WhatsApp link preview and a GSC "Live Test" before you leave it running.

**Paid option — Vercel Firewall (Pro).** Rules by user agent, IP, or ASN. The precise fix would be blocking the datacentre ASNs producing your Singapore traffic on HTML routes only.

**Recommendation: do neither yet.** At your traffic volume the bots cost you data quality, not money, and Layers 1–3 fix data quality for free. Revisit if Vercel usage becomes a line item.

---

## Layer 5 — Verify the attractor is dead

The `/index.html` hammering (858 views from 7 users, 122 views per user) was a monitoring bot on the retired static site. The 301s are now in `next.config.ts`, so that traffic should decay as the bot re-resolves — but **it should be verified, not assumed.** Pull the Pages report for August and confirm `/index.html` has fallen away. If it hasn't, the bot is ignoring the redirect and belongs on a block list.

---

## What "good" looks like in 90 days

Not more traffic. Specifically:

1. `assessment_completed` and `whatsapp_click` have each fired at least once and are visible as key events.
2. Singapore is under 10% of users, or is filtered out of your standing report.
3. GSC → Pages shows the duplicate-canonical bucket draining, and more than 11 pages indexed.
4. Organic sessions are meaningfully above the lifetime run-rate of ~1.4/month.

Traffic volume is the wrong metric to watch between now and then — the constraint is demand generation, and none of the work above generates demand. What it does is make the demand work you do next *measurable*, and make the site *eligible* to be found.
