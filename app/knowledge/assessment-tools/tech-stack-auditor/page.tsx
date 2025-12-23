import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Tech Stack Auditor Documentation | Maru Lead Generation Engine',
  description: 'Complete guide to using the Tech Stack Auditor to optimize your technology tools and reduce costs.',
};

const tableOfContents = [
  { id: 'overview', title: 'Tool Overview', level: 1 },
  { id: 'preparation', title: 'Preparation & Tool Inventory', level: 1 },
  { id: 'using-auditor', title: 'Using the Tech Stack Auditor', level: 1 },
  { id: 'understanding-results', title: 'Understanding Results', level: 1 },
  { id: 'optimization-strategies', title: 'Optimization Strategies', level: 1 },
];

export default function TechStackAuditorPage() {
  return (
    <DocLayout
      title="Tech Stack Auditor Documentation"
      description="Complete guide to using the Tech Stack Auditor to optimize your technology tools and reduce costs."
      category="Assessment Tools"
      readTime="22 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Assessment Tools', href: '/knowledge/assessment-tools' },
        { label: 'Tech Stack Auditor', href: '/knowledge/assessment-tools/tech-stack-auditor' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Tool Overview</h2>
      
      <p>
        The Tech Stack Auditor analyzes your current technology tools and software to identify 
        redundancies, cost optimization opportunities, and efficiency improvements. It provides 
        actionable recommendations to streamline your tech stack and reduce monthly expenses.
      </p>

      <Callout type="info" title="What the Tech Stack Auditor Identifies">
        <ul>
          <li><strong>Tool Redundancies:</strong> Multiple tools serving similar functions</li>
          <li><strong>Cost Optimization:</strong> Opportunities to reduce monthly software expenses</li>
          <li><strong>Usage Efficiency:</strong> Underutilized tools and licenses</li>
          <li><strong>Integration Gaps:</strong> Missing connections between tools</li>
          <li><strong>Consolidation Opportunities:</strong> Ways to simplify your tech stack</li>
        </ul>
      </Callout>

      <h2 id="preparation">Preparation & Tool Inventory</h2>

      <p>
        Before running the audit, compile a comprehensive list of all technology tools and 
        software your business currently uses. This includes subscriptions, licenses, and 
        one-time purchases.
      </p>

      <h3>Tool Categories to Include</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">📊 Business Operations</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• CRM systems (HubSpot, Salesforce)</li>
            <li>• Project management (Asana, Monday.com)</li>
            <li>• Communication (Slack, Microsoft Teams)</li>
            <li>• Email marketing (Mailchimp, ConvertKit)</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">💻 Productivity & Design</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• Office suites (Microsoft 365, Google Workspace)</li>
            <li>• Design tools (Canva, Adobe Creative Suite)</li>
            <li>• File storage (Dropbox, OneDrive)</li>
            <li>• Password managers (1Password, LastPass)</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">📈 Analytics & Marketing</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• Analytics (Google Analytics, Hotjar)</li>
            <li>• Social media management (Buffer, Hootsuite)</li>
            <li>• SEO tools (SEMrush, Ahrefs)</li>
            <li>• Automation (Zapier, Make)</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-4">🔧 Technical & Development</h4>
          <ul className="text-base space-y-2 text-dark/70">
            <li>• Hosting & domains (AWS, Cloudflare)</li>
            <li>• Development tools (GitHub, Figma)</li>
            <li>• Security software (antivirus, VPN)</li>
            <li>• Backup solutions (Backblaze, Carbonite)</li>
          </ul>
        </div>
      </div>

      <h3>Information to Gather</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">For Each Tool, Collect:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="text-base space-y-2 text-dark/70">
              <li>• Tool name and category</li>
              <li>• Monthly/annual cost</li>
              <li>• Number of users/licenses</li>
              <li>• Usage frequency (daily, weekly, monthly)</li>
            </ul>
          </div>
          <div>
            <ul className="text-base space-y-2 text-dark/70">
              <li>• Primary use case</li>
              <li>• Integration with other tools</li>
              <li>• Contract terms and renewal dates</li>
              <li>• Alternative tools considered</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 id="using-auditor">Using the Tech Stack Auditor</h2>

      <Step number={1} title="Navigate to Tech Stack Auditor">
        <p>Access the tool from the assessments section:</p>
        <CodeBlock language="text">
{`URL: http://localhost:3000/assessments/tech-audit`}
        </CodeBlock>
      </Step>

      <Step number={2} title="Complete Company Information">
        <p>Fill out the basic company details:</p>
        <ul>
          <li><strong>Email:</strong> Your business email for results</li>
          <li><strong>Company Name:</strong> Your organization name</li>
          <li><strong>Industry:</strong> Select your business sector</li>
          <li><strong>Company Size:</strong> Choose appropriate size category</li>
        </ul>
      </Step>

      <Step number={3} title="Select Your Current Tools">
        <p>The system presents a comprehensive list of popular business tools. Select all tools your company currently uses:</p>
        
        <div className="bg-gray-50 rounded-lg p-6 my-4">
          <h4 className="font-semibold mb-3">Tool Selection Process:</h4>
          <ol className="text-base space-y-2 text-dark/70">
            <li>1. Browse through categorized tool lists</li>
            <li>2. Check all tools your company uses</li>
            <li>3. For each selected tool, specify:</li>
            <ul className="ml-6 mt-2 space-y-1">
              <li>• Monthly cost per user</li>
              <li>• Number of active users</li>
              <li>• Usage frequency</li>
            </ul>
            <li>4. Add any tools not listed using "Other" option</li>
          </ol>
        </div>

        <Callout type="tip" title="Selection Tips">
          <ul>
            <li>Include all tools, even free ones - they may have hidden costs</li>
            <li>Be honest about usage frequency - rarely used tools are optimization targets</li>
            <li>Include tools you're considering canceling</li>
            <li>Don't forget about annual subscriptions paid once per year</li>
          </ul>
        </Callout>
      </Step>

      <Step number={4} title="Submit for Analysis">
        <p>Once you've selected all tools and provided cost information, submit for analysis:</p>
        <ul>
          <li><strong>Processing Time:</strong> 1-2 minutes</li>
          <li><strong>Analysis:</strong> System identifies redundancies and optimization opportunities</li>
          <li><strong>Cost Calculation:</strong> Computes total monthly expenses and potential savings</li>
        </ul>
      </Step>

      <h2 id="understanding-results">Understanding Results</h2>

      <h3>Overall Optimization Score</h3>
      <p>Your tech stack receives an optimization score from 0-100 based on:</p>
      <ul>
        <li>Tool redundancy levels</li>
        <li>Cost efficiency ratios</li>
        <li>Integration opportunities</li>
        <li>Usage optimization potential</li>
      </ul>

      <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6 my-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600 mb-2">0-39</div>
            <div className="text-sm font-medium">Needs Optimization</div>
            <div className="text-xs text-dark/60 mt-1">High redundancy and waste</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600 mb-2">40-59</div>
            <div className="text-sm font-medium">Room for Improvement</div>
            <div className="text-xs text-dark/60 mt-1">Several optimization opportunities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-2">60-79</div>
            <div className="text-sm font-medium">Well Optimized</div>
            <div className="text-xs text-dark/60 mt-1">Good efficiency with minor improvements</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-2">80-100</div>
            <div className="text-sm font-medium">Highly Efficient</div>
            <div className="text-xs text-dark/60 mt-1">Minimal waste, excellent optimization</div>
          </div>
        </div>
      </div>

      <h3>Key Metrics Explained</h3>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-red-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">💰 Total Monthly Cost</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Complete monthly software expenses across all tools and users
          </p>
          <p className="text-sm text-dark/50">
            <strong>Benchmark:</strong> Startups: $500-2000, SMBs: $2000-8000, Enterprise: $8000+
          </p>
        </div>

        <div className="border-l-4 border-amber-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🔄 Redundancies Found</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Tools serving similar functions that could be consolidated
          </p>
          <p className="text-sm text-dark/50">
            <strong>Impact:</strong> Each redundancy typically saves $50-500/month
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">📊 Potential Savings</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Estimated monthly savings from optimization recommendations
          </p>
          <p className="text-sm text-dark/50">
            <strong>Typical Range:</strong> 15-40% of current software spend
          </p>
        </div>
      </div>

      <h3>Redundancy Categories</h3>
      <p>The system identifies several types of tool redundancies:</p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">🚨 Direct Redundancy</h4>
          <p className="text-base text-dark/70 mb-2">Multiple tools doing identical functions</p>
          <p className="text-sm text-dark/50">Example: Using both Slack and Microsoft Teams</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">⚠️ Feature Overlap</h4>
          <p className="text-base text-dark/70 mb-2">Tools with significant overlapping features</p>
          <p className="text-sm text-dark/50">Example: Separate email marketing and CRM tools</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">🔧 Consolidation Opportunity</h4>
          <p className="text-base text-dark/70 mb-2">Multiple tools that could be replaced by one</p>
          <p className="text-sm text-dark/50">Example: Separate design tools vs Adobe Creative Suite</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">📉 Underutilization</h4>
          <p className="text-base text-dark/70 mb-2">Expensive tools used infrequently</p>
          <p className="text-sm text-dark/50">Example: Premium analytics tools used monthly</p>
        </div>
      </div>

      <h2 id="optimization-strategies">Optimization Strategies</h2>

      <h3>Immediate Actions (This Week)</h3>
      <Callout type="success" title="Quick Wins">
        <ol>
          <li><strong>Cancel Unused Tools:</strong> Immediately cancel tools marked as "rarely used"</li>
          <li><strong>Downgrade Plans:</strong> Reduce subscription tiers for underutilized tools</li>
          <li><strong>Consolidate Duplicates:</strong> Choose one tool from each redundant category</li>
          <li><strong>Review User Licenses:</strong> Remove inactive users from paid tools</li>
        </ol>
      </Callout>

      <h3>Short-term Optimization (Next Month)</h3>

      <div className="space-y-4 my-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">🔄 Tool Consolidation</h4>
          <ul className="text-base text-dark/70 space-y-1">
            <li>• Replace multiple point solutions with integrated platforms</li>
            <li>• Migrate to tools that offer multiple functions</li>
            <li>• Negotiate bundle deals with preferred vendors</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">💰 Cost Optimization</h4>
          <ul className="text-base text-dark/70 space-y-1">
            <li>• Switch to annual billing for discounts</li>
            <li>• Negotiate volume discounts for team tools</li>
            <li>• Consider open-source alternatives for non-critical functions</li>
          </ul>
        </div>
      </div>

      <h3>Long-term Strategy (Next Quarter)</h3>

      <Step number={1} title="Develop Tool Standards">
        <p>Create guidelines for tool selection and approval:</p>
        <ul>
          <li>Define criteria for new tool evaluation</li>
          <li>Establish approval process for software purchases</li>
          <li>Create preferred vendor list with negotiated rates</li>
          <li>Set budget limits for different tool categories</li>
        </ul>
      </Step>

      <Step number={2} title="Implement Usage Monitoring">
        <p>Track tool usage to prevent future waste:</p>
        <ul>
          <li>Set up usage analytics for key tools</li>
          <li>Schedule quarterly tool audits</li>
          <li>Monitor license utilization rates</li>
          <li>Create alerts for underused expensive tools</li>
        </ul>
      </Step>

      <h3>Common Optimization Scenarios</h3>

      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Multiple communication tools (Slack + Teams + Email)</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Recommendation:</strong> Standardize on one primary platform (usually Teams for Microsoft shops, Slack for others)</p>
            <p><strong>Savings:</strong> $5-15 per user per month</p>
            <p><strong>Implementation:</strong> Migrate channels and conversations, train team on single platform</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Separate CRM and email marketing tools</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Recommendation:</strong> Use integrated platform like HubSpot or upgrade CRM to include marketing</p>
            <p><strong>Savings:</strong> $50-200 per month plus improved data consistency</p>
            <p><strong>Implementation:</strong> Data migration, workflow setup, team training</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Multiple design tools for different purposes</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Recommendation:</strong> Consolidate to Adobe Creative Suite or Canva Pro depending on needs</p>
            <p><strong>Savings:</strong> $20-100 per user per month</p>
            <p><strong>Implementation:</strong> Asset migration, template recreation, skill development</p>
          </div>
        </details>
      </div>

      <h3>Measuring Optimization Success</h3>
      <p>Track these metrics to measure your optimization efforts:</p>

      <div className="grid md:grid-cols-3 gap-6 my-6">
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-green-600 mb-2">Cost Reduction</div>
          <p className="text-base text-dark/60">Monthly software spend decrease</p>
          <p className="text-xs text-dark/50 mt-1">Target: 15-30% reduction</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 mb-2">Tool Count</div>
          <p className="text-base text-dark/60">Total number of active tools</p>
          <p className="text-xs text-dark/50 mt-1">Target: 20-40% reduction</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-purple-600 mb-2">Efficiency Score</div>
          <p className="text-base text-dark/60">Cost per employee per month</p>
          <p className="text-xs text-dark/50 mt-1">Benchmark: $200-500/employee</p>
        </div>
      </div>

      <Callout type="info" title="Regular Auditing">
        <p>
          Run the Tech Stack Auditor quarterly to maintain optimization. As your business grows 
          and changes, new redundancies and opportunities will emerge. Regular auditing ensures 
          you maintain an efficient, cost-effective tech stack.
        </p>
      </Callout>

      <h3>Next Steps</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/knowledge/best-practices/assessment-optimization" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Assessment Optimization</h4>
          <p className="text-dark/60 text-base leading-relaxed">Learn how to optimize all your assessment processes</p>
        </a>
        <a href="/knowledge/admin-analytics/dashboard-overview" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Dashboard Overview</h4>
          <p className="text-dark/60 text-base leading-relaxed">Monitor your tech stack optimization progress</p>
        </a>
      </div>
    </DocLayout>
  );
}