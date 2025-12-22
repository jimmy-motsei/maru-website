import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

interface ProposalResult {
  score: number;
  proposal_sections: {
    executive_summary: string;
    solution_overview: string;
    implementation_plan: string;
    pricing: string;
  };
  recommendations: string[];
}

export async function generateProposal(input: any): Promise<ProposalResult> {
  const { company_info, project_scope, decision_makers } = input;

  if (!process.env.ANTHROPIC_API_KEY) {
    return getFallbackProposal(company_info);
  }

  try {
    const proposal = await generateWithAI(company_info, project_scope, decision_makers);
    return {
      score: 85,
      proposal_sections: proposal,
      recommendations: [
        'Schedule a discovery call to refine requirements',
        'Prepare detailed technical specifications',
        'Create implementation timeline with milestones',
        'Set up regular progress review meetings',
      ],
    };
  } catch (error) {
    console.error('Proposal generation error:', error);
    return getFallbackProposal(company_info);
  }
}

async function generateWithAI(companyInfo: any, projectScope: any, decisionMakers: any) {
  const prompt = `Generate a professional business proposal for:

Company: ${companyInfo.name}
Industry: ${companyInfo.industry}
Size: ${companyInfo.size}
Challenges: ${companyInfo.challenges?.join(', ')}

Services Requested: ${projectScope.services?.join(', ')}
Timeline: ${projectScope.timeline}
Budget Range: ${projectScope.budget_range}

Decision Makers: ${decisionMakers.primary_contact}
Stakeholders: ${decisionMakers.stakeholders?.join(', ')}

Generate a JSON response with these sections:
{
  "executive_summary": "<compelling 2-paragraph summary>",
  "solution_overview": "<detailed solution description>",
  "implementation_plan": "<step-by-step implementation approach>",
  "pricing": "<pricing structure and value justification>"
}

Make it professional, specific to their industry, and focused on ROI.`;

  const response = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  });

  const content = response.content[0];
  if (content.type === 'text') {
    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  }

  throw new Error('Failed to parse AI response');
}

function getFallbackProposal(companyInfo: any) {
  return {
    score: 75,
    proposal_sections: {
      executive_summary: `We propose a comprehensive automation solution for ${companyInfo.name} to streamline operations and drive growth. Our proven approach will deliver measurable ROI within 90 days.`,
      solution_overview: 'Custom automation platform tailored to your industry needs, including lead generation, sales pipeline optimization, and operational efficiency improvements.',
      implementation_plan: 'Phase 1: Discovery and Planning (2 weeks), Phase 2: System Setup (4 weeks), Phase 3: Testing and Training (2 weeks), Phase 4: Go-Live and Support (ongoing).',
      pricing: 'Investment starts at $5,000 setup + $500/month ongoing support. ROI typically achieved within 3-6 months through increased efficiency and revenue growth.',
    },
    recommendations: [
      'Schedule a discovery call to refine requirements',
      'Prepare detailed technical specifications',
      'Create implementation timeline with milestones',
      'Set up regular progress review meetings',
    ],
  };
}