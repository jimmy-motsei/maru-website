import { ReactNode } from 'react'

interface CardGoldProps {
  label: string
  children: ReactNode
  className?: string
}

export default function CardGold({ label, children, className = '' }: CardGoldProps) {
  return (
    <div
      className={`p-6 rounded-lg ${className}`}
      style={{
        backgroundColor: '#FDF8EE',
        border: '1px solid rgba(205, 170, 83, 0.25)',
      }}
    >
      {/* Label */}
      <p
        className="mb-3"
        style={{
          color: '#CDAA53',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-body)',
        }}
      >
        {label}
      </p>

      {/* Body */}
      <div
        style={{
          color: '#0D1B2A',
          fontSize: '14.5px',
          fontWeight: 300,
          lineHeight: 1.8,
          fontFamily: 'var(--font-body)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
