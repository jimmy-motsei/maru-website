import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { escapeHtml, escapeHtmlPreserveBreaks } from '@/lib/security'

const BREVO_API = 'https://api.brevo.com/v3'

const leadSchema = z.object({
  fullName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  companyWebsite: z.string().trim().url().max(500).optional().or(z.literal('')),
  biggestChallenge: z.string().trim().max(3000).optional().or(z.literal('')),
})

async function getOrCreateListId(name: string, apiKey: string): Promise<number | null> {
  try {
    const res = await fetch(`${BREVO_API}/contacts/lists?limit=50`, {
      headers: { 'api-key': apiKey },
    })
    if (!res.ok) return null
    const data = await res.json()
    const found = (data.lists ?? []).find((l: { id: number; name: string }) => l.name === name)
    if (found) return found.id

    const create = await fetch(`${BREVO_API}/contacts/lists`, {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify({ name, folderId: 1 }),
    })
    if (!create.ok) return null
    const created = await create.json()
    return created.id ?? null
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsed = leadSchema.safeParse(await request.json())

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 })
    }

    const { fullName, email, companyWebsite, biggestChallenge } = parsed.data
    const safeFullName = escapeHtml(fullName)
    const safeEmail = escapeHtml(email)
    const safeCompanyWebsite = companyWebsite ? escapeHtml(companyWebsite) : ''
    const safeBiggestChallenge = biggestChallenge ? escapeHtmlPreserveBreaks(biggestChallenge) : ''

    if (!fullName || !email) {
      return NextResponse.json({ error: 'Full name and email are required.' }, { status: 400 })
    }

    const apiKey      = process.env.BREVO_API_KEY!
    const senderEmail = process.env.BREVO_SENDER_EMAIL || 'jimmymotsei@gmail.com'
    const senderName  = process.env.BREVO_SENDER_NAME  || 'Maru Online'
    const notifyTo = [
      { email: process.env.NOTIFICATION_EMAIL  || 'jimmyM@maruonline.com',  name: 'Jimmy Motsei' },
      { email: process.env.NOTIFICATION_EMAIL_2 || 'hello@maruonline.com', name: 'Maru Online' },
    ]

    // 1. Add / update contact in "Maru Lead Engine" list with custom attributes
    const listId = await getOrCreateListId('Maru Lead Engine', apiKey)
    const contactBody: Record<string, unknown> = {
      email,
      attributes: {
        FIRSTNAME:         fullName.split(' ')[0],
        LASTNAME:          fullName.split(' ').slice(1).join(' ') || '',
        COMPANY_WEBSITE:   companyWebsite  || '',
        BIGGEST_CHALLENGE: biggestChallenge || '',
      },
      updateEnabled: true,
    }
    if (listId) contactBody.listIds = [listId]

    await fetch(`${BREVO_API}/contacts`, {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify(contactBody),
    })

    // 2. Notification email to hello@maruonline.com
    const notifyRes = await fetch(`${BREVO_API}/smtp/email`, {
      method: 'POST',
      headers: {
        accept:         'application/json',
        'content-type': 'application/json',
        'api-key':      apiKey,
      },
      body: JSON.stringify({
        sender:  { name: senderName, email: senderEmail },
        to:      notifyTo,
        replyTo: { email, name: fullName },
        subject: `New lead — ${safeFullName}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0D1B2A">
            <div style="background:#1A3A5C;padding:32px 40px;border-radius:8px 8px 0 0">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#3DB8C6">
                Maru Online — Lead Form
              </p>
            </div>
            <div style="background:#F5F4F0;padding:32px 40px;border-radius:0 0 8px 8px;border:1px solid #E2E8F0;border-top:none">
              <table style="width:100%;border-collapse:collapse">
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096;width:35%">Name</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">${safeFullName}</td>
                </tr>
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096">Email</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">
                    <a href="mailto:${safeEmail}" style="color:#3DB8C6">${safeEmail}</a>
                  </td>
                </tr>
                ${safeCompanyWebsite ? `
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096">Company Website</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">${safeCompanyWebsite}</td>
                </tr>` : ''}
                ${safeBiggestChallenge ? `
                <tr>
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096;vertical-align:top">Biggest Challenge</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">${safeBiggestChallenge}</td>
                </tr>` : ''}
              </table>
            </div>
          </div>
        `,
      }),
    })

    if (!notifyRes.ok) {
      const err = await notifyRes.json()
      console.error('Brevo lead notification error:', err)
      return NextResponse.json({ error: 'Failed to process submission.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Lead route error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
