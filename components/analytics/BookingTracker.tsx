'use client'

import { useEffect } from 'react'
import { trackOutbound } from './TrackedLink'

/**
 * Fires once when the booking page mounts. The Calendly widget is an iframe, so
 * we cannot see the booking itself — reaching this page is the measurable step.
 */
export function BookingTracker() {
  useEffect(() => {
    trackOutbound('booking_opened', { source: 'booking_page' })
  }, [])

  return null
}
