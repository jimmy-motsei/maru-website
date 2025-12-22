# Lead Generation Engine - Build Plan

## Executive Summary
Transform the Maru website into a high-performance lead generation engine with four AI-powered applications, unified conversion infrastructure, and sophisticated nurturing backend.

## 🏗️ Technical Stack

### Core Infrastructure
- **Framework**: Next.js 15 (App Router) - existing codebase integration
- **Database**: Supabase (PostgreSQL) - lead profiles, assessments, reports
- **Storage**: Supabase Storage - PDFs, uploads
- **Auth**: Supabase Auth - gating premium features
- **AI**: Anthropic Claude 3.5 Sonnet - analysis & report generation
- **Deployment**: Vercel - seamless integration

### Specialized Tools
- **Data Enrichment**: Clearbit API (fallback to manual entry)
- **Browser Automation**: Playwright (website scanning)
- **PDF Generation**: react-pdf + Puppeteer
- **Charts**: Recharts (pipeline/ROI visualizations)
- **Flow Diagrams**: ReactFlow (tech stack mapping)
- **Forms**: React Hook Form + Zod
- **CRM**: HubSpot API (bidirectional sync)
- **Email**: SendGrid (report delivery)

## 🚀 Build Phases

### Phase 1: Foundation (Week 1-2)
**Goal**: Infrastructure setup for rapid app development

#### Database Schema
```sql
-- Core tables for lead generation engine
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  company_name VARCHAR(255),
  website_url VARCHAR(255),
  lead_score INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  app_type VARCHAR(50), -- 'lead_score', 'pipeline_leak', etc.
  data JSONB,
  score INTEGER,
  completed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE generated_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id UUID REFERENCES assessments(id),
  report_type VARCHAR(50),
  file_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Shared Components
- `MultiStepForm` - reusable assessment wrapper
- `GatedResultContainer` - freemium/premium unlock logic
- `LeadCaptureModal` - standardized email collection
- `ReportGenerator` - PDF creation service

### Phase 2: Lead Score Predictor (Week 3-4)
**Priority**: First complete vertical slice

#### Features
- URL input → automated website analysis
- Company enrichment (Clearbit + manual fallback)
- AI-powered scoring algorithm
- Instant web dashboard results
- Async PDF email delivery

#### Implementation
```typescript
// API route for website analysis
export async function POST(request: Request) {
  const { url } = await request.json();
  
  // 1. Scrape website with Playwright
  const siteData = await scrapeWebsite(url);
  
  // 2. Enrich company data
  const companyData = await enrichCompanyData(siteData.domain);
  
  // 3. Calculate lead score
  const score = calculateLeadScore(siteData, companyData);
  
  // 4. Generate recommendations with Claude
  const recommendations = await generateRecommendations(score, siteData);
  
  return NextResponse.json({ score, recommendations, companyData });
}
```

### Phase 3: Pipeline Leak Detector (Week 5-6)
**Focus**: Data visualization and privacy-first processing

#### Features
- CSV upload (universal CRM support)
- Client-side data processing (privacy-focused)
- Leak detection algorithms
- Interactive visualization dashboard
- Automated recovery recommendations

#### Architecture
- Process CSVs entirely in browser using PapaParse
- Store only aggregated results, not raw data
- HubSpot OAuth integration (Phase 3.1)

### Phase 4: Proposal Accelerator (Week 7-8)
**Focus**: Document generation automation

#### Features
- 10-question strategic intake
- AI-powered proposal generation
- Branded document assembly
- Instant download/email delivery

### Phase 5: Tech Stack ROI Auditor (Week 9-10)
**Focus**: Interactive stack visualization

#### Features
- Smart tool selection (5000+ tool database)
- Redundancy detection
- Visual stack mapping with ReactFlow
- ROI calculations and savings reports

### Phase 6: Integration & CRO (Week 11-12)
**Focus**: Homepage transformation and optimization

#### Changes
- Hero section rebuild with audit focus
- Sticky bottom ROI calculator
- App-first service cards
- Mega menu navigation
- Behavioral scoring implementation

## 📊 Database Design

### Lead Scoring Schema
```typescript
interface LeadProfile {
  id: string;
  email: string;
  company: {
    name: string;
    website: string;
    industry: string;
    size: 'startup' | 'smb' | 'enterprise';
  };
  scores: {
    lead_predictor?: number;
    pipeline_health?: number;
    tech_stack_efficiency?: number;
    overall: number;
  };
  assessments: Assessment[];
  hubspot_contact_id?: string;
}

interface Assessment {
  id: string;
  type: 'lead_score' | 'pipeline_leak' | 'proposal' | 'tech_audit';
  data: Record<string, any>;
  results: {
    score: number;
    recommendations: string[];
    report_url?: string;
  };
  completed_at: Date;
}
```

## 🔧 Implementation Strategy

### Development Approach
1. **Vertical Slices**: Complete one app end-to-end before starting the next
2. **Feature Flags**: Deploy behind flags for safe production testing
3. **Progressive Enhancement**: Start with core functionality, add AI enhancements
4. **Performance First**: Implement skeleton loaders and streaming UI

### Quality Assurance
- **Security**: SOC 2 aligned data handling
- **Performance**: AI response streaming, background PDF generation
- **Privacy**: Client-side processing where possible
- **Testing**: End-to-end flows for each assessment type

## 📈 Success Metrics

### Technical KPIs
- Page load time < 2s
- Assessment completion rate > 70%
- PDF generation time < 30s
- API response time < 5s

### Business KPIs
- Lead capture rate increase by 300%
- Qualified lead score improvement
- Sales pipeline acceleration
- Customer acquisition cost reduction

## 🚢 Deployment Strategy

### Vercel Configuration
```json
{
  "functions": {
    "app/api/assessments/*/route.ts": {
      "maxDuration": 30
    }
  },
  "env": {
    "ANTHROPIC_API_KEY": "@anthropic-key",
    "SUPABASE_URL": "@supabase-url",
    "SUPABASE_ANON_KEY": "@supabase-anon",
    "HUBSPOT_API_KEY": "@hubspot-key"
  }
}
```

### Environment Variables
- `ANTHROPIC_API_KEY` - Claude API access
- `SUPABASE_URL` & `SUPABASE_ANON_KEY` - Database connection
- `HUBSPOT_API_KEY` - CRM integration
- `SENDGRID_API_KEY` - Email delivery
- `CLEARBIT_API_KEY` - Company enrichment

## 📋 Next Steps

1. **Week 1**: Set up Supabase database and core API routes
2. **Week 2**: Build shared component library
3. **Week 3**: Implement Lead Score Predictor MVP
4. **Week 4**: Test and refine first assessment flow
5. **Week 5+**: Continue with remaining phases

This plan prioritizes rapid deployment of high-value features while maintaining code quality and user experience standards.