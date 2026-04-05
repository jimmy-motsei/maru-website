import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept':       'application/json',
        'content-type': 'application/json',
        'api-key':      process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name:  process.env.BREVO_SENDER_NAME  || 'Maru Online',
          email: process.env.BREVO_SENDER_EMAIL || 'hello@maruonline.com',
        },
        to: [{ email: 'hello@maruonline.com', name: 'Maru Online' }],
        replyTo: { email, name },
        subject: `New contact form submission — ${name}`,
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
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">${name}</td>
                </tr>
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096">Email</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">
                    <a href="mailto:${email}" style="color:#3DB8C6">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr style="border-bottom:1px solid #E2E8F0">
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096">Company</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A">${company}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096;vertical-align:top">Message</td>
                  <td style="padding:12px 0;font-size:15px;color:#0D1B2A;line-height:1.8">${message.replace(/\n/g, '<br>')}</td>
                </tr>
              </table>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Brevo error:', err)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
