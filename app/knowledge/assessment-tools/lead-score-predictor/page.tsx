import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Lead Score Predictor Guide | Maru Lead Generation Engine',
  description: 'Master the AI-powered lead scoring system. Complete guide to website analysis and optimization recommendations.',
};

const tableOfContents = [
  { id: 'overview', title: 'Overview', level: 1 },
  { id: 'how-it-works', title: 'How It Works', level: 1 },
  { id: 'scoring-factors', title: 'Scoring Factors', level: 1 },
  { id: 'using-the-tool', title: 'Using the Tool', level: 1 },
  { id: 'interpreting-results', title: 'Interpreting Results', level: 1 },
  { id: 'optimization-tips', title: 'Optimization Tips', level: 1 },
];

export default function LeadScorePredictorPage() {
  return (
    <DocLayout
      title="Lead Score Predictor Guide"
      description="Master the AI-powered lead scoring system. Complete guide to website analysis and optimization recommendations."
      category="Assessment Tools"
      readTime="15 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Assessment Tools', href: '/knowledge/assessment-tools' },
        { label: 'Lead Score Predictor', href: '/knowledge/assessment-tools/lead-score-predictor' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Overview</h2>
      
      <p>
        The Lead Score Predictor is an AI-powered assessment tool that evaluates your website's 
        lead generation potential and provides actionable recommendations for improvement. It analyzes 
        multiple factors to give you a comprehensive score from 0-100.
      </p>

      <Callout type="info" title="What You'll Get">
        <ul>
          <li>Overall lead generation readiness score (0-100)</li>
          <li>Detailed breakdown by key factors</li>
          <li>5+ specific, actionable recommendations</li>
          <li>Industry-specific insights</li>
          <li>Benchmarking against similar companies</li>
        </ul>
      </Callout>

      <h2 id="how-it-works">How It Works</h2>

      <p>
        The Lead Score Predictor uses Google Gemini AI to analyze your company information and 
        website details. Here's the process:
      </p>

      <Step number={1} title="Data Collection">
        <p>You provide basic information about your company:</p>
        <ul>
          <li>Company name and website URL</li>
          <li>Industry and company size</li>
          <li>Contact email</li>
        </ul>
      </Step>

      <Step number={2} title="AI Analysis">
        <p>Our AI system analyzes multiple factors:</p>
        <ul>
          <li>Website quality and user experience</li>
          <li>Technology stack maturity</li>
          <li>Content quality and messaging</li>
          <li>SEO and technical readiness</li>
        </ul>
      </Step>

      <Step number={3} title="Score Generation">
        <p>The system generates:</p>
        <ul>
          <li>Overall score and factor-specific scores</li>
          <li>Tailored recommendations</li>
          <li>Priority action items</li>
        </ul>
      </Step>

      <h2 id="scoring-factors">Scoring Factors</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">🎨 Website Quality (25%)</h3>
          <ul className="text-sm space-y-2">
            <li>• Professional design and branding</li>
            <li>• Mobile responsiveness</li>
            <li>• Page loading speed</li>
            <li>• User experience and navigation</li>
            <li>• Visual hierarchy and layout</li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">⚙️ Tech Stack Maturity (25%)</h3>
          <ul className="text-sm space-y-2">
            <li>• Marketing automation tools</li>
            <li>• Analytics and tracking setup</li>
            <li>• CRM integration capabilities</li>
            <li>• Lead capture mechanisms</li>
            <li>• Email marketing systems</li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">📝 Content Quality (25%)</h3>
          <ul className="text-sm space-y-2">
            <li>• Clear value proposition</li>
            <li>• Compelling call-to-actions</li>
            <li>• Content depth and relevance</li>
            <li>• Trust signals and testimonials</li>
            <li>• Lead magnets and offers</li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">🔍 SEO Readiness (25%)</h3>
          <ul className="text-sm space-y-2">
            <li>• Meta tags and descriptions</li>
            <li>• Content structure and headings</li>
            <li>• Technical SEO elements</li>
            <li>• Schema markup</li>
            <li>• Site architecture</li>
          </ul>
        </div>
      </div>

      <h2 id="using-the-tool">Using the Tool</h2>

      <Callout type="tip" title="Before You Start">
        Have your website URL ready and ensure you can provide accurate company information 
        for the best results.
      </Callout>

      <Step number={1} title="Access the Assessment">
        <p>Navigate to the Lead Score Predictor:</p>
        <CodeBlock language="text">
{`URL: /assessments/lead-score
Or click "START FREE AUDIT" from the homepage`}
        </CodeBlock>
      </Step>

      <Step number={2} title="Fill Out the Form">
        <div className="bg-slate-50 rounded-lg p-6 my-4">
          <h4 className="font-semibold mb-3">Required Information:</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Email:</strong> Your business email address</li>
            <li><strong>Company Name:</strong> Full legal or trading name</li>
            <li><strong>Website URL:</strong> Complete URL (https://example.com)</li>
            <li><strong>Industry:</strong> Select from dropdown options</li>
            <li><strong>Company Size:</strong> Startup, SMB, or Enterprise</li>
          </ul>
        </div>
      </Step>

      <Step number={3} title="Submit and Wait">
        <p>
          Click "Analyze Website" and wait 30-60 seconds for AI processing. 
          The system will analyze your website and generate personalized recommendations.
        </p>
      </Step>

      <h2 id="interpreting-results">Interpreting Results</h2>

      <h3>Score Ranges</h3>
      <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6 my-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600 mb-2">0-39</div>
            <div className="text-sm font-medium">Needs Work</div>
            <div className="text-xs text-slate-600 mt-1">Significant improvements needed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600 mb-2">40-59</div>
            <div className="text-sm font-medium">Fair</div>
            <div className="text-xs text-slate-600 mt-1">Moderate potential</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-2">60-79</div>
            <div className="text-sm font-medium">Good</div>
            <div className="text-xs text-slate-600 mt-1">Solid foundation</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-2">80-100</div>
            <div className="text-sm font-medium">Excellent</div>
            <div className="text-xs text-slate-600 mt-1">Optimized for leads</div>
          </div>
        </div>
      </div>

      <h3>Factor Analysis</h3>
      <p>
        Each factor is scored individually, helping you identify specific areas for improvement:
      </p>

      <ul>
        <li><strong>High scores (80+):</strong> Maintain current performance</li>
        <li><strong>Medium scores (60-79):</strong> Good foundation, optimize further</li>
        <li><strong>Low scores (40-59):</strong> Priority improvement area</li>
        <li><strong>Very low scores (&lt;40):</strong> Immediate attention required</li>
      </ul>

      <h2 id="optimization-tips">Optimization Tips</h2>

      <h3>Quick Wins (1-2 weeks)</h3>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
        <ul className="space-y-2">
          <li>✅ Add clear call-to-action buttons on key pages</li>
          <li>✅ Optimize page loading speed (compress images, minify code)</li>
          <li>✅ Ensure mobile responsiveness</li>
          <li>✅ Add contact forms to service pages</li>
          <li>✅ Include customer testimonials and reviews</li>
        </ul>
      </div>

      <h3>Medium-term Improvements (1-3 months)</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <ul className="space-y-2">
          <li>🔄 Implement marketing automation tools</li>
          <li>🔄 Set up comprehensive analytics tracking</li>
          <li>🔄 Create valuable lead magnets (ebooks, guides)</li>
          <li>🔄 Optimize content for search engines</li>
          <li>🔄 Integrate CRM system</li>
        </ul>
      </div>

      <h3>Long-term Strategy (3-6 months)</h3>
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-6">
        <ul className="space-y-2">
          <li>🎯 Develop comprehensive content marketing strategy</li>
          <li>🎯 Build advanced lead nurturing sequences</li>
          <li>🎯 Implement A/B testing for optimization</li>
          <li>🎯 Create industry-specific landing pages</li>
          <li>🎯 Develop thought leadership content</li>
        </ul>
      </div>

      <Callout type="success" title="Pro Tips">
        <ul>
          <li><strong>Re-run assessments:</strong> Check your progress after implementing changes</li>
          <li><strong>Focus on one factor:</strong> Don't try to improve everything at once</li>
          <li><strong>Track metrics:</strong> Monitor conversion rates and lead quality</li>
          <li><strong>Industry context:</strong> Compare with industry benchmarks</li>
        </ul>
      </Callout>

      <h2>Common Issues & Solutions</h2>

      <div className="space-y-4 mt-6">
        <details className="border border-slate-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Low Website Quality Score</summary>
          <div className="mt-2 text-slate-600">
            <p><strong>Common causes:</strong> Outdated design, slow loading, poor mobile experience</p>
            <p><strong>Solutions:</strong> Redesign key pages, optimize images, implement responsive design</p>
          </div>
        </details>
        
        <details className="border border-slate-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Low Tech Stack Score</summary>
          <div className="mt-2 text-slate-600">
            <p><strong>Common causes:</strong> No marketing automation, missing analytics, no CRM</p>
            <p><strong>Solutions:</strong> Implement HubSpot/Mailchimp, set up Google Analytics, integrate CRM</p>
          </div>
        </details>
        
        <details className="border border-slate-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Low Content Quality Score</summary>
          <div className="mt-2 text-slate-600">
            <p><strong>Common causes:</strong> Unclear value proposition, weak CTAs, no social proof</p>
            <p><strong>Solutions:</strong> Rewrite homepage copy, add testimonials, create compelling offers</p>
          </div>
        </details>
      </div>
    </DocLayout>
  );
}