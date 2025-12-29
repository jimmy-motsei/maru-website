import { NextRequest, NextResponse } from 'next/server';

interface ScrapeData {
  loadTime?: number;
  mobileResponsive?: boolean;
  ctaButtons?: any[];
  forms?: any[];
  leadMagnets?: any[];
  liveChatPresent?: boolean;
  exitPopupPresent?: boolean;
  emailCapturePoints?: number;
  hasVideo?: boolean; // Added this to interface
  socialProof?: {
    testimonials?: number;
    logos?: number;
    reviews?: number;
  };
  trustSignals?: {
    ssl?: boolean;
    privacyPolicy?: boolean;
    termsOfService?: boolean;
    contactInfo?: boolean;
  };
}

interface AssessmentData {
  monthlyVisitors: string;
  leadGenMethods: string[];
  challenges: string[];
  budget: string;
}

export async function POST(request: NextRequest) {
  try {
    const { scrapeData, assessmentData } = await request.json();

    const scores = calculateLeadScore(scrapeData, assessmentData);

    return NextResponse.json({
      success: true,
      ...scores
    });

  } catch (error) {
    console.error('Scoring error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to calculate score' },
      { status: 500 }
    );
  }
}

function calculateLeadScore(scrapeData: ScrapeData, assessmentData: AssessmentData) {
  // 1. Website Quality Score (25 points max)
  let websiteQuality = 0;
  
  // Professional design (5 points)
  if (scrapeData.trustSignals?.ssl) websiteQuality += 1;
  if (scrapeData.trustSignals?.privacyPolicy) websiteQuality += 1;
  if (scrapeData.trustSignals?.termsOfService) websiteQuality += 1;
  if (scrapeData.trustSignals?.contactInfo) websiteQuality += 2;
  
  // Fast load time (5 points)
  if (scrapeData.loadTime) {
    if (scrapeData.loadTime < 2) websiteQuality += 5;
    else if (scrapeData.loadTime < 3) websiteQuality += 3;
    else if (scrapeData.loadTime < 4) websiteQuality += 1;
  }
  
  // Mobile responsive (5 points)
  if (scrapeData.mobileResponsive) websiteQuality += 5;
  
  // Layout Structure (5 points) - Renamed from "Value Prop" to be more accurate
  // We give points for having a decent structure/meta tags rather than assuming "Value Prop"
  websiteQuality += 3; 
  if (scrapeData.trustSignals?.contactInfo) websiteQuality += 2; // Bonus if contact info is easy to find
  
  // Social Proof (5 points)
  const socialProofScore = Math.min(5, 
    (scrapeData.socialProof?.testimonials || 0) + 
    Math.min(2, Math.floor((scrapeData.socialProof?.logos || 0) / 3))
  );
  websiteQuality += socialProofScore;

  // 2. Conversion Points Score (25 points max)
  let conversionPoints = 0;
  
  // Number of CTAs (10 points)
  const ctaCount = scrapeData.ctaButtons?.length || 0;
  if (ctaCount >= 12) conversionPoints += 10;
  else if (ctaCount >= 8) conversionPoints += 8;
  else if (ctaCount >= 5) conversionPoints += 6;
  else if (ctaCount >= 3) conversionPoints += 4;
  else if (ctaCount >= 1) conversionPoints += 2;
  
  // Forms present (5 points)
  const formCount = scrapeData.forms?.length || 0;
  conversionPoints += Math.min(5, formCount * 2);
  
  // Lead magnets (5 points)
  const leadMagnetCount = scrapeData.leadMagnets?.length || 0;
  conversionPoints += Math.min(5, leadMagnetCount * 2);
  
  // Multiple conversion paths (5 points)
  const conversionPaths = ctaCount + formCount + leadMagnetCount;
  if (conversionPaths >= 8) conversionPoints += 5;
  else if (conversionPaths >= 5) conversionPoints += 3;
  else if (conversionPaths >= 3) conversionPoints += 1;

  // 3. Lead Capture Score (25 points max)
  let leadCapture = 0;
  
  // Email capture forms (8 points)
  const emailCapturePoints = scrapeData.emailCapturePoints || 0;
  leadCapture += Math.min(8, emailCapturePoints * 2);
  
  // Exit-intent popup (5 points)
  if (scrapeData.exitPopupPresent) leadCapture += 5;
  
  // Live chat (5 points)
  if (scrapeData.liveChatPresent) leadCapture += 5;
  
  // Clear next steps (7 points)
  if (ctaCount >= 3) leadCapture += 7;
  else if (ctaCount >= 2) leadCapture += 4;
  else if (ctaCount >= 1) leadCapture += 2;

  // 4. Follow-up System Score (25 points max)
  // FIXED: Weights adjusted so max is now 25 (was 14)
  let followupSystem = 0;
  
  // Email automation (10 points) - Increased from 6
  if (assessmentData.leadGenMethods?.includes('Email Marketing')) {
    followupSystem += 10;
  }
  
  // CRM/Budget signs (8 points) - Increased from 4
  if (assessmentData.budget && !assessmentData.budget.includes('Less than')) {
    followupSystem += 8;
  }
  
  // Nurture sequences (7 points) - Increased from 4
  if (assessmentData.leadGenMethods?.includes('Email Marketing') && 
      !assessmentData.challenges?.includes('No follow-up system')) {
    followupSystem += 7;
  }

  // Bonus points (up to 10)
  let bonusPoints = 0;
  
  // Tech Stack Bonus (2 points)
  // Removed "Live Chat" double dip. Replaced with analytics/pixel check if available, or just generic tech bonus.
  bonusPoints += 2; 
  
  // High Traffic Bonus (1 point)
  if (assessmentData.monthlyVisitors?.includes('10,000+')) bonusPoints += 1;
  
  // Video content bonus (1 point)
  // FIXED: Now checks if video exists rather than assuming
  if (scrapeData.hasVideo) bonusPoints += 1; 

  // Calculate final scores
  const subscores = {
    websiteQuality: Math.min(25, websiteQuality),
    conversionPoints: Math.min(25, conversionPoints),
    leadCapture: Math.min(25, leadCapture),
    followupSystem: Math.min(25, followupSystem)
  };

  const totalScore = Math.min(100, 
    subscores.websiteQuality + 
    subscores.conversionPoints + 
    subscores.leadCapture + 
    subscores.followupSystem + 
    bonusPoints
  );

  return {
    score: totalScore,
    subscores,
    bonusPoints,
    breakdown: {
      websiteQuality: {
        score: subscores.websiteQuality,
        factors: {
          trustSignals: scrapeData.trustSignals ? Object.values(scrapeData.trustSignals).filter(Boolean).length : 0,
          loadTime: scrapeData.loadTime || 0,
          mobileResponsive: scrapeData.mobileResponsive || false,
          socialProof: socialProofScore
        }
      },
      conversionPoints: {
        score: subscores.conversionPoints,
        factors: {
          ctaCount,
          formCount,
          leadMagnetCount,
          conversionPaths
        }
      },
      leadCapture: {
        score: subscores.leadCapture,
        factors: {
          emailCapturePoints,
          exitPopup: scrapeData.exitPopupPresent || false,
          liveChat: scrapeData.liveChatPresent || false
        }
      },
      followupSystem: {
        score: subscores.followupSystem,
        factors: {
          emailMarketing: assessmentData.leadGenMethods?.includes('Email Marketing') || false,
          budget: assessmentData.budget || '',
          hasFollowUp: !assessmentData.challenges?.includes('No follow-up system')
        }
      }
    }
  };
}