import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const analysisSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  company: z.string().min(2),
  website: z.string().url().optional(),
  websiteUrl: z.string().url(),
  role: z.string(),
  companySize: z.string(),
  monthlyVisitors: z.string(),
  leadGenMethods: z.array(z.string()),
  challenges: z.array(z.string()),
  budget: z.string(),
  goal: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = analysisSchema.parse(body);

    // Create analysis ID
    const analysisId = `analysis_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Step 1: Scrape website
    const scrapeResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/scrape-website`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: validatedData.websiteUrl }),
    });

    let scrapeData = {};
    if (scrapeResponse.ok) {
      scrapeData = await scrapeResponse.json();
    }

    // Step 2: Calculate preliminary score
    const scoreResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/calculate-score`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        scrapeData, 
        assessmentData: validatedData 
      }),
    });

    let scoreData = { score: 50, subscores: {} };
    if (scoreResponse.ok) {
      scoreData = await scoreResponse.json();
    }

    // Step 3: Get AI analysis (mock for now)
    const aiAnalysis = await getAIAnalysis(validatedData, scrapeData, scoreData);

    // Step 4: Store results (mock implementation)
    const results = {
      analysisId,
      score: scoreData.score,
      subscores: {
        websiteQuality: Math.floor(Math.random() * 40) + 60,
        conversionPoints: Math.floor(Math.random() * 40) + 40,
        leadCapture: Math.floor(Math.random() * 40) + 30,
        followupSystem: Math.floor(Math.random() * 40) + 20,
      },
      strengths: aiAnalysis.strengths,
      gaps: aiAnalysis.gaps,
      recommendations: aiAnalysis.recommendations,
      potentialImprovement: Math.floor(Math.random() * 30) + 20,
      expectedIncrease: '5-6x',
    };

    // Store in session storage (in real app, would store in database)
    // For demo, we'll return the results directly

    // Step 5: Send email (mock)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: validatedData.email,
          name: validatedData.name,
          results 
        }),
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the entire request if email fails
    }

    return NextResponse.json({
      success: true,
      analysisId,
      ...results,
    });

  } catch (error) {
    console.error('Analysis error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Analysis failed' },
      { status: 500 }
    );
  }
}

async function getAIAnalysis(assessmentData: any, scrapeData: any, scoreData: any) {
  try {
    // Call Google Gemini API
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: buildGeminiPrompt(assessmentData, scrapeData, scoreData) }]
        }]
      })
    });

    if (response.ok) {
      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      return JSON.parse(aiText);
    }
  } catch (error) {
    console.error('Gemini API error:', error);
  }

  // Fallback to mock analysis
  const mockAnalysis = {
    strengths: [
      "Professional website design with clear branding",
      "Good page load speed and mobile responsiveness",
      "Strong value proposition clearly communicated",
      "Quality content that builds trust and authority"
    ],
    gaps: [
      "Only 2 conversion points found (need 8-12 minimum)",
      "No lead magnets or value-exchange offers detected",
      "Missing exit-intent popup to capture leaving visitors",
      "No automated email follow-up system visible",
      "Limited social proof and testimonials"
    ],
    recommendations: {
      phase1: [
        "Add exit-intent popup with compelling offer",
        "Create 2 downloadable lead magnets (guides, checklists)",
        "Install live chat widget for immediate engagement",
        "Add social proof widgets and customer testimonials"
      ],
      phase2: [
        "Build automated email nurture sequences",
        "Add sticky CTA bar that follows users",
        "Create interactive tools or calculators",
        "Implement lead scoring and segmentation"
      ],
      phase3: [
        "Launch AI-powered chatbot for qualification",
        "Add personalization based on visitor behavior",
        "Build referral program to leverage existing customers",
        "Create video testimonials and case studies"
      ]
    }
  };

  return mockAnalysis;
}

function buildGeminiPrompt(assessmentData: any, scrapeData: any, scoreData: any): string {
  return `You are a B2B lead generation expert. Analyze this website and provide recommendations.

WEBSITE: ${assessmentData.websiteUrl}
COMPANY: ${assessmentData.company} (${assessmentData.companySize})
CHALLENGES: ${assessmentData.challenges.join(', ')}
CURRENT SCORE: ${scoreData.score}/100

Provide analysis in this exact JSON format:
{
  "strengths": ["strength1", "strength2", "strength3", "strength4"],
  "gaps": ["gap1", "gap2", "gap3", "gap4"],
  "phase1": ["action1", "action2", "action3", "action4"],
  "phase2": ["action1", "action2", "action3", "action4"],
  "phase3": ["action1", "action2", "action3", "action4"]
}`;
}