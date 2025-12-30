import { NextRequest, NextResponse } from 'next/server';
import { analyzeWebsiteWithFirecrawl } from '@/lib/assessments/lead-score-firecrawl';

export const dynamic = 'force-dynamic';

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
    /*
    const analysisResults = await analyzeWebsiteWithFirecrawl({
      website_url,
      company_name,
      industry,
      company_size,
      has_crm,
      has_strategy,
      review_frequency
    });
    */

    const analysisResults = {
      score: 85,
      factors: {
        website_quality: 90,
        tech_stack_maturity: 80,
        content_quality: 85,
        seo_readiness: 75
      },
      recommendations: ["Mock recommendation"],
      company_data: { name: company_name, industry: 'Tech', size: 'Unknown', description: 'Mock' }
    };
    
    // ... rest of logic which uses analysisResults needs to be safe.
    
    // 2. Format results...
    // ...
    // ...
    
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
