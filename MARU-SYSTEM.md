# MARU-SYSTEM.md — The Maru Online System Map

> **Single source of truth for every Maru repo.** This is the mental model: not ten loose
> folders, but one system with three domains.
>
> **Governing rule:** A repo not on this map doesn't exist. New experiments either earn a
> place here or start life in `_archive/`. Update the status column the moment reality changes.
>
> Last updated: 2026-05-29

---

## The three domains

```
MARU ONLINE
│
├── 1. THE CONSULTANCY   ← core business: AI integration for SA SMEs
│
├── 2. THE PRODUCT       ← separate business model: B2C training
│
└── _archive/            ← dead ends & experiments, kept for reference only
```

---

## 1. The Consultancy

The lead funnel and shopfront. Pain-first positioning → free tool → diagnostic → build engagement.

| Repo | Purpose | Status | Live URL | Vercel project | GitHub |
|---|---|---|---|---|---|
| **maru-website** | Shopfront + operations-assessment tool | 🟢 live | maruonline.com | `maru-website` | `jimmy-motsei/maru-website` |
| **maru-lead-engine** | Website Lead Grader (top-of-funnel magnet) | 🟢 live | maru-lead-engine.vercel.app | `maru-lead-engine` | `jimmy-motsei/maru-lead-engine` |
| **maru-diagnostic-reports** | **Active GrowthIQ/SeokaneInc client engagement** — diagnostic + framework docs, multi-client. Canonical context: `GROWTHIQ-CONTEXT.md`. NOT a dead surface; do not merge/shim while engagement is live. | 🟢 live | maru-diagnostic-reports.vercel.app | `maru-diagnostic-reports` | `jimmy-motsei/maru-diagnostic-reports` |
| **maru-whatsapp-business** | Inbound WhatsApp capture → qualify → Calendly → Brevo (Make.com) | 🟡 paused | — (Make.com + Meta Cloud API) | — | `maru-online/maru-whatsapp-business` |

**Funnel shape:** WhatsApp / site → Lead Grader → Diagnostic report → discovery call → build.

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

## 3. _archive/ — dead ends & experiments

Moved to **`~/maru-archive/`** on 2026-05-29 — out of the active workspace. Reference only; do not build on these without a deliberate decision. Each folder has an `ARCHIVED.md`; the archive has its own `README.md` index.

| Repo | Was | Why archived | Replaced by |
|---|---|---|---|
| **maru-chatbot** | Gemini chatbot widget library | Never wired into the live site; stale since Dec 2025; Gemini-based | If "Customer Support Chatbots" service is ever delivered, rebuild on current stack |
| **maru-marketing-plan** | Electron app wrapping the marketing strategy | Over-engineered for a static doc | Da-Vi OS (Notion) + `/market` skills |
| **maru-marketing-tool** | One-off marketing audit (script + PDF) | Not a project — a single deliverable | `/market-audit` skill / fold script into lead-engine |
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
