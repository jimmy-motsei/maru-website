import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Pipeline Leak Detector Manual | Maru Lead Generation Engine',
  description: 'Complete guide to using the Pipeline Leak Detector to identify revenue opportunities and fix sales bottlenecks.',
};

const tableOfContents = [
  { id: 'overview', title: 'Tool Overview', level: 1 },
  { id: 'csv-requirements', title: 'CSV Format Requirements', level: 1 },
  { id: 'using-tool', title: 'Using the Tool', level: 1 },
  { id: 'understanding-results', title: 'Understanding Results', level: 1 },
  { id: 'taking-action', title: 'Taking Action', level: 1 },
];

export default function PipelineLeakDetectorPage() {
  return (
    <DocLayout
      title="Pipeline Leak Detector Manual"
      description="Complete guide to using the Pipeline Leak Detector to identify revenue opportunities and fix sales bottlenecks."
      category="Assessment Tools"
      readTime="18 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Assessment Tools', href: '/knowledge/assessment-tools' },
        { label: 'Pipeline Leak Detector', href: '/knowledge/assessment-tools/pipeline-leak-detector' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Tool Overview</h2>
      
      <p>
        The Pipeline Leak Detector analyzes your sales pipeline data to identify stalled deals, 
        bottlenecks, and revenue at risk. Unlike other assessment tools, this requires uploading 
        your existing sales data in CSV format.
      </p>

      <Callout type="info" title="What This Tool Identifies">
        <ul>
          <li><strong>Stalled Deals:</strong> Opportunities with no activity for 30+ days</li>
          <li><strong>Stage Bottlenecks:</strong> Pipeline stages with excessive deal accumulation</li>
          <li><strong>Velocity Issues:</strong> Deals moving too slowly through your pipeline</li>
          <li><strong>Revenue at Risk:</strong> Total value of problematic deals</li>
          <li><strong>Actionable Recommendations:</strong> Specific steps to recover revenue</li>
        </ul>
      </Callout>

      <h2 id="csv-requirements">CSV Format Requirements</h2>

      <p>
        The Pipeline Leak Detector accepts CSV files from most CRM systems. Your file must include 
        specific columns for accurate analysis.
      </p>

      <h3>Required Columns</h3>
      <div className="bg-gray-50 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Minimum Required Fields:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-200 px-2 py-1 rounded">id</code> - Unique deal identifier</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">stage</code> - Current pipeline stage</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">amount</code> - Deal value</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">created_date</code> - Deal creation date</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-200 px-2 py-1 rounded">last_activity</code> - Last activity date</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">close_date</code> - Expected close date</li>
              <li><code className="bg-gray-200 px-2 py-1 rounded">status</code> - Deal status (open/closed/won/lost)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Supported Column Names</h3>
      <p>The system recognizes various column naming conventions:</p>

      <CodeBlock language="text" title="Alternative Column Names">
{`Deal ID: id, deal_id, dealid, opportunity_id
Stage: stage, dealstage, pipeline_stage, sales_stage
Amount: amount, deal_amount, value, deal_value, opportunity_amount
Created: created_date, createdate, date_created, created_at
Activity: last_activity, last_modified, updated_date, modified_date
Close Date: close_date, closedate, expected_close, target_close
Status: status, deal_status, opportunity_status`}
      </CodeBlock>

      <h3>Sample CSV Format</h3>
      <CodeBlock language="csv" title="Example CSV Structure">
{`id,stage,amount,created_date,last_activity,close_date,status
deal_001,Prospecting,5000,2024-10-01,2024-12-15,2024-12-30,open
deal_002,Qualification,12000,2024-09-15,2024-11-20,2024-12-15,open
deal_003,Proposal,8500,2024-08-20,2024-12-10,2024-12-20,open
deal_004,Negotiation,15000,2024-07-10,2024-10-05,2024-11-30,open
deal_005,Closed Won,7500,2024-06-01,2024-11-15,2024-11-15,won`}
      </CodeBlock>

      <h2 id="using-tool">Using the Tool</h2>

      <Step number={1} title="Export Data from Your CRM">
        <p>Export your pipeline data from your CRM system:</p>
        
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
            <p className="text-xs text-dark/50">Ensure CSV format with required fields</p>
          </div>
        </div>

        <Callout type="tip" title="Export Tips">
          <ul>
            <li>Include all deals (open, closed, won, lost) for complete analysis</li>
            <li>Export data from the last 12 months for best results</li>
            <li>Ensure dates are in YYYY-MM-DD format</li>
            <li>Remove any sensitive customer information before upload</li>
          </ul>
        </Callout>
      </Step>

      <Step number={2} title="Navigate to Pipeline Leak Detector">
        <p>Access the tool from the assessments section:</p>
        <CodeBlock language="text">
{`URL: http://localhost:3000/assessments/pipeline-leak`}
        </CodeBlock>
      </Step>

      <Step number={3} title="Complete the Assessment Form">
        <p>Fill out the required information:</p>
        <ul>
          <li><strong>Email:</strong> Your business email for results</li>
          <li><strong>Company Name:</strong> Your organization name</li>
          <li><strong>Industry:</strong> Select your business sector</li>
          <li><strong>Company Size:</strong> Choose appropriate size category</li>
          <li><strong>CSV File:</strong> Upload your pipeline data file</li>
        </ul>
      </Step>

      <Step number={4} title="Upload and Process">
        <p>Upload your CSV file and wait for analysis:</p>
        <ul>
          <li><strong>File Size Limit:</strong> 10MB maximum</li>
          <li><strong>Processing Time:</strong> 1-3 minutes depending on data size</li>
          <li><strong>Validation:</strong> System checks for required columns</li>
          <li><strong>Analysis:</strong> AI identifies patterns and issues</li>
        </ul>

        <Callout type="warning" title="Data Privacy">
          Your CSV data is processed securely and not stored permanently. Only analysis results 
          are saved to your account.
        </Callout>
      </Step>

      <h2 id="understanding-results">Understanding Results</h2>

      <h3>Overall Pipeline Health Score</h3>
      <p>Your pipeline receives a health score from 0-100 based on:</p>
      <ul>
        <li>Percentage of stalled deals</li>
        <li>Stage distribution balance</li>
        <li>Average deal velocity</li>
        <li>Revenue at risk factors</li>
      </ul>

      <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6 my-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600 mb-2">0-39</div>
            <div className="text-sm font-medium">Critical Issues</div>
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
            <div className="text-xs text-dark/60 mt-1">Good performance with room for improvement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-2">80-100</div>
            <div className="text-sm font-medium">Excellent</div>
            <div className="text-xs text-dark/60 mt-1">Well-optimized pipeline</div>
          </div>
        </div>
      </div>

      <h3>Leak Categories</h3>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-red-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🚨 Stalled Deals</h4>
          <p className="text-dark/60 mb-2">Deals with no activity for 30+ days</p>
          <p className="text-sm text-dark/50">
            <strong>Impact:</strong> High - These deals are likely to be lost without intervention
          </p>
        </div>

        <div className="border-l-4 border-amber-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🔄 Stage Bottlenecks</h4>
          <p className="text-dark/60 mb-2">Pipeline stages with excessive deal accumulation</p>
          <p className="text-sm text-dark/50">
            <strong>Impact:</strong> Medium - Indicates process inefficiencies
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">⏱️ Velocity Issues</h4>
          <p className="text-dark/60 mb-2">Deals moving too slowly through pipeline</p>
          <p className="text-sm text-dark/50">
            <strong>Impact:</strong> Medium - Affects forecasting and resource allocation
          </p>
        </div>
      </div>

      <h3>Revenue at Risk Calculation</h3>
      <p>The system calculates total revenue at risk by combining:</p>
      <ul>
        <li>Value of all stalled deals</li>
        <li>Deals stuck in bottleneck stages</li>
        <li>Slow-moving high-value opportunities</li>
        <li>Deals past their expected close dates</li>
      </ul>

      <h2 id="taking-action">Taking Action</h2>

      <h3>Immediate Actions (This Week)</h3>
      <Callout type="success" title="Quick Wins">
        <ol>
          <li><strong>Contact Stalled Deals:</strong> Reach out to all deals with no recent activity</li>
          <li><strong>Update Deal Status:</strong> Qualify or disqualify inactive opportunities</li>
          <li><strong>Review Bottlenecks:</strong> Identify why deals are stuck in specific stages</li>
          <li><strong>Set Follow-up Reminders:</strong> Schedule regular check-ins for active deals</li>
        </ol>
      </Callout>

      <h3>Process Improvements (Next Month)</h3>
      <ul>
        <li><strong>Stage Criteria:</strong> Define clear requirements for stage progression</li>
        <li><strong>Activity Tracking:</strong> Implement regular activity logging</li>
        <li><strong>Pipeline Reviews:</strong> Schedule weekly pipeline review meetings</li>
        <li><strong>Automation:</strong> Set up automated follow-up sequences</li>
      </ul>

      <h3>Long-term Optimization (Next Quarter)</h3>
      <ul>
        <li><strong>Sales Process Refinement:</strong> Optimize your sales methodology</li>
        <li><strong>Training Programs:</strong> Address skill gaps identified in bottlenecks</li>
        <li><strong>Technology Upgrades:</strong> Implement better CRM automation</li>
        <li><strong>Performance Metrics:</strong> Establish KPIs for pipeline health</li>
      </ul>

      <h3>Monitoring Progress</h3>
      <Step number={1} title="Regular Re-analysis">
        <p>Run the Pipeline Leak Detector monthly to track improvements:</p>
        <ul>
          <li>Compare month-over-month leak reduction</li>
          <li>Monitor revenue recovery from previously stalled deals</li>
          <li>Track improvements in pipeline velocity</li>
          <li>Measure reduction in stage bottlenecks</li>
        </ul>
      </Step>

      <h3>Common Pipeline Issues & Solutions</h3>
      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">High number of stalled deals</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Causes:</strong> Poor lead qualification, lack of follow-up process, unclear next steps</p>
            <p><strong>Solutions:</strong> Implement BANT qualification, set up automated reminders, define clear stage criteria</p>
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
          <summary className="font-semibold cursor-pointer">Long sales cycles</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Causes:</strong> Complex decision process, multiple stakeholders, unclear value proposition</p>
            <p><strong>Solutions:</strong> Map decision process, create stakeholder matrix, strengthen value messaging</p>
          </div>
        </details>
      </div>

      <Callout type="info" title="Need Help Implementing Changes?">
        <p>
          Check out our <a href="/knowledge/best-practices/lead-generation-strategies" className="text-accent hover:underline">Lead Generation Strategies</a> guide 
          for detailed implementation steps, or <a href="/contact" className="text-accent hover:underline">contact our team</a> for personalized assistance.
        </p>
      </Callout>
    </DocLayout>
  );
}