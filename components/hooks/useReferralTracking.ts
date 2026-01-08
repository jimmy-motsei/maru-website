'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const REFERRAL_KEY = 'referral_partner'

export function useReferralTracking() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')
    if (ref) {
      sessionStorage.setItem(REFERRAL_KEY, ref)
    }
  }, [searchParams])

  return {
    getReferral: () => {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(REFERRAL_KEY)
        }
        return null
    }
  }
}
