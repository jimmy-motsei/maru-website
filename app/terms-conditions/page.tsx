import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Maru Online',
  description: 'Terms and conditions for Maru Online AI automation and marketing services.',
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 py-24 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="text-accent hover:text-accent-dark text-sm font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Terms and Conditions
          </h1>
          <p className="text-dark/60">
            Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">1. Agreement to Terms</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              By engaging Maru Online ("we," "us," "our") for AI automation, marketing, or consulting services, you ("client," "you") agree to be bound by these Terms and Conditions. If you do not agree, do not proceed with our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">2. Services Offered</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              We provide AI-powered automation solutions, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2 mb-4">
              <li>Lead generation and AI lead scoring systems</li>
              <li>Sales automation and CRM integration</li>
              <li>Office operations automation and workflow optimization</li>
              <li>WhatsApp Business chatbot solutions</li>
              <li>Custom AI integrations and bespoke enterprise solutions</li>
            </ul>
            <p className="text-dark/70 leading-relaxed">
              All services are delivered as specified in your project proposal or service agreement. Scope, deliverables, and timelines are confirmed before project commencement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">3. Pricing and Payment</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              <strong>Standard Packages:</strong>
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2 mb-4">
              <li><strong>Starter Package:</strong> R4,999 — Basic automation for small businesses</li>
              <li><strong>Growth Package:</strong> R9,999 — Advanced CRM integration and marketing sequences</li>
              <li><strong>Enterprise Solution:</strong> Custom pricing — Bespoke systems with dedicated support</li>
            </ul>
            <p className="text-dark/70 leading-relaxed mb-4">
              <strong>Custom Projects:</strong> Project fees range from R25,000 for single workflow automation to R200,000+ for comprehensive sales and marketing systems. All pricing is provided in fixed-price quotes following your free AI Readiness Assessment.
            </p>
            <p className="text-dark/70 leading-relaxed mb-4">
              <strong>Payment Terms:</strong>
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2 mb-4">
              <li>50% deposit required upfront to commence work</li>
              <li>Remaining 50% due upon project completion or go-live</li>
              <li>Monthly retainers billed in advance for ongoing support packages</li>
              <li>Payment accepted via EFT, credit card, or approved payment plan</li>
            </ul>
            <p className="text-dark/70 leading-relaxed">
              Late payments may incur a 2% monthly interest charge. Projects may be paused if payment is overdue by more than 14 days.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">4. Project Timeline and Delivery</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              We deliver pilot projects within 2-4 weeks of project kickoff. Full implementations depend on scope and complexity, with timelines confirmed in your project proposal.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Delays caused by unavailability of client resources, late feedback, or scope changes may extend delivery timelines. We will notify you promptly of any anticipated delays.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">5. Client Responsibilities</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              To ensure successful project delivery, you agree to:
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2">
              <li>Provide timely access to necessary systems, credentials, and data</li>
              <li>Respond to requests for feedback within 5 business days</li>
              <li>Designate a primary point of contact for project communications</li>
              <li>Ensure your team attends scheduled training sessions</li>
              <li>Review and approve deliverables within agreed timeframes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">6. Data Protection and Compliance</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              We are committed to protecting your data. All systems we build are POPIA-compliant and hosted on South African cloud infrastructure where possible. Standard security measures include:
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2 mb-4">
              <li>Data encryption in transit and at rest</li>
              <li>Consent logs and audit trails</li>
              <li>Role-based access controls</li>
              <li>Regular security reviews</li>
            </ul>
            <p className="text-dark/70 leading-relaxed">
              You retain ownership of all your business data. We will never sell, share, or use your data for purposes other than delivering our services unless explicitly authorized by you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">7. Intellectual Property</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              Upon full payment, you own the custom workflows, automations, and configurations we build specifically for your business. However:
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2">
              <li>We retain ownership of our proprietary frameworks, tools, and methodologies</li>
              <li>Third-party software licenses (e.g., Zapier, Make, HubSpot) remain subject to their respective terms</li>
              <li>We may showcase anonymized case studies referencing your project unless you request otherwise</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">8. Warranties and Limitations</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              <strong>We guarantee:</strong>
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2 mb-4">
              <li>Systems will function as specified in the agreed scope</li>
              <li>30-day bug-fix warranty after go-live for any defects in our work</li>
              <li>Professional, timely support throughout the engagement</li>
            </ul>
            <p className="text-dark/70 leading-relaxed mb-4">
              <strong>We do not guarantee:</strong>
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2 mb-4">
              <li>Specific business outcomes (e.g., exact ROI, revenue increases)</li>
              <li>Uninterrupted operation of third-party tools we integrate with</li>
              <li>Results dependent on factors outside our control (market conditions, user adoption, etc.)</li>
            </ul>
            <p className="text-dark/70 leading-relaxed">
              Our liability is limited to the total fees paid for the specific project in question. We are not liable for indirect, consequential, or punitive damages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">9. Support and Maintenance</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              Every project includes hands-on training and documentation. Post-launch support options:
            </p>
            <ul className="list-disc pl-6 text-dark/70 space-y-2 mb-4">
              <li><strong>Bug fixes:</strong> Free for 30 days post-launch</li>
              <li><strong>Email support:</strong> Available on all monthly packages</li>
              <li><strong>Ongoing optimization:</strong> Included in Enterprise and Growth packages</li>
              <li><strong>Ad-hoc support:</strong> Billed hourly for one-off projects outside retainer agreements</li>
            </ul>
            <p className="text-dark/70 leading-relaxed">
              If you cancel a monthly support package, we provide a 30-day handover period to ensure continuity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">10. Termination</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              <strong>By You:</strong> You may cancel a project with 14 days' written notice. Work completed to date will be billed at our standard hourly rate, and the deposit is non-refundable.
            </p>
            <p className="text-dark/70 leading-relaxed mb-4">
              <strong>By Us:</strong> We may terminate this agreement if you breach these terms, fail to pay invoices, or engage in abusive behavior toward our team. Outstanding invoices remain due.
            </p>
            <p className="text-dark/70 leading-relaxed">
              <strong>Monthly Packages:</strong> Either party may cancel with 30 days' notice. No refunds for partial months.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">11. Confidentiality</h2>
            <p className="text-dark/70 leading-relaxed">
              Both parties agree to keep all proprietary information confidential. This includes business strategies, data, and any non-public information shared during the engagement. This obligation survives termination of our agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">12. Governing Law</h2>
            <p className="text-dark/70 leading-relaxed">
              These terms are governed by the laws of South Africa. Any disputes will be resolved through good-faith negotiation or, if necessary, in the courts of Johannesburg, South Africa.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">13. Changes to Terms</h2>
            <p className="text-dark/70 leading-relaxed">
              We may update these terms from time to time. Material changes will be communicated via email. Continued use of our services after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">14. Contact</h2>
            <p className="text-dark/70 leading-relaxed mb-2">
              Questions about these terms? Reach out:
            </p>
            <p className="text-dark/70 leading-relaxed">
              <strong>Email:</strong> <a href="mailto:hello@maruonline.com" className="text-accent hover:underline">hello@maruonline.com</a><br />
              <strong>Location:</strong> Johannesburg, South Africa
            </p>
          </section>

          <div className="border-t border-dark/10 pt-8 mt-12">
            <p className="text-sm text-dark/50 italic">
              By engaging our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
