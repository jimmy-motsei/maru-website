import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const results = {
    gemini: { status: 'unknown', error: null },
    firecrawl: { status: 'unknown', error: null },
    resend: { status: 'unknown', error: null }
  };

  // Test Gemini API
  try {
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: 'Say "API test successful"' }] }]
      })
    });

    if (geminiResponse.ok) {
      results.gemini.status = 'valid';
    } else {
      results.gemini.status = 'invalid';
      results.gemini.error = await geminiResponse.text();
    }
  } catch (error) {
    results.gemini.status = 'error';
    results.gemini.error = error instanceof Error ? error.message : 'Unknown error';
  }

  // Test Firecrawl API
  try {
    const firecrawlResponse = await fetch('https://api.firecrawl.dev/v0/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: 'https://example.com',
        pageOptions: { onlyMainContent: true }
      })
    });

    if (firecrawlResponse.ok) {
      results.firecrawl.status = 'valid';
    } else {
      results.firecrawl.status = 'invalid';
      results.firecrawl.error = await firecrawlResponse.text();
    }
  } catch (error) {
    results.firecrawl.status = 'error';
    results.firecrawl.error = error instanceof Error ? error.message : 'Unknown error';
  }

  // Test Resend API
  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'test@maruonline.com',
        to: ['test@example.com'],
        subject: 'API Test',
        html: '<p>Test email</p>',
      }),
    });

    if (resendResponse.status === 200 || resendResponse.status === 422) {
      // 422 is expected for invalid email domains in test
      results.resend.status = 'valid';
    } else {
      results.resend.status = 'invalid';
      results.resend.error = await resendResponse.text();
    }
  } catch (error) {
    results.resend.status = 'error';
    results.resend.error = error instanceof Error ? error.message : 'Unknown error';
  }

  return NextResponse.json(results);
}