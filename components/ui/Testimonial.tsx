'use client'

import { motion } from 'framer-motion'

interface TestimonialProps {
  quote: string
  name: string
  organisation: string
  className?: string
}

export default function Testimonial({
  quote,
  name,
  organisation,
  className = '',
}: TestimonialProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className={`border-l-4 border-cyan pl-8 py-2 my-10 ${className}`}
    >
      {/* Quote — Cormorant Garamond italic, light weight */}
      <p className="font-display text-[22px] font-light italic text-ink-primary leading-relaxed max-w-[640px]">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution — DM Sans, small caps style */}
      <cite className="block mt-4 font-body text-[12px] font-medium tracking-[0.1em] uppercase text-ink-tertiary not-italic">
        &mdash;&nbsp;{name}, {organisation}
      </cite>
    </motion.blockquote>
  )
}
