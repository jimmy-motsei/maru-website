import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Maru Lead Generation Engine',
  description: 'Common questions and answers about the Maru Lead Generation Engine. Find quick solutions to common issues.',
};

const faqCategories = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'What is the Maru Lead Generation Engine?',
        a: 'The Maru Lead Generation Engine is an AI-powered platform that helps businesses identify, capture, and convert high-quality leads through intelligent assessments. It includes four specialized tools: Lead Score Predictor, Pipeline Leak Detector, Proposal Accelerator, and Tech Stack Auditor.'
      },
      {
        q: 'How long does it take to complete an assessment?',
        a: 'Most assessments take 2-3 minutes to fill out and 30-60 seconds to process. The AI analysis happens in real-time, so you get instant results.'
      },
      {
        q: 'Do I need to create an account?',
        a: 'No account creation is required for basic assessments. Simply provide your email address and company information to get started. Your results are automatically saved and accessible through the admin dashboard.'
      },
      {
        q: 'Is there a cost to use the assessment tools?',
        a: 'The basic assessment tools are free to use. Advanced features like detailed analytics, API access, and premium integrations may require a subscription in the future.'
      }
    ]
  },
  {
    title: 'Assessment Tools',
    questions: [
      {
        q: 'Which assessment tool should I start with?',
        a: 'We recommend starting with the Lead Score Predictor as it provides a comprehensive overview of your lead generation readiness. If you have existing sales data, the Pipeline Leak Detector can provide immediate insights into revenue opportunities.'
      },
      {
        q: 'How accurate are the AI-generated recommendations?',
        a: 'Our AI system uses Google Gemini and is trained on industry best practices and thousands of successful lead generation campaigns. Recommendations are tailored to your specific industry and company size, with typical accuracy rates above 85%.'
      },
      {
        q: 'Can I run multiple assessments for the same company?',
        a: 'Yes! Each assessment tool provides different insights. Running multiple assessments gives you a comprehensive view of your lead generation potential. You can also re-run assessments after implementing changes to track progress.'
      },
      {
        q: 'What data do I need for the Pipeline Leak Detector?',
        a: 'You need a CSV file with your sales pipeline data including deal stages, amounts, dates, and status. The system accepts various CSV formats and can work with data from most CRM systems like HubSpot, Salesforce, or Pipedrive.'
      }
    ]
  },
  {
    title: 'Results & Analytics',
    questions: [
      {
        q: 'How do I interpret my lead score?',
        a: 'Scores range from 0-100: 80-100 (Excellent), 60-79 (Good), 40-59 (Fair), 0-39 (Needs Work). Each score includes factor breakdowns showing specific areas for improvement like website quality, tech stack maturity, content quality, and SEO readiness.'
      },
      {
        q: 'Can I export my assessment results?',
        a: 'Yes, you can export results from the admin dashboard in multiple formats including PDF reports, CSV data, and JSON for API integration. All historical assessments are saved and accessible.'
      },
      {
        q: 'How often should I re-run assessments?',
        a: 'We recommend re-running assessments monthly or after implementing significant changes to track progress. The Lead Score Predictor is particularly useful for monitoring improvements over time.'
      },
      {
        q: 'What happens to my data?',
        a: 'All data is securely stored in our encrypted database and never shared with third parties. You maintain full ownership of your data and can request deletion at any time. We comply with GDPR and other privacy regulations.'
      }
    ]
  },
  {
    title: 'Technical & Integration',
    questions: [
      {
        q: 'Can I integrate the assessments into my website?',
        a: 'Yes! We provide REST APIs for all assessment tools. You can embed assessments directly into your website or integrate them with your existing marketing automation platform. Full API documentation is available in our technical docs.'
      },
      {
        q: 'What CRM systems do you integrate with?',
        a: 'We currently support HubSpot integration with plans to add Salesforce, Pipedrive, and other major CRM systems. The API allows custom integrations with any system that supports webhooks or REST APIs.'
      },
      {
        q: 'Is there an API rate limit?',
        a: 'Yes, to ensure system stability: Assessment API (10 requests/minute), Leads API (60 requests/minute), Analytics API (30 requests/minute). Contact us for higher limits if needed for enterprise use.'
      },
      {
        q: 'Can I white-label the assessment tools?',
        a: 'White-labeling options are available for enterprise customers. This includes custom branding, domain hosting, and API-only access for complete integration into your platform.'
      }
    ]
  },
  {
    title: 'Troubleshooting',
    questions: [
      {
        q: 'My assessment is taking too long to process',
        a: 'Assessments typically complete in 30-60 seconds. If processing takes longer than 2 minutes, try refreshing the page or contact support. Check your internet connection and ensure JavaScript is enabled.'
      },
      {
        q: 'I\'m getting a "Rate limit exceeded" error',
        a: 'You\'ve exceeded the API rate limit. Wait a few minutes before trying again. If you need higher limits for legitimate use, contact our support team to discuss options.'
      },
      {
        q: 'The website analysis seems inaccurate',
        a: 'Ensure you\'ve provided the correct website URL (including https://). The AI analyzes publicly accessible content, so private or password-protected sites may not be fully analyzed. Contact support if issues persist.'
      },
      {
        q: 'I can\'t access the admin dashboard',
        a: 'Verify you\'re using the correct login credentials. The default admin access is: Email: hello@maruonline.com, Password: MaruAdmin2024!. Clear your browser cache if login issues persist.'
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <DocLayout
      title="Frequently Asked Questions"
      description="Common questions and answers about the Maru Lead Generation Engine. Find quick solutions to common issues."
      category="FAQ & Support"
      readTime="12 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'FAQ & Support', href: '/knowledge/faq-support' },
        { label: 'FAQ', href: '/knowledge/faq-support/faq' },
      ]}
    >
      <Callout type="info" title="Quick Help">
        <p>
          Can't find what you're looking for? Try our <a href="/knowledge" className="text-accent hover:underline">knowledge base search</a> or 
          <a href="/contact" className="text-accent hover:underline ml-1">contact our support team</a> directly.
        </p>
      </Callout>

      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            {category.title}
          </h2>
          
          <div className="space-y-4">
            {category.questions.map((faq, faqIndex) => (
              <details key={faqIndex} className="border border-slate-200 rounded-lg p-6 hover:border-accent/50 transition-colors">
                <summary className="font-semibold text-slate-900 cursor-pointer hover:text-accent transition-colors">
                  {faq.q}
                </summary>
                <div className="mt-4 text-slate-700 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 bg-gradient-to-r from-accent to-blue-600 rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
        <p className="text-blue-100 mb-6">
          Our support team is here to help you get the most out of your lead generation engine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
          >
            Contact Support
          </a>
          <a
            href="/knowledge"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Browse Documentation
          </a>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 border border-slate-200 rounded-lg">
          <div className="text-2xl mb-2">📧</div>
          <h3 className="font-semibold mb-2">Email Support</h3>
          <p className="text-slate-600 text-sm">
            Get detailed help via email
          </p>
          <a href="mailto:support@maruonline.co.za" className="text-accent hover:underline text-sm">
            support@maruonline.co.za
          </a>
        </div>
        
        <div className="text-center p-6 border border-slate-200 rounded-lg">
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-semibold mb-2">Documentation</h3>
          <p className="text-slate-600 text-sm">
            Comprehensive guides and tutorials
          </p>
          <a href="/knowledge" className="text-accent hover:underline text-sm">
            Browse Knowledge Base
          </a>
        </div>
        
        <div className="text-center p-6 border border-slate-200 rounded-lg">
          <div className="text-2xl mb-2">🎥</div>
          <h3 className="font-semibold mb-2">Video Tutorials</h3>
          <p className="text-slate-600 text-sm">
            Step-by-step video guides
          </p>
          <a href="/knowledge/faq-support/video-tutorials" className="text-accent hover:underline text-sm">
            Watch Tutorials
          </a>
        </div>
      </div>
    </DocLayout>
  );
}