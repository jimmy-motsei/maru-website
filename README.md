# Maru Online Email Signature Kit

This folder contains the production-ready HTML signature for Jimmy Motsei, matching the Ashley kit styling and optimized for Spark Email, Outlook (Win/Mac), Apple Mail, Gmail, and mobile clients.

## Deliverables
- `signature.html` – paste-ready markup (see the edit block at the top of the file).
- `brand-tokens.json` – extracted palette, spacing, and radius tokens mapped to email-safe values.
- `assets/signature/logo@2x.png` – 192×192 PNG (renders at 96×96).
- `assets/signature/{linkedin,whatsapp,youtube}@2x.png` – 48×48 PNG icons (render at 24×24).
- `preview-desktop.png`, `preview-mobile.png` – visual references (1× scale).

## Hosting the Assets
1. **GitHub Pages** (recommended if the site already deploys from this repo):
   - Copy `assets/signature/` into the published branch (e.g. `gh-pages` or `docs/`).
   - Commit & deploy; confirm the public URLs match the ones referenced in `signature.html` (e.g. `https://maruonline.com/assets/signature/logo@2x.png`).
2. **Netlify / Static Host**:
   - Upload the four PNGs to the `/assets/signature/` path of the hosted site.
   - Keep the filenames identical; update the absolute URLs inside `signature.html` if the domain differs.
3. **CDN / DAM**:
   - Ensure HTTPS delivery and that caching is enabled; update the signature URLs accordingly.

> **Tip:** After hosting, open each image URL in a private browser window to confirm public access before rolling out the signature.

## Updating Signature Content
- Open `signature.html` in a code editor.
- The comment block at the top lists all placeholders (`{{NAME}}`, `{{CTA_URL}}`, etc.). Replace the values within the markup below it.
- Keep link protocols intact: `mailto:`, `tel:`, and full `https://` URLs.
- For brand integrity, reuse the sizes, padding, and colors defined in `brand-tokens.json` when adding new elements.

## Adding the Signature to Spark (Mac & iOS)
1. Open **Spark** → **Settings** → **Signatures**.
2. Create a new signature and toggle **“Always match my default message font”** *off*.
3. Choose **“Edit HTML”** (Mac) or paste into the HTML field (iOS via Spark Cloud editor).
4. Paste the full contents of `signature.html`.
5. Save, then send a test email to yourself and one Outlook recipient to confirm rendering.

## Known Client Quirks & Quick Fixes
- **Outlook (Windows) PNG halos**: All assets sit on solid teal or transparent backgrounds; keep anti-aliasing by hosting the provided PNGs. Avoid re-exporting with transparency against gradients.
- **Outlook line-height compression**: If text appears cramped, ensure Outlook is set to compose in HTML and that the signature is inserted without additional formatting.
- **Gmail clipping**: Gmail trims emails >102KB. This signature is ~7KB; avoid adding large inline images or long disclaimers.
- **iOS/Apple Mail dark mode**: Primary text uses #1F2937 on white and #6B7280 for muted copy. Do not invert colors; if you add content, stay above 4.5:1 contrast.
- **Spark mobile scaling**: The button uses a minimum width and 48px height; leave padding as-is to preserve tap targets.

## Testing Matrix (manual)
- **Desktop**: Outlook Win 2019/365, Outlook Mac, Apple Mail, Spark Mac.
- **Web**: Gmail Web, Outlook.com.
- **Mobile**: iOS Mail, Gmail iOS/Android, Spark iOS.
- Validate link targets, CTA button rendering, icon spacing, and dark-mode legibility.
- Re-run tests after hosting assets or editing content.

## Compact Variant
Optional: create `signature-compact.html` (hide the avatar, condense into a single row) if you need an ultra-narrow fallback. You can reuse the same tokens and icons; keep the CTA button at least 44px tall.
