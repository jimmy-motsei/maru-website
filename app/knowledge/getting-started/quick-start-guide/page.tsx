import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Quick Start Guide | Maru Lead Generation Engine',
  description: 'Get up and running with your first assessment in 10 minutes. Complete walkthrough for new users.',
};

export default function QuickStartGuidePage() {
  return (
    <DocLayout
      title="Quick Start Guide"
      description="Get up and running with your first assessment in 10 minutes. Complete walkthrough for new users."
      category="Getting Started"
      readTime="10 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Getting Started', href: '/knowledge/getting-started' },
        { label: 'Quick Start Guide', href: '/knowledge/getting-started/quick-start-guide' },
      ]}
    >
      <Callout type="info" title="What You'll Learn">
        <ul>
          <li>How to run your first lead assessment</li>
          <li>Understanding assessment results</li>
          <li>Accessing the admin dashboard</li>
          <li>Next steps for optimization</li>
        </ul>
      </Callout>

      <h2>Overview</h2>
      <p>
        The Maru Lead Generation Engine helps you identify and convert high-quality leads through 
        AI-powered assessments. This guide will walk you through running your first assessment 
        and understanding the results.
      </p>

      <h2>Step-by-Step Walkthrough</h2>

      <Step number={1} title="Choose Your Assessment Tool">
        <p>Start by selecting the assessment that best fits your immediate needs:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🎯 Lead Score Predictor</h4>
            <p className="text-sm text-slate-600 mb-3">
              Best for: Understanding your website's lead generation potential
            </p>
            <a href="/assessments/lead-score" className="text-accent hover:underline text-sm">
              Start Assessment →
            </a>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🔍 Pipeline Leak Detector</h4>
            <p className="text-sm text-slate-600 mb-3">
              Best for: Analyzing existing sales pipeline data
            </p>
            <a href="/assessments/pipeline-leak" className="text-accent hover:underline text-sm">
              Start Assessment →
            </a>
          </div>
        </div>
      </Step>

      <Step number={2} title="Complete the Assessment Form">
        <p>Fill out the assessment form with accurate information:</p>
        <ul>
          <li><strong>Email:</strong> Use your business email for best results</li>
          <li><strong>Company Details:</strong> Provide accurate company information</li>
          <li><strong>Website URL:</strong> Include your full website URL (https://...)</li>
          <li><strong>Industry & Size:</strong> Select the most appropriate options</li>
        </ul>
        
        <Callout type="tip" title="Pro Tip">
          The more accurate information you provide, the better your AI-generated recommendations will be.
        </Callout>
      </Step>

      <Step number={3} title="Review Your Results">
        <p>Once processing is complete, you'll receive:</p>
        <ul>
          <li><strong>Overall Score:</strong> Your lead generation readiness score (0-100)</li>
          <li><strong>Detailed Analysis:</strong> Breakdown by key factors</li>
          <li><strong>Actionable Recommendations:</strong> Specific steps to improve</li>
          <li><strong>Industry Benchmarks:</strong> How you compare to similar companies</li>
        </ul>
      </Step>

      <Step number={4} title="Access Your Dashboard">
        <p>View all your assessment results and analytics in the admin dashboard:</p>
        <CodeBlock language="text" title="Dashboard Access">
{`URL: http://localhost:3000/admin
Email: hello@maruonline.com
Password: MaruAdmin2024!`}
        </CodeBlock>
        <p>The dashboard provides:</p>
        <ul>
          <li>Lead management and filtering</li>
          <li>Assessment performance metrics</li>
          <li>Conversion tracking</li>
          <li>Export capabilities</li>
        </ul>
      </Step>

      <h2>Understanding Your Results</h2>

      <h3>Lead Score Breakdown</h3>
      <div className="bg-slate-50 rounded-lg p-6 my-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Score Ranges</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-green-600 font-medium">80-100:</span> Excellent lead generation setup</li>
              <li><span className="text-blue-600 font-medium">60-79:</span> Good foundation, room for improvement</li>
              <li><span className="text-amber-600 font-medium">40-59:</span> Moderate potential, needs optimization</li>
              <li><span className="text-red-600 font-medium">0-39:</span> Significant improvements needed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Key Factors</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Website Quality:</strong> Design, mobile, speed</li>
              <li><strong>Tech Stack:</strong> Marketing automation, CRM</li>
              <li><strong>Content Quality:</strong> Value proposition, CTAs</li>
              <li><strong>SEO Readiness:</strong> Technical SEO, structure</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Next Steps</h2>

      <Callout type="success" title="Immediate Actions">
        <ol>
          <li><strong>Implement Top Recommendations:</strong> Start with the highest-impact suggestions</li>
          <li><strong>Run Additional Assessments:</strong> Try other tools for comprehensive insights</li>
          <li><strong>Monitor Progress:</strong> Re-run assessments after implementing changes</li>
          <li><strong>Integrate with Your Workflow:</strong> Use API endpoints for automation</li>
        </ol>
      </Callout>

      <h3>Recommended Reading</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/knowledge/assessment-tools/lead-score-predictor" className="border border-slate-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-semibold text-slate-900 mb-2">Lead Score Predictor Deep Dive</h4>
          <p className="text-slate-600 text-sm">Master the lead scoring system</p>
        </a>
        <a href="/knowledge/admin-analytics/dashboard-overview" className="border border-slate-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-semibold text-slate-900 mb-2">Dashboard Overview</h4>
          <p className="text-slate-600 text-sm">Navigate the admin interface</p>
        </a>
      </div>

      <h2>Common Questions</h2>

      <div className="space-y-4 mt-6">
        <details className="border border-slate-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How long does an assessment take?</summary>
          <p className="mt-2 text-slate-600">Most assessments complete in 30-60 seconds. The AI analysis happens in real-time.</p>
        </details>
        
        <details className="border border-slate-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Can I run multiple assessments?</summary>
          <p className="mt-2 text-slate-600">Yes! Each assessment provides different insights. We recommend trying all four tools for comprehensive analysis.</p>
        </details>
        
        <details className="border border-slate-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Is my data secure?</summary>
          <p className="mt-2 text-slate-600">Absolutely. All data is encrypted and stored securely. We never share your information with third parties.</p>
        </details>
      </div>

      <Callout type="info" title="Need Help?">
        <p>
          If you encounter any issues or have questions, check our <a href="/knowledge/faq-support/faq" className="text-accent hover:underline">FAQ section</a> or 
          <a href="/contact" className="text-accent hover:underline ml-1">contact our support team</a>.
        </p>
      </Callout>
    </DocLayout>
  );
}