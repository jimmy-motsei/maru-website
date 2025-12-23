import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import TableOfContents from '@/components/docs/TableOfContents';

export const metadata: Metadata = {
  title: 'Assessment Optimization | Maru Online Knowledge Base',
  description: 'Learn how to optimize your assessment results and get more accurate insights from our AI-powered tools.',
  keywords: 'assessment optimization, lead scoring, pipeline analysis, proposal generation, tech stack audit',
};

const tocItems = [
  { id: 'preparation', title: 'Pre-Assessment Preparation', level: 2 },
  { id: 'data-quality', title: 'Data Quality Guidelines', level: 2 },
  { id: 'tool-specific', title: 'Tool-Specific Optimization', level: 2 },
  { id: 'interpretation', title: 'Results Interpretation', level: 2 },
  { id: 'action-planning', title: 'Action Planning', level: 2 },
  { id: 'troubleshooting', title: 'Common Issues & Solutions', level: 2 },
];

export default function AssessmentOptimizationPage() {
  return (
    <DocLayout
      title="Assessment Optimization"
      description="Maximize the value and accuracy of your assessment results"
      readingTime="14 min read"
      category="Best Practices"
      lastUpdated="2024-12-19"
    >
      <TableOfContents items={tocItems} />

      <div className="prose prose-lg max-w-none">
        <section id="preparation">
          <h2>Pre-Assessment Preparation</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-blue-700">
                  <strong>Key Principle:</strong> The quality of your assessment results directly correlates with the quality of input data. Proper preparation ensures actionable insights.
                </p>
              </div>
            </div>
          </div>

          <h3>Gather Required Information</h3>
          <p className="text-base leading-relaxed">
            Before starting any assessment, collect the necessary data and documentation:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-700">Company Information</h4>
              <ul className="text-sm space-y-1">
                <li>• Complete website URL</li>
                <li>• Industry classification</li>
                <li>• Company size (employees)</li>
                <li>• Annual revenue range</li>
                <li>• Target market details</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-700">Process Documentation</h4>
              <ul className="text-sm space-y-1">
                <li>• Current sales process</li>
                <li>• Lead generation methods</li>
                <li>• CRM data exports</li>
                <li>• Tool usage patterns</li>
                <li>• Team structure</li>
              </ul>
            </div>
          </div>

          <h3>Set Clear Objectives</h3>
          <p className="text-base leading-relaxed">
            Define what you want to achieve with each assessment:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>Lead Score Predictor:</strong> Identify high-potential prospects and improve qualification</li>
            <li><strong>Pipeline Leak Detector:</strong> Find bottlenecks and optimize conversion rates</li>
            <li><strong>Proposal Accelerator:</strong> Streamline proposal creation and improve win rates</li>
            <li><strong>Tech Stack Auditor:</strong> Reduce costs and eliminate redundancies</li>
          </ul>
        </section>

        <section id="data-quality">
          <h2>Data Quality Guidelines</h2>
          
          <h3>Data Completeness Standards</h3>
          <p className="text-base leading-relaxed">
            Incomplete data leads to inaccurate assessments. Follow these completeness thresholds:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Assessment Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Minimum Data Required</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Optimal Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Lead Score Predictor</td>
                  <td className="border border-gray-300 px-4 py-2">Website URL + Industry</td>
                  <td className="border border-gray-300 px-4 py-2">+ Company size + Revenue + Contact info</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Pipeline Leak Detector</td>
                  <td className="border border-gray-300 px-4 py-2">3+ months of pipeline data</td>
                  <td className="border border-gray-300 px-4 py-2">12+ months with stage timestamps</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Proposal Accelerator</td>
                  <td className="border border-gray-300 px-4 py-2">Project scope + Budget range</td>
                  <td className="border border-gray-300 px-4 py-2">+ Timeline + Stakeholders + Requirements</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Tech Stack Auditor</td>
                  <td className="border border-gray-300 px-4 py-2">5+ tools with costs</td>
                  <td className="border border-gray-300 px-4 py-2">Complete stack + usage patterns + integrations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Data Accuracy Checklist</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Before Submitting Data:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">✅ Verify Information</h5>
                <ul className="text-sm space-y-1">
                  <li>• URLs are accessible and current</li>
                  <li>• Numbers are accurate and recent</li>
                  <li>• Categories match your business</li>
                  <li>• Contact details are up-to-date</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">✅ Clean Your Data</h5>
                <ul className="text-sm space-y-1">
                  <li>• Remove duplicates and test entries</li>
                  <li>• Standardize formats and naming</li>
                  <li>• Fill in missing required fields</li>
                  <li>• Update outdated information</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tool-specific">
          <h2>Tool-Specific Optimization</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-green-700">Lead Score Predictor Optimization</h3>
              
              <h4>Website Preparation</h4>
              <ul className="text-base leading-relaxed">
                <li><strong>Clear Value Proposition:</strong> Ensure your homepage clearly states what you do</li>
                <li><strong>Contact Information:</strong> Make it easy to find your contact details</li>
                <li><strong>About Page:</strong> Include team information and company background</li>
                <li><strong>Case Studies:</strong> Showcase client success stories and testimonials</li>
              </ul>

              <div className="bg-green-50 rounded-lg p-4 my-4">
                <h5 className="font-semibold text-green-800 mb-2">Pro Tip: Website Audit</h5>
                <p className="text-sm text-green-700">
                  Run your website through our assessment multiple times after making improvements to track score changes.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-blue-700">Pipeline Leak Detector Optimization</h3>
              
              <h4>Data Export Best Practices</h4>
              <ul className="text-base leading-relaxed">
                <li><strong>Include All Stages:</strong> Export data from all pipeline stages, not just closed deals</li>
                <li><strong>Timestamp Accuracy:</strong> Ensure stage change dates are accurate</li>
                <li><strong>Deal Values:</strong> Include realistic deal values for accurate analysis</li>
                <li><strong>Lead Sources:</strong> Tag deals with their original lead source</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4 my-4">
                <h5 className="font-semibold text-blue-800 mb-2">CSV Format Requirements</h5>
                <p className="text-sm text-blue-700">
                  Required columns: Deal Name, Stage, Date Created, Date Modified, Deal Value, Lead Source
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-purple-700">Proposal Accelerator Optimization</h3>
              
              <h4>Input Quality Guidelines</h4>
              <ul className="text-base leading-relaxed">
                <li><strong>Detailed Requirements:</strong> Provide specific, measurable project requirements</li>
                <li><strong>Stakeholder Information:</strong> Include decision-maker details and influence levels</li>
                <li><strong>Budget Transparency:</strong> Be honest about budget constraints and flexibility</li>
                <li><strong>Timeline Realism:</strong> Set achievable deadlines with buffer time</li>
              </ul>

              <div className="bg-purple-50 rounded-lg p-4 my-4">
                <h5 className="font-semibold text-purple-800 mb-2">Question Preparation</h5>
                <p className="text-sm text-purple-700">
                  Review the 10 strategic questions beforehand and gather supporting documentation.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-orange-700">Tech Stack Auditor Optimization</h3>
              
              <h4>Tool Inventory Preparation</h4>
              <ul className="text-base leading-relaxed">
                <li><strong>Complete List:</strong> Include all tools, even free ones or rarely used applications</li>
                <li><strong>Accurate Costs:</strong> Use actual monthly/annual costs, not list prices</li>
                <li><strong>Usage Patterns:</strong> Document how frequently each tool is actually used</li>
                <li><strong>Integration Mapping:</strong> Note which tools connect to each other</li>
              </ul>

              <div className="bg-orange-50 rounded-lg p-4 my-4">
                <h5 className="font-semibold text-orange-800 mb-2">Hidden Costs</h5>
                <p className="text-sm text-orange-700">
                  Include training time, setup costs, and maintenance overhead in your calculations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="interpretation">
          <h2>Results Interpretation</h2>
          
          <h3>Understanding Score Ranges</h3>
          <p className="text-base leading-relaxed">
            Each assessment uses different scoring methodologies. Here's how to interpret results:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Score Categories</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  <span className="text-sm">0-40: Critical Issues</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                  <span className="text-sm">41-70: Needs Improvement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="text-sm">71-100: Good Performance</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Recommendation Priority</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-red-600 font-bold mr-2">🔴</span>
                  <span className="text-sm">High Priority (Immediate action)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-600 font-bold mr-2">🟡</span>
                  <span className="text-sm">Medium Priority (Next 30 days)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">🟢</span>
                  <span className="text-sm">Low Priority (Future optimization)</span>
                </div>
              </div>
            </div>
          </div>

          <h3>Contextual Analysis</h3>
          <p className="text-base leading-relaxed">
            Don't rely solely on scores. Consider these contextual factors:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>Industry Benchmarks:</strong> Compare results to industry standards</li>
            <li><strong>Company Stage:</strong> Startups vs. established companies have different optimal ranges</li>
            <li><strong>Seasonal Factors:</strong> Some metrics fluctuate based on business cycles</li>
            <li><strong>Resource Constraints:</strong> Prioritize recommendations based on available resources</li>
          </ul>
        </section>

        <section id="action-planning">
          <h2>Action Planning</h2>
          
          <h3>Prioritization Framework</h3>
          <p className="text-base leading-relaxed">
            Use the Impact vs. Effort matrix to prioritize recommendations:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <div className="grid grid-cols-2 gap-4 h-64">
              <div className="bg-green-100 border-2 border-green-300 rounded p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-green-800">Quick Wins</div>
                  <div className="text-sm text-green-600">High Impact, Low Effort</div>
                  <div className="text-xs mt-2">Start Here!</div>
                </div>
              </div>
              <div className="bg-blue-100 border-2 border-blue-300 rounded p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-blue-800">Major Projects</div>
                  <div className="text-sm text-blue-600">High Impact, High Effort</div>
                  <div className="text-xs mt-2">Plan Carefully</div>
                </div>
              </div>
              <div className="bg-yellow-100 border-2 border-yellow-300 rounded p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-yellow-800">Fill-ins</div>
                  <div className="text-sm text-yellow-600">Low Impact, Low Effort</div>
                  <div className="text-xs mt-2">When Time Permits</div>
                </div>
              </div>
              <div className="bg-red-100 border-2 border-red-300 rounded p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-red-800">Avoid</div>
                  <div className="text-sm text-red-600">Low Impact, High Effort</div>
                  <div className="text-xs mt-2">Skip These</div>
                </div>
              </div>
            </div>
          </div>

          <h3>Implementation Timeline</h3>
          <div className="space-y-4 my-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Week 1-2: Quick Wins</h4>
              <p className="text-sm text-gray-600">Implement high-impact, low-effort recommendations</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Month 1-3: Major Projects</h4>
              <p className="text-sm text-gray-600">Plan and execute high-impact initiatives requiring significant resources</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Ongoing: Monitoring & Optimization</h4>
              <p className="text-sm text-gray-600">Track progress and run follow-up assessments</p>
            </div>
          </div>
        </section>

        <section id="troubleshooting">
          <h2>Common Issues & Solutions</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-red-800 font-semibold mb-2">❌ Low Assessment Scores</h3>
              <p className="text-base leading-relaxed text-red-700 mb-3">
                If your scores are consistently low across assessments:
              </p>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Verify data accuracy and completeness</li>
                <li>• Check if your website/processes align with best practices</li>
                <li>• Consider if you're in a transitional period</li>
                <li>• Review industry-specific factors that might affect scoring</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-yellow-800 font-semibold mb-2">⚠️ Inconsistent Results</h3>
              <p className="text-base leading-relaxed text-yellow-700 mb-3">
                If you get different results for similar inputs:
              </p>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Ensure you're using the same data format each time</li>
                <li>• Check for recent changes to your website or processes</li>
                <li>• Verify that all required fields are completed</li>
                <li>• Allow 24-48 hours between assessments for data processing</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-blue-800 font-semibold mb-2">ℹ️ Generic Recommendations</h3>
              <p className="text-base leading-relaxed text-blue-700 mb-3">
                If recommendations seem too generic:
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Provide more detailed input information</li>
                <li>• Include industry-specific context in text fields</li>
                <li>• Use the additional comments sections</li>
                <li>• Run multiple assessments with different focus areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-green-700">
                  <strong>Need Help?</strong> If you're still experiencing issues, contact our support team with your assessment ID and specific questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Ready to Optimize Your Assessments?</h3>
            <p className="text-base leading-relaxed text-blue-800 mb-4">
              Apply these optimization techniques to get more accurate and actionable insights from our assessment tools.
            </p>
            <div className="space-y-2">
              <a href="/knowledge/assessment-tools/lead-score-predictor" className="text-blue-600 hover:text-blue-800 underline block">
                → Start with Lead Score Predictor
              </a>
              <a href="/knowledge/best-practices/lead-generation-best-practices" className="text-blue-600 hover:text-blue-800 underline block">
                → Review Lead Generation Best Practices
              </a>
              <a href="/knowledge/faq-support/faq" className="text-blue-600 hover:text-blue-800 underline block">
                → Check FAQ for Common Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}