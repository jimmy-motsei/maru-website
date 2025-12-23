import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Proposal Accelerator Guide | Maru Lead Generation Engine',
  description: 'Complete guide to using the AI-powered Proposal Accelerator to create winning business proposals in minutes.',
};

const tableOfContents = [
  { id: 'overview', title: 'Tool Overview', level: 1 },
  { id: 'preparation', title: 'Preparation & Information Gathering', level: 1 },
  { id: 'using-tool', title: 'Using the Proposal Accelerator', level: 1 },
  { id: 'customizing-proposals', title: 'Customizing Your Proposals', level: 1 },
  { id: 'best-practices', title: 'Best Practices', level: 1 },
];

export default function ProposalAcceleratorPage() {
  return (
    <DocLayout
      title="Proposal Accelerator Guide"
      description="Complete guide to using the AI-powered Proposal Accelerator to create winning business proposals in minutes."
      category="Assessment Tools"
      readTime="20 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Assessment Tools', href: '/knowledge/assessment-tools' },
        { label: 'Proposal Accelerator', href: '/knowledge/assessment-tools/proposal-accelerator' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Tool Overview</h2>
      
      <p>
        The Proposal Accelerator uses AI to generate professional, customized business proposals 
        based on your client's specific needs, industry, and requirements. It creates comprehensive 
        proposals that typically take hours to write in just minutes.
      </p>

      <Callout type="info" title="What the Proposal Accelerator Creates">
        <ul>
          <li><strong>Executive Summary:</strong> Compelling overview tailored to client needs</li>
          <li><strong>Solution Overview:</strong> Detailed description of your proposed solution</li>
          <li><strong>Implementation Plan:</strong> Step-by-step project approach and timeline</li>
          <li><strong>Pricing Structure:</strong> Professional pricing presentation with value justification</li>
          <li><strong>Industry-Specific Content:</strong> Relevant examples and case studies</li>
        </ul>
      </Callout>

      <h2 id="preparation">Preparation & Information Gathering</h2>

      <p>
        The quality of your AI-generated proposal depends on the information you provide. 
        Gather comprehensive details about your client and project before starting.
      </p>

      <h3>Client Information Checklist</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Essential Client Details:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium mb-2">Company Information</h5>
            <ul className="text-sm space-y-1">
              <li>• Company name and size</li>
              <li>• Industry and market sector</li>
              <li>• Current challenges and pain points</li>
              <li>• Business goals and objectives</li>
              <li>• Budget range (if known)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Decision Makers</h5>
            <ul className="text-sm space-y-1">
              <li>• Primary contact name and role</li>
              <li>• Key stakeholders involved</li>
              <li>• Decision-making process</li>
              <li>• Timeline for decision</li>
              <li>• Success criteria and KPIs</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Project Scope Definition</h3>
      <p>Clearly define what services or solutions you're proposing:</p>

      <div className="space-y-4 my-6">
        <div className="border-l-4 border-accent pl-4">
          <h4 className="font-semibold">🎯 Services Requested</h4>
          <p className="text-sm text-dark/60">List all services, products, or solutions to be included</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-semibold">⏱️ Project Timeline</h4>
          <p className="text-sm text-dark/60">Expected start date, milestones, and completion timeline</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="font-semibold">💰 Budget Parameters</h4>
          <p className="text-sm text-dark/60">Budget range, payment terms, and pricing structure preferences</p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-semibold">📊 Success Metrics</h4>
          <p className="text-sm text-dark/60">How success will be measured and evaluated</p>
        </div>
      </div>

      <h2 id="using-tool">Using the Proposal Accelerator</h2>

      <Step number={1} title="Navigate to Proposal Accelerator">
        <p>Access the tool from the assessments section:</p>
        <CodeBlock language="text">
{`URL: http://localhost:3000/assessments/proposal`}
        </CodeBlock>
      </Step>

      <Step number={2} title="Complete Client Information">
        <p>Fill out the comprehensive client information form:</p>
        
        <div className="bg-gray-50 rounded-lg p-6 my-4">
          <h4 className="font-semibold mb-3">Required Form Fields:</h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-dark mb-2">Basic Information</h5>
              <ul className="text-sm space-y-1 text-dark/60">
                <li>• Your email address</li>
                <li>• Client company name</li>
                <li>• Industry sector</li>
                <li>• Company size category</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-dark mb-2">Project Details</h5>
              <ul className="text-sm space-y-1 text-dark/60">
                <li>• Services requested (select multiple)</li>
                <li>• Project timeline</li>
                <li>• Budget range</li>
                <li>• Key challenges to address</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-dark mb-2">Decision Makers</h5>
              <ul className="text-sm space-y-1 text-dark/60">
                <li>• Primary contact name and role</li>
                <li>• Additional stakeholders</li>
                <li>• Decision timeline</li>
              </ul>
            </div>
          </div>
        </div>

        <Callout type="tip" title="Pro Tips for Better Proposals">
          <ul>
            <li>Be specific about challenges - generic problems get generic solutions</li>
            <li>Include quantifiable goals (increase revenue by 20%, reduce costs by $50k)</li>
            <li>Mention any existing tools or processes they're currently using</li>
            <li>Note any compliance requirements or industry regulations</li>
          </ul>
        </Callout>
      </Step>

      <Step number={3} title="AI Processing & Generation">
        <p>Submit the form and wait for AI proposal generation:</p>
        <ul>
          <li><strong>Processing Time:</strong> 2-4 minutes for comprehensive proposals</li>
          <li><strong>AI Analysis:</strong> Processes industry best practices and client needs</li>
          <li><strong>Content Generation:</strong> Creates tailored content for each proposal section</li>
          <li><strong>Quality Check:</strong> Ensures professional formatting and coherence</li>
        </ul>

        <Callout type="warning" title="Processing Time">
          Proposal generation takes longer than other assessments due to the comprehensive 
          content creation. Don't refresh the page during processing.
        </Callout>
      </Step>

      <Step number={4} title="Review Generated Proposal">
        <p>Once complete, review your AI-generated proposal sections:</p>
        
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">📋 Executive Summary</h4>
            <p className="text-sm text-dark/60">Compelling overview highlighting key benefits and ROI</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🔧 Solution Overview</h4>
            <p className="text-sm text-dark/60">Detailed description of proposed services and approach</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">📅 Implementation Plan</h4>
            <p className="text-sm text-dark/60">Step-by-step project timeline with milestones</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">💰 Pricing Structure</h4>
            <p className="text-sm text-dark/60">Professional pricing presentation with value justification</p>
          </div>
        </div>
      </Step>

      <h2 id="customizing-proposals">Customizing Your Proposals</h2>

      <h3>Essential Customizations</h3>
      <p>While the AI generates comprehensive content, always customize these elements:</p>

      <div className="space-y-6 my-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">🎨 Branding & Formatting</h4>
          <ul className="text-sm text-dark/60 space-y-1">
            <li>• Add your company logo and brand colors</li>
            <li>• Include contact information and company details</li>
            <li>• Apply consistent formatting and typography</li>
            <li>• Add professional headers and footers</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">📊 Specific Details</h4>
          <ul className="text-sm text-dark/60 space-y-1">
            <li>• Replace placeholder pricing with actual quotes</li>
            <li>• Add specific timelines and milestone dates</li>
            <li>• Include relevant case studies or testimonials</li>
            <li>• Customize implementation steps for their environment</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">🎯 Personalization</h4>
          <ul className="text-sm text-dark/60 space-y-1">
            <li>• Address specific pain points mentioned in discovery</li>
            <li>• Reference previous conversations or meetings</li>
            <li>• Include industry-specific terminology and examples</li>
            <li>• Align with their stated goals and success metrics</li>
          </ul>
        </div>
      </div>

      <h3>Additional Sections to Consider</h3>
      <p>Depending on your client and industry, consider adding:</p>

      <ul>
        <li><strong>Company Background:</strong> Your credentials and experience</li>
        <li><strong>Case Studies:</strong> Relevant success stories from similar clients</li>
        <li><strong>Team Bios:</strong> Key team members who will work on the project</li>
        <li><strong>Terms & Conditions:</strong> Legal terms and project assumptions</li>
        <li><strong>Next Steps:</strong> Clear call-to-action and decision timeline</li>
      </ul>

      <h2 id="best-practices">Best Practices</h2>

      <h3>Before Sending Your Proposal</h3>
      <Callout type="success" title="Pre-Send Checklist">
        <ol>
          <li><strong>Proofread Thoroughly:</strong> Check for typos, grammar, and consistency</li>
          <li><strong>Verify All Details:</strong> Ensure names, dates, and numbers are accurate</li>
          <li><strong>Test All Links:</strong> Make sure any included links work properly</li>
          <li><strong>Format Check:</strong> Ensure professional appearance across devices</li>
          <li><strong>Internal Review:</strong> Have a colleague review before sending</li>
        </ol>
      </Callout>

      <h3>Proposal Delivery Best Practices</h3>

      <Step number={1} title="Professional Presentation">
        <ul>
          <li>Send as a PDF to preserve formatting</li>
          <li>Use a professional email subject line</li>
          <li>Include a brief cover email summarizing key points</li>
          <li>Offer to schedule a follow-up meeting to discuss</li>
        </ul>
      </Step>

      <Step number={2} title="Follow-Up Strategy">
        <p>Plan your follow-up approach:</p>
        <ul>
          <li><strong>Day 1:</strong> Confirm receipt and offer to answer questions</li>
          <li><strong>Day 3:</strong> Check if they need clarification on any points</li>
          <li><strong>Day 7:</strong> Schedule a meeting to discuss their thoughts</li>
          <li><strong>Day 14:</strong> Final follow-up with deadline reminder</li>
        </ul>
      </Step>

      <h3>Common Proposal Mistakes to Avoid</h3>
      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Generic, one-size-fits-all content</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Problem:</strong> Using the same proposal template for every client</p>
            <p><strong>Solution:</strong> Always customize the AI-generated content with client-specific details and pain points</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Focusing on features instead of benefits</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Problem:</strong> Listing what you do instead of how it helps them</p>
            <p><strong>Solution:</strong> Emphasize outcomes, ROI, and specific value they'll receive</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Unclear pricing or next steps</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Problem:</strong> Vague pricing or no clear call-to-action</p>
            <p><strong>Solution:</strong> Provide transparent pricing and specific next steps with deadlines</p>
          </div>
        </details>
      </div>

      <h3>Measuring Proposal Success</h3>
      <p>Track these metrics to improve your proposal process:</p>

      <div className="grid md:grid-cols-3 gap-6 my-6">
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-accent mb-2">Response Rate</div>
          <p className="text-sm text-dark/60">% of proposals that get a response</p>
          <p className="text-xs text-dark/50 mt-1">Target: >80%</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 mb-2">Win Rate</div>
          <p className="text-sm text-dark/60">% of proposals that result in sales</p>
          <p className="text-xs text-dark/50 mt-1">Target: >25%</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-green-600 mb-2">Time to Close</div>
          <p className="text-sm text-dark/60">Days from proposal to decision</p>
          <p className="text-xs text-dark/50 mt-1">Target: <30 days</p>
        </div>
      </div>

      <Callout type="info" title="Continuous Improvement">
        <p>
          Use the admin dashboard to track proposal performance and identify patterns in successful proposals. 
          Regularly update your input information based on what works best for your industry and client type.
        </p>
      </Callout>

      <h3>Next Steps After Proposal Generation</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/knowledge/best-practices/conversion-optimization" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Conversion Rate Improvement</h4>
          <p className="text-dark/60 text-sm">Learn advanced techniques to win more proposals</p>
        </a>
        <a href="/knowledge/admin-analytics/lead-management" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Lead Management</h4>
          <p className="text-dark/60 text-sm">Track and manage your proposal pipeline</p>
        </a>
      </div>
    </DocLayout>
  );
}