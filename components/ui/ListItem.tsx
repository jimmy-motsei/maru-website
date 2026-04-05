interface ListItemProps {
  leader: string
  body: string
  className?: string
}

export default function ListItem({ leader, body, className = '' }: ListItemProps) {
  return (
    <li
      className={`flex gap-6 py-5 border-b border-[#E2E8F0] last:border-b-0 ${className}`}
    >
      {/* Bullet dot */}
      <span
        aria-hidden="true"
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: '#3DB8C6',
          borderRadius: '50%',
          marginTop: '7px',
          flexShrink: 0,
          display: 'block',
        }}
      />

      {/* Text */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.8,
          letterSpacing: '0.01em',
          margin: 0,
        }}
      >
        <span style={{ fontWeight: 600, color: '#1A3A5C', letterSpacing: '0.01em' }}>{leader}</span>
        <span style={{ fontWeight: 300, color: '#4A5568', letterSpacing: '0.01em' }}>{' — '}{body}</span>
      </p>
    </li>
  )
}
