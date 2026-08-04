'use client'

import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react'

/**
 * Fires a conversion event, then lets the browser follow the link normally.
 *
 * Exists so server components (the footer contact block, the contact page) can
 * track outbound intent without being converted to client components wholesale.
 * WhatsApp is plausibly the highest-intent action on this site and was entirely
 * untracked — see docs/TECHNICAL-FIXES-AND-BOT-CONTROL.md, T4.
 */
export function trackOutbound(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.trackConversion) {
    window.trackConversion(event, data)
  }
}

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  event: string
  eventData?: Record<string, unknown>
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function TrackedLink({
  href,
  event,
  eventData,
  children,
  onClick,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        trackOutbound(event, eventData)
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
