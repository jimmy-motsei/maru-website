# MARU-SYSTEM.md — The Maru Online System Map

> **Single source of truth for every Maru repo.** This is the mental model: not ten loose
> folders, but one system with three domains.
>
> **Governing rule:** A repo not on this map doesn't exist. New experiments either earn a
> place here or start life in `_archive/`. Update the status column the moment reality changes.
>
> Last updated: 2026-05-29 (archived maru-lead-engine — pipeline ported to maru-website; added Tools & Assets section; audit housekeeping)

---

## The three domains

```
MARU ONLINE
│
├── 1. THE CONSULTANCY   ← core business: AI integration for SA SMEs
│
├── 2. THE PRODUCT       ← separate business model: B2C training
│
├── 3. TOOLS & ASSETS    ← supporting repos (signatures, forms, etc.)
│
└── _archive/            ← dead ends & experiments, kept for reference only
```

---

## 1. The Consultancy

The lead funnel and shopfront. Pain-first positioning → free tool → diagnostic → build engagement.

| Repo | Purpose | Status | Live URL | Vercel project | GitHub |
|---|---|---|---|---|---|
| **maru-website** | Shopfront + operations-assessment tool + **Website Audit** (`/website-audit`, ported from the retired lead-engine) | 🟢 live | maruonline.com | `maru-website` | `jimmy-motsei/maru-website` |
| **maru-diagnostic-reports** | **Active GrowthIQ/SeokaneInc client engagement** — diagnostic + framework docs, multi-client. Canonical context: `GROWTHIQ-CONTEXT.md`. NOT a dead surface; do not merge/shim while engagement is live. | 🟢 live | maru-diagnostic-reports.vercel.app | `maru-diagnostic-reports` | `jimmy-motsei/maru-diagnostic-reports` |
| **maru-whatsapp-business** | Inbound WhatsApp capture → qualify → Calendly → Brevo (Make.com) | 🟡 paused | — (Make.com + Meta Cloud API) | — | `maru-online/maru-whatsapp-business` |

**Funnel shape:** WhatsApp / site → Website Audit (`/website-audit`) → Diagnostic report → discovery call → build.

**Noted future merges (not now):**
- ❌ `maru-diagnostic-reports` → lead-engine: **attempted 2026-05-29, reverted.** That repo is an
  active live client engagement (GrowthIQ/SeokaneInc), not a dead surface. Revisit only after the
  engagement stabilises.
- `maru-lead-engine` → eventually a section of `maru-website` (bigger job — separate analysis pipeline).
- Turborepo monorepo for all consultancy repos → reconsider only when there is a 2nd developer.

---

## 2. The Product

A different business model (B2C/product) bolted onto the consultancy. Own backend + billing.

| Repo | Purpose | Status | Live URL | Vercel project | GitHub |
|---|---|---|---|---|---|
| **maru-ai-academy** | AI productivity training platform; Paystack billing | ⚪ parked (live) | academy.maruonline.com | `maru-ai-academy` | `jimmy-motsei/Maru-Ai-Academy` |

Stack: Next.js (Vercel) + Express API on GCP Cloud Run + Neon PostgreSQL. Most complex/expensive
repo to maintain. Parked: leave running, no active investment, revisit deliberately.

---

## 3. Tools & Assets

Small repos that support the business but aren't customer-facing products. Live under `~/Projects/`.

| Repo | Purpose | Status | Location | GitHub |
|---|---|---|---|---|
| **maru-email-signature** | HTML email signature (all variants — standard, hello, Outlook) | 🟢 live | `~/Projects/maru-email-signature` | `jimmy-motsei/maru-email-signature` |
| **maru-briefing-forms** | Client briefing forms (web dev + AI solution); deployed on Netlify | 🟢 live | `~/Projects/maru-briefing-forms` | `jimmy-motsei/maru-briefing-forms` |

---

## 4. _archive/ — dead ends & experiments

Moved to **`~/maru-archive/`** on 2026-05-29 — out of the active workspace. Reference only; do not build on these without a deliberate decision. Each folder has an `ARCHIVED.md`; the archive has its own `README.md` index.

| Repo | Was | Why archived | Replaced by |
|---|---|---|---|
| **maru-lead-engine** | Standalone Website Lead Grader (Next.js) | Superseded by maru-website `/website-audit`. Pipeline ported 2026-05-29: hasVideo, generate-intelligence, SERPER key. Vercel project needs 301 → maruonline.com/website-audit | `maru-website` `/website-audit` |
| **maru-chatbot** | Gemini chatbot widget library | Never wired into the live site; stale since Dec 2025; Gemini-based | If "Customer Support Chatbots" service is ever delivered, rebuild on current stack |
| **maru-marketing-plan** | Electron app wrapping the marketing strategy | Over-engineered for a static doc | Da-Vi OS (Notion) + `/market` skills |
| **maru-marketing-tool** | One-off marketing audit (script + PDF) | Not a project — a single deliverable | `/market-audit` skill |
| **maru-automations** | Self-hosted n8n (docker-compose) | Abandoned when Make.com was chosen as managed platform | Make.com (see maru-whatsapp-business) |
| **maru-os** | Self-hosted Akaunting accounting + Notion export | Self-hosting fights the managed-first stack | Managed tooling / Da-Vi OS |

> ✅ Plaintext template passwords in `maru-automations` and `maru-os` were scrubbed to
> `__SET_VIA_ENV__` placeholders before the move (2026-05-29).

---

## Status legend

- 🟢 **live** — deployed, in active use, gets maintenance
- 🟡 **paused** — built but not running; finish-or-drop decision pending
- ⚪ **parked** — live but no active investment; revisit deliberately
- 🗄️ **archived** — reference only, not maintained
