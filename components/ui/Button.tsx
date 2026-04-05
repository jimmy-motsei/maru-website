import Link from 'next/link'

// 'outline' is a legacy alias for 'secondary' — kept for backwards compatibility
// with pre-rebuild pages that have not yet been migrated.
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline'

interface ButtonProps {
  variant?: ButtonVariant
  /** Native button type — used by forms that need submit/reset */
  type?: 'button' | 'submit' | 'reset'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

// ─── Variant class maps ───────────────────────────────────────────────────────

const base =
  'inline-flex items-center justify-center font-body font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-200 focus:outline-none disabled:opacity-40 disabled:pointer-events-none'

const variantClasses: Record<ButtonVariant, string> = {
  // Solid cyan fill — 8px radius, dark navy text
  primary:
    'px-6 py-2.5 bg-cyan text-[#0D1B2A] rounded-[8px] border-0 ' +
    'hover:bg-cyan-dark hover:scale-[1.02] active:scale-100 ' +
    'focus:shadow-[var(--shadow-focus)]',

  // Transparent — cyan outline, 8px radius
  secondary:
    'px-6 py-2.5 bg-transparent text-cyan rounded-[8px] border border-cyan ' +
    'hover:bg-cyan-light active:bg-cyan-light ' +
    'focus:shadow-[var(--shadow-focus)]',

  // Legacy alias — renders identically to secondary.
  outline:
    'px-6 py-2.5 bg-transparent text-cyan rounded-[8px] border border-cyan ' +
    'hover:bg-cyan-light active:bg-cyan-light ' +
    'focus:shadow-[var(--shadow-focus)]',

  // Inline text link — no border, no background.
  // The → character is appended inside the component so callers
  // only need to pass the label text.
  tertiary:
    'text-cyan no-underline hover:underline transition-colors duration-150 ' +
    'focus:outline-none focus:underline',
}

// ─── Component ────────────────────────────────────────────────────────────────

function Button({
  variant = 'primary',
  type = 'button',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`.trim()

  // Tertiary buttons append → for directional affordance
  const label =
    variant === 'tertiary' ? (
      <>
        {children}
        {' →'}
      </>
    ) : (
      children
    )

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {label}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {label}
    </button>
  )
}

// Named export for legacy imports: import { Button } from '@/components/ui/Button'
export { Button }
export default Button
