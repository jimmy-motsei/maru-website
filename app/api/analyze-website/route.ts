import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

interface AnalysisResult {
  url: string;
  scores: {
    technical: number;
    seo: number;
    content: number;
    integration: number;
    automation: number;
  };
  totalScore: number;
  details: {
    technical: string[];
    seo: string[];
    content: string[];
    integration: string[];
    automation: string[];
  };
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Validate URL
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'Valid URL is required' },
        { status: 400 }
      );
    }

    // Ensure URL has protocol
    let targetUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      targetUrl = `https://${url}`;
    }

    // Validate URL format
    try {
      new URL(targetUrl);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Fetch website with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    let html: string;
    let fetchStartTime = Date.now();
    
    try {
      const response = await fetch(targetUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; MaruWebsiteAudit/1.0)',
        },
      });
      
      clearTimeout(timeout);
      
      if (!response.ok) {
        return NextResponse.json(
          { error: `Failed to fetch website: ${response.status} ${response.statusText}` },
          { status: 400 }
        );
      }

      html = await response.text();
    } catch (error: any) {
      clearTimeout(timeout);
      if (error.name === 'AbortError') {
        return NextResponse.json(
          { error: 'Request timeout - website took too long to respond' },
          { status: 408 }
        );
      }
      return NextResponse.json(
        { error: `Failed to fetch website: ${error.message}` },
        { status: 500 }
      );
    }

    const fetchTime = Date.now() - fetchStartTime;

    // Parse HTML
    const $ = cheerio.load(html);

    // Analyze website
    const analysis = analyzeWebsite($, html, targetUrl, fetchTime);

    return NextResponse.json(analysis);
  } catch (error: any) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Internal server error during analysis' },
      { status: 500 }
    );
  }
}

function analyzeWebsite(
  $: cheerio.CheerioAPI,
  html: string,
  url: string,
  fetchTime: number
): AnalysisResult {
  const scores = {
    technical: analyzeTechnical($, html, url, fetchTime),
    seo: analyzeSEO($),
    content: analyzeContent($, html),
    integration: analyzeIntegration($, html),
    automation: analyzeAutomation($),
  };

  const totalScore = Math.round(
    (scores.technical + scores.seo + scores.content + scores.integration + scores.automation) / 5
  );

  const details = {
    technical: getTechnicalDetails($, url, fetchTime),
    seo: getSEODetails($),
    content: getContentDetails($, html),
    integration: getIntegrationDetails($, html),
    automation: getAutomationDetails($),
  };

  return {
    url,
    scores,
    totalScore,
    details,
  };
}

// Technical Performance Analysis (0-20 points)
function analyzeTechnical($: cheerio.CheerioAPI, html: string, url: string, fetchTime: number): number {
  let score = 0;

  // Page load speed (0-8 points)
  if (fetchTime < 1000) score += 8;
  else if (fetchTime < 2000) score += 6;
  else if (fetchTime < 3000) score += 4;
  else if (fetchTime < 5000) score += 2;

  // HTTPS (0-6 points)
  if (url.startsWith('https://')) score += 6;

  // Mobile viewport meta tag (0-6 points)
  const hasViewport = $('meta[name="viewport"]').length > 0;
  if (hasViewport) score += 6;

  return score;
}

function getTechnicalDetails($: cheerio.CheerioAPI, url: string, fetchTime: number): string[] {
  const details: string[] = [];
  
  if (fetchTime < 2000) {
    details.push(`✓ Fast load time: ${fetchTime}ms`);
  } else {
    details.push(`⚠ Slow load time: ${fetchTime}ms (aim for <2000ms)`);
  }

  if (url.startsWith('https://')) {
    details.push('✓ HTTPS enabled');
  } else {
    details.push('✗ No HTTPS - security risk');
  }

  if ($('meta[name="viewport"]').length > 0) {
    details.push('✓ Mobile-responsive viewport configured');
  } else {
    details.push('✗ Missing viewport meta tag');
  }

  return details;
}

// SEO Foundation Analysis (0-20 points)
function analyzeSEO($: cheerio.CheerioAPI): number {
  let score = 0;

  // Title tag (0-5 points)
  const title = $('title').text();
  if (title && title.length > 10 && title.length < 70) score += 5;
  else if (title) score += 2;

  // Meta description (0-5 points)
  const metaDesc = $('meta[name="description"]').attr('content');
  if (metaDesc && metaDesc.length > 50 && metaDesc.length < 160) score += 5;
  else if (metaDesc) score += 2;

  // H1 tag (0-5 points)
  const h1Count = $('h1').length;
  if (h1Count === 1) score += 5;
  else if (h1Count > 0) score += 2;

  // Image alt attributes (0-5 points)
  const images = $('img');
  const imagesWithAlt = $('img[alt]');
  if (images.length === 0) score += 3;
  else {
    const altRatio = imagesWithAlt.length / images.length;
    if (altRatio >= 0.9) score += 5;
    else if (altRatio >= 0.5) score += 3;
    else if (altRatio > 0) score += 1;
  }

  return score;
}

function getSEODetails($: cheerio.CheerioAPI): string[] {
  const details: string[] = [];
  
  const title = $('title').text();
  if (title && title.length > 10 && title.length < 70) {
    details.push(`✓ Title tag optimized (${title.length} chars)`);
  } else if (title) {
    details.push(`⚠ Title tag exists but not optimal length (${title.length} chars)`);
  } else {
    details.push('✗ Missing title tag');
  }

  const metaDesc = $('meta[name="description"]').attr('content');
  if (metaDesc && metaDesc.length > 50 && metaDesc.length < 160) {
    details.push(`✓ Meta description optimized (${metaDesc.length} chars)`);
  } else if (metaDesc) {
    details.push(`⚠ Meta description exists but not optimal (${metaDesc.length} chars)`);
  } else {
    details.push('✗ Missing meta description');
  }

  const h1Count = $('h1').length;
  if (h1Count === 1) {
    details.push('✓ Single H1 tag (best practice)');
  } else if (h1Count > 1) {
    details.push(`⚠ Multiple H1 tags found (${h1Count})`);
  } else {
    details.push('✗ No H1 tag found');
  }

  const images = $('img');
  const imagesWithAlt = $('img[alt]');
  if (images.length > 0) {
    const altRatio = Math.round((imagesWithAlt.length / images.length) * 100);
    if (altRatio >= 90) {
      details.push(`✓ ${altRatio}% of images have alt text`);
    } else {
      details.push(`⚠ Only ${altRatio}% of images have alt text`);
    }
  }

  return details;
}

// Content Structure Analysis (0-20 points)
function analyzeContent($: cheerio.CheerioAPI, html: string): number {
  let score = 0;

  // Semantic HTML5 tags (0-7 points)
  const semanticTags = ['header', 'nav', 'main', 'article', 'section', 'aside', 'footer'];
  const foundTags = semanticTags.filter(tag => $(tag).length > 0);
  score += Math.min(7, foundTags.length);

  // Heading hierarchy (0-6 points)
  const hasH1 = $('h1').length > 0;
  const hasH2 = $('h2').length > 0;
  if (hasH1 && hasH2) score += 6;
  else if (hasH1 || hasH2) score += 3;

  // Structured data (0-7 points)
  const hasJsonLd = $('script[type="application/ld+json"]').length > 0;
  const hasSchemaOrg = html.includes('schema.org');
  if (hasJsonLd) score += 7;
  else if (hasSchemaOrg) score += 4;

  return score;
}

function getContentDetails($: cheerio.CheerioAPI, html: string): string[] {
  const details: string[] = [];
  
  const semanticTags = ['header', 'nav', 'main', 'article', 'section', 'aside', 'footer'];
  const foundTags = semanticTags.filter(tag => $(tag).length > 0);
  if (foundTags.length >= 5) {
    details.push(`✓ Good semantic HTML usage (${foundTags.length}/7 tags)`);
  } else if (foundTags.length > 0) {
    details.push(`⚠ Limited semantic HTML (${foundTags.length}/7 tags)`);
  } else {
    details.push('✗ No semantic HTML5 tags found');
  }

  const hasH1 = $('h1').length > 0;
  const hasH2 = $('h2').length > 0;
  if (hasH1 && hasH2) {
    details.push('✓ Proper heading hierarchy (H1 + H2)');
  } else {
    details.push('⚠ Incomplete heading hierarchy');
  }

  const hasJsonLd = $('script[type="application/ld+json"]').length > 0;
  if (hasJsonLd) {
    details.push('✓ Structured data (JSON-LD) present');
  } else if (html.includes('schema.org')) {
    details.push('⚠ Schema.org markup detected');
  } else {
    details.push('✗ No structured data found');
  }

  return details;
}

// Integration Readiness Analysis (0-20 points)
function analyzeIntegration($: cheerio.CheerioAPI, html: string): number {
  let score = 0;

  // Google Analytics / Tag Manager (0-7 points)
  const hasGA = html.includes('google-analytics.com') || html.includes('googletagmanager.com');
  if (hasGA) score += 7;

  // Facebook Pixel / Meta (0-7 points)
  const hasFBPixel = html.includes('facebook.net') || html.includes('connect.facebook.net');
  if (hasFBPixel) score += 7;

  // Other tracking/integration scripts (0-6 points)
  const hasHubspot = html.includes('hubspot');
  const hasIntercom = html.includes('intercom');
  const hasSegment = html.includes('segment.com');
  const integrationCount = [hasHubspot, hasIntercom, hasSegment].filter(Boolean).length;
  score += integrationCount * 2;

  return score;
}

function getIntegrationDetails($: cheerio.CheerioAPI, html: string): string[] {
  const details: string[] = [];
  
  if (html.includes('google-analytics.com') || html.includes('googletagmanager.com')) {
    details.push('✓ Google Analytics/Tag Manager detected');
  } else {
    details.push('✗ No Google Analytics detected');
  }

  if (html.includes('facebook.net') || html.includes('connect.facebook.net')) {
    details.push('✓ Facebook Pixel detected');
  }

  const integrations: string[] = [];
  if (html.includes('hubspot')) integrations.push('HubSpot');
  if (html.includes('intercom')) integrations.push('Intercom');
  if (html.includes('segment.com')) integrations.push('Segment');
  
  if (integrations.length > 0) {
    details.push(`✓ Additional integrations: ${integrations.join(', ')}`);
  } else {
    details.push('⚠ Limited third-party integrations');
  }

  return details;
}

// Automation Potential Analysis (0-20 points)
function analyzeAutomation($: cheerio.CheerioAPI): number {
  let score = 0;

  // Forms (0-8 points)
  const forms = $('form');
  if (forms.length > 0) {
    score += Math.min(8, forms.length * 4);
  }

  // Email inputs (0-6 points)
  const emailInputs = $('input[type="email"]');
  if (emailInputs.length > 0) score += 6;

  // Chat widgets (0-6 points)
  const chatSelectors = [
    '[class*="chat"]',
    '[id*="chat"]',
    '[class*="intercom"]',
    '[class*="drift"]',
    '[class*="crisp"]',
  ];
  const hasChat = chatSelectors.some(selector => $(selector).length > 0);
  if (hasChat) score += 6;

  return score;
}

function getAutomationDetails($: cheerio.CheerioAPI): string[] {
  const details: string[] = [];
  
  const forms = $('form');
  if (forms.length > 0) {
    details.push(`✓ ${forms.length} form(s) detected for lead capture`);
  } else {
    details.push('✗ No forms found');
  }

  const emailInputs = $('input[type="email"]');
  if (emailInputs.length > 0) {
    details.push(`✓ Email capture fields present (${emailInputs.length})`);
  } else {
    details.push('⚠ No email input fields found');
  }

  const chatSelectors = [
    '[class*="chat"]',
    '[id*="chat"]',
    '[class*="intercom"]',
    '[class*="drift"]',
    '[class*="crisp"]',
  ];
  const hasChat = chatSelectors.some(selector => $(selector).length > 0);
  if (hasChat) {
    details.push('✓ Chat/support widget detected');
  } else {
    details.push('⚠ No chat widget detected');
  }

  return details;
}
