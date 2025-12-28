import FirecrawlApp from '@mendable/firecrawl-js';
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
      recommendations: aiAnalysis.recommendations || [],
      company_data: {
        name: company_name || extractCompanyName(websiteData),
        industry: industry || aiAnalysis.detectedIndustry || 'Unknown',
        size: company_size || 'Unknown',
        description: aiAnalysis.companyDescription,
      },
    };

  } catch (error) {
    console.error('Website analysis error:', error);
    
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

  const technologies = extractTechnologies(result.html || '');

  return {
    url,
    title: result.metadata?.title || '',
    description: result.metadata?.description || '',
    headers: extractHeaders(result.markdown || ''),
    technologies,
    contentQuality: analyzeContentQuality(result.markdown || ''),
    seoScore: calculateSEOScore(result.metadata || {}),
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
  };

  Object.entries(techPatterns).forEach(([tech, pattern]) => {
    if (pattern.test(html)) {
      technologies.push(tech);
    }
  });

  return technologies;
}

function extractHeaders(markdown: string): string[] {
  const headerRegex = /^#{1,3}\s+(.+)$/gm;
  const headers: string[] = [];
  let match;
  
  while ((match = headerRegex.exec(markdown)) !== null) {
    headers.push(match[1].trim());
  }
  
  return headers;
}

function analyzeContentQuality(markdown: string): number {
  const wordCount = markdown.split(/\s+/).length;
  let score = 0;
  
  if (wordCount > 500) score += 30;
  else if (wordCount > 200) score += 20;
  else score += 10;
  
  if (markdown.includes('![')) score += 20; // Images
  if (markdown.includes('[') && markdown.includes('](')) score += 15; // Links
  if (markdown.toLowerCase().includes('contact')) score += 15;
  if (markdown.toLowerCase().includes('about')) score += 10;
  
  return Math.min(score, 100);
}

function calculateSEOScore(metadata: any): number {
  let score = 0;
  
  if (metadata.title && metadata.title.length > 10 && metadata.title.length < 60) score += 25;
  if (metadata.description && metadata.description.length > 50 && metadata.description.length < 160) score += 25;
  if (metadata.ogTitle) score += 15;
  if (metadata.ogDescription) score += 15;
  if (metadata.keywords) score += 10;
  
  return Math.min(score, 100);
}

async function analyzeWithGemini(websiteData: WebsiteData, companyInfo: any) {
  const prompt = `Analyze this website for lead generation potential:

URL: ${websiteData.url}
Title: ${websiteData.title}
Description: ${websiteData.description}
Content Quality Score: ${websiteData.contentQuality}
SEO Score: ${websiteData.seoScore}
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
  "recommendations": ["rec1", "rec2", "rec3", "rec4", "rec5"]
}

Focus on lead generation potential and actionable improvements.`;

  try {
    const response = await generateAIResponse(prompt);
    return JSON.parse(response);
  } catch (error) {
    console.error('Gemini analysis error:', error);
    
    return {
      websiteQualityScore: websiteData.loadTime < 3000 ? 70 : 50,
      techStackScore: Math.min(100, websiteData.technologies.length * 15),
      contentQualityScore: websiteData.contentQuality,
      seoScore: websiteData.seoScore,
      detectedIndustry: 'Unknown',
      companyDescription: 'Analysis unavailable',
      recommendations: [
        'Improve website loading speed and performance',
        'Implement marketing automation tools',
        'Enhance content with clear value propositions',
        'Optimize SEO elements for better discoverability',
        'Add lead capture forms and CTAs',
      ],
    };
  }
}

function calculateFactors(websiteData: WebsiteData, aiAnalysis: any) {
  return {
    website_quality: Math.min(100, aiAnalysis.websiteQualityScore || 50),
    tech_stack_maturity: Math.min(100, aiAnalysis.techStackScore || 50),
    content_quality: Math.min(100, aiAnalysis.contentQualityScore || websiteData.contentQuality),
    seo_readiness: Math.min(100, aiAnalysis.seoScore || websiteData.seoScore),
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