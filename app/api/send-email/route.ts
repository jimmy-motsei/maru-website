import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { type, data } = await request.json();

    // 1. Create Transporter
    // In production, these should be environment variables:
    // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
          rejectUnauthorized: false
      }
    });

    // 2. Format Email Content based on Form Type
    let subject = `New Submission: ${type}`;
    let htmlContent = `<h1>New ${type} Received</h1>`;

    // Iterate through data to create a table
    htmlContent += `<table style="border-collapse: collapse; width: 100%;">`;
    for (const [key, value] of Object.entries(data)) {
      // Skip empty values for cleaner email
      if (!value) continue;
      
      // Cleanup key name (e.g., "client_email" -> "Client Email")
      const readableKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      
      // Handle arrays (checkboxes)
      const displayValue = Array.isArray(value) ? value.join(", ") : value;

      htmlContent += `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 10px; font-weight: bold; width: 30%;">${readableKey}</td>
          <td style="padding: 10px;">${displayValue}</td>
        </tr>
      `;
    }
    htmlContent += `</table>`;

    // 3. Send Email
    // If no ENV vars are set, this deals with a "mock" success for dev if credentials fail, or real error
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("⚠️ SMTP Credentials missing in .env. Email not sent.");
      // We return success here so the frontend doesn't break during testing
      // Remove this mock return in production!
      return NextResponse.json({ success: true, message: "Mock success (SMTP not configured)" });
    }

    const mailOptions = {
        from: `"Maru Website" <${process.env.SMTP_USER}>`,
        to: "hello@maruonline.com",
        subject: subject,
        html: htmlContent,
        replyTo: data.client_email || data.email // Reply directly to the client
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
