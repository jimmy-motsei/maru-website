import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, Step, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'Dashboard Overview | Maru Lead Generation Engine',
  description: 'Complete guide to navigating and using the Maru Lead Generation Engine admin dashboard effectively.',
};

const tableOfContents = [
  { id: 'overview', title: 'Dashboard Overview', level: 1 },
  { id: 'accessing-dashboard', title: 'Accessing the Dashboard', level: 1 },
  { id: 'main-sections', title: 'Main Dashboard Sections', level: 1 },
  { id: 'key-metrics', title: 'Understanding Key Metrics', level: 1 },
  { id: 'navigation-tips', title: 'Navigation Tips', level: 1 },
];

export default function DashboardOverviewPage() {
  return (
    <DocLayout
      title="Dashboard Overview"
      description="Complete guide to navigating and using the Maru Lead Generation Engine admin dashboard effectively."
      category="Admin & Analytics"
      readTime="10 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Admin & Analytics', href: '/knowledge/admin-analytics' },
        { label: 'Dashboard Overview', href: '/knowledge/admin-analytics/dashboard-overview' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">Dashboard Overview</h2>
      
      <p>
        The Maru Lead Generation Engine admin dashboard is your central command center for 
        monitoring lead generation performance, managing captured leads, and analyzing system 
        metrics. It provides real-time insights into your lead generation activities.
      </p>

      <Callout type="info" title="Dashboard Capabilities">
        <ul>
          <li><strong>Real-time Analytics:</strong> Live metrics and performance data</li>
          <li><strong>Lead Management:</strong> View, filter, and manage all captured leads</li>
          <li><strong>Assessment Tracking:</strong> Monitor completion rates and results</li>
          <li><strong>Performance Metrics:</strong> System health and usage statistics</li>
          <li><strong>Export Functions:</strong> Download data for external analysis</li>
        </ul>
      </Callout>

      <h2 id="accessing-dashboard">Accessing the Dashboard</h2>

      <Step number={1} title="Navigate to Admin Login">
        <p>Access the admin dashboard through the login page:</p>
        <CodeBlock language="text">
{`URL: http://localhost:3000/admin
Production: https://your-domain.com/admin`}
        </CodeBlock>
      </Step>

      <Step number={2} title="Login with Admin Credentials">
        <p>Use your admin credentials to access the dashboard:</p>
        <CodeBlock language="text" title="Default Admin Login">
{`Email: hello@maruonline.com
Password: MaruAdmin2024!`}
        </CodeBlock>
        
        <Callout type="warning" title="Security Note">
          Change the default password in production environments by updating the 
          ADMIN_PASSWORD environment variable.
        </Callout>
      </Step>

      <Step number={3} title="Dashboard Home Screen">
        <p>After successful login, you'll see the main dashboard with:</p>
        <ul>
          <li>Key performance metrics at the top</li>
          <li>Recent activity feed</li>
          <li>Quick action buttons</li>
          <li>Navigation menu on the left</li>
        </ul>
      </Step>

      <h2 id="main-sections">Main Dashboard Sections</h2>

      <h3>Analytics Overview</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Key Metrics Displayed:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="text-base space-y-2 text-dark/70">
              <li>• <strong>Total Leads:</strong> All-time lead count</li>
              <li>• <strong>This Month:</strong> Current month's new leads</li>
              <li>• <strong>Conversion Rate:</strong> Assessment completion percentage</li>
              <li>• <strong>Average Score:</strong> Mean lead score across all assessments</li>
            </ul>
          </div>
          <div>
            <ul className="text-base space-y-2 text-dark/70">
              <li>• <strong>Top Performing Tool:</strong> Most used assessment</li>
              <li>• <strong>Industry Breakdown:</strong> Leads by industry sector</li>
              <li>• <strong>Company Size Distribution:</strong> Lead segmentation</li>
              <li>• <strong>Growth Trend:</strong> Month-over-month comparison</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Recent Activity Feed</h3>
      <p>The activity feed shows real-time updates including:</p>
      <ul>
        <li><strong>New Assessments:</strong> Recently completed assessments</li>
        <li><strong>Lead Updates:</strong> Changes to lead information</li>
        <li><strong>System Events:</strong> Important system notifications</li>
        <li><strong>Performance Alerts:</strong> Unusual activity or issues</li>
      </ul>

      <h3>Quick Actions Panel</h3>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">📊 View All Leads</h4>
          <p className="text-base text-dark/70 mb-2">Access complete lead database with filtering options</p>
          <p className="text-sm text-dark/50">Navigate to comprehensive lead management</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">📈 Analytics Reports</h4>
          <p className="text-base text-dark/70 mb-2">Generate detailed performance reports</p>
          <p className="text-sm text-dark/50">Access advanced analytics and insights</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">⚙️ System Settings</h4>
          <p className="text-base text-dark/70 mb-2">Configure dashboard preferences and alerts</p>
          <p className="text-sm text-dark/50">Customize your dashboard experience</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-dark mb-2">📤 Export Data</h4>
          <p className="text-base text-dark/70 mb-2">Download leads and analytics data</p>
          <p className="text-sm text-dark/50">Export in CSV, PDF, or JSON formats</p>
        </div>
      </div>

      <h2 id="key-metrics">Understanding Key Metrics</h2>

      <h3>Lead Generation Metrics</h3>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">📊 Total Leads</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Complete count of all leads captured through assessment tools
          </p>
          <p className="text-sm text-dark/50">
            <strong>Good Performance:</strong> Steady growth month-over-month
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">📈 Conversion Rate</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Percentage of started assessments that are completed successfully
          </p>
          <p className="text-sm text-dark/50">
            <strong>Benchmark:</strong> 70%+ completion rate indicates good user experience
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🎯 Average Lead Score</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Mean score across all completed lead score assessments
          </p>
          <p className="text-sm text-dark/50">
            <strong>Insight:</strong> Higher scores indicate better-qualified leads
          </p>
        </div>

        <div className="border-l-4 border-amber-500 pl-6">
          <h4 className="font-semibold text-dark mb-2">🏆 Top Performing Tool</h4>
          <p className="text-dark/70 text-base leading-relaxed mb-2">
            Assessment tool with highest completion rate and user engagement
          </p>
          <p className="text-sm text-dark/50">
            <strong>Strategy:</strong> Focus marketing efforts on most popular tools
          </p>
        </div>
      </div>

      <h3>Performance Indicators</h3>

      <div className="bg-gray-50 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Dashboard Color Coding:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="text-base space-y-2">
              <li><span className="inline-block w-4 h-4 bg-green-500 rounded mr-2"></span><strong>Green:</strong> Excellent performance</li>
              <li><span className="inline-block w-4 h-4 bg-blue-500 rounded mr-2"></span><strong>Blue:</strong> Good performance</li>
            </ul>
          </div>
          <div>
            <ul className="text-base space-y-2">
              <li><span className="inline-block w-4 h-4 bg-amber-500 rounded mr-2"></span><strong>Yellow:</strong> Needs attention</li>
              <li><span className="inline-block w-4 h-4 bg-red-500 rounded mr-2"></span><strong>Red:</strong> Requires immediate action</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Time-based Analytics</h3>
      <p>The dashboard provides multiple time-based views:</p>

      <div className="grid md:grid-cols-3 gap-6 my-6">
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-xl font-bold text-accent mb-2">Today</div>
          <p className="text-base text-dark/60">Real-time daily metrics</p>
          <p className="text-xs text-dark/50 mt-1">Updates every hour</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-xl font-bold text-blue-600 mb-2">This Month</div>
          <p className="text-base text-dark/60">Current month performance</p>
          <p className="text-xs text-dark/50 mt-1">Compared to previous month</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-xl font-bold text-green-600 mb-2">All Time</div>
          <p className="text-base text-dark/60">Historical performance data</p>
          <p className="text-xs text-dark/50 mt-1">Since system launch</p>
        </div>
      </div>

      <h2 id="navigation-tips">Navigation Tips</h2>

      <h3>Efficient Dashboard Usage</h3>

      <Callout type="success" title="Pro Tips">
        <ul>
          <li><strong>Bookmark Key Views:</strong> Save frequently accessed reports and filters</li>
          <li><strong>Use Keyboard Shortcuts:</strong> Press '?' to see available shortcuts</li>
          <li><strong>Set Up Alerts:</strong> Configure notifications for important metrics</li>
          <li><strong>Regular Check-ins:</strong> Review dashboard daily for 5-10 minutes</li>
        </ul>
      </Callout>

      <h3>Main Navigation Menu</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Dashboard Sections:</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-accent text-white rounded flex items-center justify-center text-sm">📊</span>
            <div>
              <strong>Analytics:</strong> Performance metrics and trends
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center text-sm">👥</span>
            <div>
              <strong>Leads:</strong> Lead management and detailed views
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center text-sm">📋</span>
            <div>
              <strong>Assessments:</strong> Assessment results and analysis
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-500 text-white rounded flex items-center justify-center text-sm">⚙️</span>
            <div>
              <strong>Settings:</strong> System configuration and preferences
            </div>
          </div>
        </div>
      </div>

      <h3>Mobile Dashboard Access</h3>
      <p>The dashboard is fully responsive and optimized for mobile devices:</p>
      <ul>
        <li><strong>Touch-friendly Interface:</strong> Large buttons and easy navigation</li>
        <li><strong>Condensed Views:</strong> Key metrics prioritized on smaller screens</li>
        <li><strong>Swipe Navigation:</strong> Gesture-based navigation between sections</li>
        <li><strong>Offline Capability:</strong> View cached data when connection is poor</li>
      </ul>

      <h3>Common Dashboard Tasks</h3>

      <div className="space-y-4 mt-6">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How to find a specific lead</summary>
          <div className="mt-2 text-dark/60">
            <p>1. Click "Leads" in the main navigation</p>
            <p>2. Use the search bar to enter email or company name</p>
            <p>3. Apply filters for industry, date range, or lead score</p>
            <p>4. Click on any lead to view detailed information</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How to export lead data</summary>
          <div className="mt-2 text-dark/60">
            <p>1. Navigate to the Leads section</p>
            <p>2. Apply any desired filters</p>
            <p>3. Click the "Export" button in the top right</p>
            <p>4. Choose format (CSV, PDF, or JSON) and download</p>
          </div>
        </details>
        
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How to view assessment performance</summary>
          <div className="mt-2 text-dark/60">
            <p>1. Go to Analytics section from main menu</p>
            <p>2. Select "Assessment Performance" tab</p>
            <p>3. Choose time range and assessment type</p>
            <p>4. Review completion rates and average scores</p>
          </div>
        </details>
      </div>

      <h3>Dashboard Customization</h3>
      <p>Personalize your dashboard experience:</p>

      <Step number={1} title="Widget Configuration">
        <p>Customize which metrics appear on your main dashboard:</p>
        <ul>
          <li>Click the "Customize" button in the top right</li>
          <li>Drag and drop widgets to reorder</li>
          <li>Toggle widgets on/off based on your needs</li>
          <li>Save your preferred layout</li>
        </ul>
      </Step>

      <Step number={2} title="Alert Setup">
        <p>Configure notifications for important events:</p>
        <ul>
          <li>Go to Settings → Notifications</li>
          <li>Set thresholds for key metrics</li>
          <li>Choose notification methods (email, dashboard)</li>
          <li>Test alerts to ensure they work correctly</li>
        </ul>
      </Step>

      <Callout type="info" title="Dashboard Performance">
        <p>
          The dashboard updates in real-time for most metrics. Some complex analytics may have 
          a 5-10 minute delay. Use the refresh button if you need the latest data immediately.
        </p>
      </Callout>

      <h3>Next Steps</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/knowledge/admin-analytics/lead-management" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Lead Management</h4>
          <p className="text-dark/60 text-base leading-relaxed">Learn to manage and organize your leads effectively</p>
        </a>
        <a href="/knowledge/admin-analytics/analytics-interpretation" className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
          <h4 className="font-medium text-dark mb-2">Analytics Interpretation</h4>
          <p className="text-dark/60 text-base leading-relaxed">Understand what your metrics mean and how to act on them</p>
        </a>
      </div>
    </DocLayout>
  );
}