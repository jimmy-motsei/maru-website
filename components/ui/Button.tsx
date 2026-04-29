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
  'inline-flex items-center justify-center ' +
  'font-body font-bold text-[13px] tracking-[0.15em] uppercase ' +
  'rounded-[8px] min-h-[44px] px-6 ' +
  'transition-[transform,opacity,box-shadow,background-color,border-color] duration-200 ease-out ' +
  'focus:outline-none focus-visible:ring-0 ' +
  'disabled:opacity-40 disabled:pointer-events-none'

const variantClasses: Record<ButtonVariant, string> = {
  // Solid cyan fill — dark navy text
  primary:
    'px-6 py-2.5 bg-[#3DB8C6] text-[var(--color-navy)] border-0 ' +
    'hover:bg-[#2DA8B6] hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(61,184,198,0.35)] ' +
    'active:scale-[0.98] active:bg-[#2DA8B6] active:shadow-none ' +
    'focus-visible:shadow-[0_0_0_3px_rgba(61,184,198,0.45),0_4px_16px_rgba(61,184,198,0.25)]',

  // Transparent — cyan outline, cyan text
  secondary:
    'px-6 py-2.5 bg-transparent text-[#3DB8C6] border border-[#3DB8C6] ' +
    'hover:bg-[#3DB8C6] hover:text-[var(--color-navy)] hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(61,184,198,0.25)] ' +
    'active:scale-[0.98] active:bg-[#2DA8B6] active:text-[var(--color-navy)] active:shadow-none ' +
    'focus-visible:shadow-[0_0_0_3px_rgba(61,184,198,0.45),0_4px_16px_rgba(61,184,198,0.15)]',

  // Legacy alias — renders identically to secondary.
  outline:
    'px-6 py-2.5 bg-transparent text-[#3DB8C6] border border-[#3DB8C6] ' +
    'hover:bg-[#3DB8C6] hover:text-[var(--color-navy)] hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(61,184,198,0.25)] ' +
    'active:scale-[0.98] active:bg-[#2DA8B6] active:text-[var(--color-navy)] active:shadow-none ' +
    'focus-visible:shadow-[0_0_0_3px_rgba(61,184,198,0.45),0_4px_16px_rgba(61,184,198,0.15)]',

  // Inline text link — no border, no background.
  // The → character is appended inside the component so callers
  // only need to pass the label text.
  tertiary:
    'rounded-none text-[#3DB8C6] no-underline ' +
    'hover:text-[#2DA8B6] hover:underline hover:underline-offset-4 ' +
    'active:opacity-70 ' +
    'focus-visible:underline focus-visible:underline-offset-4 focus-visible:shadow-[0_0_0_2px_rgba(61,184,198,0.4)]',
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
