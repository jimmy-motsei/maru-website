import { supabaseAdmin } from '@/lib/supabase';

interface TechAuditResult {
  score: number;
  total_monthly_cost: number;
  redundancies_found: {
    category: string;
    tools: string[];
    potential_savings: number;
  }[];
  optimization_score: number;
  recommendations: string[];
}

export async function auditTechStack(input: any): Promise<TechAuditResult> {
  const { selected_tools, company_size, industry } = input;
  
  if (!selected_tools || selected_tools.length === 0) {
    throw new Error('No tools selected for audit');
  }

  // Get tool details from database
  const toolIds = selected_tools.map((t: any) => t.tool_id);
  const { data: tools } = await supabaseAdmin
    .from('tools')
    .select('*')
    .in('id', toolIds);

  if (!tools) {
    throw new Error('Failed to fetch tool data');
  }

  // Calculate costs and redundancies
  const totalCost = selected_tools.reduce((sum: number, tool: any) => 
    sum + (tool.monthly_cost * tool.users_count), 0
  );

  const redundancies = detectRedundancies(selected_tools, tools);
  const potentialSavings = redundancies.reduce((sum, r) => sum + r.potential_savings, 0);
  
  const optimizationScore = Math.max(0, 100 - (redundancies.length * 15));
  const overallScore = calculateOverallScore(selected_tools.length, redundancies.length, totalCost);

  return {
    score: overallScore,
    total_monthly_cost: totalCost,
    redundancies_found: redundancies,
    optimization_score: optimizationScore,
    recommendations: generateRecommendations(redundancies, totalCost, company_size),
  };
}

function detectRedundancies(selectedTools: any[], toolsData: any[]) {
  const categoryGroups = selectedTools.reduce((acc, tool) => {
    const toolData = toolsData.find(t => t.id === tool.tool_id);
    if (!toolData) return acc;
    
    if (!acc[toolData.category]) acc[toolData.category] = [];
    acc[toolData.category].push({ ...tool, ...toolData });
    return acc;
  }, {} as Record<string, any[]>);

  const redundancies: any[] = [];

  Object.entries(categoryGroups).forEach(([category, tools]) => {
    if ((tools as any[]).length > 1) {
      // Multiple tools in same category = potential redundancy
      const totalCost = (tools as any[]).reduce((sum, tool) => 
        sum + (tool.monthly_cost * tool.users_count), 0
      );
      
      // Keep the most expensive/popular tool, suggest removing others
      const sortedTools = (tools as any[]).sort((a, b) => 
        (b.monthly_cost * b.users_count) - (a.monthly_cost * a.users_count)
      );
      
      const toolsToRemove = sortedTools.slice(1);
      const savings = toolsToRemove.reduce((sum, tool) => 
        sum + (tool.monthly_cost * tool.users_count), 0
      );

      if (savings > 0) {
        redundancies.push({
          category,
          tools: toolsToRemove.map((t: any) => t.name),
          potential_savings: savings,
        });
      }
    }
  });

  return redundancies;
}

function calculateOverallScore(toolCount: number, redundancyCount: number, totalCost: number) {
  let score = 100;
  
  // Penalize for too many tools
  if (toolCount > 20) score -= 20;
  else if (toolCount > 15) score -= 10;
  
  // Penalize for redundancies
  score -= redundancyCount * 15;
  
  // Penalize for high costs
  if (totalCost > 5000) score -= 20;
  else if (totalCost > 2000) score -= 10;
  
  return Math.max(0, Math.round(score));
}

function generateRecommendations(redundancies: any[], totalCost: number, companySize: string) {
  const recommendations: string[] = [];
  
  if (redundancies.length > 0) {
    recommendations.push(`Eliminate ${redundancies.length} tool redundancies to save $${redundancies.reduce((sum, r) => sum + r.potential_savings, 0)}/month`);
  }
  
  if (totalCost > 3000) {
    recommendations.push('Consider negotiating volume discounts with key vendors');
  }
  
  recommendations.push('Implement usage tracking to identify underutilized tools');
  recommendations.push('Set up automated license management to prevent over-provisioning');
  
  if (companySize === 'startup') {
    recommendations.push('Focus on free/freemium tools until you reach product-market fit');
  }
  
  return recommendations;
}