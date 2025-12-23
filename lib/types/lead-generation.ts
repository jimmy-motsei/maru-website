// Lead Generation Engine Types

export interface Lead {
  id: string;
  email: string;
  company_name?: string;
  website_url?: string;
  industry?: string;
  company_size?: 'startup' | 'smb' | 'enterprise';
  lead_score: number;
  hubspot_contact_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Assessment {
  id: string;
  lead_id: string;
  app_type: 'lead_score' | 'pipeline_leak' | 'proposal' | 'tech_audit';
  status: 'in_progress' | 'completed' | 'failed';
  input_data?: Record<string, any>;
  analysis_data?: Record<string, any>;
  score?: number;
  recommendations?: string[];
  completed_at?: string;
  created_at: string;
}

export interface GeneratedReport {
  id: string;
  assessment_id: string;
  report_type: 'pdf' | 'dashboard' | 'email';
  file_url?: string;
  file_size?: number;
  generation_status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  avg_monthly_cost?: number;
  logo_url?: string;
  description?: string;
  website_url?: string;
  integrations?: string[];
  created_at: string;
}

export interface UserToolSelection {
  id: string;
  assessment_id: string;
  tool_id: string;
  monthly_cost?: number;
  users_count: number;
  usage_frequency: 'daily' | 'weekly' | 'monthly' | 'rarely';
  created_at: string;
}

export interface LeadActivity {
  id: string;
  lead_id: string;
  activity_type: 'page_view' | 'assessment_start' | 'assessment_complete' | 'report_download';
  page_url?: string;
  assessment_type?: string;
  metadata?: Record<string, any>;
  created_at: string;
}

// Assessment-specific types

export interface LeadScoreInput {
  website_url: string;
  company_name?: string;
  industry?: string;
  company_size?: string;
}

export interface LeadScoreResult {
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

export interface PipelineLeakInput {
  csv_data?: string;
  crm_type?: 'hubspot' | 'salesforce' | 'pipedrive';
  date_range?: {
    start: string;
    end: string;
  };
}

export interface PipelineLeakResult {
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

export interface PipelineLeak {
  stage: string;
  severity: 'high' | 'medium' | 'low';
  conversionRate: number;
  avgDaysInStage: number;
  dealsLost: number;
  revenueImpact: number;
  description: string;
}

export interface ProposalInput {
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

export interface ProposalResult {
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

export interface TechAuditInput {
  selectedTools: {
    toolId: string;
    name: string;
    category: string;
    monthlyCost: number;
    usersCount: number;
    usageFrequency: 'daily' | 'weekly' | 'monthly' | 'rarely';
  }[];
  companySize: string;
  industry: string;
  teamSize: number;
}

export interface TechAuditResult {
  score: number;
  totalMonthlyCost: number;
  redundancies: Redundancy[];
  optimizations: Optimization[];
  recommendations: string[];
  summary: {
    potentialSavings: number;
    efficiencyScore: number;
    redundancyCount: number;
    underutilizedTools: number;
  };
}

export interface Redundancy {
  category: string;
  tools: string[];
  potentialSavings: number;
  severity: 'high' | 'medium' | 'low';
  description: string;
}

export interface Optimization {
  type: 'cost' | 'efficiency' | 'integration';
  description: string;
  impact: number;
  effort: 'low' | 'medium' | 'high';
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface AssessmentResponse extends ApiResponse<Assessment> {
  report_url?: string;
}

// Form validation schemas (for use with Zod)
export interface FormStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}

export interface FormField {
  name: string;
  type: 'text' | 'email' | 'url' | 'select' | 'multiselect' | 'textarea' | 'number' | 'file';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string; }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}