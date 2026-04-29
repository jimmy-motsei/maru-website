import { ReactNode } from 'react'

interface CardNavyProps {
  label?: string
  title?: string
  children: ReactNode
  className?: string
}

export default function CardNavy({ label, title, children, className = '' }: CardNavyProps) {
  return (
    <div className={`card-navy ${className}`}>
      {label && (
        <span className="label-eyebrow" style={{ color: 'var(--color-cyan)' }}>{label}</span>
      )}
      {title && <h3>{title}</h3>}
      <div className="body-on-navy">{children}</div>
    </div>
  )
}
