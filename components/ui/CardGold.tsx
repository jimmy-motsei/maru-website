import { ReactNode } from 'react'

interface CardGoldProps {
  label?: string
  title?: string
  children: ReactNode
  className?: string
}

export default function CardGold({ label, title, children, className = '' }: CardGoldProps) {
  return (
    <div className={`card-gold ${className}`}>
      {label && (
        <span className="label-eyebrow-gold">{label}</span>
      )}
      {title && <h3>{title}</h3>}
      <div className="body-muted">{children}</div>
    </div>
  )
}
