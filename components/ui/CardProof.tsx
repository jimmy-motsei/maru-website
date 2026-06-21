import { ReactNode } from 'react'

interface CardProofProps {
  label?: string
  title?: string
  children: ReactNode
  className?: string
}

/**
 * CardProof — ochre "proof / result" card (warm tint, ochre left-rule).
 * Use for outcomes, results, credentials, and value highlights.
 * (Replaces the former gold "CardGold"; ochre is the standardised secondary accent.)
 */
export default function CardProof({ label, title, children, className = '' }: CardProofProps) {
  return (
    <div className={`card-ochre ${className}`}>
      {label && (
        <span className="label-eyebrow-ochre">{label}</span>
      )}
      {title && <h3>{title}</h3>}
      <div className="body-muted">{children}</div>
    </div>
  )
}
