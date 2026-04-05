# WhatsApp Widget Spec — Maru Online

## WhatsApp number
+27 63 564 3263
wa.me link: https://wa.me/27635643263

## Pre-filled message
"Hi Jimmy, I found Maru Online and would like to find out more."

## Full URL
https://wa.me/27635643263?text=Hi%20Jimmy%2C%20I%20found%20Maru%20Online%20and%20would%20like%20to%20find%20out%20more.

---

## Floating widget spec

**Position:** fixed bottom-6 right-6 z-50 — above all content, below modals
**Size:** 56px × 56px circle
**Background:** WhatsApp green #25D366
**Icon:** WhatsApp SVG, white, 28px centred
**Opens:** new tab to wa.me URL

**Hover state:**
- scale: 1.08
- Tooltip left: "Chat with Jimmy" — DM Sans 13px, navy bg, warm text, pill shape
- Tooltip desktop only — hidden on mobile

**Pulse animation:**
- Soft ring pulses outward every 4 seconds
- CSS keyframe animation
- Disabled when prefers-reduced-motion

**Appearance trigger:**
- Hidden on load
- Appears after visitor scrolls 200px
- Framer Motion: y: 20 → 0, opacity 0 → 1 over 0.25s

**Dark mode:** No change — #25D366 works on both themes

**Accessibility:**
- aria-label="Chat with Jimmy on WhatsApp"
- role="link"
- Opens in new tab

---

## /whatsapp landing page — build after main site

Short page for LinkedIn links, QR codes, business cards.

**H1:** Chat directly with Jimmy

**Three pre-qualification buttons** (each opens WhatsApp with different pre-filled message):
1. "I'd like to book a diagnostic" → pre-fills: "Hi Jimmy, I'd like to book a diagnostic for my business."
2. "I want to understand the process first" → pre-fills: "Hi Jimmy, I'd like to understand how the Maru process works before committing."
3. "I have a quick question" → pre-fills: "Hi Jimmy, I have a quick question about Maru Online."

**Trust note below buttons:**
"Jimmy responds within 4 business hours. Monday–Friday, 8am–6pm SAST."

**Build this page after the main site is complete.**
