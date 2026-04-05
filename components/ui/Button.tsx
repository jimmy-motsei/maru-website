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
  'inline-flex items-center justify-center font-body font-medium text-[15px] tracking-normal transition-all duration-200 focus:outline-none disabled:opacity-40 disabled:pointer-events-none'

const variantClasses: Record<ButtonVariant, string> = {
  // Solid cyan fill — brand signature. Sharp corners are intentional.
  primary:
    'px-7 py-3.5 bg-cyan text-bg-darkest rounded-none border-0 ' +
    'hover:bg-cyan-dark hover:-translate-y-px active:translate-y-0 ' +
    'focus:ring-[3px] focus:ring-cyan/30',

  // Transparent — cyan outline and text. Same geometry as primary.
  secondary:
    'px-7 py-3.5 bg-transparent text-cyan rounded-none border border-cyan ' +
    'hover:bg-cyan/10 active:bg-cyan/15 ' +
    'focus:ring-[3px] focus:ring-cyan/30',

  // Legacy alias — renders identically to secondary.
  outline:
    'px-7 py-3.5 bg-transparent text-cyan rounded-none border border-cyan ' +
    'hover:bg-cyan/10 active:bg-cyan/15 ' +
    'focus:ring-[3px] focus:ring-cyan/30',

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
