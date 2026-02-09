# Ashley to Maru Token Inventory

Source of truth (read-only): `/Users/ramoloimotsei/Ashley-html-kit/scss/_variables.scss` with supporting usage from `_common.scss` and `_components.scss`.

## Core Inventory
| Token name (Ashley) | Value | Category | Notes | Proposed semantic name in maru-website |
|---|---|---|---|---|
| `$font-1` | `'Outfit', sans-serif` | Typography | Primary font family | `--font-family-sans` |
| `$dark` | `rgba(0, 0, 0, 1)` | Color | Main dark surface/text | `--color-surface`, `--color-text-primary` |
| `$light` | `rgba(255, 255, 255, 1)` | Color | Inverse surface/text | `--color-surface-inverse`, `--color-text-inverse` |
| `$accent` | `rgba(255, 152, 0, 1)` | Color | Ashley source value; overridden in Maru brand to `#00A1A5` | `--color-action-primary` |
| `$dt-2` | `rgba(0,0,0,0.02)` | Color alpha | Dark tint scale | `--color-alpha-black-2` |
| `$dt-5` | `rgba(0,0,0,0.05)` | Color alpha | Dark tint scale | `--color-alpha-black-5` |
| `$dt-10` | `rgba(0,0,0,0.1)` | Color alpha | Dark tint scale | `--color-alpha-black-10` |
| `$dt-20` | `rgba(0,0,0,0.2)` | Color alpha | Dark tint scale | `--color-alpha-black-20` |
| `$dt-30` | `rgba(0,0,0,0.3)` | Color alpha | Dark tint scale | `--color-alpha-black-30` |
| `$dt-40` | `rgba(0,0,0,0.4)` | Color alpha | Dark tint scale | `--color-alpha-black-40` |
| `$dt-50` | `rgba(0,0,0,0.5)` | Color alpha | Body text default in Ashley | `--color-text-muted`, `--color-alpha-black-50` |
| `$dt-60` | `rgba(0,0,0,0.6)` | Color alpha | Secondary dark text | `--color-text-secondary`, `--color-alpha-black-60` |
| `$dt-70` | `rgba(0,0,0,0.7)` | Color alpha | Dark tint scale | `--color-alpha-black-70` |
| `$dt-80` | `rgba(0,0,0,0.8)` | Color alpha | Dark tint scale | `--color-alpha-black-80` |
| `$dt-90` | `rgba(0,0,0,0.9)` | Color alpha | Dark tint scale | `--color-alpha-black-90` |
| `$dt-95` | `rgba(0,0,0,0.95)` | Color alpha | Elevated dark overlay | `--color-surface-elevated`, `--color-alpha-black-95` |
| `$lt-5` | `rgba(255,255,255,0.05)` | Color alpha | Inverse tint scale | `--color-alpha-white-5` |
| `$lt-10` | `rgba(255,255,255,0.1)` | Color alpha | Inverse border/overlay | `--color-alpha-white-10`, `--color-border-inverse-subtle` |
| `$lt-20` | `rgba(255,255,255,0.2)` | Color alpha | Inverse tint scale | `--color-alpha-white-20` |
| `$lt-30` | `rgba(255,255,255,0.3)` | Color alpha | Inverse tint scale | `--color-alpha-white-30` |
| `$lt-40` | `rgba(255,255,255,0.4)` | Color alpha | Inverse muted text | `--color-alpha-white-40` |
| `$lt-50` | `rgba(255,255,255,0.5)` | Color alpha | Inverse tint scale | `--color-alpha-white-50` |
| `$lt-60` | `rgba(255,255,255,0.6)` | Color alpha | Inverse tint scale | `--color-alpha-white-60` |
| `$lt-70` | `rgba(255,255,255,0.7)` | Color alpha | Inverse muted text | `--color-text-inverse-muted`, `--color-alpha-white-70` |
| `$lt-80` | `rgba(255,255,255,0.8)` | Color alpha | Inverse tint scale | `--color-alpha-white-80` |
| `$lt-90` | `rgba(255,255,255,0.9)` | Color alpha | Inverse high-contrast text | `--color-alpha-white-90` |
| `$lt-95` | `rgba(255,255,255,0.95)` | Color alpha | Inverse tint scale | `--color-alpha-white-95` |
| `$gs-5` | `rgba(242,242,242,1)` | Grayscale | Light muted background | `--color-surface-muted`, `--color-gray-5` |
| `$gs-10` | `rgba(229,229,229,1)` | Grayscale | Neutral surface/border | `--color-gray-10` |
| `$gs-20` | `rgba(204,204,204,1)` | Grayscale | Neutral | `--color-gray-20` |
| `$gs-30` | `rgba(178,178,178,1)` | Grayscale | Neutral | `--color-gray-30` |
| `$gs-40` | `rgba(153,153,153,1)` | Grayscale | Neutral | `--color-gray-40` |
| `$gs-50` | `rgba(128,128,128,1)` | Grayscale | Neutral | `--color-gray-50` |
| `$gs-60` | `rgba(102,102,102,1)` | Grayscale | Neutral | `--color-gray-60` |
| `$gs-70` | `rgba(77,77,77,1)` | Grayscale | Neutral | `--color-gray-70` |
| `$gs-80` | `rgba(51,51,51,1)` | Grayscale | Neutral | `--color-gray-80` |
| `$gs-90` | `rgba(26,26,26,1)` | Grayscale | Neutral | `--color-gray-90` |
| `$gs-95` | `rgba(13,13,13,1)` | Grayscale | Near-black neutral | `--color-gray-95` |
| `$h1` | `86px` | Typography scale | Display heading | `--text-h1` |
| `$h2` | `68px` | Typography scale | Heading | `--text-h2` |
| `$h3` | `42px` | Typography scale | Heading | `--text-h3` |
| `$h4` | `28px` | Typography scale | Heading | `--text-h4` |
| `$h5` | `20px` | Typography scale | Heading | `--text-h5` |
| `$h6` | `18px` | Typography scale | Heading | `--text-h6` |
| `$text` | `16px` | Typography scale | Body base | `--text-body` |
| `$t-sm` | `.2s cubic-bezier(0,0,0.3642,1)` | Motion | Fast interaction transition | `--motion-sm`, `--ease-ashley` |
| `$t-md` | `.4s cubic-bezier(0,0,0.3642,1)` | Motion | Standard transition | `--motion-md`, `--ease-ashley` |
| `$t-lg` | `.6s cubic-bezier(0,0,0.3642,1)` | Motion | Slow transition | `--motion-lg`, `--ease-ashley` |

## Non-variable recurring Ashley values (from usage)
| Ashley usage value | Category | Notes | Proposed semantic name in maru-website |
|---|---|---|---|
| `120px` | Spacing | Standard section vertical rhythm | `--space-section`, `--space-section-y` |
| `90px` | Spacing | Tablet/mobile section rhythm | `--space-section-mobile`, `--space-section-y-mobile` |
| `60px` | Spacing | Common block padding/margin | `--space-block-lg` |
| `30px` | Spacing | Common inline and block gap | `--space-block-md`, `--space-inline-md` |
| `15px` | Spacing | Compact inline gap/padding | `--space-inline-sm` |
| `70px` | Size/Radius | Large control height and pill radius | `--size-control-lg`, `--radius-pill` |
| `60px` | Size | Medium control height | `--size-control-md` |
| `40px` | Size | Small icon/control size | `--size-control-sm` |
| `12px` + `letter-spacing: 2px` | Typography label style | Uppercase eyebrow/meta labels | `--tracking-label` + label utility pattern |
| `inset 0 0 0 4px $light` | Shadow | Light inset ring treatment | `--shadow-inset-ring-light` |
| `inset 0 0 0 4px $accent` | Shadow | Accent inset ring treatment | `--shadow-inset-ring-accent` |

## Notes
- Bootstrap plugin CSS variables were intentionally excluded from migration because they are framework-level defaults, not Ashley brand tokens.
- Current migration keeps legacy Maru utility aliases (`deep-navy`, `electric-cyan`, `warm-amber`) mapped to Ashley-driven semantics for compatibility while refactors progress.
- Repo-wide split headline tokenization is implemented via `--font-weight-headline-light` and `--font-weight-headline-strong`, consumed by `.maru-headline-split-light` and `.maru-headline-split-strong` in `/Users/ramoloimotsei/maru-website/app/globals.css`.

## Reusable Headline API
- Component: `/Users/ramoloimotsei/maru-website/components/ui/SplitHeadline.tsx`
- Pattern:
  - `leadingText` renders with `--font-weight-headline-light`
  - `emphasisText` renders with `--font-weight-headline-strong`
- Example usage is live in:
  - `/Users/ramoloimotsei/maru-website/components/homepage/Hero.tsx`
  - `/Users/ramoloimotsei/maru-website/app/contact/page.tsx`
