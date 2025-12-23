import { generateAIResponse } from '@/lib/ai';

interface PipelineData {
  dealName: string;
  stage: string;
  dateCreated: string;
  dateModified: string;
  dealValue: number;
  leadSource: string;
  stageHistory?: StageTransition[];
}

interface StageTransition {
  stage: string;
  date: string;
  daysInStage: number;
}

interface PipelineLeakResult {
  score: number;
  totalDeals: number;
  conversionRates: Record<string, number>;
  avgTimeInStage: Record<string, number>;
  leaks: PipelineLeak[];
  recommendations: string[];
  summary: {
    biggestLeak: string;
    potentialRevenue: number;
    quickWins: string[];
  };
}

interface PipelineLeak {
  stage: string;
  severity: 'high' | 'medium' | 'low';
  conversionRate: number;
  avgDaysInStage: number;
  dealsLost: number;
  revenueImpact: number;
  description: string;
}

export async function analyzePipelineLeaks(csvData: string): Promise<PipelineLeakResult> {
  try {
    // 1. Parse CSV data
    const pipelineData = parseCSVData(csvData);
    
    // 2. Calculate conversion rates and stage metrics
    const stageMetrics = calculateStageMetrics(pipelineData);
    
    // 3. Identify leaks
    const leaks = identifyLeaks(stageMetrics, pipelineData);
    
    // 4. Calculate overall pipeline health score
    const score = calculatePipelineScore(stageMetrics, leaks);
    
    // 5. Generate AI recommendations
    const recommendations = await generateRecommendations(stageMetrics, leaks);
    
    // 6. Create summary insights
    const summary = createSummary(leaks, pipelineData);

    return {
      score,
      totalDeals: pipelineData.length,
      conversionRates: stageMetrics.conversionRates,
      avgTimeInStage: stageMetrics.avgTimeInStage,
      leaks,
      recommendations,
      summary,
    };

  } catch (error) {
    console.error('Pipeline analysis error:', error);
    throw new Error('Failed to analyze pipeline data');
  }
}

function parseCSVData(csvData: string): PipelineData[] {
  const lines = csvData.trim().split('\n');
  const headers = lines[0].toLowerCase().split(',').map(h => h.trim());
  
  // Map common header variations
  const headerMap: Record<string, string> = {
    'deal name': 'dealName',
    'deal_name': 'dealName',
    'opportunity name': 'dealName',
    'stage': 'stage',
    'deal stage': 'stage',
    'pipeline stage': 'stage',
    'date created': 'dateCreated',
    'created date': 'dateCreated',
    'create_date': 'dateCreated',
    'date modified': 'dateModified',
    'modified date': 'dateModified',
    'last_modified': 'dateModified',
    'deal value': 'dealValue',
    'amount': 'dealValue',
    'deal_amount': 'dealValue',
    'lead source': 'leadSource',
    'source': 'leadSource',
    'lead_source': 'leadSource',
  };

  const data: PipelineData[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
    const row: any = {};
    
    headers.forEach((header, index) => {
      const mappedKey = headerMap[header] || header;
      row[mappedKey] = values[index] || '';
    });

    // Validate and clean data
    if (row.dealName && row.stage) {
      data.push({
        dealName: row.dealName,
        stage: row.stage,
        dateCreated: row.dateCreated || new Date().toISOString(),
        dateModified: row.dateModified || new Date().toISOString(),
        dealValue: parseFloat(row.dealValue) || 0,
        leadSource: row.leadSource || 'Unknown',
      });
    }
  }

  return data;
}

function calculateStageMetrics(data: PipelineData[]) {
  const stages = [...new Set(data.map(d => d.stage))];
  const stageOrder = determineStageOrder(stages);
  
  const conversionRates: Record<string, number> = {};
  const avgTimeInStage: Record<string, number> = {};
  const stageCounts: Record<string, number> = {};
  
  // Count deals in each stage
  data.forEach(deal => {
    stageCounts[deal.stage] = (stageCounts[deal.stage] || 0) + 1;
  });

  // Calculate conversion rates between stages
  for (let i = 0; i < stageOrder.length - 1; i++) {
    const currentStage = stageOrder[i];
    const nextStage = stageOrder[i + 1];
    
    const currentCount = stageCounts[currentStage] || 0;
    const nextCount = stageCounts[nextStage] || 0;
    
    conversionRates[currentStage] = currentCount > 0 ? (nextCount / currentCount) * 100 : 0;
  }

  // Calculate average time in stage (simplified)
  stageOrder.forEach(stage => {
    const stageDeals = data.filter(d => d.stage === stage);
    const avgDays = stageDeals.reduce((sum, deal) => {
      const created = new Date(deal.dateCreated);
      const modified = new Date(deal.dateModified);
      const days = Math.max(1, Math.floor((modified.getTime() - created.getTime()) / (1000 * 60 * 60 * 24)));
      return sum + days;
    }, 0) / Math.max(1, stageDeals.length);
    
    avgTimeInStage[stage] = Math.round(avgDays);
  });

  return {
    conversionRates,
    avgTimeInStage,
    stageCounts,
    stageOrder,
  };
}

function determineStageOrder(stages: string[]): string[] {
  // Common stage patterns for ordering
  const stagePatterns = [
    /lead|prospect|inquiry/i,
    /qualified|mql|sql/i,
    /opportunity|demo|presentation/i,
    /proposal|quote|negotiation/i,
    /closed|won|lost/i,
  ];

  const orderedStages: string[] = [];
  const remainingStages = [...stages];

  // Match stages to patterns
  stagePatterns.forEach(pattern => {
    const matches = remainingStages.filter(stage => pattern.test(stage));
    matches.forEach(match => {
      orderedStages.push(match);
      remainingStages.splice(remainingStages.indexOf(match), 1);
    });
  });

  // Add any remaining stages
  return [...orderedStages, ...remainingStages];
}

function identifyLeaks(metrics: any, data: PipelineData[]): PipelineLeak[] {
  const leaks: PipelineLeak[] = [];
  const { conversionRates, avgTimeInStage, stageCounts } = metrics;

  Object.entries(conversionRates).forEach(([stage, rate]) => {
    const avgDays = avgTimeInStage[stage] || 0;
    const dealsInStage = stageCounts[stage] || 0;
    
    // Identify leaks based on conversion rate and time
    let severity: 'high' | 'medium' | 'low' = 'low';
    let description = '';

    if (rate < 30) {
      severity = 'high';
      description = `Critical conversion bottleneck - only ${rate.toFixed(1)}% of deals progress from this stage`;
    } else if (rate < 50) {
      severity = 'medium';
      description = `Moderate conversion issue - ${rate.toFixed(1)}% conversion rate below industry average`;
    } else if (avgDays > 30) {
      severity = 'medium';
      description = `Deals stalling - average ${avgDays} days in stage is too long`;
    }

    if (severity !== 'low') {
      const avgDealValue = data.filter(d => d.stage === stage)
        .reduce((sum, d) => sum + d.dealValue, 0) / Math.max(1, dealsInStage);
      
      leaks.push({
        stage,
        severity,
        conversionRate: rate,
        avgDaysInStage: avgDays,
        dealsLost: Math.floor(dealsInStage * (1 - rate / 100)),
        revenueImpact: Math.floor(dealsInStage * (1 - rate / 100) * avgDealValue),
        description,
      });
    }
  });

  return leaks.sort((a, b) => b.revenueImpact - a.revenueImpact);
}

function calculatePipelineScore(metrics: any, leaks: PipelineLeak[]): number {
  const { conversionRates } = metrics;
  
  // Base score from average conversion rates
  const avgConversion = Object.values(conversionRates).reduce((sum: number, rate: any) => sum + rate, 0) / 
    Math.max(1, Object.keys(conversionRates).length);
  
  let score = Math.min(100, avgConversion * 1.5);
  
  // Deduct points for leaks
  leaks.forEach(leak => {
    const deduction = leak.severity === 'high' ? 15 : leak.severity === 'medium' ? 10 : 5;
    score -= deduction;
  });

  return Math.max(0, Math.round(score));
}

async function generateRecommendations(metrics: any, leaks: PipelineLeak[]): Promise<string[]> {
  try {
    const prompt = `Analyze this sales pipeline data and provide 4-5 specific, actionable recommendations for fixing pipeline leaks and improving conversion rates:

Pipeline Metrics:
- Conversion Rates: ${JSON.stringify(metrics.conversionRates)}
- Average Time in Stage: ${JSON.stringify(metrics.avgTimeInStage)}

Identified Leaks:
${leaks.map(leak => `- ${leak.stage}: ${leak.conversionRate.toFixed(1)}% conversion, ${leak.avgDaysInStage} days avg, $${leak.revenueImpact.toLocaleString()} revenue impact`).join('\n')}

Provide recommendations as a JSON array of strings, focusing on:
1. Fixing the biggest revenue impact leaks first
2. Process improvements for stalled stages
3. Training and enablement needs
4. Technology or automation solutions

Format: ["recommendation 1", "recommendation 2", ...]`;

    const response = await generateAIResponse(prompt);
    
    try {
      return JSON.parse(response);
    } catch {
      return response.split('\n').filter(line => line.trim().startsWith('-')).map(line => line.replace(/^-\s*/, ''));
    }

  } catch (error) {
    console.error('AI recommendation generation error:', error);
    
    // Fallback recommendations
    const recommendations: string[] = [];
    
    if (leaks.length > 0) {
      const biggestLeak = leaks[0];
      recommendations.push(`Focus on ${biggestLeak.stage} stage - it's causing $${biggestLeak.revenueImpact.toLocaleString()} in lost revenue`);
    }
    
    recommendations.push('Implement regular pipeline reviews to identify stalled deals');
    recommendations.push('Create stage-specific playbooks and training materials');
    recommendations.push('Set up automated alerts for deals that exceed average stage duration');
    
    return recommendations;
  }
}

function createSummary(leaks: PipelineLeak[], data: PipelineData[]) {
  const biggestLeak = leaks.length > 0 ? leaks[0].stage : 'No major leaks identified';
  const potentialRevenue = leaks.reduce((sum, leak) => sum + leak.revenueImpact, 0);
  
  const quickWins = leaks
    .filter(leak => leak.severity === 'medium' || leak.avgDaysInStage > 20)
    .slice(0, 3)
    .map(leak => `Reduce time in ${leak.stage} stage`);

  return {
    biggestLeak,
    potentialRevenue,
    quickWins,
  };
}