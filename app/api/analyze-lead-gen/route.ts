import { NextRequest, NextResponse } from 'next/server';
import { analyzeWebsiteWithFirecrawl } from '@/lib/assessments/lead-score-firecrawl';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { 
      email, 
      website_url, 
      company_name, 
      industry, 
      company_size,
      has_crm,
      has_strategy,
      review_frequency
    } = data;

    if (!email || !website_url) {
      return NextResponse.json(
        { error: 'Email and Website URL are required' },
        { status: 400 }
      );
    }

    // 1. Perform analysis using Firecrawl and Gemini (via the assessment lib)
    const analysisResults = await analyzeWebsiteWithFirecrawl({
      website_url,
      company_name,
      industry,
      company_size,
      has_crm,
      has_strategy,
      review_frequency
    });

    // 2. Format results for the email
    // This part bridges the LeadScoreResult from lead-score-firecrawl.ts
    // to the expected format in send-results/route.ts
    const formattedResults = {
      score: analysisResults.score,
      potentialImprovement: 100 - analysisResults.score,
      expectedIncrease: analysisResults.score < 50 ? "3-4x more leads" : "1.5-2x more leads",
      strengths: analysisResults.recommendations.slice(0, 2), // Mocking strengths for now
      gaps: analysisResults.recommendations.slice(2, 4), // Mocking gaps
      recommendations: {
        phase1: [analysisResults.recommendations[0] || "Optimize landing page"],
        phase2: [analysisResults.recommendations[1] || "Implement lead magnets"],
        phase3: [analysisResults.recommendations[2] || "Scale traffic campaigns"],
      },
      analysisId: Math.random().toString(36).substring(7),
    };

    // 3. Send email via Resend (reusing the logic from send-results/route.ts)
    const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/send-results`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name: company_name || 'Business Owner',
        results: formattedResults,
      }),
    });

    if (!emailResponse.ok) {
      console.warn('Failed to send result email, but analysis succeeded');
    }

    return NextResponse.json({
      success: true,
      score: analysisResults.score,
      results: analysisResults,
    });

  } catch (error) {
    console.error('Lead generation assessment error:', error);
    return NextResponse.json(
      { error: 'An error occurred during assessment' },
      { status: 500 }
    );
  }
}
