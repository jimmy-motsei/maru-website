import { generateAIResponse } from '@/lib/ai';

interface ProposalInput {
  companyName: string;
  industry: string;
  companySize: string;
  projectType: string;
  budget: string;
  timeline: string;
  challenges: string[];
  goals: string[];
  stakeholders: string;
  decisionProcess: string;
}

interface ProposalResult {
  score: number;
  proposal: {
    executiveSummary: string;
    problemStatement: string;
    proposedSolution: string;
    implementation: string;
    timeline: string;
    investment: string;
    nextSteps: string;
  };
  recommendations: string[];
  winProbability: number;
  competitiveAdvantages: string[];
}

export async function generateProposal(input: ProposalInput): Promise<ProposalResult> {
  try {
    // 1. Analyze proposal requirements
    const requirements = analyzeRequirements(input);
    
    // 2. Generate AI-powered proposal content
    const proposalContent = await generateProposalContent(input, requirements);
    
    // 3. Calculate win probability and score
    const winProbability = calculateWinProbability(input, requirements);
    const score = Math.round(winProbability);
    
    // 4. Generate competitive advantages
    const competitiveAdvantages = generateCompetitiveAdvantages(input);
    
    // 5. Create recommendations
    const recommendations = await generateRecommendations(input, winProbability);

    return {
      score,
      proposal: proposalContent,
      recommendations,
      winProbability,
      competitiveAdvantages,
    };

  } catch (error) {
    console.error('Proposal generation error:', error);
    throw new Error('Failed to generate proposal');
  }
}

function analyzeRequirements(input: ProposalInput) {
  return {
    complexity: assessComplexity(input),
    urgency: assessUrgency(input.timeline),
    budgetFit: assessBudgetFit(input.budget),
    stakeholderCount: assessStakeholders(input.stakeholders),
    challengeLevel: input.challenges.length,
  };
}

function assessComplexity(input: ProposalInput): 'low' | 'medium' | 'high' {
  const complexityFactors = [
    input.projectType.toLowerCase().includes('integration'),
    input.projectType.toLowerCase().includes('automation'),
    input.challenges.length > 3,
    input.goals.length > 5,
  ].filter(Boolean).length;

  if (complexityFactors >= 3) return 'high';
  if (complexityFactors >= 2) return 'medium';
  return 'low';
}

function assessUrgency(timeline: string): 'low' | 'medium' | 'high' {
  const timelineLower = timeline.toLowerCase();
  if (timelineLower.includes('asap') || timelineLower.includes('urgent') || timelineLower.includes('1 month')) {
    return 'high';
  }
  if (timelineLower.includes('3 month') || timelineLower.includes('quarter')) {
    return 'medium';
  }
  return 'low';
}

function assessBudgetFit(budget: string): 'low' | 'medium' | 'high' {
  const budgetLower = budget.toLowerCase();
  if (budgetLower.includes('50k') || budgetLower.includes('100k') || budgetLower.includes('enterprise')) {
    return 'high';
  }
  if (budgetLower.includes('25k') || budgetLower.includes('mid')) {
    return 'medium';
  }
  return 'low';
}

function assessStakeholders(stakeholders: string): number {
  const stakeholderCount = stakeholders.split(',').length;
  return Math.min(stakeholderCount, 10);
}

async function generateProposalContent(input: ProposalInput, requirements: any): Promise<ProposalResult['proposal']> {
  const prompt = `Generate a professional business proposal for the following client:

Company: ${input.companyName}
Industry: ${input.industry}
Size: ${input.companySize}
Project: ${input.projectType}
Budget: ${input.budget}
Timeline: ${input.timeline}
Challenges: ${input.challenges.join(', ')}
Goals: ${input.goals.join(', ')}
Stakeholders: ${input.stakeholders}
Decision Process: ${input.decisionProcess}

Create a comprehensive proposal with these sections:
1. Executive Summary (2-3 sentences)
2. Problem Statement (identify key challenges)
3. Proposed Solution (our approach and methodology)
4. Implementation Plan (phases and deliverables)
5. Timeline (realistic project schedule)
6. Investment (value-based pricing approach)
7. Next Steps (clear call to action)

Make it professional, specific to their industry, and focused on business outcomes. Use persuasive language that demonstrates understanding of their challenges.

Return as JSON with keys: executiveSummary, problemStatement, proposedSolution, implementation, timeline, investment, nextSteps`;

  try {
    const response = await generateAIResponse(prompt);
    return JSON.parse(response);
  } catch (error) {
    console.error('AI proposal generation error:', error);
    
    // Fallback proposal structure
    return {
      executiveSummary: `We propose a comprehensive ${input.projectType} solution for ${input.companyName} that addresses your key challenges and delivers measurable business outcomes within your ${input.timeline} timeline.`,
      problemStatement: `${input.companyName} faces challenges including: ${input.challenges.join(', ')}. These issues are impacting operational efficiency and growth potential in the ${input.industry} sector.`,
      proposedSolution: `Our proven methodology combines industry best practices with cutting-edge technology to deliver a tailored solution that addresses your specific needs and goals.`,
      implementation: `Phase 1: Discovery and Planning (2 weeks)\nPhase 2: Solution Development (4-6 weeks)\nPhase 3: Implementation and Testing (2-4 weeks)\nPhase 4: Training and Go-Live (1-2 weeks)`,
      timeline: `Total project duration: ${input.timeline}. We'll provide weekly progress updates and maintain clear communication throughout the engagement.`,
      investment: `Investment range: ${input.budget}. This includes all development, implementation, training, and 3 months of post-launch support.`,
      nextSteps: `1. Schedule a discovery call to finalize requirements\n2. Provide detailed project scope and timeline\n3. Begin implementation within 2 weeks of approval`,
    };
  }
}

function calculateWinProbability(input: ProposalInput, requirements: any): number {
  let probability = 50; // Base probability

  // Budget fit factor
  if (requirements.budgetFit === 'high') probability += 20;
  else if (requirements.budgetFit === 'medium') probability += 10;
  else probability -= 10;

  // Urgency factor
  if (requirements.urgency === 'high') probability += 15;
  else if (requirements.urgency === 'medium') probability += 5;

  // Complexity factor (lower complexity = higher win rate)
  if (requirements.complexity === 'low') probability += 10;
  else if (requirements.complexity === 'high') probability -= 10;

  // Stakeholder factor (fewer stakeholders = higher win rate)
  if (requirements.stakeholderCount <= 2) probability += 10;
  else if (requirements.stakeholderCount >= 5) probability -= 10;

  // Industry factor
  const favorableIndustries = ['technology', 'professional services', 'healthcare'];
  if (favorableIndustries.includes(input.industry.toLowerCase())) {
    probability += 10;
  }

  // Company size factor
  if (input.companySize === 'smb') probability += 15; // Sweet spot
  else if (input.companySize === 'enterprise') probability -= 5; // More complex sales

  return Math.max(10, Math.min(95, probability));
}

function generateCompetitiveAdvantages(input: ProposalInput): string[] {
  const advantages = [
    'Proven track record in the ' + input.industry + ' industry',
    'Rapid implementation methodology reduces time-to-value',
    'Comprehensive post-launch support and training included',
    'Scalable solution that grows with your business',
    'Local South African team with deep market understanding',
  ];

  // Add specific advantages based on project type
  if (input.projectType.toLowerCase().includes('automation')) {
    advantages.push('Advanced automation expertise reduces manual processes by 80%');
  }
  if (input.projectType.toLowerCase().includes('ai')) {
    advantages.push('Cutting-edge AI implementation with measurable ROI');
  }
  if (input.companySize === 'smb') {
    advantages.push('SMB-focused approach with flexible pricing and support');
  }

  return advantages.slice(0, 5);
}

async function generateRecommendations(input: ProposalInput, winProbability: number): Promise<string[]> {
  try {
    const prompt = `Based on this proposal scenario, provide 4-5 specific recommendations to improve win probability:

Company: ${input.companyName} (${input.industry}, ${input.companySize})
Project: ${input.projectType}
Current Win Probability: ${winProbability}%
Budget: ${input.budget}
Timeline: ${input.timeline}

Provide actionable recommendations as a JSON array focusing on:
1. Proposal improvements
2. Stakeholder engagement strategies
3. Risk mitigation
4. Value demonstration
5. Next steps optimization

Format: ["recommendation 1", "recommendation 2", ...]`;

    const response = await generateAIResponse(prompt);
    return JSON.parse(response);
  } catch (error) {
    console.error('Recommendation generation error:', error);
    
    // Fallback recommendations based on win probability
    const recommendations: string[] = [];
    
    if (winProbability < 60) {
      recommendations.push('Schedule a discovery call to better understand their specific requirements');
      recommendations.push('Provide case studies from similar companies in their industry');
    }
    
    if (input.stakeholders.split(',').length > 3) {
      recommendations.push('Create stakeholder-specific value propositions for each decision maker');
    }
    
    recommendations.push('Offer a pilot project or proof-of-concept to reduce perceived risk');
    recommendations.push('Include detailed ROI calculations and success metrics');
    recommendations.push('Provide references from similar successful implementations');
    
    return recommendations.slice(0, 5);
  }
}