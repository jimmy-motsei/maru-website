# Aurellius Website

Static marketing site leveraging SCSS design tokens for a royal gold primary palette, sapphire support palette, and dark mode scaffold.

## Features

- Semantic design tokens in `scss/_variables.scss` (gold + sapphire scales, dark mode neutrals).
- Utility classes: `.mil-text-accent`, `.mil-text-support`, soft background + border helpers, focus rings.
- Dark mode (opt‑in): add `theme-dark` class to `<body>` (JS toggle scaffold present in `main.js`).
- Support palette variants (buttons, labels, cards, pagination, accordion, footer links).
- Accessibility helpers: consistent focus indication via `:focus-visible` and `.mil-focus-ring-*` classes.

## Development

Install dependencies (only Sass needed) and build CSS:

```bash
npm install
npm run build:css      # build without source map
npm run build:css:map  # build with source map
npm run watch          # watch for SCSS changes
```

The compiled output lives at `css/style.css`.

## Dark Mode

Wrap a user action (e.g. toggle) to add/remove `theme-dark` on `<body>`. Extended component overrides live in `_common.scss` under `body.theme-dark { ... }`.

## Adding New Components

1. Use semantic tokens (`$accent`, `$support`, `$dm-*`) instead of raw hex values.
2. Provide hover/active states with the `-hover`/`-active` tokens rather than filters.
3. For borders on dark mode use `$dm-border` or `$dm-border-strong`.

## Accessibility

- Focus rings: rely on `:focus-visible` default (accent) or add `.mil-focus-ring-support` for support hue.
- Contrast: accent gold (#C9A227) on white passes AA for large text; for small text prefer deeper tones (e.g. `$gold-700`) if needed.
- Continue auditing any new component states (hover/active in dark mode) for 4.5:1 contrast.

## Future Improvements

Completed:

- Migrated from `@import` to `@use` (module system).
- Replaced slash division with `math.div()`.
- Converted random/percentage loops and `percentage()` calls to `math.random` / `math.percentage`.
- Added `_tokens.scss` with `@forward 'variables'` for cleaner module consumption.

Optional Next Steps:

- Add stylelint + stylelint-scss for CI enforcement of token usage & no raw hex.
- Implement `prefers-color-scheme: dark` auto opt-in fallback (while keeping manual toggle override).
- Automated contrast audit script (e.g., puppeteer + axe-core) for regression checks.
- Consider extracting keyframe random glitch logic into a mixin for reuse and deterministic testing (seedable random).
- Introduce CSS custom properties mirror of tokens for runtime theming without recompilation.

## License

See `license_certificate_9G4LBDYZQ2.txt`.
