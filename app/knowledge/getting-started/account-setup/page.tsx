import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Account Setup | Maru Lead Generation Engine',
  description: 'Complete guide to setting up your Maru Lead Generation Engine account and accessing the admin dashboard.',
};

const tableOfContents = [
  { id: 'overview', title: 'Setup Overview', level: 1 },
  { id: 'admin-access', title: 'Admin Dashboard Access', level: 1 },
  { id: 'initial-config', title: 'Initial Configuration', level: 1 },
  { id: 'environment-setup', title: 'Environment Setup', level: 1 },
  { id: 'verification', title: 'Setup Verification', level: 1 },
];

export default function AccountSetupPage() {
  return (
    <DocLayout
      title="Account Setup"
      description="Complete guide to setting up your Maru Lead Generation Engine account and accessing the admin dashboard."
      category="Getting Started"
      readTime="8 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Getting Started', href: '/knowledge/getting-started' },
        { label: 'Account Setup', href: '/knowledge/getting-started/account-setup' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Setup Overview</h2>
      
      <p>
        The Maru Lead Generation Engine comes pre-configured with admin access and database connectivity. 
        This guide walks you through accessing your dashboard and verifying your setup.
      </p>

      <Callout type="info" title="What You'll Set Up">
        <ul>
          <li>Admin dashboard access</li>
          <li>Database connection verification</li>
          <li>Environment configuration check</li>
          <li>Assessment tools functionality</li>
        </ul>
      </Callout>

      <h2 id="admin-access">Admin Dashboard Access</h2>

      <Step number={1} title="Navigate to Admin Dashboard">
        <p>Open your browser and go to the admin dashboard:</p>
        <CodeBlock language="text">
{`URL: http://localhost:3000/admin
Production: https://your-domain.com/admin`}
        </CodeBlock>
      </Step>

      <Step number={2} title="Login with Admin Credentials">
        <p>Use the default admin credentials to log in:</p>
        <CodeBlock language="text" title="Default Admin Credentials">
{`Email: hello@maruonline.com
Password: MaruAdmin2024!`}
        </CodeBlock>
        
        <Callout type="warning" title="Security Note">
          Change the default admin password in production by updating the ADMIN_PASSWORD 
          environment variable in your .env.local file.
        </Callout>
      </Step>

      <Step number={3} title="Verify Dashboard Access">
        <p>After successful login, you should see:</p>
        <ul>
          <li>Analytics overview with lead metrics</li>
          <li>Recent assessments list</li>
          <li>Performance charts</li>
          <li>Navigation menu with all admin features</li>
        </ul>
      </Step>

      <h2 id="initial-config">Initial Configuration</h2>

      <h3>Environment Variables Check</h3>
      <p>Verify your .env.local file contains all required variables:</p>

      <CodeBlock language="bash" title="Required Environment Variables">
{`# Database Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# AI Configuration
GOOGLE_AI_API_KEY=your_google_ai_key

# Admin Authentication
ADMIN_EMAIL=hello@maruonline.com
ADMIN_PASSWORD=MaruAdmin2024!

# Application URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000`}
      </CodeBlock>

      <h3>Database Connection</h3>
      <p>Your Supabase database should be configured with:</p>
      <ul>
        <li>Main schema tables (leads, assessments, tools, etc.)</li>
        <li>Analytics tables (events, metrics, funnel)</li>
        <li>Row Level Security policies</li>
        <li>Sample tool data</li>
      </ul>

      <h2 id="environment-setup">Environment Setup</h2>

      <h3>Development Environment</h3>
      <Step number={1} title="Start Development Server">
        <CodeBlock language="bash">
{`npm run dev`}
        </CodeBlock>
        <p>The server should start on http://localhost:3000</p>
      </Step>

      <Step number={2} title="Verify All Services">
        <p>Check that all components are working:</p>
        <ul>
          <li>✅ Homepage loads correctly</li>
          <li>✅ Assessment tools are accessible</li>
          <li>✅ Admin dashboard login works</li>
          <li>✅ Database queries execute successfully</li>
        </ul>
      </Step>

      <h3>Production Environment</h3>
      <p>For production deployment:</p>
      <ul>
        <li>Update NEXT_PUBLIC_SITE_URL to your domain</li>
        <li>Change default admin password</li>
        <li>Configure proper CORS settings</li>
        <li>Set up SSL certificates</li>
        <li>Enable production logging</li>
      </ul>

      <h2 id="verification">Setup Verification</h2>

      <h3>Test Assessment Flow</h3>
      <Step number={1} title="Run a Test Assessment">
        <p>Navigate to any assessment tool and complete a test:</p>
        <CodeBlock language="text">
{`1. Go to /assessments/lead-score
2. Fill out the form with test data
3. Submit and wait for AI processing
4. Verify results are displayed
5. Check admin dashboard for new lead`}
        </CodeBlock>
      </Step>

      <Step number={2} title="Verify Data Storage">
        <p>In the admin dashboard, confirm:</p>
        <ul>
          <li>New lead appears in leads list</li>
          <li>Assessment data is stored correctly</li>
          <li>Analytics events are tracked</li>
          <li>All timestamps are accurate</li>
        </ul>
      </Step>

      <h3>Common Setup Issues</h3>
      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Cannot access admin dashboard</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Solution:</strong> Check admin credentials and ensure middleware is configured correctly.</p>
            <p>Verify ADMIN_EMAIL and ADMIN_PASSWORD in .env.local match your login attempt.</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Database connection errors</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Solution:</strong> Verify Supabase credentials and check RLS policies.</p>
            <p>Ensure service role key has proper permissions for all tables.</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">AI assessments not working</summary>
          <div className="mt-2 text-dark/60">
            <p><strong>Solution:</strong> Check Google AI API key and rate limits.</p>
            <p>Verify GOOGLE_AI_API_KEY is valid and has sufficient quota.</p>
          </div>
        </details>
      </div>

      <Callout type="success" title="Setup Complete!">
        <p>
          Once you can successfully log into the admin dashboard and complete a test assessment, 
          your setup is complete. Continue with the 
          <a href="/knowledge/getting-started/first-assessment" className="text-accent hover:underline ml-1">
            First Assessment Walkthrough
          </a> to learn how to use the system effectively.
        </p>
      </Callout>

      <h3>Next Steps</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/knowledge/getting-started/first-assessment" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">First Assessment Walkthrough</h4>
          <p className="text-dark/60 text-sm">Learn how to complete your first assessment</p>
        </a>
        <a href="/knowledge/admin-analytics/dashboard-overview" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Dashboard Overview</h4>
          <p className="text-dark/60 text-sm">Master the admin dashboard features</p>
        </a>
      </div>
    </DocLayout>
  );
}