import { ReactNode } from 'react'

interface CardFeatureProps {
  icon: ReactNode
  title: string
  body: string
  className?: string
}

export default function CardFeature({ icon, title, body, className = '' }: CardFeatureProps) {
  return (
    <div
      className={`
        group flex flex-col gap-4 p-7
        bg-white border border-[#E2E8F0] rounded-none
        hover:bg-[rgba(61,184,198,0.08)]
        transition-colors duration-200
        ${className}
      `}
    >
      {/* Icon container */}
      <div
        className="
          w-11 h-11 flex items-center justify-center rounded-none
          bg-[rgba(61,184,198,0.1)]
          group-hover:bg-[#3DB8C6]
          transition-colors duration-200
        "
      >
        <span className="text-cyan group-hover:text-white transition-colors duration-200">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-body font-semibold text-[18px] text-[#1A3A5C] leading-snug">
        {title}
      </h3>

      {/* Body */}
      <p className="font-body font-light text-[15px] text-[#4A5568] leading-relaxed">
        {body}
      </p>
    </div>
  )
}
