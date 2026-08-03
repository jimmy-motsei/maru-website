# Handover Package — Setup Instructions

## What's In This Package

```
CLAUDE.md                           → Goes in your repo root (~/maru-website/)
docs/
  maru-positioning-brief.md         → Market data, competitive landscape, locked positioning
  maru-how-we-work.md               → Four-phase process, client-facing language
  maru-homepage-copy.md             → Approved homepage copy, section by section
  maru-copywriting-rules.md         → Voice, tone, language rules for all site copy
```

## Setup Steps

### 1. Copy files into your repo

```bash
cd ~/maru-website

# If you already have a CLAUDE.md, back it up first
cp CLAUDE.md CLAUDE.md.backup 2>/dev/null

# Copy the new CLAUDE.md to repo root
cp /path/to/handover/CLAUDE.md .

# Create docs directory if it doesn't exist
mkdir -p docs

# Copy all foundational docs
cp /path/to/handover/docs/*.md docs/
```

### 2. Commit to git

```bash
git add CLAUDE.md docs/
git commit -m "Add positioning brief, process doc, homepage copy, and copywriting rules for website rebuild"
```

### 3. Open Claude Code

```bash
cd ~/maru-website
claude
```

CC will automatically read CLAUDE.md on startup and know:
- What Maru's positioning is
- What copy rules to follow
- Where to find the approved homepage copy
- What to remove first (fabricated testimonials, rejected framing)
- What to build

### 4. First Session — Suggested Prompts

**Start with the critical fixes:**
```
Read CLAUDE.md and docs/maru-homepage-copy.md. 
The current site has fabricated testimonials and copy that doesn't match our locked positioning. 
Start by: 
1. Removing the three fabricated testimonial sections (TechFlow, Khulisa, AfriStyle) 
2. Updating the hero section with the approved copy from docs/maru-homepage-copy.md
3. Run tsc --noEmit to verify the build still passes
```

**Then section by section:**
```
Now rebuild the "problem" section using Section 2 from docs/maru-homepage-copy.md. 
Follow the copywriting rules in docs/maru-copywriting-rules.md.
```

**For the process section:**
```
Replace the current "Integration Process" section with the four-phase process 
from Section 3 of docs/maru-homepage-copy.md. The current site shows 
"Audit → Architect → Integrate → Hand Over" — this should be 
"Diagnose → Design → Build → Launch & Measure" per docs/maru-how-we-work.md.
```

### 5. Rules for Ongoing Work

- **Always reference CLAUDE.md** — it's the single source of truth for positioning
- **Never write copy without checking docs/maru-copywriting-rules.md** — especially the language table
- **Never fabricate proof** — no fake testimonials, no unattributed stats
- **Run `tsc --noEmit` before every push** — TypeScript errors break Vercel deploys
- **When in doubt about copy tone**, ask: "Would a law firm partner or a manufacturing MD understand this in 3 seconds?" If not, simplify.

## What Comes Next

Once the homepage is rebuilt, the same process applies to:

| Page | Copy Source | Priority |
|------|-----------|----------|
| About | Needs writing — founder visibility hub | High |
| Services | Align to four-phase process | High |
| Contact | Simplify, add booking link | Medium |
| How We Work | New page based on docs/maru-how-we-work.md | High |
| Resources | Currently 404 — build or redirect | Critical |
| Assessment tools | Add results pages + booking bridges | High |

Each page gets the same treatment: audit current copy against positioning → write approved copy in a doc → hand to CC for implementation.
