-- Analytics and Performance Tracking Tables

-- Analytics Events Table
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(100) NOT NULL,
  page_path VARCHAR(500) NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  assessment_type VARCHAR(50),
  step VARCHAR(100),
  metadata JSONB,
  user_agent TEXT,
  ip_address INET,
  session_id VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Performance Metrics Table
CREATE TABLE IF NOT EXISTS performance_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name VARCHAR(50) NOT NULL,
  metric_value DECIMAL(10,2) NOT NULL,
  metric_rating VARCHAR(20) CHECK (metric_rating IN ('good', 'needs-improvement', 'poor')),
  page_path VARCHAR(500) NOT NULL,
  user_agent TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- A/B Test Results Table
CREATE TABLE IF NOT EXISTS ab_test_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_name VARCHAR(100) NOT NULL,
  variant VARCHAR(50) NOT NULL,
  event_type VARCHAR(50) NOT NULL, -- 'assigned', 'conversion'
  conversion_type VARCHAR(50),
  user_id VARCHAR(100),
  session_id VARCHAR(100),
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Conversion Funnel Table
CREATE TABLE IF NOT EXISTS conversion_funnel (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  funnel_step VARCHAR(100) NOT NULL,
  assessment_type VARCHAR(50),
  user_id VARCHAR(100),
  session_id VARCHAR(100),
  completed BOOLEAN DEFAULT FALSE,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_analytics_events_type_timestamp ON analytics_events(event_type, timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_events_page_timestamp ON analytics_events(page_path, timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_events_assessment ON analytics_events(assessment_type, timestamp);

CREATE INDEX IF NOT EXISTS idx_performance_metrics_name_timestamp ON performance_metrics(metric_name, timestamp);
CREATE INDEX IF NOT EXISTS idx_performance_metrics_page_timestamp ON performance_metrics(page_path, timestamp);

CREATE INDEX IF NOT EXISTS idx_ab_test_results_test_variant ON ab_test_results(test_name, variant);
CREATE INDEX IF NOT EXISTS idx_ab_test_results_timestamp ON ab_test_results(timestamp);

CREATE INDEX IF NOT EXISTS idx_conversion_funnel_step_assessment ON conversion_funnel(funnel_step, assessment_type);
CREATE INDEX IF NOT EXISTS idx_conversion_funnel_timestamp ON conversion_funnel(timestamp);

-- Create views for common analytics queries
CREATE OR REPLACE VIEW analytics_summary AS
SELECT 
  DATE(timestamp) as date,
  event_type,
  assessment_type,
  COUNT(*) as event_count,
  COUNT(DISTINCT ip_address) as unique_users
FROM analytics_events 
GROUP BY DATE(timestamp), event_type, assessment_type;

CREATE OR REPLACE VIEW performance_summary AS
SELECT 
  DATE(timestamp) as date,
  metric_name,
  AVG(metric_value) as avg_value,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY metric_value) as median_value,
  PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY metric_value) as p95_value,
  COUNT(*) as measurement_count
FROM performance_metrics 
GROUP BY DATE(timestamp), metric_name;

CREATE OR REPLACE VIEW ab_test_summary AS
SELECT 
  test_name,
  variant,
  COUNT(CASE WHEN event_type = 'assigned' THEN 1 END) as assignments,
  COUNT(CASE WHEN event_type = 'conversion' THEN 1 END) as conversions,
  CASE 
    WHEN COUNT(CASE WHEN event_type = 'assigned' THEN 1 END) > 0 
    THEN ROUND(
      (COUNT(CASE WHEN event_type = 'conversion' THEN 1 END)::DECIMAL / 
       COUNT(CASE WHEN event_type = 'assigned' THEN 1 END)) * 100, 2
    )
    ELSE 0 
  END as conversion_rate
FROM ab_test_results 
GROUP BY test_name, variant;

-- Row Level Security (RLS) policies
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE ab_test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_funnel ENABLE ROW LEVEL SECURITY;

-- Allow service role to access all data
CREATE POLICY "Service role can access analytics_events" ON analytics_events
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can access performance_metrics" ON performance_metrics
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can access ab_test_results" ON ab_test_results
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can access conversion_funnel" ON conversion_funnel
  FOR ALL USING (auth.role() = 'service_role');