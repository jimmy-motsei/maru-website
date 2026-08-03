Maru's primary action button — cyan fill (primary), cyan outline (secondary), or inline text link (tertiary). Use primary for the single most important action per view; tertiary for "read more" style affordances.

```jsx
<Button variant="primary" size="md" href="/operations-assessment">Start Assessment</Button>
<Button variant="secondary">See Pricing</Button>
<Button variant="tertiary">How we work</Button>
```

Variants: `primary` | `secondary` | `tertiary`. Sizes: `sm` | `md` | `lg`. Props: `href` (renders an anchor), `disabled`, `fullWidth`, `onClick`. Tertiary auto-appends a → arrow. Labels are uppercase and letter-spaced by the component — pass plain text.
