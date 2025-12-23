import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'First Assessment Walkthrough | Maru Lead Generation Engine',
  description: 'Complete step-by-step guide to running your first lead generation assessment and understanding the results.',
};

const tableOfContents = [
  { id: 'overview', title: 'Assessment Overview', level: 1 },
  { id: 'choosing-tool', title: 'Choosing Your First Tool', level: 1 },
  { id: 'step-by-step', title: 'Step-by-Step Walkthrough', level: 1 },
  { id: 'understanding-results', title: 'Understanding Results', level: 1 },
  { id: 'next-steps', title: 'Next Steps', level: 1 },
];

export default function FirstAssessmentPage() {
  return (
    <DocLayout
      title="First Assessment Walkthrough"
      description="Complete step-by-step guide to running your first lead generation assessment and understanding the results."
      category="Getting Started"
      readTime="12 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Getting Started', href: '/knowledge/getting-started' },
        { label: 'First Assessment', href: '/knowledge/getting-started/first-assessment' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Assessment Overview</h2>
      
      <p>
        Your first assessment is crucial for understanding how the Maru Lead Generation Engine works 
        and what insights it can provide for your business. This walkthrough uses the Lead Score Predictor 
        as it's the most comprehensive and beginner-friendly tool.
      </p>

      <Callout type="info" title="What You'll Learn">
        <ul>
          <li>How to complete an assessment form</li>
          <li>What happens during AI processing</li>
          <li>How to interpret your results</li>
          <li>Where to find your data in the admin dashboard</li>
          <li>How to implement recommendations</li>
        </ul>
      </Callout>

      <h2 id="choosing-tool">Choosing Your First Tool</h2>

      <p>We recommend starting with the <strong>Lead Score Predictor</strong> because it:</p>
      <ul>
        <li>Requires only basic company information</li>
        <li>Provides comprehensive analysis</li>
        <li>Offers actionable recommendations</li>
        <li>Demonstrates all core system features</li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <h3 className="font-semibold text-dark mb-3">Assessment Tool Comparison</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-dark mb-2">🎯 Lead Score Predictor</h4>
            <p className="text-sm text-dark/60 mb-2">Best for: First-time users</p>
            <p className="text-sm text-dark/60">Requires: Company info + website URL</p>
          </div>
          <div>
            <h4 className="font-medium text-dark mb-2">🔍 Pipeline Leak Detector</h4>
            <p className="text-sm text-dark/60 mb-2">Best for: Existing sales data</p>
            <p className="text-sm text-dark/60">Requires: CSV file upload</p>
          </div>
        </div>
      </div>

      <h2 id="step-by-step">Step-by-Step Walkthrough</h2>

      <Step number={1} title="Navigate to Lead Score Predictor">
        <p>From the homepage, click "START FREE AUDIT" or navigate directly:</p>
        <CodeBlock language="text">
{`URL: http://localhost:3000/assessments/lead-score`}
        </CodeBlock>
        <p>You'll see a clean form with several input fields.</p>
      </Step>

      <Step number={2} title="Fill Out Company Information">
        <p>Complete all required fields with accurate information:</p>
        
        <div className="bg-gray-50 rounded-lg p-4 my-4">
          <h4 className="font-semibold mb-3">Required Information:</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Email Address:</strong> Your business email (used for results and admin access)</li>
            <li><strong>Company Name:</strong> Full legal or trading name of your business</li>
            <li><strong>Website URL:</strong> Complete URL including https:// (e.g., https://example.com)</li>
            <li><strong>Industry:</strong> Select the closest match from the dropdown</li>
            <li><strong>Company Size:</strong> Choose between Startup, SMB, or Enterprise</li>
          </ul>
        </div>

        <Callout type="tip" title="Pro Tips for Better Results">
          <ul>
            <li>Use your primary business website (not social media profiles)</li>
            <li>Choose the industry that best represents your main revenue source</li>
            <li>Be honest about company size - it affects the recommendations</li>
            <li>Double-check your email address for result delivery</li>
          </ul>
        </Callout>
      </Step>

      <Step number={3} title="Submit and Wait for Processing">
        <p>Click "Analyze Website" and wait for the AI processing:</p>
        <ul>
          <li><strong>Processing Time:</strong> 30-60 seconds</li>
          <li><strong>What's Happening:</strong> AI analyzes your website and company data</li>
          <li><strong>Status Indicator:</strong> Loading spinner shows progress</li>
        </ul>
        
        <Callout type="warning" title="Don't Refresh the Page">
          The AI processing happens in real-time. Refreshing the page will restart the assessment.
        </Callout>
      </Step>

      <Step number={4} title="Review Your Results">
        <p>Once processing completes, you'll see your comprehensive results:</p>
        
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">📊 Overall Score</h4>
            <p className="text-sm text-dark/60">Your lead generation readiness score (0-100)</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">📈 Factor Breakdown</h4>
            <p className="text-sm text-dark/60">Scores for website quality, tech stack, content, SEO</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">💡 Recommendations</h4>
            <p className="text-sm text-dark/60">5+ specific, actionable improvement suggestions</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🎯 Next Steps</h4>
            <p className="text-sm text-dark/60">Prioritized action items for improvement</p>
          </div>
        </div>
      </Step>

      <h2 id="understanding-results">Understanding Results</h2>

      <h3>Score Interpretation</h3>
      <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6 my-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600 mb-2">0-39</div>
            <div className="text-sm font-medium">Needs Work</div>
            <div className="text-xs text-dark/60 mt-1">Major improvements needed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600 mb-2">40-59</div>
            <div className="text-sm font-medium">Fair</div>
            <div className="text-xs text-dark/60 mt-1">Good foundation to build on</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-2">60-79</div>
            <div className="text-sm font-medium">Good</div>
            <div className="text-xs text-dark/60 mt-1">Solid performance</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-2">80-100</div>
            <div className="text-sm font-medium">Excellent</div>
            <div className="text-xs text-dark/60 mt-1">Optimized for leads</div>
          </div>
        </div>
      </div>

      <h3>Factor Analysis</h3>
      <p>Each factor is scored individually to help you prioritize improvements:</p>

      <div className="space-y-4 my-6">
        <div className="border-l-4 border-accent pl-4">
          <h4 className="font-semibold">🎨 Website Quality (25%)</h4>
          <p className="text-sm text-dark/60">Design, mobile responsiveness, loading speed, user experience</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-semibold">⚙️ Tech Stack Maturity (25%)</h4>
          <p className="text-sm text-dark/60">Marketing automation, analytics, CRM integration</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="font-semibold">📝 Content Quality (25%)</h4>
          <p className="text-sm text-dark/60">Value proposition, CTAs, trust signals, lead magnets</p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-semibold">🔍 SEO Readiness (25%)</h4>
          <p className="text-sm text-dark/60">Meta tags, content structure, technical SEO</p>
        </div>
      </div>

      <h3>Accessing Your Data</h3>
      <Step number={1} title="View in Admin Dashboard">
        <p>Your assessment data is automatically saved. To view it:</p>
        <CodeBlock language="text">
{`1. Go to http://localhost:3000/admin
2. Login with admin credentials
3. Navigate to "Leads" section
4. Find your entry by email address
5. Click to view detailed assessment results`}
        </CodeBlock>
      </Step>

      <h2 id="next-steps">Next Steps</h2>

      <h3>Immediate Actions</h3>
      <Callout type="success" title="What to Do Now">
        <ol>
          <li><strong>Prioritize Recommendations:</strong> Start with the highest-impact suggestions</li>
          <li><strong>Try Other Tools:</strong> Run additional assessments for comprehensive insights</li>
          <li><strong>Monitor Progress:</strong> Re-run assessments after implementing changes</li>
          <li><strong>Explore Dashboard:</strong> Familiarize yourself with the admin interface</li>
        </ol>
      </Callout>

      <h3>Common First Assessment Questions</h3>
      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">My score seems low - is this accurate?</summary>
          <div className="mt-2 text-dark/60">
            <p>The AI uses industry benchmarks and best practices. A lower score indicates opportunities for improvement, not business failure. Focus on the specific recommendations provided.</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Can I run the assessment again?</summary>
          <div className="mt-2 text-dark/60">
            <p>Yes! Run assessments monthly or after implementing changes to track progress. Each assessment is saved in your dashboard.</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How do I implement the recommendations?</summary>
          <div className="mt-2 text-dark/60">
            <p>Start with quick wins (1-2 weeks), then move to medium-term improvements (1-3 months). Our Best Practices guides provide detailed implementation steps.</p>
          </div>
        </details>
      </div>

      <h3>Recommended Next Articles</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/knowledge/assessment-tools/lead-score-predictor" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Lead Score Predictor Deep Dive</h4>
          <p className="text-dark/60 text-sm">Master all features of the lead scoring system</p>
        </a>
        <a href="/knowledge/admin-analytics/dashboard-overview" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Admin Dashboard Overview</h4>
          <p className="text-dark/60 text-sm">Learn to navigate and use the dashboard effectively</p>
        </a>
      </div>
    </DocLayout>
  );
}