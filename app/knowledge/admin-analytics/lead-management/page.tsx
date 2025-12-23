import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Lead Management | Maru Lead Generation Engine',
  description: 'Complete guide to managing, organizing, and nurturing leads in the Maru Lead Generation Engine.',
};

const tableOfContents = [
  { id: 'overview', title: 'Lead Management Overview', level: 1 },
  { id: 'accessing-leads', title: 'Accessing Lead Data', level: 1 },
  { id: 'lead-details', title: 'Understanding Lead Details', level: 1 },
  { id: 'filtering-sorting', title: 'Filtering and Sorting', level: 1 },
  { id: 'lead-actions', title: 'Lead Actions and Updates', level: 1 },
];

export default function LeadManagementPage() {
  return (
    <DocLayout
      title="Lead Management"
      description="Complete guide to managing, organizing, and nurturing leads in the Maru Lead Generation Engine."
      category="Admin & Analytics"
      readTime="12 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Admin & Analytics', href: '/knowledge/admin-analytics' },
        { label: 'Lead Management', href: '/knowledge/admin-analytics/lead-management' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Lead Management Overview</h2>
      
      <p>
        The Lead Management section of your admin dashboard provides comprehensive tools for 
        viewing, organizing, and managing all leads captured through your assessment tools. 
        It serves as your central hub for lead nurturing and follow-up activities.
      </p>

      <Callout type="info" title="Lead Management Features">
        <ul>
          <li><strong>Complete Lead Database:</strong> All captured leads in one place</li>
          <li><strong>Advanced Filtering:</strong> Find leads by multiple criteria</li>
          <li><strong>Detailed Lead Profiles:</strong> Comprehensive lead information</li>
          <li><strong>Assessment History:</strong> All assessments completed by each lead</li>
          <li><strong>Export Capabilities:</strong> Download lead data for external use</li>
        </ul>
      </Callout>

      <h2 id="accessing-leads">Accessing Lead Data</h2>

      <Step number={1} title="Navigate to Leads Section">
        <p>From the admin dashboard, access the leads section:</p>
        <CodeBlock language="text">
{`Dashboard → Leads (in main navigation)
Or click "View All Leads" from dashboard quick actions`}
        </CodeBlock>
      </Step>

      <Step number={2} title="Lead List Overview">
        <p>The leads list displays key information in a table format:</p>
        <div className="bg-gray-50 rounded-lg p-6 my-4">
          <h4 className="font-semibold mb-3">Default Columns Displayed:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-base space-y-2 text-dark/70">
              <li>• <strong>Email:</strong> Lead's email address</li>
              <li>• <strong>Company:</strong> Company name</li>
              <li>• <strong>Industry:</strong> Business sector</li>
              <li>• <strong>Lead Score:</strong> Overall assessment score</li>
            </ul>
            <ul className="text-base space-y-2 text-dark/70">
              <li>• <strong>Assessments:</strong> Number completed</li>
              <li>• <strong>Last Activity:</strong> Most recent interaction</li>
              <li>• <strong>Created:</strong> When lead was first captured</li>
              <li>• <strong>Status:</strong> Lead qualification status</li>
            </ul>
          </div>
        </div>
      </Step>

      <Step number={3} title="Pagination and Display Options">
        <p>Control how leads are displayed:</p>
        <ul>
          <li><strong>Results per page:</strong> Choose 25, 50, or 100 leads per page</li>
          <li><strong>Column customization:</strong> Show/hide specific columns</li>
          <li><strong>Sorting options:</strong> Click column headers to sort</li>
          <li><strong>Search functionality:</strong> Quick search across all fields</li>
        </ul>
      </Step>

      <h2 id="lead-details">Understanding Lead Details</h2>

      <h3>Lead Profile Information</h3>
      <p>Click on any lead to view their complete profile:</p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">📊 Basic Information</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• Email address and contact details</li>
            <li>• Company name and website URL</li>
            <li>• Industry and company size</li>
            <li>• Geographic location (if available)</li>
            <li>• Lead source and referral information</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">🎯 Assessment Data</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• Overall lead score and breakdown</li>
            <li>• Individual assessment results</li>
            <li>• AI-generated recommendations</li>
            <li>• Assessment completion timestamps</li>
            <li>• Performance factor analysis</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">📈 Engagement Metrics</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• Number of assessments completed</li>
            <li>• Time spent on each assessment</li>
            <li>• Return visits and engagement level</li>
            <li>• Download and interaction history</li>
            <li>• Email engagement (if integrated)</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">🔄 Activity Timeline</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• Chronological activity history</li>
            <li>• Assessment completion events</li>
            <li>• System interactions and updates</li>
            <li>• Notes and manual updates</li>
            <li>• Integration events (CRM sync, etc.)</li>
          </ul>
        </div>
      </div>

      <h3>Lead Scoring Breakdown</h3>
      <p>Each lead's score is calculated based on multiple factors:</p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Score Components:</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-base text-dark/70">Website Quality Assessment</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">25%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base text-dark/70">Tech Stack Maturity</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">25%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base text-dark/70">Content Quality Score</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">25%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base text-dark/70">SEO Readiness Level</span>
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">25%</span>
          </div>
        </div>
      </div>

      <h2 id="filtering-sorting">Filtering and Sorting</h2>

      <h3>Advanced Filtering Options</h3>
      <p>Use filters to find specific leads or segments:</p>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-accent pl-6">
          <h4 className="font-semibold text-dark mb-2">📅 Date Range Filters</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Filter leads by creation date, last activity, or assessment completion
          </p>
          <p className="text-sm text-dark/50">
            <strong>Options:</strong> Today, This Week, This Month, Last 30 Days, Custom Range
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🏢 Company Filters</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Segment leads by industry, company size, or geographic location
          </p>
          <p className="text-sm text-dark/50">
            <strong>Categories:</strong> Industry, Company Size (Startup/SMB/Enterprise), Location
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🎯 Performance Filters</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Filter by lead score ranges, assessment completion, or engagement level
          </p>
          <p className="text-sm text-dark/50">
            <strong>Ranges:</strong> High Score (80+), Medium (60-79), Low (0-59), Custom Range
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🔧 Assessment Filters</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Filter by specific assessment types completed or assessment status
          </p>
          <p className="text-sm text-dark/50">
            <strong>Types:</strong> Lead Score, Pipeline Leak, Proposal, Tech Audit, All/None
          </p>
        </div>
      </div>

      <h3>Sorting and Organization</h3>
      <Callout type="success" title="Sorting Options">
        <ul>
          <li><strong>By Score:</strong> Highest to lowest performing leads</li>
          <li><strong>By Date:</strong> Most recent or oldest leads first</li>
          <li><strong>By Company Size:</strong> Enterprise, SMB, then Startup</li>
          <li><strong>By Activity:</strong> Most or least recently active</li>
          <li><strong>Alphabetical:</strong> By company name or email address</li>
        </ul>
      </Callout>

      <h3>Saved Filters and Views</h3>
      <p>Create and save custom filter combinations:</p>

      <Step number={1} title="Create Custom Filter">
        <p>Combine multiple filters to create targeted lead segments:</p>
        <ul>
          <li>Apply desired filters (industry, score range, date, etc.)</li>
          <li>Click "Save Filter" button</li>
          <li>Name your filter (e.g., "High-Score Tech Companies")</li>
          <li>Choose whether to make it a default view</li>
        </ul>
      </Step>

      <Step number={2} title="Quick Filter Examples">
        <div className="bg-gray-50 rounded-lg p-6 my-4">
          <h4 className="font-semibold mb-3">Common Filter Combinations:</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• <strong>Hot Leads:</strong> Score 80+, Last 7 days, Completed 2+ assessments</li>
            <li>• <strong>Enterprise Prospects:</strong> Company size = Enterprise, Score 60+</li>
            <li>• <strong>Tech Industry:</strong> Industry = Technology, Any score, Last 30 days</li>
            <li>• <strong>Inactive Leads:</strong> No activity > 30 days, Score > 50</li>
          </ul>
        </div>
      </Step>

      <h2 id="lead-actions">Lead Actions and Updates</h2>

      <h3>Individual Lead Actions</h3>
      <p>Actions available for each lead:</p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">✏️ Edit Lead Information</h4>
          <p className="text-base text-dark/70 mb-2">Update contact details, company info, or add notes</p>
          <p className="text-sm text-dark/50">Useful for data cleanup and additional context</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">📧 Export Lead Data</h4>
          <p className="text-base text-dark/70 mb-2">Download individual lead profile and assessment results</p>
          <p className="text-sm text-dark/50">Available in PDF, CSV, or JSON formats</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">🔄 Sync to CRM</h4>
          <p className="text-base text-dark/70 mb-2">Push lead data to connected CRM systems</p>
          <p className="text-sm text-dark/50">Supports HubSpot, Salesforce, and others</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">📝 Add Notes</h4>
          <p className="text-base text-dark/70 mb-2">Add internal notes and follow-up reminders</p>
          <p className="text-sm text-dark/50">Track conversations and next steps</p>
        </div>
      </div>

      <h3>Bulk Actions</h3>
      <p>Perform actions on multiple leads simultaneously:</p>

      <Step number={1} title="Select Multiple Leads">
        <p>Use checkboxes to select leads for bulk actions:</p>
        <ul>
          <li>Check individual leads or use "Select All" option</li>
          <li>Apply filters first to target specific segments</li>
          <li>Bulk actions appear when leads are selected</li>
        </ul>
      </Step>

      <Step number={2} title="Available Bulk Actions">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-4">
          <h4 className="font-semibold mb-3">Bulk Operations:</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• <strong>Export Selected:</strong> Download data for chosen leads</li>
            <li>• <strong>Add to Campaign:</strong> Add leads to email marketing campaigns</li>
            <li>• <strong>Update Status:</strong> Change lead qualification status</li>
            <li>• <strong>Sync to CRM:</strong> Push multiple leads to CRM system</li>
            <li>• <strong>Add Tags:</strong> Apply labels for organization</li>
            <li>• <strong>Delete Leads:</strong> Remove leads from system (use carefully)</li>
          </ul>
        </div>
      </Step>

      <h3>Lead Status Management</h3>
      <p>Track lead progression through your sales process:</p>

      <div className="grid md:grid-cols-4 gap-4 my-6">
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-lg font-bold text-blue-600 mb-2">New</div>
          <p className="text-base text-dark/60">Recently captured</p>
          <p className="text-xs text-dark/50 mt-1">Needs qualification</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-lg font-bold text-amber-600 mb-2">Qualified</div>
          <p className="text-base text-dark/60">Meets criteria</p>
          <p className="text-xs text-dark/50 mt-1">Ready for outreach</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-lg font-bold text-green-600 mb-2">Contacted</div>
          <p className="text-base text-dark/60">Outreach initiated</p>
          <p className="text-xs text-dark/50 mt-1">Awaiting response</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-lg font-bold text-purple-600 mb-2">Converted</div>
          <p className="text-base text-dark/60">Became customer</p>
          <p className="text-xs text-dark/50 mt-1">Success!</p>
        </div>
      </div>

      <h3>Lead Nurturing Workflows</h3>
      <Callout type="info" title="Automated Follow-up">
        <p>
          Set up automated email sequences based on lead scores and assessment results. 
          High-scoring leads can receive immediate follow-up, while lower scores enter 
          nurturing campaigns to improve their readiness over time.
        </p>
      </Callout>

      <h3>Data Export and Integration</h3>
      <p>Export lead data for use in external systems:</p>

      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How to export leads to CSV</summary>
          <div className="mt-2 text-dark/60">
            <p>1. Apply any desired filters to select specific leads</p>
            <p>2. Click "Export" button in the top right of leads list</p>
            <p>3. Choose "CSV" format and select fields to include</p>
            <p>4. Download file and open in Excel or Google Sheets</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How to sync leads to HubSpot</summary>
          <div className="mt-2 text-dark/60">
            <p>1. Ensure HubSpot integration is configured in Settings</p>
            <p>2. Select leads to sync (or use "Sync All" option)</p>
            <p>3. Click "Sync to CRM" and choose HubSpot</p>
            <p>4. Map fields and confirm sync operation</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How to create lead segments</summary>
          <div className="mt-2 text-dark/60">
            <p>1. Use filters to identify leads with common characteristics</p>
            <p>2. Save the filter combination with a descriptive name</p>
            <p>3. Use segments for targeted campaigns and analysis</p>
            <p>4. Monitor segment performance over time</p>
          </div>
        </details>
      </div>

      <h3>Best Practices for Lead Management</h3>
      <Callout type="success" title="Management Tips">
        <ul>
          <li><strong>Regular Review:</strong> Check new leads daily and high-score leads immediately</li>
          <li><strong>Quick Response:</strong> Contact leads within 24 hours of assessment completion</li>
          <li><strong>Segmentation:</strong> Create targeted segments for personalized outreach</li>
          <li><strong>Data Hygiene:</strong> Keep lead information updated and remove duplicates</li>
          <li><strong>Follow-up Tracking:</strong> Use notes and status updates to track progress</li>
        </ul>
      </Callout>

      <h3>Next Steps</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/knowledge/admin-analytics/analytics-interpretation" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Analytics Interpretation</h4>
          <p className="text-dark/60 text-base leading-relaxed">Learn to analyze lead performance and trends</p>
        </a>
        <a href="/knowledge/admin-analytics/export-reporting" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Export & Reporting</h4>
          <p className="text-dark/60 text-base leading-relaxed">Master data export and report generation</p>
        </a>
      </div>
    </DocLayout>
  );
}