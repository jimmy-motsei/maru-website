const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'
const MIN_SCORE = 0.5

export async function verifyRecaptcha(token: string): Promise<{ ok: boolean; score?: number }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    console.warn('RECAPTCHA_SECRET_KEY not set — skipping verification')
    return { ok: true }
  }
  if (!token) return { ok: false }

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    })
    const data = await res.json() as { success: boolean; score?: number; 'error-codes'?: string[] }
    // Both failure modes surface to the visitor as the same generic message, so
    // log which one it was — a key/domain mismatch and a low bot score need
    // completely different fixes, and without this the logs cannot tell them
    // apart. (4 Aug 2026: a real submission was rejected and we could not
    // determine why from the outside.)
    if (!data.success) {
      console.warn('reCAPTCHA rejected: verification failed', {
        errorCodes: data['error-codes'],
      })
      return { ok: false }
    }
    if (typeof data.score === 'number' && data.score < MIN_SCORE) {
      console.warn('reCAPTCHA rejected: score below threshold', {
        score: data.score,
        minScore: MIN_SCORE,
      })
      return { ok: false, score: data.score }
    }
    return { ok: true, score: data.score }
  } catch (err) {
    console.error('reCAPTCHA verification error:', err)
    return { ok: false }
  }
}
