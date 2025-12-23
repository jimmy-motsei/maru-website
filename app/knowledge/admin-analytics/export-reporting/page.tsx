import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import TableOfContents from '@/components/docs/TableOfContents';

export const metadata: Metadata = {
  title: 'Export & Reporting | Maru Online Knowledge Base',
  description: 'Learn how to export data, create custom reports, and integrate analytics with external tools for comprehensive reporting.',
  keywords: 'data export, custom reports, analytics export, CSV export, reporting integration, data analysis',
};

const tocItems = [
  { id: 'overview', title: 'Export & Reporting Overview', level: 2 },
  { id: 'data-exports', title: 'Data Export Options', level: 2 },
  { id: 'custom-reports', title: 'Custom Report Generation', level: 2 },
  { id: 'scheduled-reports', title: 'Scheduled Reporting', level: 2 },
  { id: 'external-integration', title: 'External Tool Integration', level: 2 },
  { id: 'best-practices', title: 'Reporting Best Practices', level: 2 },
];

export default function ExportReportingPage() {
  return (
    <DocLayout
      title="Export & Reporting"
      description="Comprehensive guide to exporting data and creating custom reports for deeper analysis"
      readingTime="13 min read"
      category="Admin & Analytics"
      lastUpdated="2024-12-19"
    >
      <TableOfContents items={tocItems} />

      <div className="prose prose-lg max-w-none">
        <section id="overview">
          <h2>Export & Reporting Overview</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-blue-700">
                  <strong>Flexible Data Access:</strong> Export your lead generation data in multiple formats and create custom reports tailored to your specific business needs and stakeholder requirements.
                </p>
              </div>
            </div>
          </div>

          <h3>Export Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-700">📊 Data Types</h4>
              <ul className="text-sm space-y-1">
                <li>• Lead profiles and contact information</li>
                <li>• Assessment results and scores</li>
                <li>• Activity tracking and engagement</li>
                <li>• Performance metrics and analytics</li>
                <li>• Custom report data</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-700">📁 Export Formats</h4>
              <ul className="text-sm space-y-1">
                <li>• CSV (Excel-compatible)</li>
                <li>• JSON (API integration)</li>
                <li>• PDF (presentation-ready)</li>
                <li>• Excel (.xlsx) with formatting</li>
                <li>• Google Sheets (direct sync)</li>
              </ul>
            </div>
          </div>

          <h3>Reporting Philosophy</h3>
          <p className="text-base leading-relaxed">
            Our reporting system is designed around three key principles:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>Stakeholder-Specific:</strong> Different reports for different audiences</li>
            <li><strong>Actionable Insights:</strong> Focus on metrics that drive decisions</li>
            <li><strong>Automated Delivery:</strong> Regular, consistent reporting schedules</li>
          </ul>
        </section>

        <section id="data-exports">
          <h2>Data Export Options</h2>
          
          <h3>Quick Export Functions</h3>
          <p className="text-base leading-relaxed">
            Access common data exports directly from the dashboard:
          </p>

          <div className="space-y-6 my-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-green-700">Lead Data Export</h4>
              <p className="text-sm text-gray-600 mb-2">Export complete lead profiles with scores and activity history</p>
              <div className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium mb-1">Available Fields:</div>
                <div className="grid md:grid-cols-2 gap-2">
                  <ul className="space-y-1">
                    <li>• Email address</li>
                    <li>• Company name and website</li>
                    <li>• Industry and company size</li>
                    <li>• Lead score and quality rating</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Assessment completion status</li>
                    <li>• Last activity date</li>
                    <li>• HubSpot contact ID</li>
                    <li>• Custom tags and notes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-blue-700">Assessment Results Export</h4>
              <p className="text-sm text-gray-600 mb-2">Export detailed assessment data and AI-generated insights</p>
              <div className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium mb-1">Export Options:</div>
                <ul className="space-y-1">
                  <li>• Individual assessment results</li>
                  <li>• Bulk assessment data by date range</li>
                  <li>• Assessment type-specific exports</li>
                  <li>• Aggregated performance metrics</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-purple-700">Analytics Data Export</h4>
              <p className="text-sm text-gray-600 mb-2">Export performance metrics and trend data for analysis</p>
              <div className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium mb-1">Metrics Included:</div>
                <ul className="space-y-1">
                  <li>• Daily/weekly/monthly performance</li>
                  <li>• Conversion funnel data</li>
                  <li>• Lead source attribution</li>
                  <li>• Quality score distributions</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Custom Export Builder</h3>
          <div className="bg-blue-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-blue-800 mb-3">🔧 Build Custom Exports</h4>
            <p className="text-base leading-relaxed text-blue-700 mb-3">
              Create tailored exports with specific fields, filters, and date ranges:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 className="font-medium mb-2">1. Select Data</h5>
                <ul className="space-y-1">
                  <li>• Choose data tables</li>
                  <li>• Select specific fields</li>
                  <li>• Set date ranges</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">2. Apply Filters</h5>
                <ul className="space-y-1">
                  <li>• Lead score ranges</li>
                  <li>• Company size filters</li>
                  <li>• Activity status</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">3. Export Format</h5>
                <ul className="space-y-1">
                  <li>• Choose file format</li>
                  <li>• Set column headers</li>
                  <li>• Configure sorting</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Export Limitations & Guidelines</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Export Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Max Records</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Processing Time</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Quick Export</td>
                  <td className="border border-gray-300 px-4 py-2">1,000 records</td>
                  <td className="border border-gray-300 px-4 py-2">Instant</td>
                  <td className="border border-gray-300 px-4 py-2">24 hours</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Custom Export</td>
                  <td className="border border-gray-300 px-4 py-2">10,000 records</td>
                  <td className="border border-gray-300 px-4 py-2">1-5 minutes</td>
                  <td className="border border-gray-300 px-4 py-2">7 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Bulk Export</td>
                  <td className="border border-gray-300 px-4 py-2">50,000 records</td>
                  <td className="border border-gray-300 px-4 py-2">5-15 minutes</td>
                  <td className="border border-gray-300 px-4 py-2">30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="custom-reports">
          <h2>Custom Report Generation</h2>
          
          <h3>Report Templates</h3>
          <p className="text-base leading-relaxed">
            Choose from pre-built report templates or create custom reports from scratch:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">📊 Executive Summary</h4>
              <p className="text-sm text-green-700 mb-2">High-level performance overview for leadership</p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Key performance indicators</li>
                <li>• Month-over-month trends</li>
                <li>• ROI and cost metrics</li>
                <li>• Strategic recommendations</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">📈 Marketing Performance</h4>
              <p className="text-sm text-blue-700 mb-2">Detailed marketing metrics and channel analysis</p>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Lead source performance</li>
                <li>• Conversion funnel analysis</li>
                <li>• Campaign effectiveness</li>
                <li>• Quality score trends</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-3">🎯 Sales Pipeline</h4>
              <p className="text-sm text-purple-700 mb-2">Sales-focused lead quality and conversion data</p>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• Lead qualification rates</li>
                <li>• Assessment completion impact</li>
                <li>• Sales conversion metrics</li>
                <li>• Pipeline health indicators</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-3">🔧 Operational Report</h4>
              <p className="text-sm text-orange-700 mb-2">Technical performance and system health</p>
              <ul className="text-xs text-orange-600 space-y-1">
                <li>• Assessment tool usage</li>
                <li>• System performance metrics</li>
                <li>• User engagement patterns</li>
                <li>• Technical issue tracking</li>
              </ul>
            </div>
          </div>

          <h3>Custom Report Builder</h3>
          <div className="space-y-6 my-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold">Step 1: Define Report Scope</h4>
              <div className="bg-blue-50 rounded p-4 mt-2">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2">Time Period</h5>
                    <ul className="space-y-1">
                      <li>• Last 7/30/90 days</li>
                      <li>• Month-to-date</li>
                      <li>• Quarter-to-date</li>
                      <li>• Custom date range</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Data Scope</h5>
                    <ul className="space-y-1">
                      <li>• All leads vs. filtered subset</li>
                      <li>• Specific assessment types</li>
                      <li>• Lead source segments</li>
                      <li>• Quality score ranges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold">Step 2: Select Metrics & Visualizations</h4>
              <div className="bg-green-50 rounded p-4 mt-2">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2">Available Metrics</h5>
                    <ul className="space-y-1">
                      <li>• Lead volume and growth</li>
                      <li>• Quality scores and distributions</li>
                      <li>• Conversion rates by stage</li>
                      <li>• Assessment completion rates</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Chart Types</h5>
                    <ul className="space-y-1">
                      <li>• Line charts (trends)</li>
                      <li>• Bar charts (comparisons)</li>
                      <li>• Pie charts (distributions)</li>
                      <li>• Tables (detailed data)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold">Step 3: Configure Output & Delivery</h4>
              <div className="bg-purple-50 rounded p-4 mt-2">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2">Output Format</h5>
                    <ul className="space-y-1">
                      <li>• PDF (presentation-ready)</li>
                      <li>• Excel (data analysis)</li>
                      <li>• PowerPoint (stakeholder presentations)</li>
                      <li>• Web dashboard (interactive)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Delivery Options</h5>
                    <ul className="space-y-1">
                      <li>• One-time generation</li>
                      <li>• Scheduled delivery</li>
                      <li>• Email distribution</li>
                      <li>• Shared dashboard links</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="scheduled-reports">
          <h2>Scheduled Reporting</h2>
          
          <h3>Automated Report Delivery</h3>
          <p className="text-base leading-relaxed">
            Set up automated reports to ensure stakeholders receive regular updates without manual intervention:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-800 mb-2">📅 Daily Reports</h4>
              <p className="text-sm text-blue-700">Operational metrics and alerts</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-green-800 mb-2">📊 Weekly Reports</h4>
              <p className="text-sm text-green-700">Performance summaries and trends</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-800 mb-2">📈 Monthly Reports</h4>
              <p className="text-sm text-purple-700">Strategic analysis and planning</p>
            </div>
          </div>

          <h3>Report Schedule Configuration</h3>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Schedule Settings</h4>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Frequency Options</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Daily (weekdays only or all days)</li>
                    <li>• Weekly (specific day of week)</li>
                    <li>• Monthly (specific date or last day)</li>
                    <li>• Quarterly (end of quarter)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Delivery Settings</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Email recipients list</li>
                    <li>• Delivery time (timezone-aware)</li>
                    <li>• File format preferences</li>
                    <li>• Subject line customization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3>Report Distribution Lists</h3>
          <div className="space-y-4 my-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Executive Team</h4>
              <p className="text-sm text-gray-600">High-level summaries, ROI metrics, strategic insights</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Marketing Team</h4>
              <p className="text-sm text-gray-600">Detailed performance metrics, channel analysis, optimization opportunities</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Sales Team</h4>
              <p className="text-sm text-gray-600">Lead quality data, pipeline health, conversion metrics</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Operations Team</h4>
              <p className="text-sm text-gray-600">System performance, technical metrics, process efficiency</p>
            </div>
          </div>
        </section>

        <section id="external-integration">
          <h2>External Tool Integration</h2>
          
          <h3>Business Intelligence Platforms</h3>
          <p className="text-base leading-relaxed">
            Connect your lead generation data with popular BI and analytics platforms:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-700">📊 Google Data Studio</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Setup:</strong> Direct connector or CSV import</li>
                <li><strong>Benefits:</strong> Real-time dashboards, easy sharing</li>
                <li><strong>Use Cases:</strong> Executive dashboards, team reporting</li>
                <li><strong>Refresh:</strong> Daily automated updates</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-700">📈 Tableau</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Setup:</strong> API connection or data extracts</li>
                <li><strong>Benefits:</strong> Advanced visualizations, deep analysis</li>
                <li><strong>Use Cases:</strong> Complex analysis, predictive modeling</li>
                <li><strong>Refresh:</strong> Hourly or real-time updates</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-purple-700">📊 Power BI</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Setup:</strong> REST API connector</li>
                <li><strong>Benefits:</strong> Microsoft ecosystem integration</li>
                <li><strong>Use Cases:</strong> Enterprise reporting, Office 365 integration</li>
                <li><strong>Refresh:</strong> Scheduled or on-demand</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-orange-700">📋 Google Sheets</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Setup:</strong> Automated CSV sync or API</li>
                <li><strong>Benefits:</strong> Simple sharing, collaborative analysis</li>
                <li><strong>Use Cases:</strong> Quick analysis, team collaboration</li>
                <li><strong>Refresh:</strong> Daily or weekly updates</li>
              </ul>
            </div>
          </div>

          <h3>CRM Integration</h3>
          <div className="bg-blue-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-blue-800 mb-3">🔄 Bidirectional Data Sync</h4>
            <p className="text-base leading-relaxed text-blue-700 mb-3">
              Keep your CRM and lead generation data synchronized for comprehensive reporting:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium mb-2">From Maru to CRM</h5>
                <ul className="space-y-1">
                  <li>• New lead profiles</li>
                  <li>• Assessment scores and results</li>
                  <li>• Activity tracking data</li>
                  <li>• Quality score updates</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">From CRM to Maru</h5>
                <ul className="space-y-1">
                  <li>• Sales stage updates</li>
                  <li>• Deal closure information</li>
                  <li>• Contact enrichment data</li>
                  <li>• Custom field values</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>API Access for Custom Integration</h3>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">🔧 REST API Endpoints</h4>
            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-green-600">GET /api/reports/leads</span>
                <span className="text-gray-600">Export lead data</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">GET /api/reports/assessments</span>
                <span className="text-gray-600">Export assessment results</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">GET /api/reports/analytics</span>
                <span className="text-gray-600">Export performance metrics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-600">POST /api/reports/custom</span>
                <span className="text-gray-600">Generate custom report</span>
              </div>
            </div>
          </div>
        </section>

        <section id="best-practices">
          <h2>Reporting Best Practices</h2>
          
          <h3>Report Design Principles</h3>
          <div className="space-y-6 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-2">✅ Effective Reporting</h4>
              <ul className="text-base leading-relaxed text-green-700">
                <li><strong>Clear Objectives:</strong> Define what decisions the report should support</li>
                <li><strong>Audience-Specific:</strong> Tailor content and detail level to the audience</li>
                <li><strong>Actionable Insights:</strong> Include recommendations, not just data</li>
                <li><strong>Visual Hierarchy:</strong> Use charts and formatting to guide attention</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-2">❌ Common Mistakes</h4>
              <ul className="text-base leading-relaxed text-red-700">
                <li><strong>Data Overload:</strong> Including too many metrics without context</li>
                <li><strong>Inconsistent Timing:</strong> Irregular report delivery schedules</li>
                <li><strong>No Context:</strong> Showing numbers without benchmarks or trends</li>
                <li><strong>Static Analysis:</strong> Not updating reports based on feedback</li>
              </ul>
            </div>
          </div>

          <h3>Data Quality Guidelines</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-yellow-800 mb-2">🔍 Data Validation Checklist</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
              <div>
                <h5 className="font-medium mb-2">Before Export</h5>
                <ul className="space-y-1">
                  <li>• Verify date ranges are correct</li>
                  <li>• Check for data completeness</li>
                  <li>• Validate filter settings</li>
                  <li>• Review metric calculations</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">After Export</h5>
                <ul className="space-y-1">
                  <li>• Spot-check key numbers</li>
                  <li>• Verify totals and percentages</li>
                  <li>• Check for missing data</li>
                  <li>• Validate against dashboard</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Security & Privacy Considerations</h3>
          <ul className="text-base leading-relaxed">
            <li><strong>Data Access Controls:</strong> Limit export permissions to authorized users</li>
            <li><strong>PII Protection:</strong> Anonymize or exclude sensitive personal information</li>
            <li><strong>Secure Delivery:</strong> Use encrypted email or secure file sharing</li>
            <li><strong>Retention Policies:</strong> Set automatic deletion for exported files</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-blue-700">
                  <strong>Pro Tip:</strong> Start with simple reports and gradually add complexity based on stakeholder feedback. Regular review and iteration improve report effectiveness over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Master Your Data Exports</h3>
            <p className="text-base leading-relaxed text-blue-800 mb-4">
              Effective reporting transforms raw data into actionable business intelligence. Use these tools and best practices to create reports that drive decision-making.
            </p>
            <div className="space-y-2">
              <a href="/knowledge/admin-analytics/analytics-interpretation" className="text-blue-600 hover:text-blue-800 underline block">
                → Analytics Interpretation Guide
              </a>
              <a href="/knowledge/admin-analytics/dashboard-overview" className="text-blue-600 hover:text-blue-800 underline block">
                → Dashboard Overview
              </a>
              <a href="/knowledge/best-practices/integration-workflows" className="text-blue-600 hover:text-blue-800 underline block">
                → Integration Workflows
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}