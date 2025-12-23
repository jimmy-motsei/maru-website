import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import TableOfContents from '@/components/docs/TableOfContents';

export const metadata: Metadata = {
  title: 'Lead Generation Best Practices | Maru Online Knowledge Base',
  description: 'Master proven lead generation strategies and methodologies to maximize conversion rates and build a high-quality sales pipeline.',
  keywords: 'lead generation, best practices, conversion optimization, sales pipeline, lead qualification',
};

const tocItems = [
  { id: 'methodology', title: 'Core Methodology', level: 2 },
  { id: 'qualification', title: 'Lead Qualification Framework', level: 2 },
  { id: 'conversion', title: 'Conversion Optimization', level: 2 },
  { id: 'nurturing', title: 'Lead Nurturing Strategies', level: 2 },
  { id: 'measurement', title: 'Performance Measurement', level: 2 },
  { id: 'common-mistakes', title: 'Common Mistakes to Avoid', level: 2 },
];

export default function LeadGenerationBestPracticesPage() {
  return (
    <DocLayout
      title="Lead Generation Best Practices"
      description="Master proven strategies and methodologies for effective lead generation"
      readingTime="18 min read"
      category="Best Practices"
      lastUpdated="2024-12-19"
    >
      <TableOfContents items={tocItems} />

      <div className="prose prose-lg max-w-none">
        <section id="methodology">
          <h2>Core Methodology</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-blue-700">
                  <strong>The MARU Method:</strong> Measure → Attract → Retain → Upgrade. This proven framework ensures systematic lead generation success.
                </p>
              </div>
            </div>
          </div>

          <h3>1. Measure: Data-Driven Foundation</h3>
          <p className="text-base leading-relaxed">
            Before launching any lead generation campaign, establish baseline metrics and tracking systems:
          </p>
          
          <ul className="text-base leading-relaxed">
            <li><strong>Website Analytics:</strong> Track visitor behavior, conversion paths, and drop-off points</li>
            <li><strong>Lead Scoring:</strong> Implement behavioral and demographic scoring models</li>
            <li><strong>Attribution Tracking:</strong> Understand which channels drive highest-quality leads</li>
            <li><strong>Conversion Funnel Analysis:</strong> Identify bottlenecks in your sales process</li>
          </ul>

          <h3>2. Attract: Multi-Channel Approach</h3>
          <p className="text-base leading-relaxed">
            Diversify your lead generation channels to reduce dependency and maximize reach:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Inbound Channels</h4>
              <ul className="text-sm space-y-1">
                <li>• SEO-optimized content marketing</li>
                <li>• Social media engagement</li>
                <li>• Webinars and virtual events</li>
                <li>• Assessment tools and calculators</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Outbound Channels</h4>
              <ul className="text-sm space-y-1">
                <li>• Targeted email campaigns</li>
                <li>• LinkedIn outreach</li>
                <li>• Strategic partnerships</li>
                <li>• Industry event participation</li>
              </ul>
            </div>
          </div>

          <h3>3. Retain: Engagement Optimization</h3>
          <p className="text-base leading-relaxed">
            Keep prospects engaged throughout their buyer journey with valuable, relevant content and interactions.
          </p>

          <h3>4. Upgrade: Conversion Excellence</h3>
          <p className="text-base leading-relaxed">
            Systematically move qualified leads through your sales funnel with personalized experiences and strategic follow-up.
          </p>
        </section>

        <section id="qualification">
          <h2>Lead Qualification Framework</h2>
          
          <p className="text-base leading-relaxed">
            Not all leads are created equal. Use the BANT+ framework to prioritize your sales efforts:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h3>BANT+ Qualification Criteria</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-semibold text-green-700">Budget</h4>
                <p className="text-sm text-gray-600">Does the prospect have allocated budget for your solution?</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">Authority</h4>
                <p className="text-sm text-gray-600">Are you speaking with decision-makers or influencers?</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700">Need</h4>
                <p className="text-sm text-gray-600">Is there a clear business problem your solution addresses?</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700">Timeline</h4>
                <p className="text-sm text-gray-600">When does the prospect need to implement a solution?</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <h4 className="font-semibold text-red-700">+ Fit</h4>
              <p className="text-sm text-gray-600">Does the prospect align with your ideal customer profile?</p>
            </div>
          </div>

          <h3>Lead Scoring Model</h3>
          <p className="text-base leading-relaxed">
            Implement a points-based system to automatically prioritize leads:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Points</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Company Size</td>
                  <td className="border border-gray-300 px-4 py-2">10-50</td>
                  <td className="border border-gray-300 px-4 py-2">Enterprise (50), SMB (30), Startup (10)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Job Title</td>
                  <td className="border border-gray-300 px-4 py-2">5-40</td>
                  <td className="border border-gray-300 px-4 py-2">CEO (40), Manager (20), Individual (5)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Website Engagement</td>
                  <td className="border border-gray-300 px-4 py-2">1-25</td>
                  <td className="border border-gray-300 px-4 py-2">Multiple pages (25), Single page (5)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Assessment Completion</td>
                  <td className="border border-gray-300 px-4 py-2">30-50</td>
                  <td className="border border-gray-300 px-4 py-2">Full assessment (50), Partial (30)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="conversion">
          <h2>Conversion Optimization</h2>
          
          <h3>Landing Page Best Practices</h3>
          <p className="text-base leading-relaxed">
            Your landing pages are critical conversion points. Follow these proven principles:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Clear Value Proposition</h4>
              <p className="text-sm text-green-700">Communicate your unique value within 5 seconds of page load</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Minimal Form Fields</h4>
              <p className="text-sm text-blue-700">Request only essential information to reduce friction</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Social Proof</h4>
              <p className="text-sm text-purple-700">Include testimonials, logos, and trust indicators</p>
            </div>
          </div>

          <h3>Call-to-Action Optimization</h3>
          <ul className="text-base leading-relaxed">
            <li><strong>Action-Oriented Language:</strong> Use verbs like "Get," "Start," "Discover," "Calculate"</li>
            <li><strong>Urgency and Scarcity:</strong> "Limited time," "Free assessment," "Instant results"</li>
            <li><strong>Benefit-Focused:</strong> Emphasize what the user will gain, not what they'll give</li>
            <li><strong>Visual Prominence:</strong> Use contrasting colors and strategic placement</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-yellow-700">
                  <strong>A/B Testing Tip:</strong> Test one element at a time (headline, CTA button, form length) to identify what drives the highest conversion rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="nurturing">
          <h2>Lead Nurturing Strategies</h2>
          
          <p className="text-base leading-relaxed">
            Most leads aren't ready to buy immediately. Implement systematic nurturing to build relationships and guide prospects through their buyer journey.
          </p>

          <h3>Email Nurturing Sequences</h3>
          <div className="space-y-4 my-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Welcome Series (Days 1-7)</h4>
              <p className="text-sm text-gray-600">Introduce your company, set expectations, provide immediate value</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Educational Content (Weeks 2-4)</h4>
              <p className="text-sm text-gray-600">Share industry insights, best practices, and helpful resources</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Social Proof (Weeks 5-6)</h4>
              <p className="text-sm text-gray-600">Case studies, testimonials, and success stories</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Soft Pitch (Weeks 7-8)</h4>
              <p className="text-sm text-gray-600">Introduce your solutions with clear value propositions</p>
            </div>
          </div>

          <h3>Multi-Channel Nurturing</h3>
          <p className="text-base leading-relaxed">
            Don't rely solely on email. Create touchpoints across multiple channels:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>LinkedIn Engagement:</strong> Comment on posts, share relevant content, send connection requests</li>
            <li><strong>Retargeting Ads:</strong> Display targeted ads to website visitors across social platforms</li>
            <li><strong>Content Marketing:</strong> Create valuable blog posts, whitepapers, and webinars</li>
            <li><strong>Personal Outreach:</strong> Strategic phone calls and personalized messages</li>
          </ul>
        </section>

        <section id="measurement">
          <h2>Performance Measurement</h2>
          
          <h3>Key Metrics to Track</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
              <h4 className="font-semibold mb-3">Volume Metrics</h4>
              <ul className="text-sm space-y-2">
                <li>• Total leads generated</li>
                <li>• Leads by source/channel</li>
                <li>• Monthly lead growth rate</li>
                <li>• Cost per lead (CPL)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quality Metrics</h4>
              <ul className="text-sm space-y-2">
                <li>• Lead-to-opportunity conversion rate</li>
                <li>• Sales-qualified lead (SQL) rate</li>
                <li>• Average deal size</li>
                <li>• Customer lifetime value (CLV)</li>
              </ul>
            </div>
          </div>

          <h3>ROI Calculation</h3>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Lead Generation ROI Formula</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border">
              ROI = (Revenue from Leads - Cost of Lead Generation) / Cost of Lead Generation × 100
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Example: If you spend $10,000 on lead generation and generate $50,000 in revenue, your ROI is 400%.
            </p>
          </div>
        </section>

        <section id="common-mistakes">
          <h2>Common Mistakes to Avoid</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-red-800 font-semibold mb-2">❌ Focusing Only on Volume</h3>
              <p className="text-base leading-relaxed text-red-700">
                Generating thousands of unqualified leads wastes sales time and resources. Prioritize quality over quantity.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-red-800 font-semibold mb-2">❌ Neglecting Lead Nurturing</h3>
              <p className="text-base leading-relaxed text-red-700">
                80% of leads require 5+ touchpoints before converting. Don't abandon leads after the first interaction.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-red-800 font-semibold mb-2">❌ Poor Sales-Marketing Alignment</h3>
              <p className="text-base leading-relaxed text-red-700">
                Misaligned teams create friction and lost opportunities. Establish clear lead handoff processes and shared goals.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-red-800 font-semibold mb-2">❌ Ignoring Mobile Experience</h3>
              <p className="text-base leading-relaxed text-red-700">
                60%+ of web traffic is mobile. Ensure your forms and landing pages are mobile-optimized.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-green-700">
                  <strong>Success Tip:</strong> Implement these best practices gradually. Focus on one area at a time, measure results, and iterate based on data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Ready to Implement These Strategies?</h3>
            <p className="text-base leading-relaxed text-blue-800 mb-4">
              Use our assessment tools to identify opportunities in your current lead generation process and get personalized recommendations.
            </p>
            <div className="space-y-2">
              <a href="/knowledge/assessment-tools/lead-score-predictor" className="text-blue-600 hover:text-blue-800 underline block">
                → Lead Score Predictor Guide
              </a>
              <a href="/knowledge/assessment-tools/pipeline-leak-detector" className="text-blue-600 hover:text-blue-800 underline block">
                → Pipeline Leak Detector Guide
              </a>
              <a href="/knowledge/best-practices/assessment-optimization" className="text-blue-600 hover:text-blue-800 underline block">
                → Assessment Optimization Tips
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}