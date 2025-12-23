import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'System Overview | Maru Lead Generation Engine',
  description: 'Complete overview of the Maru Lead Generation Engine architecture, features, and capabilities.',
};

const tableOfContents = [
  { id: 'what-is-maru', title: 'What is Maru Lead Generation Engine?', level: 1 },
  { id: 'key-features', title: 'Key Features', level: 1 },
  { id: 'assessment-tools', title: 'Assessment Tools', level: 2 },
  { id: 'analytics-dashboard', title: 'Analytics Dashboard', level: 2 },
  { id: 'architecture', title: 'System Architecture', level: 1 },
  { id: 'getting-started', title: 'Getting Started', level: 1 },
];

export default function SystemOverviewPage() {
  return (
    <DocLayout
      title="System Overview"
      description="Complete overview of the Maru Lead Generation Engine architecture, features, and capabilities."
      category="Getting Started"
      readTime="5 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Getting Started', href: '/knowledge/getting-started' },
        { label: 'System Overview', href: '/knowledge/getting-started/system-overview' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="what-is-maru">What is Maru Lead Generation Engine?</h2>
      
      <p>
        The Maru Lead Generation Engine is a comprehensive AI-powered platform designed to help businesses 
        identify, capture, and convert high-quality leads through intelligent assessments and data-driven insights.
      </p>

      <p>
        Built with modern technologies including Next.js, Supabase, and Google Gemini AI, the platform provides 
        a complete solution for businesses looking to optimize their lead generation processes and maximize 
        revenue potential.
      </p>

      <Callout type="info" title="Key Benefits">
        <ul>
          <li>AI-powered lead scoring and qualification</li>
          <li>Automated pipeline leak detection</li>
          <li>Instant proposal generation</li>
          <li>Tech stack optimization recommendations</li>
          <li>Real-time analytics and reporting</li>
        </ul>
      </Callout>

      <h2 id="key-features">Key Features</h2>

      <h3 id="assessment-tools">Assessment Tools</h3>

      <p>
        The platform includes four specialized assessment tools, each designed to address specific aspects 
        of lead generation and business optimization:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-2">🎯 Lead Score Predictor</h4>
          <p className="text-slate-600 text-sm">
            AI-powered website analysis that evaluates lead generation readiness and provides 
            actionable recommendations for improvement.
          </p>
        </div>
        <div className="border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-2">🔍 Pipeline Leak Detector</h4>
          <p className="text-slate-600 text-sm">
            CSV-based pipeline analysis that identifies stalled deals, bottlenecks, and 
            revenue at risk in your sales process.
          </p>
        </div>
        <div className="border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-2">📄 Proposal Accelerator</h4>
          <p className="text-slate-600 text-sm">
            AI-generated business proposals tailored to specific company needs, industry, 
            and decision-maker requirements.
          </p>
        </div>
        <div className="border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-2">⚙️ Tech Stack Auditor</h4>
          <p className="text-slate-600 text-sm">
            Comprehensive analysis of technology tools and software to identify redundancies 
            and optimization opportunities.
          </p>
        </div>
      </div>

      <h3 id="analytics-dashboard">Analytics Dashboard</h3>

      <p>
        The admin dashboard provides comprehensive insights into lead generation performance, 
        including:
      </p>

      <ul>
        <li><strong>Lead Management:</strong> View, filter, and manage all captured leads</li>
        <li><strong>Assessment Analytics:</strong> Track completion rates and performance metrics</li>
        <li><strong>Conversion Tracking:</strong> Monitor lead progression through the funnel</li>
        <li><strong>Performance Metrics:</strong> Real-time system performance and usage statistics</li>
        <li><strong>Export Capabilities:</strong> Download data for external analysis</li>
      </ul>

      <h2 id="architecture">System Architecture</h2>

      <p>
        The Maru Lead Generation Engine is built on a modern, scalable architecture:
      </p>

      <CodeBlock language="yaml" title="Technology Stack">
{`Frontend: Next.js 16 with React 19
Styling: Tailwind CSS v4
Database: Supabase (PostgreSQL)
AI/ML: Google Gemini AI
Authentication: Custom session-based auth
Deployment: Vercel (recommended)
Analytics: Custom analytics system`}
      </CodeBlock>

      <Callout type="tip" title="Scalability">
        The system is designed to handle high-volume lead generation with built-in rate limiting, 
        caching, and optimized database queries.
      </Callout>

      <h2 id="getting-started">Getting Started</h2>

      <p>
        Ready to start generating leads? Follow these steps to get up and running:
      </p>

      <Step number={1} title="Explore Assessment Tools">
        <p>
          Visit the assessment tools to understand how each one works and what insights they provide. 
          Start with the Lead Score Predictor for a quick overview of your lead generation readiness.
        </p>
      </Step>

      <Step number={2} title="Access Admin Dashboard">
        <p>
          Log into the admin dashboard to see real-time analytics and manage captured leads. 
          The dashboard provides comprehensive insights into your lead generation performance.
        </p>
      </Step>

      <Step number={3} title="Integrate with Your Workflow">
        <p>
          Use the API endpoints to integrate the assessment tools into your existing website 
          or marketing automation platform for seamless lead capture.
        </p>
      </Step>

      <Callout type="success" title="Next Steps">
        <p>
          Continue with the <a href="/knowledge/getting-started/quick-start-guide" className="text-accent hover:underline">Quick Start Guide</a> 
          to learn how to set up and configure your first assessment tool.
        </p>
      </Callout>
    </DocLayout>
  );
}