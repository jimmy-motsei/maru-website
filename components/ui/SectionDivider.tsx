'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  number: string
  title: string
  subtitle?: string
}

export default function SectionDivider({
  number,
  title,
  subtitle,
}: SectionDividerProps) {
  return (
    <div className="bg-bg-dark py-10 px-6 md:py-16 md:px-[80px]">
      <div className="flex items-end gap-5 md:gap-6">

        {/* Ghost number — Cormorant Garamond, cyan at 30% opacity */}
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-display font-light leading-none text-cyan text-[56px] md:text-[80px] select-none"
          aria-hidden="true"
        >
          {number}
        </motion.span>

        {/* Title + subtitle stagger in after number */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          viewport={{ once: true, margin: '-80px' }}
          className="pb-2 md:pb-3"
        >
          <h2 className="font-display font-light tracking-tight text-ink-inverted text-[24px] md:text-[32px]">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body font-light text-ink-inverted-muted mt-1.5 text-[12px] md:text-[13px]">
              {subtitle}
            </p>
          )}
        </motion.div>

      </div>
    </div>
  )
}
