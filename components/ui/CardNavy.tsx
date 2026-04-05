import { ReactNode } from 'react'

interface CardNavyProps {
  title: string
  children: ReactNode
  className?: string
}

export default function CardNavy({ title, children, className = '' }: CardNavyProps) {
  return (
    <div
      className={`rounded-xl p-7 md:p-12 ${className}`}
      style={{ backgroundColor: '#1A3A5C' }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '24px',
          fontWeight: 400,
          color: '#FFFFFF',
          marginBottom: '16px',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>

      {/* Body */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          fontWeight: 300,
          color: 'rgba(250, 250, 248, 0.75)',
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
    </div>
  )
}
