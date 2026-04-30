import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { escapeHtml, escapeHtmlPreserveBreaks } from '@/lib/security'

const BREVO_API = 'https://api.brevo.com/v3'

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().or(z.literal('')),
  message: z.string().trim().min(1).max(3000),
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

    // Create list if it doesn't exist
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
    const parsed = contactSchema.safeParse(await request.json())

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 })
    }

    const { name, email, company, message } = parsed.data
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = company ? escapeHtml(company) : ''
    const safeMessage = escapeHtmlPreserveBreaks(message)
    const firstName = name.split(' ')[0]
    const safeFirstName = escapeHtml(firstName)

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }

    const apiKey        = process.env.BREVO_API_KEY!
    const senderEmail   = process.env.BREVO_SENDER_EMAIL || 'jimmymotsei@gmail.com'
    const senderName    = process.env.BREVO_SENDER_NAME  || 'Maru Online'
    const notifyTo = [
      { email: process.env.NOTIFICATION_EMAIL  || 'jimmyM@maruonline.com',  name: 'Jimmy Motsei' },
      { email: process.env.NOTIFICATION_EMAIL_2 || 'hello@maruonline.com', name: 'Maru Online' },
    ]

    // 1. Add / update contact in "Maru Website Contacts" list
    const listId = await getOrCreateListId('Maru Website Contacts', apiKey)
    const contactBody: Record<string, unknown> = {
      email,
      attributes: { FIRSTNAME: name.split(' ')[0], LASTNAME: name.split(' ').slice(1).join(' ') || '' },
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
        accept:           'application/json',
        'content-type':   'application/json',
        'api-key':        apiKey,
      },
      body: JSON.stringify({
        sender:  { name: senderName, email: senderEmail },
        to:      notifyTo,
        replyTo: { email, name },
        subject: `New contact form submission — ${safeName}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0D1B2A">
            <div style="background:#1A3A5C;padding:32px 40px;border-radius:8px 8px 0 0">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#3DB8C6">
                Maru Online — Contact Form
              </p>
            </div>
            <div style="background:#F5F4F0;padding:32px 40px;border-radius:0 0 8px 8px;border:1px solid #E2E8F0;border-top:none">
              <table style="width:100%;border-collapse:collapse">
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096;width:30%">Name</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">${safeName}</td>
                </tr>
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096">Email</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">
                    <a href="mailto:${safeEmail}" style="color:#3DB8C6">${safeEmail}</a>
                  </td>
                </tr>
                ${safeCompany ? `
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096">Company</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">${safeCompany}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096;vertical-align:top">Message</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A;line-height:1.8">${safeMessage}</td>
                </tr>
              </table>
            </div>
          </div>
        `,
      }),
    })

    if (!notifyRes.ok) {
      const err = await notifyRes.json()
      console.error('Brevo notification error:', err)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    // 3. Auto-reply to the submitter
    await fetch(`${BREVO_API}/smtp/email`, {
      method: 'POST',
      headers: {
        accept:         'application/json',
        'content-type': 'application/json',
        'api-key':      apiKey,
      },
      body: JSON.stringify({
        sender:  { name: senderName, email: senderEmail },
        to:      [{ email, name }],
        subject: `We received your message — Maru Online`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0D1B2A">
            <div style="background:#1A3A5C;padding:32px 40px;border-radius:8px 8px 0 0">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#3DB8C6">
                Maru Online
              </p>
            </div>
            <div style="background:#F5F4F0;padding:32px 40px;border-radius:0 0 8px 8px;border:1px solid #E2E8F0;border-top:none">
              <p style="font-size:17px;color:#0D1B2A;margin:0 0 16px">Hi ${safeFirstName},</p>
              <p style="font-size:15px;color:#4A5568;line-height:1.8;margin:0 0 16px">
                Thanks for reaching out. We've received your message and someone from the Maru Online team
                will be in touch within <strong>1 business day</strong>.
              </p>
              <p style="font-size:15px;color:#4A5568;line-height:1.8;margin:0 0 24px">
                In the meantime, feel free to reply to this email with any additional context.
              </p>
              <p style="font-size:14px;color:#718096;margin:0">
                — The Maru Online Team<br>
                <a href="https://maruonline.com" style="color:#3DB8C6">maruonline.com</a>
              </p>
            </div>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
