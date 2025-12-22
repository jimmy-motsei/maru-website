import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

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
    // For MVP, use AI to analyze based on URL and company info
    const analysis = await analyzeWithAI(website_url, company_name, industry, company_size);
    
    return {
      score: analysis.score,
      factors: analysis.factors,
      recommendations: analysis.recommendations,
      company_data: {
        name: company_name || 'Unknown',
        industry: industry || 'Unknown',
        size: company_size || 'Unknown',
      },
    };

  } catch (error) {
    console.error('Website analysis error:', error);
    
    // Fallback scoring
    return {
      score: 50,
      factors: {
        website_quality: 50,
        tech_stack_maturity: 50,
        content_quality: 50,
        seo_readiness: 50,
      },
      recommendations: [
        'Implement lead capture forms on key pages',
        'Add clear call-to-action buttons throughout your site',
        'Consider implementing marketing automation tools',
        'Optimize your website for mobile devices',
        'Improve page loading speed for better user experience',
      ],
      company_data: {
        name: company_name || 'Unknown',
        industry: industry || 'Unknown',
        size: company_size || 'Unknown',
      },
    };
  }
}

async function analyzeWithAI(
  websiteUrl: string,
  companyName: string,
  industry: string,
  companySize: string
): Promise<LeadScoreResult> {
  
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('Anthropic API key not configured');
  }

  const prompt = `Analyze this company's lead generation readiness and provide a detailed assessment:

Company: ${companyName}
Website: ${websiteUrl}
Industry: ${industry}
Company Size: ${companySize}

Provide a JSON response with the following structure:
{
  "score": <overall score 0-100>,
  "factors": {
    "website_quality": <score 0-100>,
    "tech_stack_maturity": <score 0-100>,
    "content_quality": <score 0-100>,
    "seo_readiness": <score 0-100>
  },
  "recommendations": [
    "<specific actionable recommendation 1>",
    "<specific actionable recommendation 2>",
    "<specific actionable recommendation 3>",
    "<specific actionable recommendation 4>",
    "<specific actionable recommendation 5>"
  ]
}

Base your assessment on:
1. Website Quality: Professional design, mobile responsiveness, loading speed
2. Tech Stack Maturity: Marketing automation, analytics, CRM integration
3. Content Quality: Value proposition clarity, content depth, CTAs
4. SEO Readiness: Meta tags, content structure, technical SEO

Provide specific, actionable recommendations tailored to their industry and size.`;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    });

    const content = response.content[0];
    if (content.type === 'text') {
      // Extract JSON from response
      const jsonMatch = content.text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return {
          score: parsed.score,
          factors: parsed.factors,
          recommendations: parsed.recommendations,
        };
      }
    }

    throw new Error('Failed to parse AI response');

  } catch (error) {
    console.error('AI analysis error:', error);
    throw error;
  }
}