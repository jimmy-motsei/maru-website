import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Pipeline Leak Detector Manual | Maru Lead Generation Engine',
  description: 'Complete guide to using the AI-powered Pipeline Leak Detector to identify revenue leaks, bottlenecks, and conversion issues in your sales pipeline.',
};

const tableOfContents = [
  { id: 'overview', title: 'Tool Overview', level: 1 },
  { id: 'getting-started', title: 'Getting Started', level: 1 },
  { id: 'csv-requirements', title: 'CSV Format Requirements', level: 1 },
  { id: 'using-the-tool', title: 'Using the Tool', level: 1 },
  { id: 'understanding-results', title: 'Understanding Results', level: 1 },
  { id: 'scoring-logic', title: 'Scoring & Severity Levels', level: 1 },
  { id: 'taking-action', title: 'Taking Action', level: 1 },
  { id: 'technical-notes', title: 'Technical Notes', level: 1 },
];

export default function PipelineLeakDetectorPage() {
  return (
    <DocLayout
      title="Pipeline Leak Detector Manual"
      description="Complete guide to using the AI-powered Pipeline Leak Detector to identify revenue opportunities and fix sales bottlenecks."
      category="Assessment Tools"
      readTime="18 min"
      lastUpdated="January 6, 2026"
      breadcrumbs={[
        { label: 'Assessment Tools', href: '/knowledge/assessment-tools' },
        { label: 'Pipeline Leak Detector', href: '/knowledge/assessment-tools/pipeline-leak-detector' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Tool Overview</h2>
      
      <p>
        The <strong>Pipeline Leak Detector</strong> is a standalone AI-powered assessment tool that analyzes 
        your sales pipeline data to identify stalled deals, bottlenecks, and revenue at risk. Upload your 
        CRM data in CSV format to receive a comprehensive health score, detailed leak analysis, and 
        AI-generated recommendations for improvement.
      </p>

      <Callout type="info" title="What This Tool Identifies">
        <ul>
          <li><strong>Conversion Bottlenecks:</strong> Stages with low conversion rates (below 30-50%)</li>
          <li><strong>Stalled Deals:</strong> Opportunities with excessive time in a single stage (30+ days)</li>
          <li><strong>Revenue at Risk:</strong> Total value of deals likely to be lost without intervention</li>
          <li><strong>Stage Metrics:</strong> Conversion rates and average time by pipeline stage</li>
          <li><strong>AI Recommendations:</strong> 4-5 specific, actionable steps to recover revenue</li>
        </ul>
      </Callout>

      <h2 id="getting-started">Getting Started</h2>

      <p>
        The Pipeline Leak Detector is available as a standalone application, separate from the main Maru website. 
        This allows for focused analysis without distractions.
      </p>

      <Callout type="success" title="Access the Tool">
        <p>
          <strong>URL:</strong>{' '}
          <a href="https://pipeline-leak-detector.vercel.app" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            https://pipeline-leak-detector.vercel.app
          </a>
        </p>
        <p className="text-sm text-dark/60 mt-2">
          No account required. Simply upload your CSV and enter your email to receive analysis results.
        </p>
      </Callout>

      <h2 id="csv-requirements">CSV Format Requirements</h2>

      <p>
        The Pipeline Leak Detector accepts CSV files exported from most CRM systems including HubSpot, 
        Salesforce, Pipedrive, Zoho, and others. The system automatically recognizes common column naming 
        variations.
      </p>

      <h3>Required Columns</h3>
      <div className="bg-gray-50 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Column Requirements:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-dark mb-2">Essential (at least 4 required):</p>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-200 px-2 py-1 rounded">Deal Name</code> - Unique deal identifier</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">Stage</code> - Current pipeline stage</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">Date Created</code> - When deal was created</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">Date Modified</code> - Last activity date</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">Deal Value</code> - Monetary value</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-dark mb-2">Optional:</p>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-200 px-2 py-1 rounded">Lead Source</code> - Origin channel</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Supported Column Name Variations</h3>
      <p>The system intelligently maps common column naming conventions:</p>

      <CodeBlock language="text" title="Recognized Column Names">
{`Deal Name: "deal name", "opportunity name", "name", "deal", "opportunity"
Stage: "stage", "pipeline stage", "sales stage", "status"
Date Created: "date created", "created date", "created", "start date"  
Date Modified: "date modified", "modified date", "last modified", "updated"
Deal Value: "deal value", "amount", "value", "revenue", "deal amount"
Lead Source: "lead source", "source", "origin", "channel"`}
      </CodeBlock>

      <h3>Sample CSV Format</h3>
      <CodeBlock language="csv" title="Example CSV Structure">
{`Deal Name,Stage,Date Created,Date Modified,Deal Value,Lead Source
Acme Corp,Prospect,2024-01-01,2024-01-15,50000,Website
TechStart,Qualified,2024-01-02,2024-02-01,75000,Referral
BigCo,Proposal,2024-01-03,2024-03-01,120000,LinkedIn
SmallBiz,Closed Won,2024-01-04,2024-04-01,25000,Email
StalledDeal,Proposal,2023-11-01,2023-11-15,60000,Cold Call
LostDeal,Closed Lost,2024-01-10,2024-02-10,30000,Website`}
      </CodeBlock>

      <h3>CRM Export Guides</h3>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold mb-2">📊 HubSpot</h4>
          <p className="text-sm text-dark/60 mb-2">Sales → Deals → Actions → Export</p>
          <p className="text-xs text-dark/50">Include all deal properties and activities</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold mb-2">⚡ Salesforce</h4>
          <p className="text-sm text-dark/60 mb-2">Reports → Opportunities → Export Details</p>
          <p className="text-xs text-dark/50">Export as CSV with all fields</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold mb-2">🔄 Pipedrive</h4>
          <p className="text-sm text-dark/60 mb-2">Deals → Export → All Deals</p>
          <p className="text-xs text-dark/50">Include custom fields and dates</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold mb-2">📈 Other CRMs</h4>
          <p className="text-sm text-dark/60 mb-2">Look for Export or Reports section</p>
          <p className="text-xs text-dark/50">Ensure CSV format with required columns</p>
        </div>
      </div>

      <Callout type="tip" title="Export Tips">
        <ul>
          <li>Include all deals (open, closed, won, lost) for complete analysis</li>
          <li>Export data from the last 6-12 months for best results</li>
          <li>Ensure dates are in YYYY-MM-DD format or standard date formats</li>
          <li>Currency symbols in deal values are automatically stripped</li>
        </ul>
      </Callout>

      <h2 id="using-the-tool">Using the Tool</h2>

      <Step number={1} title="Navigate to the Pipeline Leak Detector">
        <p>Open the standalone application in your browser:</p>
        <CodeBlock language="text">
{`URL: https://pipeline-leak-detector.vercel.app`}
        </CodeBlock>
        <p className="mt-2">You'll see a dark-themed interface with the signature Maru Turquoise accents.</p>
      </Step>

      <Step number={2} title="Upload Your CSV File">
        <p>Click the upload area or drag-and-drop your CSV file:</p>
        <ul>
          <li><strong>Accepted format:</strong> .csv files only</li>
          <li><strong>File size:</strong> No strict limit (tested with 10,000+ deals)</li>
          <li><strong>Validation:</strong> The system checks for required columns before processing</li>
        </ul>
        <p className="mt-2">Once uploaded, you'll see a green checkmark with your filename.</p>
      </Step>

      <Step number={3} title="Enter Your Email Address">
        <p>Provide your business email address:</p>
        <ul>
          <li>Used to associate results with your account</li>
          <li>Results are saved to our database for future reference</li>
          <li>You may receive follow-up recommendations</li>
        </ul>
      </Step>

      <Step number={4} title="Click 'Analyze Pipeline'">
        <p>Submit your data for AI-powered analysis:</p>
        <ul>
          <li><strong>Processing time:</strong> 10-30 seconds depending on data size</li>
          <li><strong>Loading state:</strong> Animated spinner with "Analyzing Your Pipeline" message</li>
          <li><strong>AI processing:</strong> Google Gemini generates personalized recommendations</li>
        </ul>
      </Step>

      <Step number={5} title="Review Your Results">
        <p>After analysis completes, you'll see:</p>
        <ul>
          <li><strong>Pipeline Health Score:</strong> Large score display (0-100) with color coding</li>
          <li><strong>Key Metrics:</strong> Total deals, revenue at risk, critical leaks count</li>
          <li><strong>Pipeline Leaks:</strong> Detailed breakdown of each problematic stage</li>
          <li><strong>Recommendations:</strong> 4-5 AI-generated action items</li>
        </ul>
      </Step>

      <Callout type="warning" title="Data Privacy">
        Your CSV data is processed in real-time and analysis results are stored in our secure database. 
        Raw CSV data is not permanently stored - only the calculated metrics and recommendations are saved.
      </Callout>

      <h2 id="understanding-results">Understanding Results</h2>

      <h3>Pipeline Health Score</h3>
      <p>Your pipeline receives a health score from 0-100 based on:</p>
      <ul>
        <li>Average conversion rates across all stages</li>
        <li>Average time deals spend in each stage</li>
        <li>Number of identified leaks</li>
      </ul>

      <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6 my-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600 mb-2">0-39</div>
            <div className="text-sm font-medium">Critical</div>
            <div className="text-xs text-dark/60 mt-1">Immediate action required</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600 mb-2">40-59</div>
            <div className="text-sm font-medium">Needs Attention</div>
            <div className="text-xs text-dark/60 mt-1">Several optimization opportunities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-2">60-79</div>
            <div className="text-sm font-medium">Healthy</div>
            <div className="text-xs text-dark/60 mt-1">Good with room for improvement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-2">80-100</div>
            <div className="text-sm font-medium">Excellent</div>
            <div className="text-xs text-dark/60 mt-1">Well-optimized pipeline</div>
          </div>
        </div>
      </div>

      <h3>Key Metrics Cards</h3>
      <p>Three summary cards provide quick insights:</p>
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold mb-1">🎯 Total Deals</h4>
          <p className="text-sm text-dark/60">Number of deals analyzed from your CSV</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold mb-1 text-red-600">📉 Revenue at Risk</h4>
          <p className="text-sm text-dark/60">Sum of deal values in problematic stages</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold mb-1 text-yellow-600">⚠️ Critical Leaks</h4>
          <p className="text-sm text-dark/60">Number of high-severity leak stages</p>
        </div>
      </div>

      <h3>Pipeline Leak Details</h3>
      <p>Each identified leak includes:</p>
      <ul>
        <li><strong>Stage Name:</strong> The pipeline stage with the issue</li>
        <li><strong>Severity Badge:</strong> HIGH, MEDIUM, or LOW</li>
        <li><strong>Revenue Impact:</strong> Estimated dollar value at risk</li>
        <li><strong>Description:</strong> Explanation of the issue</li>
        <li><strong>Metrics:</strong> Conversion rate, average days in stage, deals lost</li>
      </ul>

      <h2 id="scoring-logic">Scoring & Severity Levels</h2>

      <h3>How the Health Score is Calculated</h3>
      <div className="bg-gray-50 rounded-lg p-6 my-6">
        <p className="font-medium mb-4">Score Formula:</p>
        <ol className="space-y-2 text-sm">
          <li>1. Start with average conversion rate across all stages</li>
          <li>2. Subtract 15 points if average stage time exceeds 30 days</li>
          <li>3. Subtract 10 points if average stage time exceeds 21 days</li>
          <li>4. Subtract 5 points for each identified leak</li>
          <li>5. Cap result between 0 and 100</li>
        </ol>
      </div>

      <h3>Severity Levels</h3>
      <div className="space-y-6 my-8">
        <div className="border-l-4 border-red-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🚨 HIGH Severity</h4>
          <p className="text-dark/60 mb-2">Conversion rate below 30%</p>
          <p className="text-sm text-dark/50">
            <strong>Impact:</strong> Critical - These stages are causing significant revenue loss and require immediate intervention.
          </p>
        </div>

        <div className="border-l-4 border-amber-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">⚠️ MEDIUM Severity</h4>
          <p className="text-dark/60 mb-2">Conversion rate 30-50%, OR average time in stage exceeds 30 days</p>
          <p className="text-sm text-dark/50">
            <strong>Impact:</strong> Moderate - Process inefficiencies that should be addressed.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">✅ LOW/None</h4>
          <p className="text-dark/60 mb-2">Conversion rate above 50% with healthy stage times</p>
          <p className="text-sm text-dark/50">
            <strong>Impact:</strong> Minimal - These stages are performing well.
          </p>
        </div>
      </div>

      <h3>Revenue Impact Calculation</h3>
      <p>Revenue at risk is calculated for each leaking stage:</p>
      <CodeBlock language="text" title="Revenue Impact Formula">
{`Revenue Impact = Deals in Stage × (1 - Conversion Rate) × Average Deal Value

Example:
- 10 deals in "Proposal" stage
- 40% conversion rate (60% lost)
- Average deal value: $50,000
- Revenue Impact: 10 × 0.60 × $50,000 = $300,000 at risk`}
      </CodeBlock>

      <h2 id="taking-action">Taking Action</h2>

      <h3>Immediate Actions (This Week)</h3>
      <Callout type="success" title="Quick Wins">
        <ol>
          <li><strong>Contact Stalled Deals:</strong> Reach out to all deals with no recent activity (30+ days in stage)</li>
          <li><strong>Update Deal Status:</strong> Qualify or disqualify inactive opportunities to clean your pipeline</li>
          <li><strong>Review Biggest Leak:</strong> Focus on the stage with highest revenue impact first</li>
          <li><strong>Set Follow-up Reminders:</strong> Schedule regular check-ins for deals approaching stage time thresholds</li>
        </ol>
      </Callout>

      <h3>Process Improvements (Next Month)</h3>
      <ul>
        <li><strong>Stage Criteria:</strong> Define clear requirements for stage progression</li>
        <li><strong>Activity Tracking:</strong> Implement regular activity logging in your CRM</li>
        <li><strong>Pipeline Reviews:</strong> Schedule weekly pipeline review meetings</li>
        <li><strong>Automation:</strong> Set up automated follow-up sequences for stalled deals</li>
      </ul>

      <h3>Long-term Optimization (Next Quarter)</h3>
      <ul>
        <li><strong>Sales Process Refinement:</strong> Optimize your sales methodology based on leak patterns</li>
        <li><strong>Training Programs:</strong> Address skill gaps identified in bottleneck stages</li>
        <li><strong>Technology Upgrades:</strong> Implement better CRM automation and alerts</li>
        <li><strong>Performance Metrics:</strong> Establish KPIs for pipeline health and track monthly</li>
      </ul>

      <h3>Monitoring Progress</h3>
      <Callout type="tip" title="Monthly Re-Analysis">
        <p>
          Run the Pipeline Leak Detector <strong>monthly</strong> to track improvements. Compare these metrics over time:
        </p>
        <ul>
          <li>Overall health score trend</li>
          <li>Reduction in revenue at risk</li>
          <li>Improvement in stage conversion rates</li>
          <li>Decrease in average days in stage</li>
        </ul>
      </Callout>

      <h3>Common Pipeline Issues & Solutions</h3>
      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">High number of stalled deals</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Causes:</strong> Poor lead qualification, lack of follow-up process, unclear next steps</p>
            <p><strong>Solutions:</strong> Implement BANT qualification, set up automated reminders, define clear stage exit criteria</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Bottleneck in proposal stage</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Causes:</strong> Slow proposal creation, pricing approval delays, decision-maker unavailability</p>
            <p><strong>Solutions:</strong> Create proposal templates, streamline approval process, identify all stakeholders early</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Low conversion from prospect stage</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Causes:</strong> Poor lead quality, weak value proposition, ineffective discovery calls</p>
            <p><strong>Solutions:</strong> Improve lead scoring criteria, refine qualification questions, provide sales scripts</p>
          </div>
        </details>

        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Long sales cycles</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Causes:</strong> Complex decision process, multiple stakeholders, unclear value proposition</p>
            <p><strong>Solutions:</strong> Map decision process, create stakeholder matrix, strengthen value messaging, offer proof-of-concept</p>
          </div>
        </details>
      </div>

      <h2 id="technical-notes">Technical Notes</h2>

      <h3>Technology Stack</h3>
      <p>The Pipeline Leak Detector is built on modern, enterprise-grade technology:</p>
      <ul>
        <li><strong>Framework:</strong> Next.js 16 (App Router) with TypeScript</li>
        <li><strong>AI Engine:</strong> Google Gemini for intelligent recommendation generation</li>
        <li><strong>Database:</strong> Neon (Serverless Postgres) with Drizzle ORM</li>
        <li><strong>Styling:</strong> Tailwind CSS with Maru Turquoise (#3DD6D0) brand colors</li>
        <li><strong>Animations:</strong> Framer Motion for smooth transitions</li>
      </ul>

      <h3>Data Processing</h3>
      <ul>
        <li><strong>Client-side parsing:</strong> CSV files are read in the browser before submission</li>
        <li><strong>Server-side analysis:</strong> Core calculations run on secure API endpoints</li>
        <li><strong>AI integration:</strong> Recommendations are generated using Google Gemini API</li>
        <li><strong>Storage:</strong> Only analysis results are stored (not raw CSV data)</li>
      </ul>

      <h3>Rate Limiting</h3>
      <p>
        To ensure fair usage, the API implements rate limiting of 10 requests per minute per IP address. 
        If you exceed this limit, wait 60 seconds before retrying.
      </p>

      <Callout type="info" title="Need Help Implementing Changes?">
        <p>
          Check out our <a href="/knowledge/best-practices/lead-generation-strategies" className="text-accent hover:underline">Lead Generation Strategies</a> guide 
          for detailed implementation steps, or <a href="/contact" className="text-accent hover:underline">contact our team</a> for personalized assistance.
        </p>
      </Callout>
    </DocLayout>
  );
}