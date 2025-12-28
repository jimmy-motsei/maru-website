import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name, results } = await request.json();

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Maru Online <noreply@maruonline.com>',
        to: [email],
        subject: `🎯 Your Lead Score Results - ${results.score}/100`,
        html: generateEmailHTML(name, results),
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Results email sent successfully'
      });
    } else {
      const error = await response.text();
      console.error('Resend API error:', error);
      throw new Error('Email sending failed');
    }

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

function generateEmailHTML(name: string, results: any): string {
  const firstName = name.split(' ')[0];
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Lead Score Results</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #7c3aed, #2563eb); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; }
        .score-circle { width: 120px; height: 120px; border-radius: 50%; background: #10b981; color: white; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: bold; margin: 20px auto; }
        .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #7c3aed, #2563eb); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
        .strengths { color: #10b981; }
        .gaps { color: #ef4444; }
        ul { padding-left: 20px; }
        li { margin: 8px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 Your Lead Score Results</h1>
          <p>Personalized analysis for ${firstName}</p>
        </div>
        
        <div class="content">
          <div class="section" style="text-align: center;">
            <h2>Your Lead Generation Score</h2>
            <div class="score-circle">${results.score}</div>
            <p style="font-size: 18px; color: #6b7280;">out of 100</p>
            <p><strong>Potential Improvement:</strong> +${results.potentialImprovement} points</p>
            <p><strong>Expected Lead Increase:</strong> ${results.expectedIncrease}</p>
          </div>

          <div class="section">
            <h3 class="strengths">✅ What's Working Well:</h3>
            <ul>
              ${results.strengths.map((strength: string) => `<li>${strength}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <h3 class="gaps">❌ Critical Gaps:</h3>
            <ul>
              ${results.gaps.map((gap: string) => `<li>${gap}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <h3>🚀 Your 90-Day Action Plan</h3>
            
            <h4>Phase 1 (Days 1-30) - Quick Wins:</h4>
            <ul>
              ${results.recommendations.phase1.map((item: string) => `<li>${item}</li>`).join('')}
            </ul>
            
            <h4>Phase 2 (Days 31-60) - Optimization:</h4>
            <ul>
              ${results.recommendations.phase2.map((item: string) => `<li>${item}</li>`).join('')}
            </ul>
            
            <h4>Phase 3 (Days 61-90) - Acceleration:</h4>
            <ul>
              ${results.recommendations.phase3.map((item: string) => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div class="section" style="text-align: center;">
            <h3>Ready to Implement These Changes?</h3>
            <p>Get personalized guidance on implementing your roadmap:</p>
            
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/lead-score-predictor/results?id=${results.analysisId}" class="cta-button">
              View Full Dashboard
            </a>
            
            <a href="https://calendly.com/maruonline/strategy-call" class="cta-button">
              Schedule Free Consultation
            </a>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Best regards,<br>The Maru Online Team</p>
            <p>P.S. Your personalized 90-day action plan is waiting in your dashboard.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}