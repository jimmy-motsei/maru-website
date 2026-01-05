'use server'

import nodemailer from 'nodemailer'

export async function submitBrief(formData: FormData) {
  const data = Object.fromEntries(formData.entries())
  const formName = data['form-name'] as string
  const subject = `New Form Submission: ${formName || 'Briefing Form'}`

  // Basic honeypot check
  if (data['bot-field']) {
    return { success: true } // Silently fail for bots
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const htmlContent = `
      <h2>New Form Submission</h2>
      <p><strong>Form Type:</strong> ${formName}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      
      <h3>Form Data:</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hello@maruonline.com', // Defaulting to hello@ based on context, can be env var
      subject: subject,
      html: htmlContent,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
