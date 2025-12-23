import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import TableOfContents from '@/components/docs/TableOfContents';

export const metadata: Metadata = {
  title: 'Analytics Interpretation | Maru Online Knowledge Base',
  description: 'Learn how to interpret analytics data, understand key metrics, and derive actionable insights from your lead generation performance.',
  keywords: 'analytics interpretation, metrics analysis, lead generation analytics, performance insights, data analysis',
};

const tocItems = [
  { id: 'overview', title: 'Analytics Overview', level: 2 },
  { id: 'key-metrics', title: 'Key Metrics Explained', level: 2 },
  { id: 'dashboard-sections', title: 'Dashboard Sections', level: 2 },
  { id: 'trend-analysis', title: 'Trend Analysis', level: 2 },
  { id: 'actionable-insights', title: 'Actionable Insights', level: 2 },
  { id: 'troubleshooting', title: 'Troubleshooting Performance Issues', level: 2 },
];

export default function AnalyticsInterpretationPage() {
  return (
    <DocLayout
      title="Analytics Interpretation"
      description="Master the art of interpreting analytics data to optimize your lead generation performance"
      readingTime="15 min read"
      category="Admin & Analytics"
      lastUpdated="2024-12-19"
    >
      <TableOfContents items={tocItems} />

      <div className="prose prose-lg max-w-none">
        <section id="overview">
          <h2>Analytics Overview</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-blue-700">
                  <strong>Data-Driven Optimization:</strong> Understanding your analytics is crucial for optimizing lead generation performance. This guide helps you interpret metrics and turn data into actionable strategies.
                </p>
              </div>
            </div>
          </div>

          <h3>Analytics Philosophy</h3>
          <p className="text-base leading-relaxed">
            Our analytics system follows three core principles:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>Quality over Quantity:</strong> Focus on lead quality metrics, not just volume</li>
            <li><strong>Actionable Insights:</strong> Every metric should lead to a specific action</li>
            <li><strong>Continuous Improvement:</strong> Use data to iterate and optimize performance</li>
          </ul>

          <h3>Analytics Hierarchy</h3>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-green-800 mb-2">📊 Operational Metrics</h4>
              <p className="text-sm text-green-700">Daily performance indicators</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-800 mb-2">📈 Strategic Metrics</h4>
              <p className="text-sm text-blue-700">Long-term performance trends</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-800 mb-2">🎯 Outcome Metrics</h4>
              <p className="text-sm text-purple-700">Business impact measurements</p>
            </div>
          </div>
        </section>

        <section id="key-metrics">
          <h2>Key Metrics Explained</h2>
          
          <h3>Lead Generation Metrics</h3>
          <div className="space-y-6 my-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-green-700">Total Leads Generated</h4>
              <p className="text-sm text-gray-600 mb-2">The number of new leads captured in a given period</p>
              <div className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium mb-1">Interpretation:</div>
                <ul className="space-y-1">
                  <li>• <strong>Increasing:</strong> Good traffic and conversion optimization</li>
                  <li>• <strong>Decreasing:</strong> Check traffic sources and conversion rates</li>
                  <li>• <strong>Seasonal patterns:</strong> Normal for B2B (lower in summer/holidays)</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-blue-700">Lead Quality Score</h4>
              <p className="text-sm text-gray-600 mb-2">Average score of leads based on assessment results and behavior</p>
              <div className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium mb-1">Score Ranges:</div>
                <ul className="space-y-1">
                  <li>• <strong>80-100:</strong> High-quality leads ready for sales contact</li>
                  <li>• <strong>60-79:</strong> Medium-quality leads needing nurturing</li>
                  <li>• <strong>Below 60:</strong> Low-quality leads requiring education</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-purple-700">Assessment Completion Rate</h4>
              <p className="text-sm text-gray-600 mb-2">Percentage of visitors who complete assessments</p>
              <div className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium mb-1">Benchmarks:</div>
                <ul className="space-y-1">
                  <li>• <strong>Above 25%:</strong> Excellent - assessment is highly relevant</li>
                  <li>• <strong>15-25%:</strong> Good - normal range for B2B assessments</li>
                  <li>• <strong>Below 15%:</strong> Needs improvement - check UX and relevance</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Conversion Funnel Metrics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Funnel Stage</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Good Rate</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Action if Low</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Visitor → Lead</td>
                  <td className="border border-gray-300 px-4 py-2">Conversion Rate</td>
                  <td className="border border-gray-300 px-4 py-2">2-5%</td>
                  <td className="border border-gray-300 px-4 py-2">Optimize landing pages, CTAs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Lead → Assessment</td>
                  <td className="border border-gray-300 px-4 py-2">Engagement Rate</td>
                  <td className="border border-gray-300 px-4 py-2">15-30%</td>
                  <td className="border border-gray-300 px-4 py-2">Improve assessment UX, value prop</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Assessment → Qualified</td>
                  <td className="border border-gray-300 px-4 py-2">Qualification Rate</td>
                  <td className="border border-gray-300 px-4 py-2">40-60%</td>
                  <td className="border border-gray-300 px-4 py-2">Review targeting, lead sources</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Qualified → Opportunity</td>
                  <td className="border border-gray-300 px-4 py-2">Sales Conversion</td>
                  <td className="border border-gray-300 px-4 py-2">20-40%</td>
                  <td className="border border-gray-300 px-4 py-2">Improve sales process, follow-up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="dashboard-sections">
          <h2>Dashboard Sections</h2>
          
          <h3>Performance Overview</h3>
          <p className="text-base leading-relaxed">
            The main dashboard provides a high-level view of your lead generation performance:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">📊 Key Performance Indicators</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Total leads this month vs. last month</li>
                <li>• Average lead quality score</li>
                <li>• Assessment completion rate</li>
                <li>• Top-performing lead sources</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">📈 Trend Indicators</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 7-day and 30-day growth rates</li>
                <li>• Quality score trends</li>
                <li>• Seasonal performance patterns</li>
                <li>• Channel performance changes</li>
              </ul>
            </div>
          </div>

          <h3>Assessment Analytics</h3>
          <div className="space-y-4 my-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Lead Score Predictor Analytics</h4>
              <p className="text-sm text-gray-600">Track website analysis performance and lead quality predictions</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Pipeline Leak Detector Analytics</h4>
              <p className="text-sm text-gray-600">Monitor pipeline health assessments and leak identification accuracy</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Proposal Accelerator Analytics</h4>
              <p className="text-sm text-gray-600">Measure proposal generation usage and success rates</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Tech Stack Auditor Analytics</h4>
              <p className="text-sm text-gray-600">Analyze tool audit completions and cost savings identified</p>
            </div>
          </div>

          <h3>Lead Source Performance</h3>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Understanding Source Attribution</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">High-Performing Sources</h5>
                <ul className="text-sm space-y-1">
                  <li>• High volume + High quality scores</li>
                  <li>• Strong assessment completion rates</li>
                  <li>• Good sales conversion rates</li>
                  <li>• Low cost per qualified lead</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Underperforming Sources</h5>
                <ul className="text-sm space-y-1">
                  <li>• High volume + Low quality scores</li>
                  <li>• Poor engagement with assessments</li>
                  <li>• Low sales conversion rates</li>
                  <li>• High cost per qualified lead</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="trend-analysis">
          <h2>Trend Analysis</h2>
          
          <h3>Identifying Patterns</h3>
          <p className="text-base leading-relaxed">
            Look for these key patterns in your analytics data:
          </p>

          <div className="space-y-6 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-2">📈 Positive Trends</h4>
              <ul className="text-base leading-relaxed text-green-700">
                <li><strong>Increasing Lead Quality:</strong> Higher average scores over time</li>
                <li><strong>Improving Conversion Rates:</strong> Better funnel performance</li>
                <li><strong>Growing Engagement:</strong> More assessment completions</li>
                <li><strong>Source Optimization:</strong> Better performance from top channels</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-2">📉 Warning Signs</h4>
              <ul className="text-base leading-relaxed text-red-700">
                <li><strong>Declining Lead Quality:</strong> Lower average scores</li>
                <li><strong>Dropping Conversion Rates:</strong> Funnel performance issues</li>
                <li><strong>Reduced Engagement:</strong> Fewer assessment completions</li>
                <li><strong>Source Degradation:</strong> Previously good sources performing poorly</li>
              </ul>
            </div>
          </div>

          <h3>Seasonal Considerations</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-yellow-800 mb-2">🗓️ B2B Seasonal Patterns</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
              <div>
                <h5 className="font-medium mb-2">High Activity Periods</h5>
                <ul className="space-y-1">
                  <li>• January-March: Budget planning season</li>
                  <li>• September-November: Q4 push</li>
                  <li>• Mid-week: Tuesday-Thursday peaks</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Low Activity Periods</h5>
                <ul className="space-y-1">
                  <li>• June-August: Summer slowdown</li>
                  <li>• December: Holiday season</li>
                  <li>• Weekends: Minimal B2B activity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="actionable-insights">
          <h2>Actionable Insights</h2>
          
          <h3>Optimization Strategies</h3>
          <p className="text-base leading-relaxed">
            Turn your analytics insights into specific optimization actions:
          </p>

          <div className="space-y-6 my-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-blue-700">Low Conversion Rates</h4>
              <div className="bg-blue-50 rounded p-4 mt-2">
                <h5 className="font-medium mb-2">Diagnostic Questions:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Are visitors finding the right landing pages?</li>
                  <li>• Is the value proposition clear and compelling?</li>
                  <li>• Are forms too long or complex?</li>
                  <li>• Is the assessment process intuitive?</li>
                </ul>
                <h5 className="font-medium mb-2 mt-3">Action Steps:</h5>
                <ul className="text-sm space-y-1">
                  <li>• A/B test different headlines and CTAs</li>
                  <li>• Simplify forms and reduce friction</li>
                  <li>• Add social proof and testimonials</li>
                  <li>• Improve mobile experience</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-green-700">Low Lead Quality</h4>
              <div className="bg-green-50 rounded p-4 mt-2">
                <h5 className="font-medium mb-2">Diagnostic Questions:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Are we targeting the right audience?</li>
                  <li>• Are lead sources aligned with ICP?</li>
                  <li>• Is messaging attracting wrong prospects?</li>
                  <li>• Are qualification criteria too loose?</li>
                </ul>
                <h5 className="font-medium mb-2 mt-3">Action Steps:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Refine targeting parameters</li>
                  <li>• Update messaging to be more specific</li>
                  <li>• Add qualifying questions to forms</li>
                  <li>• Focus budget on high-quality sources</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-purple-700">Poor Assessment Engagement</h4>
              <div className="bg-purple-50 rounded p-4 mt-2">
                <h5 className="font-medium mb-2">Diagnostic Questions:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Is the assessment value clear upfront?</li>
                  <li>• Are questions relevant and engaging?</li>
                  <li>• Is the process too long or complex?</li>
                  <li>• Are results compelling enough?</li>
                </ul>
                <h5 className="font-medium mb-2 mt-3">Action Steps:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Improve assessment introduction</li>
                  <li>• Reduce number of questions</li>
                  <li>• Add progress indicators</li>
                  <li>• Enhance results presentation</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Performance Benchmarking</h3>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Industry Benchmarks</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">Metric</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Good</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Excellent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Website Conversion Rate</td>
                    <td className="border border-gray-300 px-3 py-2">2-3%</td>
                    <td className="border border-gray-300 px-3 py-2">5%+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Assessment Completion</td>
                    <td className="border border-gray-300 px-3 py-2">15-25%</td>
                    <td className="border border-gray-300 px-3 py-2">30%+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Lead-to-Opportunity</td>
                    <td className="border border-gray-300 px-3 py-2">20-30%</td>
                    <td className="border border-gray-300 px-3 py-2">40%+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="troubleshooting">
          <h2>Troubleshooting Performance Issues</h2>
          
          <h3>Common Issues & Solutions</h3>
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-red-800 font-semibold mb-2">❌ Sudden Drop in Lead Volume</h4>
              <div className="text-base leading-relaxed text-red-700 mb-3">
                <strong>Possible Causes:</strong>
              </div>
              <ul className="text-sm text-red-700 space-y-1 mb-3">
                <li>• Technical issues with forms or tracking</li>
                <li>• Changes to website or landing pages</li>
                <li>• Ad campaign paused or budget exhausted</li>
                <li>• Seasonal factors or market changes</li>
              </ul>
              <div className="text-base leading-relaxed text-red-700 mb-2">
                <strong>Investigation Steps:</strong>
              </div>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Check form functionality and submission rates</li>
                <li>• Review recent website changes</li>
                <li>• Verify ad campaigns are active</li>
                <li>• Compare with industry trends</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-yellow-800 font-semibold mb-2">⚠️ Declining Lead Quality</h4>
              <div className="text-base leading-relaxed text-yellow-700 mb-3">
                <strong>Possible Causes:</strong>
              </div>
              <ul className="text-sm text-yellow-700 space-y-1 mb-3">
                <li>• Targeting parameters too broad</li>
                <li>• New traffic sources with poor quality</li>
                <li>• Changes to messaging or positioning</li>
                <li>• Competitor activity affecting market</li>
              </ul>
              <div className="text-base leading-relaxed text-yellow-700 mb-2">
                <strong>Investigation Steps:</strong>
              </div>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Analyze lead quality by source</li>
                <li>• Review targeting and audience settings</li>
                <li>• Check for new traffic sources</li>
                <li>• Audit messaging and value propositions</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-blue-800 font-semibold mb-2">ℹ️ Inconsistent Performance</h4>
              <div className="text-base leading-relaxed text-blue-700 mb-3">
                <strong>Possible Causes:</strong>
              </div>
              <ul className="text-sm text-blue-700 space-y-1 mb-3">
                <li>• A/B tests affecting results</li>
                <li>• Seasonal or cyclical patterns</li>
                <li>• External factors (events, news)</li>
                <li>• Technical issues intermittently occurring</li>
              </ul>
              <div className="text-base leading-relaxed text-blue-700 mb-2">
                <strong>Investigation Steps:</strong>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Look for patterns in timing</li>
                <li>• Check for ongoing tests or experiments</li>
                <li>• Monitor external factors and events</li>
                <li>• Set up alerts for significant changes</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-green-700">
                  <strong>Pro Tip:</strong> Set up automated alerts for significant changes in key metrics. This helps you identify and address issues quickly before they impact overall performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Master Your Analytics</h3>
            <p className="text-base leading-relaxed text-blue-800 mb-4">
              Regular analytics review and interpretation is key to optimizing your lead generation performance. Use these insights to make data-driven decisions.
            </p>
            <div className="space-y-2">
              <a href="/knowledge/admin-analytics/dashboard-overview" className="text-blue-600 hover:text-blue-800 underline block">
                → Dashboard Overview Guide
              </a>
              <a href="/knowledge/admin-analytics/export-reporting" className="text-blue-600 hover:text-blue-800 underline block">
                → Export & Reporting Guide
              </a>
              <a href="/knowledge/best-practices/lead-generation-best-practices" className="text-blue-600 hover:text-blue-800 underline block">
                → Lead Generation Best Practices
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}