interface CardMetricProps {
  value: string
  label: string
  className?: string
}

export default function CardMetric({ value, label, className = '' }: CardMetricProps) {
  return (
    <div
      className={`p-6 rounded-lg ${className}`}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
      }}
    >
      {/* Value — Cormorant Garamond */}
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '38px',
          fontWeight: 600,
          color: '#1A3A5C',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {value}
      </p>

      {/* Label — DM Sans */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 400,
          color: '#718096',
          lineHeight: 1.4,
        }}
      >
        {label}
      </p>
    </div>
  )
}
