import FirecrawlApp from '@mendable/firecrawl-js';
import { generateAIResponse } from '@/lib/ai';

interface WebsiteData {
  url: string;
  title?: string;
  description?: string;
  content: string;
  technologies: string[];
  metadata: any;
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

export async function analyzeWebsiteWithFirecrawl(input: any): Promise<LeadScoreResult> {
  const { website_url, company_name, industry, company_size } = input;

  try {
    // 1. Scrape website with Firecrawl
    const websiteData = await scrapeWithFirecrawl(website_url);
    
    // 2. Analyze with Gemini AI
    const aiAnalysis = await analyzeWithGemini(websiteData, { company_name, industry, company_size });
    
    // 3. Calculate scores
    const factors = calculateFactors(websiteData, aiAnalysis);
    const overallScore = Math.round(
      (factors.website_quality * 0.3) +
      (factors.tech_stack_maturity * 0.25) +
      (factors.content_quality * 0.25) +
      (factors.seo_readiness * 0.2)
    );

    return {
      score: overallScore,
      factors,
      recommendations: aiAnalysis.recommendations,
      company_data: {
        name: company_name || extractCompanyName(websiteData),
        industry: industry || aiAnalysis.detectedIndustry || 'Unknown',
        size: company_size || 'Unknown',
        description: aiAnalysis.companyDescription,
      },
    };

  } catch (error) {
    console.error('Website analysis error:', error);
    
    // Improved fallback with partial data
    return {
      score: 45,
      factors: {
        website_quality: 45,
        tech_stack_maturity: 45,
        content_quality: 45,
        seo_readiness: 45,
      },
      recommendations: [
        'Website analysis encountered issues - manual review recommended',
        'Ensure website is accessible and loading properly',
        'Consider technical SEO audit for better lead generation',
      ],
      company_data: {
        name: company_name || 'Unknown',
        industry: industry || 'Unknown',
        size: company_size || 'Unknown',
      },
    };
  }
}

async function scrapeWithFirecrawl(url: string): Promise<WebsiteData> {
  const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });
  
  const startTime = Date.now();
  const result = await app.scrapeUrl(url, {
    formats: ['markdown', 'html'],
    includeTags: ['title', 'meta', 'h1', 'h2', 'h3', 'img', 'a', 'script'],
    onlyMainContent: true,
    waitFor: 3000,
    timeout: 30000,
  });
  const loadTime = Date.now() - startTime;

  // Extract technologies from HTML
  const technologies = extractTechnologies(result.html || '');

  return {
    url,
    title: result.metadata?.title || '',
    description: result.metadata?.description || '',
    content: result.markdown || '',
    technologies,
    metadata: result.metadata || {},
    loadTime,
  };
}

function extractTechnologies(html: string): string[] {
  const technologies: string[] = [];
  
  const techPatterns = {
    'React': /react/i,
    'Vue': /vue\.js|vuejs/i,
    'Angular': /angular/i,
    'jQuery': /jquery/i,
    'WordPress': /wp-content|wordpress/i,
    'Shopify': /shopify/i,
    'Google Analytics': /google-analytics|gtag|ga\(/i,
    'HubSpot': /hubspot/i,
    'Mailchimp': /mailchimp/i,
    'Stripe': /stripe/i,
    'Intercom': /intercom/i,
  };

  Object.entries(techPatterns).forEach(([tech, pattern]) => {
    if (pattern.test(html)) {
      technologies.push(tech);
    }
  });

  return technologies;
}

async function analyzeWithGemini(websiteData: WebsiteData, companyInfo: any) {
  const prompt = `Analyze this website for lead generation potential:

URL: ${websiteData.url}
Title: ${websiteData.title}
Description: ${websiteData.description}
Content Preview: ${websiteData.content.substring(0, 2000)}
Technologies: ${websiteData.technologies.join(', ')}
Load Time: ${websiteData.loadTime}ms

Company Context:
- Name: ${companyInfo.company_name || 'Unknown'}
- Industry: ${companyInfo.industry || 'Unknown'}
- Size: ${companyInfo.company_size || 'Unknown'}

Provide analysis in JSON format:
{
  "websiteQualityScore": 0-100,
  "techStackScore": 0-100,
  "contentQualityScore": 0-100,
  "seoScore": 0-100,
  "detectedIndustry": "industry name",
  "companyDescription": "brief description",
  "recommendations": ["rec1", "rec2", "rec3", "rec4", "rec5"],
  "keyStrengths": ["strength1", "strength2"],
  "keyWeaknesses": ["weakness1", "weakness2"]
}

Focus on:
- Website technical quality and performance
- Marketing technology stack maturity
- Content quality and lead generation potential
- SEO readiness and discoverability
- Specific, actionable recommendations`;

  try {
    const response = await generateAIResponse(prompt);
    return JSON.parse(response);
  } catch (error) {
    console.error('Gemini analysis error:', error);
    
    // Fallback analysis
    return {
      websiteQualityScore: 50,
      techStackScore: websiteData.technologies.length * 10,
      contentQualityScore: Math.min(100, websiteData.content.length / 50),
      seoScore: websiteData.title && websiteData.description ? 60 : 30,
      detectedIndustry: 'Unknown',
      companyDescription: 'Analysis unavailable',
      recommendations: [
        'Improve website loading speed and performance',
        'Implement marketing automation tools',
        'Enhance content with clear value propositions',
        'Optimize SEO elements for better discoverability',
        'Add lead capture forms and CTAs',
      ],
      keyStrengths: ['Website is accessible'],
      keyWeaknesses: ['Limited analysis available'],
    };
  }
}

function calculateFactors(websiteData: WebsiteData, aiAnalysis: any) {
  return {
    website_quality: Math.min(100, aiAnalysis.websiteQualityScore || 50),
    tech_stack_maturity: Math.min(100, aiAnalysis.techStackScore || 50),
    content_quality: Math.min(100, aiAnalysis.contentQualityScore || 50),
    seo_readiness: Math.min(100, aiAnalysis.seoScore || 50),
  };
}

function extractCompanyName(websiteData: WebsiteData): string {
  try {
    const domain = new URL(websiteData.url).hostname.replace('www.', '');
    return domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
  } catch {
    return 'Unknown Company';
  }
}