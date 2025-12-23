import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import TableOfContents from '@/components/docs/TableOfContents';

export const metadata: Metadata = {
  title: 'Integration Workflows | Maru Online Knowledge Base',
  description: 'Learn how to integrate our assessment tools with your existing CRM, marketing automation, and business tools for seamless workflows.',
  keywords: 'CRM integration, HubSpot, Salesforce, workflow automation, API integration, data sync',
};

const tocItems = [
  { id: 'overview', title: 'Integration Overview', level: 2 },
  { id: 'hubspot', title: 'HubSpot Integration', level: 2 },
  { id: 'salesforce', title: 'Salesforce Integration', level: 2 },
  { id: 'automation', title: 'Marketing Automation', level: 2 },
  { id: 'api-access', title: 'API Access & Custom Integrations', level: 2 },
  { id: 'troubleshooting', title: 'Troubleshooting & Support', level: 2 },
];

export default function IntegrationWorkflowsPage() {
  return (
    <DocLayout
      title="Integration Workflows"
      description="Connect our assessment tools with your existing business systems for seamless data flow"
      readingTime="16 min read"
      category="Best Practices"
      lastUpdated="2024-12-19"
    >
      <TableOfContents items={tocItems} />

      <div className="prose prose-lg max-w-none">
        <section id="overview">
          <h2>Integration Overview</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-blue-700">
                  <strong>Seamless Workflow Integration:</strong> Connect our assessment tools with your existing business systems to create automated lead nurturing and data synchronization workflows.
                </p>
              </div>
            </div>
          </div>

          <h3>Supported Integrations</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-700">CRM Systems</h4>
              <ul className="text-sm space-y-1">
                <li>• HubSpot (Free & Paid tiers)</li>
                <li>• Salesforce (Professional+)</li>
                <li>• Pipedrive</li>
                <li>• Zoho CRM</li>
                <li>• Microsoft Dynamics 365</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-700">Marketing Automation</h4>
              <ul className="text-sm space-y-1">
                <li>• Mailchimp</li>
                <li>• ActiveCampaign</li>
                <li>• Pardot</li>
                <li>• Marketo</li>
                <li>• ConvertKit</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-purple-700">Automation Platforms</h4>
              <ul className="text-sm space-y-1">
                <li>• Zapier (1000+ apps)</li>
                <li>• Microsoft Power Automate</li>
                <li>• Integromat/Make</li>
                <li>• IFTTT</li>
                <li>• Custom API integrations</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-orange-700">Analytics & Reporting</h4>
              <ul className="text-sm space-y-1">
                <li>• Google Analytics</li>
                <li>• Google Data Studio</li>
                <li>• Tableau</li>
                <li>• Power BI</li>
                <li>• Custom dashboards</li>
              </ul>
            </div>
          </div>

          <h3>Integration Benefits</h3>
          <ul className="text-base leading-relaxed">
            <li><strong>Automated Lead Scoring:</strong> Assessment results automatically update lead scores in your CRM</li>
            <li><strong>Triggered Workflows:</strong> Launch nurturing sequences based on assessment completion</li>
            <li><strong>Data Synchronization:</strong> Keep contact information and insights synchronized across platforms</li>
            <li><strong>Reporting Consolidation:</strong> Combine assessment data with your existing analytics</li>
          </ul>
        </section>

        <section id="hubspot">
          <h2>HubSpot Integration</h2>
          
          <p className="text-base leading-relaxed">
            Our HubSpot integration works with both Free and paid HubSpot accounts, providing seamless contact management and workflow automation.
          </p>

          <h3>Setup Process</h3>
          <div className="space-y-6 my-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold">Step 1: Connect Your HubSpot Account</h4>
              <p className="text-sm text-gray-600 mb-2">Authorize the connection between Maru and HubSpot</p>
              <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                Admin Dashboard → Integrations → HubSpot → "Connect Account"
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold">Step 2: Configure Field Mapping</h4>
              <p className="text-sm text-gray-600 mb-2">Map assessment data to HubSpot contact properties</p>
              <div className="overflow-x-auto mt-2">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left">Maru Field</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">HubSpot Property</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Lead Score</td>
                      <td className="border border-gray-300 px-3 py-2">HubSpot Score</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Assessment Type</td>
                      <td className="border border-gray-300 px-3 py-2">Last Assessment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Company Size</td>
                      <td className="border border-gray-300 px-3 py-2">Number of Employees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold">Step 3: Set Up Workflows</h4>
              <p className="text-sm text-gray-600 mb-2">Create automated workflows based on assessment completion</p>
              <ul className="text-sm space-y-1 mt-2">
                <li>• High-score leads → Sales notification</li>
                <li>• Medium-score leads → Nurturing sequence</li>
                <li>• Low-score leads → Educational content</li>
              </ul>
            </div>
          </div>

          <h3>Available Triggers</h3>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Assessment Events</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Assessment started</li>
                <li>• Assessment completed</li>
                <li>• High score achieved (80+)</li>
                <li>• Report downloaded</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Behavioral Triggers</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Multiple assessments completed</li>
                <li>• Return visitor (7+ days)</li>
                <li>• Specific page visits</li>
                <li>• Email engagement</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 HubSpot Free Tier Limitations</h4>
            <p className="text-base leading-relaxed text-yellow-700">
              HubSpot Free accounts have limited workflow capabilities. Consider upgrading to HubSpot Starter ($45/month) for advanced automation features.
            </p>
          </div>
        </section>

        <section id="salesforce">
          <h2>Salesforce Integration</h2>
          
          <p className="text-base leading-relaxed">
            Connect with Salesforce Professional, Enterprise, or Unlimited editions to sync assessment data with your sales pipeline.
          </p>

          <h3>Prerequisites</h3>
          <ul className="text-base leading-relaxed">
            <li><strong>Salesforce Edition:</strong> Professional or higher (API access required)</li>
            <li><strong>User Permissions:</strong> System Administrator or custom permissions for API access</li>
            <li><strong>Custom Fields:</strong> Ability to create custom fields on Lead/Contact objects</li>
          </ul>

          <h3>Setup Process</h3>
          <div className="space-y-6 my-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold">Step 1: Create Custom Fields</h4>
              <p className="text-sm text-gray-600 mb-2">Add custom fields to store assessment data</p>
              <div className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium mb-2">Required Custom Fields:</div>
                <ul className="space-y-1">
                  <li>• Maru_Lead_Score__c (Number)</li>
                  <li>• Last_Assessment_Type__c (Picklist)</li>
                  <li>• Assessment_Date__c (Date)</li>
                  <li>• Assessment_Recommendations__c (Long Text)</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold">Step 2: Configure Connected App</h4>
              <p className="text-sm text-gray-600 mb-2">Set up OAuth authentication for secure API access</p>
              <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                Setup → Apps → App Manager → New Connected App
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold">Step 3: Map Data Flow</h4>
              <p className="text-sm text-gray-600 mb-2">Configure how assessment data flows into Salesforce</p>
              <ul className="text-sm space-y-1 mt-2">
                <li>• New assessments create/update Leads</li>
                <li>• High scores trigger opportunity creation</li>
                <li>• Recommendations populate activity records</li>
              </ul>
            </div>
          </div>

          <h3>Workflow Examples</h3>
          <div className="space-y-4 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🎯 High-Value Lead Workflow</h4>
              <p className="text-sm text-green-700">
                Lead Score 80+ → Create Opportunity → Assign to Sales Rep → Send Alert
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">📧 Nurturing Workflow</h4>
              <p className="text-sm text-blue-700">
                Lead Score 40-79 → Add to Campaign → Schedule Follow-up Task → Update Lead Status
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">📊 Analytics Workflow</h4>
              <p className="text-sm text-purple-700">
                Assessment Complete → Update Dashboard → Generate Report → Schedule Review
              </p>
            </div>
          </div>
        </section>

        <section id="automation">
          <h2>Marketing Automation</h2>
          
          <h3>Email Marketing Integration</h3>
          <p className="text-base leading-relaxed">
            Automatically trigger email sequences based on assessment results and user behavior.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-700">Mailchimp Integration</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Setup:</strong> Connect via Zapier or direct API</li>
                <li><strong>Triggers:</strong> Assessment completion, score thresholds</li>
                <li><strong>Actions:</strong> Add to lists, update tags, trigger campaigns</li>
                <li><strong>Segmentation:</strong> Score-based audience segments</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-700">ActiveCampaign Integration</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Setup:</strong> Native webhook integration</li>
                <li><strong>Triggers:</strong> Behavioral scoring, assessment events</li>
                <li><strong>Actions:</strong> Automation entry, deal creation</li>
                <li><strong>Personalization:</strong> Dynamic content based on scores</li>
              </ul>
            </div>
          </div>

          <h3>Automation Sequences</h3>
          <div className="space-y-6 my-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold mb-4">📈 High-Score Lead Sequence</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                  <div>
                    <div className="font-medium">Immediate: Sales Alert</div>
                    <div className="text-sm text-gray-600">Notify sales team of high-potential lead</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                  <div>
                    <div className="font-medium">Day 1: Personal Welcome</div>
                    <div className="text-sm text-gray-600">Personalized email from sales rep</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                  <div>
                    <div className="font-medium">Day 3: Case Study</div>
                    <div className="text-sm text-gray-600">Relevant success story based on industry</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                  <div>
                    <div className="font-medium">Day 7: Demo Invitation</div>
                    <div className="text-sm text-gray-600">Personalized demo scheduling link</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold mb-4">📚 Medium-Score Nurturing Sequence</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                  <div>
                    <div className="font-medium">Day 1: Assessment Results</div>
                    <div className="text-sm text-gray-600">Detailed report with recommendations</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                  <div>
                    <div className="font-medium">Day 5: Educational Content</div>
                    <div className="text-sm text-gray-600">Best practices guide relevant to their score</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                  <div>
                    <div className="font-medium">Day 14: Additional Assessment</div>
                    <div className="text-sm text-gray-600">Invitation to complete complementary assessment</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                  <div>
                    <div className="font-medium">Day 30: Check-in</div>
                    <div className="text-sm text-gray-600">Progress check and offer assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>Zapier Integration</h3>
          <p className="text-base leading-relaxed">
            Connect to 1000+ apps through Zapier for maximum flexibility:
          </p>

          <div className="bg-blue-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Popular Zapier Workflows</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Lead Management</h5>
                <ul className="text-sm space-y-1">
                  <li>• Assessment → Google Sheets</li>
                  <li>• High score → Slack notification</li>
                  <li>• New lead → Airtable record</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Communication</h5>
                <ul className="text-sm space-y-1">
                  <li>• Assessment → SMS via Twilio</li>
                  <li>• Report ready → Discord message</li>
                  <li>• Score update → Teams notification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="api-access">
          <h2>API Access & Custom Integrations</h2>
          
          <h3>REST API Overview</h3>
          <p className="text-base leading-relaxed">
            Our REST API provides programmatic access to assessment data and functionality for custom integrations.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">API Endpoints</h4>
            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-green-600">GET /api/assessments</span>
                <span className="text-gray-600">List all assessments</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-600">POST /api/assessments</span>
                <span className="text-gray-600">Create new assessment</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">GET /api/assessments/{id}</span>
                <span className="text-gray-600">Get assessment details</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">GET /api/leads</span>
                <span className="text-gray-600">List leads with scores</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-600">PUT /api/leads/{id}</span>
                <span className="text-gray-600">Update lead information</span>
              </div>
            </div>
          </div>

          <h3>Authentication</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-yellow-800 mb-2">🔑 API Key Authentication</h4>
            <p className="text-base leading-relaxed text-yellow-700 mb-3">
              All API requests require authentication using your unique API key.
            </p>
            <div className="bg-white rounded p-3 text-sm font-mono">
              curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;https://api.maruonline.co.za/v1/assessments
            </div>
          </div>

          <h3>Webhook Configuration</h3>
          <p className="text-base leading-relaxed">
            Set up webhooks to receive real-time notifications when events occur:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Trigger</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Payload</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">assessment.completed</td>
                  <td className="border border-gray-300 px-4 py-2">Assessment finished</td>
                  <td className="border border-gray-300 px-4 py-2">Full assessment data + score</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">lead.score_updated</td>
                  <td className="border border-gray-300 px-4 py-2">Lead score changes</td>
                  <td className="border border-gray-300 px-4 py-2">Lead ID + new/old scores</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">report.generated</td>
                  <td className="border border-gray-300 px-4 py-2">PDF report ready</td>
                  <td className="border border-gray-300 px-4 py-2">Report URL + metadata</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Custom Integration Examples</h3>
          <div className="space-y-6 my-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-green-700">Internal Dashboard Integration</h4>
              <p className="text-sm text-gray-600 mb-2">Pull assessment data into your internal analytics dashboard</p>
              <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                // Fetch daily assessment summary<br/>
                const response = await fetch('/api/assessments/summary?date=today');<br/>
                const data = await response.json();
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-blue-700">Lead Scoring Integration</h4>
              <p className="text-sm text-gray-600 mb-2">Automatically update your internal lead scoring system</p>
              <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                // Webhook handler for score updates<br/>
                app.post('/webhook/score-update', (req, res) => {`{`}<br/>
                &nbsp;&nbsp;updateInternalLeadScore(req.body.lead_id, req.body.score);<br/>
                {`}`});
              </div>
            </div>
          </div>
        </section>

        <section id="troubleshooting">
          <h2>Troubleshooting & Support</h2>
          
          <h3>Common Integration Issues</h3>
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-red-800 font-semibold mb-2">❌ Authentication Failures</h4>
              <p className="text-base leading-relaxed text-red-700 mb-3">
                If your integration is failing to authenticate:
              </p>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Verify API key is correct and active</li>
                <li>• Check if your IP address is whitelisted</li>
                <li>• Ensure proper header formatting</li>
                <li>• Confirm account permissions</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-yellow-800 font-semibold mb-2">⚠️ Data Sync Issues</h4>
              <p className="text-base leading-relaxed text-yellow-700 mb-3">
                If data isn't syncing properly between systems:
              </p>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Check field mapping configuration</li>
                <li>• Verify data format compatibility</li>
                <li>• Review webhook delivery logs</li>
                <li>• Test with sample data</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-blue-800 font-semibold mb-2">ℹ️ Performance Issues</h4>
              <p className="text-base leading-relaxed text-blue-700 mb-3">
                If integrations are running slowly:
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Implement proper rate limiting</li>
                <li>• Use batch operations where possible</li>
                <li>• Cache frequently accessed data</li>
                <li>• Monitor API usage quotas</li>
              </ul>
            </div>
          </div>

          <h3>Integration Testing</h3>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Testing Checklist</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">✅ Pre-Launch Testing</h5>
                <ul className="text-sm space-y-1">
                  <li>• Test with sample data</li>
                  <li>• Verify all field mappings</li>
                  <li>• Check error handling</li>
                  <li>• Validate data formats</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">✅ Post-Launch Monitoring</h5>
                <ul className="text-sm space-y-1">
                  <li>• Monitor sync success rates</li>
                  <li>• Check for data discrepancies</li>
                  <li>• Review error logs regularly</li>
                  <li>• Test edge cases</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Getting Help</h3>
          <div className="bg-green-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-green-800 mb-3">Support Resources</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Technical Support:</strong> integrations@maruonline.co.za</div>
              <div><strong>API Documentation:</strong> docs.maruonline.co.za/api</div>
              <div><strong>Community Forum:</strong> community.maruonline.co.za</div>
              <div><strong>Response Time:</strong> Within 24 hours for integration issues</div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-blue-700">
                  <strong>Custom Integration Services:</strong> Need help with a complex integration? Our team offers custom integration development services for enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Ready to Integrate?</h3>
            <p className="text-base leading-relaxed text-blue-800 mb-4">
              Start connecting our assessment tools with your existing business systems to create seamless, automated workflows.
            </p>
            <div className="space-y-2">
              <a href="/knowledge/technical/api-reference" className="text-blue-600 hover:text-blue-800 underline block">
                → API Reference Documentation
              </a>
              <a href="/knowledge/admin-analytics/dashboard-overview" className="text-blue-600 hover:text-blue-800 underline block">
                → Admin Dashboard Guide
              </a>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline block">
                → Contact Integration Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}