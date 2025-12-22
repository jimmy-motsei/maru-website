'use client';

import { LegalLayout } from "@/components/layout/LegalLayout";



export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      description="This policy explains how we use cookies and similar technologies on our website to enhance your browsing experience."
      lastUpdated="January 2025"
      effectiveDate="January 1, 2025"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-white mb-6">1. What Are Cookies?</h2>
        <p className="text-light-soft mb-4">
          Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) 
          when you visit a website. They are widely used to make websites work more efficiently and provide 
          useful information to website owners.
        </p>
        <p className="text-light-soft">
          We use cookies and similar tracking technologies to enhance your experience on our website, 
          analyze usage patterns, and deliver personalized content.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium text-white mb-6">
          2. Types of Cookies We Use
        </h2>
        
        <h3 className="text-xl font-medium text-white mb-4">
          2.1 Essential Cookies
        </h3>
        <p className="text-light-soft mb-4">
          These cookies are necessary for the website to function properly. They enable core functionality 
          such as security, network management, and accessibility. You cannot opt-out of these cookies.
        </p>
        
        <h3 className="text-xl font-medium text-white mb-4">
          2.2 Analytics Cookies
        </h3>
        <p className="text-light-soft mb-4">
          We use analytics cookies to understand how visitors interact with our website. This helps us 
          improve our services and user experience. These cookies collect information about:
        </p>
        <ul className="list-disc list-inside space-y-2 text-light-soft mb-4">
          <li>Pages visited and time spent on each page</li>
          <li>How you arrived at our website</li>
          <li>What you clicked on during your visit</li>
          <li>General location information (city/country level)</li>
        </ul>

        <h3 className="text-xl font-medium text-white mb-4">
          2.3 Marketing Cookies
        </h3>
        <p className="text-light-soft mb-4">
          These cookies track your online activity to help us deliver more relevant advertising. They may 
          be set by us or by third-party advertising partners with our permission. These cookies:
        </p>
        <ul className="list-disc list-inside space-y-2 text-light-soft">
          <li>Remember that you have visited our website</li>
          <li>Share this information with other organizations such as advertisers</li>
          <li>Help measure the effectiveness of our marketing campaigns</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium text-white mb-6">
          3. Third-Party Cookies
        </h2>
        <p className="text-light-soft mb-4">
          We work with the following third-party services that may set cookies on your device:
        </p>
        
        <div className="bg-white/5 rounded-lg p-6 mb-4">
          <h4 className="text-white font-medium mb-2">Google Analytics</h4>
          <p className="text-light-soft text-sm">
            We use Google Analytics to analyze website traffic and usage patterns. Google Analytics sets 
            cookies to help us understand user behavior and improve our services.
          </p>
          <p className="text-light-soft text-sm mt-2">
            Learn more: <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
          </p>
        </div>

        <div className="bg-white/5 rounded-lg p-6 mb-4">
          <h4 className="text-white font-medium mb-2">HubSpot</h4>
          <p className="text-light-soft text-sm">
            Our CRM and marketing automation platform uses cookies to track user interactions with our forms 
            and content, helping us provide personalized communication.
          </p>
          <p className="text-light-soft text-sm mt-2">
            Learn more: <a href="https://legal.hubspot.com/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">HubSpot Privacy Policy</a>
          </p>
          <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-200/80">
            <strong>Note:</strong> HubSpot may process data in the United States. We rely on their Data Processing Agreement (DPA) and Standard Contractual Clauses (SCCs) to ensure appropriate safeguards for international transfers.
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6">
          <h4 className="text-white font-medium mb-2">Meta Pixel (Facebook)</h4>
          <p className="text-light-soft text-sm">
            We use Meta Pixel to measure the effectiveness of our advertising campaigns and deliver targeted 
            ads on Facebook and Instagram.
          </p>
          <p className="text-light-soft text-sm mt-2">
            Learn more: <a href="https://www.facebook.com/privacy/explanation" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Meta Privacy Policy</a>
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium text-white mb-6">
          4. How to Control Cookies
        </h2>
        <p className="text-light-soft mb-6">
          You can change your cookie preferences at any time by clicking the button below. This will open our 
          preference center where you can enable or disable specific categories of cookies.
        </p>

        <button
          onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
          className="px-6 py-3 rounded-lg text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)] mb-8"
        >
          Manage Cookie Preferences
        </button>

        <p className="text-light-soft mb-4">
          Most web browsers also allow you to control cookies through their settings. You can:
        </p>
        <ul className="list-disc list-inside space-y-2 text-light-soft mb-4">
          <li>Delete all cookies from your browser</li>
          <li>Block all cookies from being set</li>
          <li>Allow cookies from specific websites only</li>
          <li>Be notified each time a cookie is sent</li>
        </ul>
        <p className="text-light-soft mb-4">
          Please note that if you disable cookies, some parts of our website may not function properly.
        </p>

        <h3 className="text-xl font-medium text-white mb-4">
          Browser-Specific Instructions
        </h3>
        <ul className="space-y-2 text-light-soft">
          <li>
            <strong className="text-white">Chrome:</strong>{" "}
            <a href="https://support.google.com/chrome/answer/95647" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Manage cookies in Chrome
            </a>
          </li>
          <li>
            <strong className="text-white">Firefox:</strong>{" "}
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Manage cookies in Firefox
            </a>
          </li>
          <li>
            <strong className="text-white">Safari:</strong>{" "}
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Manage cookies in Safari
            </a>
          </li>
          <li>
            <strong className="text-white">Edge:</strong>{" "}
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Manage cookies in Edge
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium text-white mb-6">
          5. POPIA Compliance
        </h2>
        <p className="text-light-soft mb-4">
          Our use of cookies complies with the Protection of Personal Information Act (POPIA) No. 4 of 2013. 
          Under POPIA, we are required to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-light-soft">
          <li>Inform you about the cookies we use</li>
          <li>Obtain your consent for non-essential cookies</li>
          <li>Allow you to manage your cookie preferences</li>
          <li>Provide clear information about third-party cookies</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium text-white mb-6">
          6. Cookie Duration
        </h2>
        <p className="text-light-soft mb-4">
          Cookies may be either "session" or "persistent" cookies:
        </p>
        <ul className="list-disc list-inside space-y-2 text-light-soft">
          <li>
            <strong className="text-white">Session Cookies:</strong> These are temporary and are deleted 
            when you close your browser
          </li>
          <li>
            <strong className="text-white">Persistent Cookies:</strong> These remain on your device until 
            they expire or you delete them. We use persistent cookies that last up to 2 years.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-medium text-white mb-6">
          7. Updates to This Policy
        </h2>
        <p className="text-light-soft mb-4">
          We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
          or our data practices. We will post any changes on this page with an updated revision date.
        </p>
        <p className="text-light-soft">
          We encourage you to review this policy periodically to stay informed about how we use cookies.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-medium text-white mb-6">
          8. Contact Us
        </h2>
        <p className="text-light-soft mb-4">
          If you have questions about our use of cookies, please contact us:
        </p>
        <div className="bg-white/5 rounded-lg p-6 text-light-soft">
          <p>
            <strong className="text-white">Email:</strong> privacy@maruonline.com
          </p>
          <p>
            <strong className="text-white">Phone:</strong> +27(0)83 393 4864
          </p>
          <p>
            <strong className="text-white">Address:</strong> 247 Ballito Village,
            Ballito, 4420, South Africa
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
