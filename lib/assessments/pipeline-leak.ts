import * as Papa from 'papaparse';
import { mean, standardDeviation } from 'simple-statistics';

interface PipelineLeakResult {
  score: number;
  total_deals: number;
  leaks_detected: {
    stalled_deals: number;
    stage_bottlenecks: number;
    velocity_issues: number;
  };
  revenue_at_risk: number;
  recommendations: string[];
}

interface Deal {
  id: string;
  stage: string;
  amount: number;
  created_date: string;
  last_activity: string;
  close_date?: string;
  status: string;
}

export async function analyzePipeline(input: any): Promise<PipelineLeakResult> {
  const { csv_data } = input;
  
  if (!csv_data) {
    throw new Error('No CSV data provided');
  }

  // Parse CSV data
  const deals = parseCSVData(csv_data);
  
  // Analyze pipeline leaks
  const stalledDeals = detectStalledDeals(deals);
  const bottlenecks = detectStageBottlenecks(deals);
  const velocityIssues = detectVelocityIssues(deals);
  
  const totalLeaks = stalledDeals.length + bottlenecks.length + velocityIssues.length;
  const revenueAtRisk = calculateRevenueAtRisk(stalledDeals, bottlenecks, velocityIssues);
  
  const score = Math.max(0, 100 - (totalLeaks / deals.length * 100));
  
  return {
    score: Math.round(score),
    total_deals: deals.length,
    leaks_detected: {
      stalled_deals: stalledDeals.length,
      stage_bottlenecks: bottlenecks.length,
      velocity_issues: velocityIssues.length,
    },
    revenue_at_risk: revenueAtRisk,
    recommendations: generateRecommendations(stalledDeals, bottlenecks, velocityIssues),
  };
}

function parseCSVData(csvData: string): Deal[] {
  const parsed = Papa.parse(csvData, { header: true });
  
  return parsed.data.map((row: any, index: number) => ({
    id: row.id || `deal_${index}`,
    stage: row.stage || row.dealstage || row.pipeline_stage || '',
    amount: parseFloat(row.amount || row.deal_amount || row.value || '0'),
    created_date: row.created_date || row.createdate || row.date_created || '',
    last_activity: row.last_activity || row.last_modified || row.updated_date || '',
    close_date: row.close_date || row.closedate || row.expected_close || '',
    status: row.status || row.deal_status || 'open',
  })).filter(deal => deal.stage && deal.amount > 0);
}

function detectStalledDeals(deals: Deal[]): Deal[] {
  const now = new Date();
  const stalledThreshold = 30; // days
  
  return deals.filter(deal => {
    if (deal.status === 'closed' || deal.status === 'won' || deal.status === 'lost') {
      return false;
    }
    
    const lastActivity = new Date(deal.last_activity);
    const daysSinceActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24);
    
    return daysSinceActivity > stalledThreshold;
  });
}

function detectStageBottlenecks(deals: Deal[]): Deal[] {
  const stageGroups = deals.reduce((acc, deal) => {
    if (!acc[deal.stage]) acc[deal.stage] = [];
    acc[deal.stage].push(deal);
    return acc;
  }, {} as Record<string, Deal[]>);
  
  const avgDealsPerStage = mean(Object.values(stageGroups).map(group => group.length));
  const threshold = avgDealsPerStage * 1.5;
  
  return Object.values(stageGroups)
    .filter(group => group.length > threshold)
    .flat();
}

function detectVelocityIssues(deals: Deal[]): Deal[] {
  const now = new Date();
  
  return deals.filter(deal => {
    const created = new Date(deal.created_date);
    const daysInPipeline = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
    
    // Deals older than 90 days are velocity issues
    return daysInPipeline > 90 && deal.status !== 'closed';
  });
}

function calculateRevenueAtRisk(stalled: Deal[], bottlenecks: Deal[], velocity: Deal[]): number {
  const allRiskyDeals = [...stalled, ...bottlenecks, ...velocity];
  const uniqueDeals = allRiskyDeals.filter((deal, index, self) => 
    self.findIndex(d => d.id === deal.id) === index
  );
  
  return uniqueDeals.reduce((sum, deal) => sum + deal.amount, 0);
}

function generateRecommendations(stalled: Deal[], bottlenecks: Deal[], velocity: Deal[]): string[] {
  const recommendations: string[] = [];
  
  if (stalled.length > 0) {
    recommendations.push(`Re-engage ${stalled.length} stalled deals with automated follow-up sequences`);
  }
  
  if (bottlenecks.length > 0) {
    recommendations.push(`Address stage bottlenecks affecting ${bottlenecks.length} deals`);
  }
  
  if (velocity.length > 0) {
    recommendations.push(`Accelerate ${velocity.length} slow-moving deals with targeted interventions`);
  }
  
  recommendations.push('Implement automated pipeline health monitoring');
  recommendations.push('Set up deal progression alerts for sales team');
  
  return recommendations;
}