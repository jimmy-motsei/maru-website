import { chromium } from 'playwright';
import { generateAIResponse } from '@/lib/ai';

interface WebsiteData {
  url: string;
  title?: string;
  description?: string;
  headers: string[];
  technologies: string[];
  contentQuality: number;
  seoScore: number;
  loadTime: number;
}

interface LeadScoreResult {
  score: number;
  factors: {
    website_quality: number;
    tech_stack_maturity: number;
    content_quality: number;
    seo_readiness: number;
  };
  recommendations: string[];
  company_data?: {
    name: string;
    industry: string;
    size: string;
    description?: string;
  };
}

export async function analyzeWebsite(input: any): Promise<LeadScoreResult> {
  const { website_url, company_name, industry, company_size } = input;

  try {
    // 1. Scrape website data
    const websiteData = await scrapeWebsite(website_url);
    
    // 2. Enrich company data (if available)
    const companyData = await enrichCompanyData(website_url, company_name);
    
    // 3. Calculate lead score
    const factors = calculateScoreFactors(websiteData, companyData);
    const overallScore = Math.round(
      (factors.website_quality * 0.3) +
      (factors.tech_stack_maturity * 0.25) +
      (factors.content_quality * 0.25) +
      (factors.seo_readiness * 0.2)
    );

    // 4. Generate AI recommendations
    const recommendations = await generateRecommendations(websiteData, factors, companyData);

    return {
      score: overallScore,
      factors,
      recommendations,
      company_data: companyData,
    };

  } catch (error) {
    console.error('Website analysis error:', error);
    
    // Fallback scoring for failed scrapes
    return {
      score: 50,
      factors: {
        website_quality: 50,
        tech_stack_maturity: 50,
        content_quality: 50,
        seo_readiness: 50,
      },
      recommendations: [
        'Website analysis failed - manual review recommended',
        'Ensure website is accessible and loading properly',
        'Consider technical SEO audit',
      ],
      company_data: {
        name: company_name || 'Unknown',
        industry: industry || 'Unknown',
        size: company_size || 'Unknown',
      },
    };
  }
}

async function scrapeWebsite(url: string): Promise<WebsiteData> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    const startTime = Date.now();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    const loadTime = Date.now() - startTime;

    // Extract basic metadata
    const title = await page.title();
    const description = await page.getAttribute('meta[name="description"]', 'content') || '';
    
    // Extract headers for content structure analysis
    const headers = await page.$$eval('h1, h2, h3', elements => 
      elements.map(el => el.textContent?.trim() || '').filter(Boolean)
    );

    // Detect technologies (simplified)
    const technologies = await detectTechnologies(page);
    
    // Analyze content quality
    const contentQuality = await analyzeContentQuality(page);
    
    // Basic SEO score
    const seoScore = await calculateSEOScore(page, title, description);

    return {
      url,
      title,
      description,
      headers,
      technologies,
      contentQuality,
      seoScore,
      loadTime,
    };

  } finally {
    await browser.close();
  }
}

async function detectTechnologies(page: any): Promise<string[]> {
  const technologies: string[] = [];
  
  try {
    // Check for common frameworks/libraries
    const scripts = await page.$$eval('script[src]', (elements: any[]) => 
      elements.map(el => el.src).filter(Boolean)
    );
    
    // Simple technology detection
    const techPatterns = {
      'React': /react/i,
      'Vue': /vue/i,
      'Angular': /angular/i,
      'jQuery': /jquery/i,
      'WordPress': /wp-content|wordpress/i,
      'Shopify': /shopify/i,
      'Google Analytics': /google-analytics|gtag/i,
      'HubSpot': /hubspot/i,
    };

    const allContent = scripts.join(' ') + await page.content();
    
    Object.entries(techPatterns).forEach(([tech, pattern]) => {
      if (pattern.test(allContent)) {
        technologies.push(tech);
      }
    });

  } catch (error) {
    console.error('Technology detection error:', error);
  }
  
  return technologies;
}

async function analyzeContentQuality(page: any): Promise<number> {
  try {
    const textContent = await page.textContent('body');
    const wordCount = textContent?.split(/\s+/).length || 0;
    
    // Simple content quality scoring
    let score = 0;
    
    // Word count factor
    if (wordCount > 500) score += 30;
    else if (wordCount > 200) score += 20;
    else score += 10;
    
    // Image presence
    const imageCount = await page.$$eval('img', (imgs: any[]) => imgs.length);
    if (imageCount > 0) score += 20;
    
    // Navigation structure
    const navExists = await page.$('nav') !== null;
    if (navExists) score += 20;
    
    // Contact information
    const hasContact = /contact|phone|email/i.test(textContent || '');
    if (hasContact) score += 15;
    
    // Call-to-action buttons
    const ctaCount = await page.$$eval('button, .btn, [class*="button"]', (btns: any[]) => btns.length);
    if (ctaCount > 0) score += 15;
    
    return Math.min(score, 100);
    
  } catch (error) {
    console.error('Content quality analysis error:', error);
    return 50;
  }
}

async function calculateSEOScore(page: any, title: string, description: string): Promise<number> {
  let score = 0;
  
  try {
    // Title tag
    if (title && title.length > 10 && title.length < 60) score += 25;
    
    // Meta description
    if (description && description.length > 50 && description.length < 160) score += 25;
    
    // H1 tag
    const h1Count = await page.$$eval('h1', (h1s: any[]) => h1s.length);
    if (h1Count === 1) score += 20;
    
    // Alt tags on images
    const imagesWithAlt = await page.$$eval('img[alt]', (imgs: any[]) => imgs.length);
    const totalImages = await page.$$eval('img', (imgs: any[]) => imgs.length);
    if (totalImages > 0 && imagesWithAlt / totalImages > 0.8) score += 15;
    
    // Internal links
    const internalLinks = await page.$$eval('a[href^="/"], a[href*="' + page.url() + '"]', (links: any[]) => links.length);
    if (internalLinks > 5) score += 15;
    
  } catch (error) {
    console.error('SEO score calculation error:', error);
  }
  
  return Math.min(score, 100);
}

function calculateScoreFactors(websiteData: WebsiteData, companyData: any) {
  return {
    website_quality: Math.round(
      (websiteData.loadTime < 3000 ? 30 : 15) + // Load speed
      (websiteData.title ? 20 : 0) + // Has title
      (websiteData.description ? 20 : 0) + // Has description
      (websiteData.headers.length > 3 ? 30 : 15) // Content structure
    ),
    tech_stack_maturity: Math.round(
      (websiteData.technologies.length * 10) + // Number of technologies
      (websiteData.technologies.includes('Google Analytics') ? 20 : 0) + // Analytics
      (websiteData.technologies.includes('HubSpot') ? 30 : 0) // Marketing automation
    ),
    content_quality: websiteData.contentQuality,
    seo_readiness: websiteData.seoScore,
  };
}

async function generateRecommendations(
  websiteData: WebsiteData, 
  factors: any, 
  companyData: any
): Promise<string[]> {
  try {
    const prompt = `Analyze this website data and provide 3-5 specific, actionable recommendations for improving their digital marketing and automation readiness:

Website: ${websiteData.url}
Company: ${companyData?.name || 'Unknown'}
Industry: ${companyData?.industry || 'Unknown'}

Scores:
- Website Quality: ${factors.website_quality}/100
- Tech Stack Maturity: ${factors.tech_stack_maturity}/100  
- Content Quality: ${factors.content_quality}/100
- SEO Readiness: ${factors.seo_readiness}/100

Technologies Detected: ${websiteData.technologies.join(', ') || 'None detected'}
Load Time: ${websiteData.loadTime}ms
Content Headers: ${websiteData.headers.length} headers found

Provide recommendations as a JSON array of strings, focusing on:
1. Immediate quick wins
2. Technical improvements
3. Content/SEO enhancements
4. Marketing automation opportunities

Format: ["recommendation 1", "recommendation 2", ...]`;

    const response = await generateAIResponse(prompt);
    
    try {
      return JSON.parse(response);
    } catch {
      // Fallback if JSON parsing fails
      return response.split('\n').filter(line => line.trim().startsWith('-')).map(line => line.replace(/^-\s*/, ''));
    }

  } catch (error) {
    console.error('AI recommendation generation error:', error);
  }

  // Fallback recommendations based on scores
  const recommendations: string[] = [];
  
  if (factors.website_quality < 70) {
    recommendations.push('Optimize website loading speed and mobile responsiveness');
  }
  if (factors.tech_stack_maturity < 50) {
    recommendations.push('Implement Google Analytics and marketing automation tools');
  }
  if (factors.content_quality < 60) {
    recommendations.push('Enhance website content with clear value propositions and CTAs');
  }
  if (factors.seo_readiness < 70) {
    recommendations.push('Improve SEO with better meta descriptions and header structure');
  }
  
  recommendations.push('Consider implementing lead capture forms and email marketing');
  
  return recommendations;
}

async function enrichCompanyData(websiteUrl: string, companyName?: string) {
  // Placeholder for company enrichment (Clearbit, etc.)
  // For now, return basic data structure
  return {
    name: companyName || extractDomainName(websiteUrl),
    industry: 'Unknown',
    size: 'Unknown',
    description: undefined,
  };
}

function extractDomainName(url: string): string {
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    return domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
  } catch {
    return 'Unknown Company';
  }
}