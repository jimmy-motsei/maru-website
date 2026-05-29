# CoWork: Maru Local File Structure Audit

> **Purpose:** Paste this into a CoWork session to audit whether the local file structure
> matches the Maru Online system map. Re-run any time the workspace feels like it's drifting.
> Last updated: 2026-05-29

---

TASK: Audit my local file structure against the Maru Online system map and report misalignments.

CONTEXT — the canonical structure (source of truth: ~/maru-website/MARU-SYSTEM.md):

Maru's repos form ONE system in THREE domains. Each live folder sits at ~/ (home).

1. THE CONSULTANCY (core business):
   - maru-website ............ shopfront + assessment tool        [live]
   - maru-lead-engine ........ Website Lead Grader (lead magnet)  [live]
   - maru-diagnostic-reports . GrowthIQ/SeokaneInc client engagement (diagnostic + framework docs) [live]
   - maru-whatsapp-business .. inbound capture via Make.com+Brevo [paused]

2. THE PRODUCT (separate B2C model):
   - maru-ai-academy ......... training platform                 [parked but live]

3. ARCHIVE (dead ends, reference only) — live under ~/maru-archive/:
   - maru-chatbot, maru-marketing-plan, maru-marketing-tool, maru-automations, maru-os
   Each archived folder must contain an ARCHIVED.md.

GOVERNING RULE: A repo not on this map doesn't exist. New experiments either earn a place
on the map (in MARU-SYSTEM.md) or live under ~/maru-archive/ from the start.

WHAT TO DO (read-only — do NOT move, delete, or edit anything yet):
1. Read ~/maru-website/MARU-SYSTEM.md to confirm the structure above is current.
2. List every "maru-*" folder under ~/ and under ~/maru-archive/.
3. Compare against the map and flag:
   a. Stray folders at ~/ that are NOT on the map (candidates for archive or for adding to the map).
   b. Folders the map lists as archived that are NOT inside ~/maru-archive/ (or vice versa).
   c. Archived folders missing an ARCHIVED.md.
   d. Duplicate or alternate copies of any repo (e.g. anything under ~/code/ or elsewhere) —
      the map expects each repo to live once, at ~/<name> (archived ones under ~/maru-archive/).
   e. Plaintext secrets/passwords in any config/env files (report path + line, do NOT print the value).
4. Cross-check each live repo's README has the "Maru System" status banner; flag any missing.

OUTPUT:
- A table: folder | location | on map? | status | issue (if any) | recommended action.
- A short list of recommended moves/fixes, ordered by priority.
- Do nothing destructive. Wait for my approval before executing any move, deletion, or edit.
