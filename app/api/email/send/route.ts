import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email templates
const emailTemplates = {
  assessment_complete: {
    subject: (assessmentType: string, companyName: string) => 
      `Your ${getAssessmentDisplayName(assessmentType)} Results - ${companyName}`,
    
    html: (data: any) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Assessment Results</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Your Assessment Results Are Ready!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
            ${getAssessmentDisplayName(data.assessmentType)} Analysis Complete
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px; margin-bottom: 20px;">Hi ${data.contactInfo?.first_name || 'there'},</p>
          
          <p>Thank you for completing our ${getAssessmentDisplayName(data.assessmentType)} assessment. Your personalized analysis is now ready!</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22d3ee;">
            <h3 style="color: #22d3ee; margin-top: 0;">Key Highlights:</h3>
            ${getAssessmentHighlights(data)}
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact" 
               style="background: #22d3ee; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              Schedule a Free Consultation
            </a>
          </div>
          
          <p>Want to dive deeper? Our team can help you implement these recommendations and unlock your full potential.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <div style="text-align: center; color: #666; font-size: 14px;">
            <p><strong>Maru Online</strong><br>
            AI-Powered Business Solutions<br>
            <a href="mailto:hello@maruonline.com" style="color: #22d3ee;">hello@maruonline.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `,
  },
  
  follow_up: {
    subject: (companyName: string) => `Ready to implement your recommendations? - ${companyName}`,
    
    html: (data: any) => `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f8f9fa; padding: 30px; border-radius: 10px;">
          <h2 style="color: #22d3ee;">Ready to take action on your assessment results?</h2>
          
          <p>Hi ${data.contactInfo?.first_name || 'there'},</p>
          
          <p>A few days ago, you completed our ${getAssessmentDisplayName(data.assessmentType)} assessment. We hope you found the insights valuable!</p>
          
          <p>Many of our clients see significant improvements within 30 days of implementing our recommendations. Here's how we can help:</p>
          
          <ul>
            <li><strong>Free Strategy Session:</strong> 30-minute consultation to prioritize your next steps</li>
            <li><strong>Implementation Support:</strong> Our team can handle the technical work</li>
            <li><strong>Ongoing Optimization:</strong> Continuous improvement based on results</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact" 
               style="background: #22d3ee; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              Book Your Free Strategy Session
            </a>
          </div>
          
          <p style="font-size: 14px; color: #666;">
            Not ready yet? No problem! Feel free to reach out when you're ready to take the next step.
          </p>
        </div>
      </body>
      </html>
    `,
  },
};

function getAssessmentDisplayName(type: string): string {
  const names = {
    lead_score: 'Lead Score Predictor',
    pipeline_leak: 'Pipeline Leak Detector',
    proposal: 'Proposal Accelerator',
    tech_audit: 'Tech Stack Auditor',
  };
  return names[type as keyof typeof names] || 'Assessment';
}

function getAssessmentHighlights(data: any): string {
  switch (data.assessmentType) {
    case 'lead_score':
      return `
        <p><strong>Your Lead Score:</strong> ${data.assessmentData?.score || 0}/100</p>
        <p><strong>Key Opportunity:</strong> ${data.assessmentData?.recommendations?.[0] || 'Optimization recommendations included'}</p>
      `;
    case 'pipeline_leak':
      return `
        <p><strong>Revenue at Risk:</strong> $${data.assessmentData?.revenueAtRisk?.toLocaleString() || '0'}</p>
        <p><strong>Stalled Deals:</strong> ${data.assessmentData?.stalledDeals || 0} deals need attention</p>
      `;
    default:
      return '<p>Your personalized recommendations are ready for review.</p>';
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email, contactInfo, assessmentType, assessmentData } = body;

    if (!email || !type) {
      return NextResponse.json({ error: 'Email and type required' }, { status: 400 });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const template = emailTemplates[type as keyof typeof emailTemplates];
    if (!template) {
      return NextResponse.json({ error: 'Invalid email type' }, { status: 400 });
    }

    const emailData = { contactInfo, assessmentType, assessmentData };
    const companyName = contactInfo?.company_name || 'Your Company';

    const mailOptions = {
      from: `"Maru Online" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: template.subject(assessmentType || '', companyName),
      html: template.html(emailData),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}