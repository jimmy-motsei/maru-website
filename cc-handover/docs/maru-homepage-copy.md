# Maru Online — Homepage Copy (Approved)
**Date:** 13 April 2026 | **Status:** Ready for implementation

This is the approved copy for the Maru Online homepage. Implement section by section, matching existing component structure where possible, rebuilding where the structure doesn't support the new content.

---

## Page Metadata

**Title tag:** `Cut Your Operating Costs With AI-Powered Workflows | Maru Online`

**Meta description:** `We help businesses cut operating costs by building AI-powered workflows where it matters most. Free 30-minute discovery call — no pitch, just a conversation.`

---

## Section 1: Hero

**H1:**
AI-Powered Workflows That Cut Your Operating Costs

**H2:**
We find the manual tasks eating your team's time and replace them with AI workflows that actually work.

**Supporting line:**
Most businesses buy AI tools that never talk to each other. We connect them, automate what matters, and show you the savings.

**CTA (primary):**
Book a Free Discovery Call — No Pitch, Just a Conversation
→ links to /booking

**CTA (secondary):**
Or try our free Website Lead Grader →
→ links to /assessments/lead-score

---

## Section 2: The Problem

**Heading:**
Your Team Is Doing Work That AI Should Handle

**Body:**
Every business has them — the repetitive tasks that eat hours every week. Following up on leads manually. Copying data between systems. Chasing approvals via email. Writing the same reports over and over.

These aren't small problems. They're the reason your team is stretched, your costs are climbing, and your best people spend their days on admin instead of the work that actually grows the business.

AI can fix this. But only if it's implemented properly — connected to your tools, built around your actual workflows, and measured against real numbers. Not bought, installed, and forgotten.

---

## Section 3: How We Work

**Heading:**
Four Phases. No Jargon. No Mystery.

**Intro:**
Every engagement follows the same four-phase process. You know exactly where you are, what we're doing, and what you'll receive at every stage.

**Phase 1: Diagnose**
We learn how your business operates, audit your website and tools, and find where time and money are being wasted. You get a Diagnostic Report that shows the problems, the costs, and the priorities — in plain language.

*Your website is infrastructure, not a brochure. If it's slow, broken, or invisible to Google, nothing we build behind it will perform. We check the foundation first.*

**Phase 2: Design**
We map the AI-powered workflows that will replace your most expensive manual processes. You see exactly what we'll build, what it connects to, and what it will save you — before we write a line of code.

**Phase 3: Build**
We build in short sprints. You see progress as it happens. Your team is involved throughout — by the time we're done, they've been using the system for weeks, not learning it from scratch.

**Phase 4: Launch & Measure**
We go live and measure the results against your baseline. You get a Results Report: before vs. after, hours saved, costs reduced. If the numbers don't show savings, we fix it — that's included.

**CTA:**
Want the details? See exactly how each phase works →
→ links to /how-we-work (or /services — depending on site architecture)

---

## Section 4: What Makes This Different

**Heading:**
Why Businesses Choose Maru

**Item 1: We start with your website.**
Your website is the front door of every automated workflow. If it's slow or broken, nothing we build behind it will deliver. We audit the foundation first — and fix it before we build on it. Most consultancies skip this step entirely.

**Item 2: We measure everything.**
Most consultancies deliver a project and disappear. We deliver a Results Report that proves the savings — hours recovered, costs cut, errors eliminated. If it doesn't save you money, we haven't done our job.

**Item 3: We build with what you have.**
We don't sell software. We make your existing tools work together. If you need something new, we explain why and what it costs before we add it. No vendor lock-in, no unnecessary subscriptions.

**Item 4: We use AI to build AI workflows.**
The same approach we recommend to clients is how we run our own consultancy. Our research, analysis, and project management are AI-powered. If it works for us, we know it works.

**Item 5: Fixed scope, no surprises.**
You know the investment before we start. No hourly billing, no scope creep, no "this will cost extra" halfway through the project.

---

## Section 5: Who This Is For

**Heading:**
Built for Businesses Where the Team Is Stretched and the Tools Aren't Helping

**Body:**
Maru works best with established businesses — typically 10 to 100 people — where the team is doing too much manually, costs are climbing, and AI tools aren't connected to anything useful.

You might recognise yourself if:
- Your team spends hours on tasks that feel like they should be automated
- You've bought tools that promised to save time but created more admin
- Your website was built years ago and hasn't been touched since
- You know AI could help but you're not sure where to start — or who to trust

We don't care what industry you're in. We care whether your workflows are costing you more than they should.

**CTA:**
Not sure if this is right for you? Book a free 30-minute call. No pitch — we'll tell you honestly whether we can help.
→ links to /booking

---

## Section 6: The Founder

**Heading:**
20+ Years of Making Technology Work for Business

**Body:**
Maru Online was founded by Jimmy Motsei — a technologist with over two decades of experience helping businesses grow through better systems.

"Most businesses don't have an AI problem. They have a workflow problem. The tools exist. What's missing is someone to connect them properly, measure the results, and make sure your team can actually run the system after we leave. That's what we do."

Jimmy has worked with businesses across professional services, legal, tech, and education — from five-person teams to established companies with decades of track record. Every Maru engagement is led by Jimmy personally.

**CTA:**
Meet Jimmy — read the full story →
→ links to /about

---

## Section 7: Lead Capture / Entry Point

**Heading:**
See What Your Website Is Really Costing You

**Body:**
Your website is the foundation of every AI workflow. If it's underperforming, everything built on top of it underperforms too.

Our free Website Lead Grader analyses your site in 60 seconds and shows you what's working, what's broken, and what it's costing you in lost leads and wasted spend.

No email required. No sales call. Just a clear picture of where you stand.

**CTA:**
Grade My Website — Free, 60 Seconds →
→ links to /assessments/lead-score

---

## Footer

**Tagline:** AI-powered workflows that cut your operating costs.

**Navigation:** Home, Services, About, Contact

**Services links:** (align to locked process — specific service page names TBD)

**Contact:**
- hello@maruonline.com
- +27 63 564 3263 (WhatsApp)
- Johannesburg, South Africa
- Mon–Fri, 9am–6pm SAST

---

## Implementation Notes for Claude Code

1. **Remove first:** Strip all fabricated testimonials, unattributed stats, and "Revenue Systems" language before building new sections
2. **Preserve:** Keep existing component structure, design tokens, and layout patterns where they work
3. **Rebuild:** Sections where the content structure has fundamentally changed (process, proof, services)
4. **Check:** Run `tsc --noEmit` before every commit
5. **Reference:** Read `CLAUDE.md` at session start, consult `docs/maru-copywriting-rules.md` before writing any text
