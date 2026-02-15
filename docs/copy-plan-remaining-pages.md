# Copy Plan: Remaining Pages (Excluding Homepage and Knowledge)

## Scope
- Included: all public non-homepage routes in `app/**/page.tsx` except removed `/knowledge`.
- Excluded from copy rewrites: admin/API/studio-only surfaces (`/admin/*`, `/api/*`, `/studio/*`).
- Approach: compress and clarify existing meaning, preserve positioning and SEO intent, avoid layout changes unless needed for wrapping/stability.

## Route Inventory
| Route | File Path | Components Involved | Notes |
|---|---|---|---|
| `/about` | `app/about/page.tsx` | `app/about/AboutContent.tsx` | Long narrative section; high compression opportunity. |
| `/contact` | `app/contact/page.tsx` | `SplitHeadline`, form labels/status copy | Minimal body copy; tighten helper/support text. |
| `/services` | `app/services/page.tsx` | `app/services/ServicesContent.tsx`, `AshleySpine`, `ServiceNeedHelpCTA` | Card descriptions and hero CTA labels can be tighter. |
| `/services/ai-revenue-diagnostic` | `app/services/ai-revenue-diagnostic/page.tsx` | `SplitHeadline`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern. |
| `/services/custom-ai-solution-build` | `app/services/custom-ai-solution-build/page.tsx` | `SplitHeadline`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern. |
| `/services/ai-training-capability-building` | `app/services/ai-training-capability-building/page.tsx` | `SplitHeadline`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern. |
| `/services/ongoing-ai-support-optimization` | `app/services/ongoing-ai-support-optimization/page.tsx` | `SplitHeadline`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern. |
| `/services/lead-generation` | `app/services/lead-generation/page.tsx` | `SplitHeadline`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern. |
| `/services/sales-systems` | `app/services/sales-systems/page.tsx` | `SplitHeadline`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern. |
| `/services/office-automation` | `app/services/office-automation/page.tsx` | `app/services/office-automation/OfficeAutomationContent.tsx`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern via content component. |
| `/services/whatsapp-solutions` | `app/services/whatsapp-solutions/page.tsx` | `SplitHeadline`, `ServiceAccordion`, `ServiceNeedHelpCTA` | Shared service-page pattern. |
| `/services/customer-support-chatbots` | `app/services/customer-support-chatbots/page.tsx` | `ServiceHero`, `OtherServices`, FAQ/process/problem cards | Unique long-form service page; highest copy volume. |
| `/ai-readiness` | `app/ai-readiness/page.tsx` | Multi-step assessment flow, tier messaging | Needs concise intro/outcome copy. |
| `/ai-implementation-assessment` | `app/ai-implementation-assessment/page.tsx` | Re-export of `/ai-readiness` | Alias route; no separate rewrite. |
| `/ai-implementation-audit` | `app/ai-implementation-audit/page.tsx` | Re-export of `/ai-readiness` | Alias route; no separate rewrite. |
| `/assessments/lead-score` | `app/assessments/lead-score/page.tsx` | `LeadScorePage`, `MultiStepForm` | Tighten value props and result helper text. |
| `/assessments/pipeline-leak` | `app/assessments/pipeline-leak/page.tsx` | `PipelineLeakPageNew` | Tighten upload instructions, cards, result descriptors. |
| `/assessments/tech-audit` | `app/assessments/tech-audit/page.tsx` | `TechAuditPageNew` | Tighten onboarding and benefit copy. |
| `/assessments/proposal` | `app/assessments/proposal/page.tsx` | `ProposalPageNew` | Tighten wizard step and feature descriptions. |
| `/pricing` | `app/pricing/page.tsx` | Pricing tiers + feature lists | Simplify plan descriptions and CTA labels. |
| `/booking` | `app/booking/page.tsx` | Multi-step booking form + Calendly embed | Reduce instruction text and step labels. |
| `/briefing` | `app/briefing/page.tsx` | `FeatureCard`, `SectionTitle` | Hero paragraph too long; card blurbs can be tighter. |
| `/briefing/ai-solution` | `app/briefing/ai-solution/page.tsx` | Briefing form inputs/labels | Clarify prompts and reduce helper verbosity. |
| `/briefing/web-development` | `app/briefing/web-development/page.tsx` | Briefing form inputs/labels | Clarify prompts and reduce helper verbosity. |
| `/briefing/support` | `app/briefing/support/page.tsx` | Briefing form inputs/labels | Clarify prompts and reduce helper verbosity. |
| `/resources/popia-ai-checklist` | `app/resources/popia-ai-checklist/page.tsx` | `POPIAChecklistPageClient` | Long risk/explainer copy; preserve compliance keywords. |
| `/website-audit` | `app/website-audit/page.tsx` | Multi-step analyzer + result messaging | Tighten intro, status, and report copy. |
| `/careers` | `app/careers/page.tsx` | `LegalLayout` + many sections/cards | Very verbose; convert many paragraphs to concise bullets. |
| `/cookie-policy` | `app/cookie-policy/page.tsx` | `LegalLayout` | Legal copy; light-touch only (clarity edits, no legal meaning change). |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | `LegalLayout` | Legal copy; light-touch only (clarity edits, no legal meaning change). |
| `/terms-conditions` | `app/terms-conditions/page.tsx` | `LegalLayout` | Legal copy; light-touch only (clarity edits, no legal meaning change). |
| `/[slug]` | `app/[slug]/page.tsx` | Sanity-driven dynamic page | Copy source is CMS content; plan requires content-model guidance rather than hardcoded edits. |
| `/partners/[partnerId]` | `app/partners/[partnerId]/page.tsx` | Partner dynamic route | Dynamic/partner-specific content; likely out-of-scope unless static copy exists in component. |

## Copy Audit and Rewrite Plan

## Group 1: Core Marketing Pages (`/about`, `/contact`, `/services`, `/pricing`)
- Current intent: establish trust, explain offer, convert to consultation/service exploration.
- Verbose/repetitive areas:
  - `/about`: repeated narrative statements about methodology and founder journey.
  - `/services`: card descriptions are long and overlap with bullets.
  - `/pricing`: plan descriptions and feature rows include filler phrasing.
  - `/contact`: trust note and prompts can be cleaner.
- Rewrite direction:
  - Keep outcome-led headline style.
  - Reduce each section intro to one sentence.
  - Move repeated claims into 3-5 bullets.
  - Tighten CTA labels to 2-4 words.
- Target lengths:
  - Hero subhead <= 22 words.
  - Section intro <= 18 words.
  - Card descriptions <= 12-16 words.
  - Bullets 3-5 items, <= 8-10 words each.
- SEO keywords to preserve:
  - `AI-powered revenue systems for SMEs`, `AI services`, `POPIA compliance`, `South African SMEs`.

## Group 2: Service Detail Pages (Shared Pattern)
- Routes:
  - `/services/ai-revenue-diagnostic`
  - `/services/custom-ai-solution-build`
  - `/services/ai-training-capability-building`
  - `/services/ongoing-ai-support-optimization`
  - `/services/lead-generation`
  - `/services/sales-systems`
  - `/services/office-automation`
  - `/services/whatsapp-solutions`
- Current intent: explain outcome, delivery scope, and related services.
- Verbose/repetitive areas:
  - “Our Approach and Work Specifics” intro uses two long paragraphs with overlapping claims.
  - Accordion descriptions are often 20+ words and can be trimmed without meaning loss.
  - “Other Services” descriptions duplicate cross-page language.
- Rewrite direction:
  - Keep unique differentiators per service.
  - Convert approach section into one sentence + bullets.
  - Trim accordion copy to mechanism-first descriptions.
  - Normalize CTA labels (`Book a Call`, `Get Assessment`, `View Service`).
- Target lengths:
  - Approach intro <= 18 words.
  - Accordion description <= 16 words.
  - Bullet features <= 10 words each.
  - Related service descriptions <= 14 words.
- SEO keywords to preserve:
  - service-specific terms (e.g., `AI revenue diagnostic`, `custom AI solution`, `POPIA-compliant architecture`, `workflow automation`, `sales systems`).

## Group 3: Unique Long-Form Service Page (`/services/customer-support-chatbots`)
- Current intent: diagnose support pain, explain implementation model, show process/use-cases, convert.
- Verbose/repetitive areas:
  - Problem/solution descriptions are paragraph-heavy.
  - Process step descriptions exceed scan-friendly length.
  - FAQs contain repeated “platform vs implementation” language.
- Rewrite direction:
  - Keep section structure; reduce body copy to tight mechanism lines.
  - Replace long paragraphs with 3 bullets where possible.
  - Keep differentiators: knowledge training, human handoff, system integration, ongoing optimization.
- Target lengths:
  - Hero subhead <= 22 words.
  - Problem/solution card body <= 16 words.
  - Process descriptions <= 16 words.
  - FAQ answers <= 30 words each.
- SEO keywords to preserve:
  - `customer support chatbots`, `knowledge base`, `CRM integration`, `human handoff`, `South Africa`.

## Group 4: Assessment and Audit Funnels (`/ai-readiness`, `/assessments/*`, `/website-audit`)
- Routes:
  - `/ai-readiness` (+ aliases)
  - `/assessments/lead-score`
  - `/assessments/pipeline-leak`
  - `/assessments/tech-audit`
  - `/assessments/proposal`
  - `/website-audit`
- Current intent: collect inputs, show value, gate or convert into consultation.
- Verbose/repetitive areas:
  - Intro paragraphs over-explain what tool does.
  - Feature cards repeat generic “AI-powered” language.
  - Step descriptions in forms can be reduced.
- Rewrite direction:
  - Keep confidence-building language but shorten to direct outcomes.
  - Tighten step descriptions and placeholders.
  - Make all CTA verbs consistent (`Analyze`, `Generate`, `Get Results`, `Book Call`).
- Target lengths:
  - Intro subhead <= 22 words.
  - Feature card text <= 12-16 words.
  - Step helper copy <= 12 words.
  - CTA labels 2-4 words.
- SEO keywords to preserve:
  - `AI readiness assessment`, `lead generation score`, `pipeline leak`, `tech stack audit`, `website audit`, `proposal generator`.

## Group 5: Briefing and Conversion Support (`/briefing*`, `/booking`, `/resources/popia-ai-checklist`)
- Current intent: intake and qualification before sales/support execution.
- Verbose/repetitive areas:
  - `/briefing` hero paragraph is long and compound.
  - `/resources/popia-ai-checklist` has long explanatory paragraphs and warning copy.
  - `/booking` step copy can be tighter while retaining clarity.
- Rewrite direction:
  - Keep workflow clarity, shorten every helper sentence.
  - In POPIA resource, retain legal/compliance claims and key stats while reducing narrative text.
- Target lengths:
  - Section intro <= 18 words.
  - Card descriptions <= 12-16 words.
  - Form helper copy <= 8-10 words.
  - CTA labels <= 4 words where possible.
- SEO keywords to preserve:
  - `POPIA-compliant`, `AI checklist`, `South African businesses`, `book consultation`, `project briefing`.

## Group 6: Careers and Legal Content (`/careers`, `/cookie-policy`, `/privacy-policy`, `/terms-conditions`)
- Current intent: employer brand + legal transparency.
- Verbose/repetitive areas:
  - `/careers` has repeated mission language and long paragraphs in nearly every section.
  - Legal pages should not be materially rewritten.
- Rewrite direction:
  - Careers: convert dense paragraphs into concise bullets and shorter section intros.
  - Legal pages: only edit for readability where safe; no substantive legal meaning changes.
- Target lengths:
  - Careers section intro <= 18 words.
  - Careers bullets <= 10 words each.
  - Legal pages: no hard length target; prioritize legal integrity.
- SEO keywords to preserve:
  - `careers`, `AI consulting`, `South Africa`, `privacy policy`, `terms and conditions`, `cookie policy`.

## Group 7: Dynamic CMS/Partner Routes (`/[slug]`, `/partners/[partnerId]`)
- Current intent: dynamic marketing/partner content.
- Verbose/repetitive areas: content likely lives in CMS/data source rather than static page code.
- Rewrite direction:
  - Define editorial rules to apply in CMS entries.
  - Do not hardcode rewrites in rendering templates unless shared static blocks exist.
- Target lengths:
  - Use same global targets as homepage standard for authored body copy.
- SEO keywords to preserve:
  - Existing slug/partner-specific target keywords from CMS metadata.

## Commit Plan (Small, Reviewable)
1. `content: simplify about and contact copy`
2. `content: simplify services index copy`
3. `content: simplify shared service detail copy`
4. `content: simplify customer support chatbot page copy`
5. `content: simplify assessments and website audit copy`
6. `content: simplify briefing and booking copy`
7. `content: simplify pricing and popia resource copy`
8. `content: simplify careers copy`
9. `content: apply safe readability edits to legal pages`

## QA Gates
- Build passes in production mode.
- Visual tests pass; update baselines only for intentional copy-driven diffs.
- No heading style regressions or IA changes.
- No broken links introduced.
