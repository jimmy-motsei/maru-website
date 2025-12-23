import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import TableOfContents from '@/components/docs/TableOfContents';

export const metadata: Metadata = {
  title: 'Data Privacy & Security | Maru Online Knowledge Base',
  description: 'Learn about our data privacy practices, security measures, and compliance standards for protecting your business information.',
  keywords: 'data privacy, security, GDPR, POPIA, compliance, data protection, encryption',
};

const tocItems = [
  { id: 'overview', title: 'Privacy & Security Overview', level: 2 },
  { id: 'data-collection', title: 'Data Collection Practices', level: 2 },
  { id: 'data-processing', title: 'Data Processing & Storage', level: 2 },
  { id: 'security-measures', title: 'Security Measures', level: 2 },
  { id: 'compliance', title: 'Compliance Standards', level: 2 },
  { id: 'user-rights', title: 'Your Rights & Controls', level: 2 },
];

export default function DataPrivacySecurityPage() {
  return (
    <DocLayout
      title="Data Privacy & Security"
      description="Comprehensive guide to our data protection practices and security measures"
      readingTime="12 min read"
      category="Best Practices"
      lastUpdated="2024-12-19"
    >
      <TableOfContents items={tocItems} />

      <div className="prose prose-lg max-w-none">
        <section id="overview">
          <h2>Privacy & Security Overview</h2>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-green-700">
                  <strong>Our Commitment:</strong> We prioritize the security and privacy of your business data above all else. Your information is protected by enterprise-grade security measures and strict privacy policies.
                </p>
              </div>
            </div>
          </div>

          <h3>Core Privacy Principles</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🔒 Data Minimization</h4>
              <p className="text-sm text-blue-700">We collect only the data necessary to provide our services and generate accurate assessments.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">🎯 Purpose Limitation</h4>
              <p className="text-sm text-purple-700">Your data is used exclusively for the services you request - never for unauthorized purposes.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">⏰ Retention Limits</h4>
              <p className="text-sm text-green-700">We retain data only as long as necessary to provide services and comply with legal requirements.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">🔐 Access Control</h4>
              <p className="text-sm text-orange-700">Strict access controls ensure only authorized personnel can access your information.</p>
            </div>
          </div>

          <h3>Security-First Architecture</h3>
          <p className="text-base leading-relaxed">
            Our platform is built with security as a foundational requirement, not an afterthought:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>End-to-End Encryption:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>Zero-Trust Architecture:</strong> Every request is authenticated and authorized</li>
            <li><strong>Regular Security Audits:</strong> Continuous monitoring and vulnerability assessments</li>
            <li><strong>Incident Response Plan:</strong> Rapid response procedures for any security events</li>
          </ul>
        </section>

        <section id="data-collection">
          <h2>Data Collection Practices</h2>
          
          <h3>What Data We Collect</h3>
          <p className="text-base leading-relaxed">
            We collect different types of data depending on the services you use:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Data Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Contact Information</td>
                  <td className="border border-gray-300 px-4 py-2">Email, company name, website URL</td>
                  <td className="border border-gray-300 px-4 py-2">Service delivery, report generation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Business Information</td>
                  <td className="border border-gray-300 px-4 py-2">Industry, company size, revenue range</td>
                  <td className="border border-gray-300 px-4 py-2">Assessment accuracy, benchmarking</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Process Data</td>
                  <td className="border border-gray-300 px-4 py-2">Sales pipeline, tool usage, workflows</td>
                  <td className="border border-gray-300 px-4 py-2">Analysis, recommendations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Technical Data</td>
                  <td className="border border-gray-300 px-4 py-2">IP address, browser type, usage patterns</td>
                  <td className="border border-gray-300 px-4 py-2">Security, performance optimization</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>How We Collect Data</h3>
          <div className="space-y-4 my-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Direct Collection</h4>
              <p className="text-sm text-gray-600">Information you provide through forms, assessments, and direct communication</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Automated Collection</h4>
              <p className="text-sm text-gray-600">Website analytics, usage patterns, and technical information</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Public Sources</h4>
              <p className="text-sm text-gray-600">Publicly available business information for company enrichment</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Sensitive Data Handling</h4>
            <p className="text-base leading-relaxed text-yellow-700">
              We never collect or store sensitive personal information such as financial account details, government ID numbers, or health information. Our assessments focus on business processes and publicly available company data.
            </p>
          </div>
        </section>

        <section id="data-processing">
          <h2>Data Processing & Storage</h2>
          
          <h3>Processing Locations</h3>
          <p className="text-base leading-relaxed">
            Your data is processed and stored in secure, compliant data centers:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Primary Infrastructure</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Supabase:</strong> EU/US data centers with SOC 2 compliance</li>
                <li>• <strong>Vercel:</strong> Global edge network with data residency controls</li>
                <li>• <strong>Google Cloud:</strong> AI processing with data locality options</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Data Residency</h4>
              <ul className="text-sm space-y-2">
                <li>• South African data can remain within Africa region</li>
                <li>• EU data processed within EU boundaries</li>
                <li>• Cross-border transfers use appropriate safeguards</li>
              </ul>
            </div>
          </div>

          <h3>Data Retention Periods</h3>
          <div className="space-y-4 my-6">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <span className="font-medium">Assessment Data</span>
              <span className="text-blue-700 font-semibold">2 years</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="font-medium">Generated Reports</span>
              <span className="text-green-700 font-semibold">1 year</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <span className="font-medium">Analytics Data</span>
              <span className="text-purple-700 font-semibold">6 months</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
              <span className="font-medium">Support Communications</span>
              <span className="text-orange-700 font-semibold">3 years</span>
            </div>
          </div>

          <h3>Data Deletion</h3>
          <p className="text-base leading-relaxed">
            We provide multiple options for data deletion:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>Automatic Deletion:</strong> Data is automatically deleted after retention periods</li>
            <li><strong>On-Demand Deletion:</strong> Request immediate deletion of your data</li>
            <li><strong>Account Closure:</strong> All data deleted within 30 days of account closure</li>
            <li><strong>Secure Deletion:</strong> Multi-pass overwriting ensures data cannot be recovered</li>
          </ul>
        </section>

        <section id="security-measures">
          <h2>Security Measures</h2>
          
          <h3>Technical Safeguards</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-700">🔐 Encryption</h4>
              <ul className="text-sm space-y-1">
                <li>• TLS 1.3 for data in transit</li>
                <li>• AES-256 for data at rest</li>
                <li>• End-to-end encryption for sensitive operations</li>
                <li>• Regular key rotation</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-700">🛡️ Access Control</h4>
              <ul className="text-sm space-y-1">
                <li>• Multi-factor authentication</li>
                <li>• Role-based access control (RBAC)</li>
                <li>• Principle of least privilege</li>
                <li>• Regular access reviews</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-purple-700">📊 Monitoring</h4>
              <ul className="text-sm space-y-1">
                <li>• 24/7 security monitoring</li>
                <li>• Automated threat detection</li>
                <li>• Audit logging for all activities</li>
                <li>• Real-time alerting</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-orange-700">🔄 Backup & Recovery</h4>
              <ul className="text-sm space-y-1">
                <li>• Automated daily backups</li>
                <li>• Geographic backup distribution</li>
                <li>• Regular recovery testing</li>
                <li>• Point-in-time recovery</li>
              </ul>
            </div>
          </div>

          <h3>Operational Security</h3>
          <ul className="text-base leading-relaxed">
            <li><strong>Security Training:</strong> All team members receive regular security awareness training</li>
            <li><strong>Background Checks:</strong> Comprehensive screening for all personnel with data access</li>
            <li><strong>Incident Response:</strong> Documented procedures for security incident handling</li>
            <li><strong>Vendor Management:</strong> Security assessments for all third-party providers</li>
          </ul>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-red-800 mb-2">🚨 Security Incident Response</h4>
            <p className="text-base leading-relaxed text-red-700">
              In the unlikely event of a security incident, we will notify affected users within 72 hours and provide detailed information about the incident, impact, and remediation steps.
            </p>
          </div>
        </section>

        <section id="compliance">
          <h2>Compliance Standards</h2>
          
          <h3>Regulatory Compliance</h3>
          <p className="text-base leading-relaxed">
            We maintain compliance with major data protection regulations:
          </p>

          <div className="space-y-6 my-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-blue-700">GDPR (General Data Protection Regulation)</h4>
              <p className="text-sm text-gray-600 mb-2">European Union data protection compliance</p>
              <ul className="text-sm space-y-1">
                <li>• Lawful basis for processing established</li>
                <li>• Data subject rights fully supported</li>
                <li>• Privacy by design implementation</li>
                <li>• Data Protection Impact Assessments conducted</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-green-700">POPIA (Protection of Personal Information Act)</h4>
              <p className="text-sm text-gray-600 mb-2">South African data protection compliance</p>
              <ul className="text-sm space-y-1">
                <li>• Information officer appointed</li>
                <li>• Processing conditions met</li>
                <li>• Cross-border transfer safeguards</li>
                <li>• Data subject participation rights</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-purple-700">SOC 2 Type II</h4>
              <p className="text-sm text-gray-600 mb-2">Security, availability, and confidentiality controls</p>
              <ul className="text-sm space-y-1">
                <li>• Annual third-party audits</li>
                <li>• Comprehensive control framework</li>
                <li>• Continuous monitoring</li>
                <li>• Public audit reports available</li>
              </ul>
            </div>
          </div>

          <h3>Industry Standards</h3>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg">ISO 27001</div>
              <div className="text-sm text-gray-600">Information Security Management</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg">ISO 27018</div>
              <div className="text-sm text-gray-600">Cloud Privacy Protection</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg">NIST Framework</div>
              <div className="text-sm text-gray-600">Cybersecurity Framework</div>
            </div>
          </div>
        </section>

        <section id="user-rights">
          <h2>Your Rights & Controls</h2>
          
          <h3>Data Subject Rights</h3>
          <p className="text-base leading-relaxed">
            You have comprehensive rights regarding your personal data:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">📋 Right to Access</h4>
              <p className="text-sm text-blue-700">Request a copy of all personal data we hold about you</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">✏️ Right to Rectification</h4>
              <p className="text-sm text-green-700">Correct any inaccurate or incomplete personal data</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">🗑️ Right to Erasure</h4>
              <p className="text-sm text-red-700">Request deletion of your personal data</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">⏸️ Right to Restrict</h4>
              <p className="text-sm text-purple-700">Limit how we process your personal data</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">📤 Right to Portability</h4>
              <p className="text-sm text-yellow-700">Receive your data in a structured, machine-readable format</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">🚫 Right to Object</h4>
              <p className="text-sm text-orange-700">Object to processing based on legitimate interests</p>
            </div>
          </div>

          <h3>How to Exercise Your Rights</h3>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Email:</strong> privacy@maruonline.co.za</div>
              <div><strong>Response Time:</strong> Within 30 days of request</div>
              <div><strong>Required Information:</strong> Proof of identity and specific request details</div>
              <div><strong>No Cost:</strong> Most requests are processed free of charge</div>
            </div>
          </div>

          <h3>Privacy Controls</h3>
          <p className="text-base leading-relaxed">
            You can control your privacy settings through:
          </p>
          <ul className="text-base leading-relaxed">
            <li><strong>Account Dashboard:</strong> Manage data sharing preferences</li>
            <li><strong>Email Preferences:</strong> Control marketing communications</li>
            <li><strong>Cookie Settings:</strong> Manage tracking preferences</li>
            <li><strong>Data Export:</strong> Download your data at any time</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-base leading-relaxed text-green-700">
                  <strong>Questions or Concerns?</strong> Our privacy team is available to address any questions about our data practices or help you exercise your rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Trust & Transparency</h3>
            <p className="text-base leading-relaxed text-blue-800 mb-4">
              We believe in complete transparency about our data practices. If you have any questions or concerns about privacy and security, we're here to help.
            </p>
            <div className="space-y-2">
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline block">
                → Full Privacy Policy
              </a>
              <a href="/knowledge/faq-support/faq" className="text-blue-600 hover:text-blue-800 underline block">
                → Privacy FAQ
              </a>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline block">
                → Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}