import 'server-only'
import { createHmac, timingSafeEqual } from 'node:crypto'

// Signs a Sanity document id so the one-click unpublish link in the notification
// email can't be forged. Keyed on CRON_SECRET (server-only).

export function signUnpublish(id: string): string {
  const secret = process.env.CRON_SECRET || ''
  return createHmac('sha256', secret).update(id).digest('base64url')
}

export function verifyUnpublish(id: string, token: string): boolean {
  const expected = signUnpublish(id)
  if (token.length !== expected.length) return false
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected))
  } catch {
    return false
  }
}
