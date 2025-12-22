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
  total_deals: number;
  leaks_detected: {
    stalled_deals: number;
    stage_bottlenecks: number;
    velocity_issues: number;
  };
  revenue_at_risk: number;
  recommendations: string[];
}

export interface ProposalInput {
  company_info: {
    name: string;
    industry: string;
    size: string;
    challenges: string[];
  };
  project_scope: {
    services: string[];
    timeline: string;
    budget_range: string;
  };
  decision_makers: {
    primary_contact: string;
    stakeholders: string[];
  };
}

export interface TechAuditInput {
  selected_tools: {
    tool_id: string;
    monthly_cost: number;
    users_count: number;
    usage_frequency: string;
  }[];
  company_size: string;
  industry: string;
}

export interface TechAuditResult {
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