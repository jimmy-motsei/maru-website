-- Lead Generation Engine Database Schema
-- Supabase PostgreSQL Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Core leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  company_name VARCHAR(255),
  website_url VARCHAR(255),
  industry VARCHAR(100),
  company_size VARCHAR(50), -- 'startup', 'smb', 'enterprise'
  lead_score INTEGER DEFAULT 0,
  hubspot_contact_id VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assessments table for all four apps
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  app_type VARCHAR(50) NOT NULL, -- 'lead_score', 'pipeline_leak', 'proposal', 'tech_audit'
  status VARCHAR(20) DEFAULT 'in_progress', -- 'in_progress', 'completed', 'failed'
  input_data JSONB, -- Store form inputs
  analysis_data JSONB, -- Store AI analysis results
  score INTEGER,
  recommendations TEXT[],
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Generated reports table
CREATE TABLE generated_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
  report_type VARCHAR(50) NOT NULL, -- 'pdf', 'dashboard', 'email'
  file_url VARCHAR(500),
  file_size INTEGER,
  generation_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tool database for Tech Stack Auditor
CREATE TABLE tools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100),
  avg_monthly_cost DECIMAL(10,2),
  logo_url VARCHAR(500),
  description TEXT,
  website_url VARCHAR(255),
  integrations TEXT[], -- Array of tool names it integrates with
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User tool selections for audits
CREATE TABLE user_tool_selections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
  tool_id UUID REFERENCES tools(id),
  monthly_cost DECIMAL(10,2),
  users_count INTEGER DEFAULT 1,
  usage_frequency VARCHAR(20), -- 'daily', 'weekly', 'monthly', 'rarely'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Behavioral tracking for lead scoring
CREATE TABLE lead_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  activity_type VARCHAR(50) NOT NULL, -- 'page_view', 'assessment_start', 'assessment_complete', 'report_download'
  page_url VARCHAR(500),
  assessment_type VARCHAR(50),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Validation constraints
ALTER TABLE leads ADD CONSTRAINT check_company_size 
CHECK (company_size IN ('startup', 'smb', 'enterprise'));

ALTER TABLE assessments ADD CONSTRAINT check_app_type 
CHECK (app_type IN ('lead_score', 'pipeline_leak', 'proposal', 'tech_audit'));

ALTER TABLE assessments ADD CONSTRAINT check_status 
CHECK (status IN ('in_progress', 'completed', 'failed'));

ALTER TABLE generated_reports ADD CONSTRAINT check_report_type 
CHECK (report_type IN ('pdf', 'dashboard', 'email'));

ALTER TABLE generated_reports ADD CONSTRAINT check_generation_status 
CHECK (generation_status IN ('pending', 'completed', 'failed'));

ALTER TABLE user_tool_selections ADD CONSTRAINT check_usage_frequency 
CHECK (usage_frequency IN ('daily', 'weekly', 'monthly', 'rarely'));

ALTER TABLE lead_activities ADD CONSTRAINT check_activity_type 
CHECK (activity_type IN ('page_view', 'assessment_start', 'assessment_complete', 'report_download'));

-- Audit triggers for data integrity
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE FUNCTION set_assessment_completed_at()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.status = 'completed' AND OLD.status != 'completed' THEN
        NEW.completed_at = NOW();
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER set_assessment_completion 
    BEFORE UPDATE ON assessments
    FOR EACH ROW EXECUTE FUNCTION set_assessment_completed_at();

-- Indexes for performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_assessments_lead_id ON assessments(lead_id);
CREATE INDEX idx_assessments_app_type ON assessments(app_type);
CREATE INDEX idx_assessments_created_at ON assessments(created_at);
CREATE INDEX idx_reports_assessment_id ON generated_reports(assessment_id);
CREATE INDEX idx_tools_category ON tools(category);
CREATE INDEX idx_activities_lead_id ON lead_activities(lead_id);
CREATE INDEX idx_activities_created_at ON lead_activities(created_at);

-- Optimization indexes for common usage patterns
CREATE INDEX idx_leads_hubspot_id ON leads(hubspot_contact_id);
CREATE INDEX idx_leads_score ON leads(lead_score DESC);
CREATE INDEX idx_leads_company_size ON leads(company_size);
CREATE INDEX idx_assessments_status ON assessments(status);
CREATE INDEX idx_assessments_completed_at ON assessments(completed_at DESC);
CREATE INDEX idx_assessments_composite ON assessments(lead_id, app_type, status);
CREATE INDEX idx_reports_status ON generated_reports(generation_status);
CREATE INDEX idx_activities_type ON lead_activities(activity_type);
CREATE INDEX idx_activities_composite ON lead_activities(lead_id, activity_type, created_at DESC);
CREATE INDEX idx_tools_cost ON tools(avg_monthly_cost);
CREATE INDEX idx_tool_selections_composite ON user_tool_selections(assessment_id, tool_id);

-- Sample tool data for Tech Stack Auditor
INSERT INTO tools (name, category, subcategory, avg_monthly_cost, description) VALUES
('HubSpot', 'CRM', 'Customer Relationship Management', 50.00, 'All-in-one CRM platform'),
('Salesforce', 'CRM', 'Customer Relationship Management', 75.00, 'Enterprise CRM solution'),
('Slack', 'Communication', 'Team Chat', 8.00, 'Team communication platform'),
('Microsoft Teams', 'Communication', 'Team Chat', 5.00, 'Microsoft collaboration platform'),
('Zoom', 'Communication', 'Video Conferencing', 15.00, 'Video conferencing solution'),
('Google Workspace', 'Productivity', 'Office Suite', 12.00, 'Google productivity suite'),
('Microsoft 365', 'Productivity', 'Office Suite', 15.00, 'Microsoft productivity suite'),
('Asana', 'Project Management', 'Task Management', 11.00, 'Project management tool'),
('Trello', 'Project Management', 'Task Management', 5.00, 'Visual project management'),
('Monday.com', 'Project Management', 'Work Management', 25.00, 'Work management platform'),
('Mailchimp', 'Marketing', 'Email Marketing', 20.00, 'Email marketing platform'),
('Canva', 'Design', 'Graphic Design', 15.00, 'Online design platform'),
('Adobe Creative Suite', 'Design', 'Professional Design', 60.00, 'Professional design tools'),
('Zapier', 'Automation', 'Workflow Automation', 20.00, 'Automation platform'),
('DocuSign', 'Document Management', 'E-Signature', 25.00, 'Electronic signature solution');