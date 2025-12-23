import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Callout, CodeBlock, TableOfContents } from '@/components/docs/ContentComponents';

export const metadata: Metadata = {
  title: 'API Reference | Maru Lead Generation Engine',
  description: 'Complete API documentation for developers. Integrate assessment tools into your applications.',
};

const tableOfContents = [
  { id: 'overview', title: 'API Overview', level: 1 },
  { id: 'authentication', title: 'Authentication', level: 1 },
  { id: 'endpoints', title: 'Endpoints', level: 1 },
  { id: 'assessment-api', title: 'Assessment API', level: 2 },
  { id: 'leads-api', title: 'Leads API', level: 2 },
  { id: 'analytics-api', title: 'Analytics API', level: 2 },
  { id: 'error-handling', title: 'Error Handling', level: 1 },
  { id: 'rate-limits', title: 'Rate Limits', level: 1 },
  { id: 'examples', title: 'Code Examples', level: 1 },
];

export default function APIReferencePage() {
  return (
    <DocLayout
      title="API Reference"
      description="Complete API documentation for developers. Integrate assessment tools into your applications."
      category="Technical Documentation"
      readTime="25 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'Technical Documentation', href: '/knowledge/technical' },
        { label: 'API Reference', href: '/knowledge/technical/api-reference' },
      ]}
    >
      <TableOfContents items={tableOfContents} />

      <h2 id="overview">API Overview</h2>
      
      <p>
        The Maru Lead Generation Engine provides RESTful APIs for integrating assessment tools 
        into your applications. All endpoints return JSON responses and use standard HTTP methods.
      </p>

      <div className="bg-slate-50 rounded-lg p-6 my-6">
        <h3 className="font-semibold mb-3">Base URL</h3>
        <CodeBlock language="text">
{`Production: https://your-domain.com/api
Development: http://localhost:3000/api`}
        </CodeBlock>
      </div>

      <Callout type="info" title="API Features">
        <ul>
          <li>RESTful design with standard HTTP methods</li>
          <li>JSON request and response format</li>
          <li>Rate limiting and security measures</li>
          <li>Comprehensive error handling</li>
          <li>Real-time assessment processing</li>
        </ul>
      </Callout>

      <h2 id="authentication">Authentication</h2>

      <p>
        Currently, the API uses IP-based rate limiting. For production deployments, 
        implement API key authentication:
      </p>

      <CodeBlock language="javascript" title="Authentication Header">
{`// Future implementation
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}`}
      </CodeBlock>

      <h2 id="endpoints">Endpoints</h2>

      <h3 id="assessment-api">Assessment API</h3>

      <h4>POST /api/assessments</h4>
      <p>Create and process a new assessment.</p>

      <CodeBlock language="json" title="Request Body">
{`{
  "email": "user@example.com",
  "app_type": "lead_score",
  "input_data": {
    "company_name": "Example Corp",
    "website_url": "https://example.com",
    "industry": "Technology",
    "company_size": "smb"
  }
}`}
      </CodeBlock>

      <div className="bg-slate-50 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-3">Assessment Types</h4>
        <ul className="space-y-2 text-sm">
          <li><code className="bg-slate-200 px-2 py-1 rounded">lead_score</code> - Lead Score Predictor</li>
          <li><code className="bg-slate-200 px-2 py-1 rounded">pipeline_leak</code> - Pipeline Leak Detector</li>
          <li><code className="bg-slate-200 px-2 py-1 rounded">proposal</code> - Proposal Accelerator</li>
          <li><code className="bg-slate-200 px-2 py-1 rounded">tech_audit</code> - Tech Stack Auditor</li>
        </ul>
      </div>

      <CodeBlock language="json" title="Success Response (200)">
{`{
  "success": true,
  "data": {
    "assessment_id": "uuid-here",
    "score": 75,
    "factors": {
      "website_quality": 80,
      "tech_stack_maturity": 70,
      "content_quality": 75,
      "seo_readiness": 75
    },
    "recommendations": [
      "Implement lead capture forms on key pages",
      "Add clear call-to-action buttons",
      "Optimize page loading speed"
    ]
  }
}`}
      </CodeBlock>

      <h4>GET /api/assessments/{id}</h4>
      <p>Retrieve a specific assessment by ID.</p>

      <CodeBlock language="json" title="Response">
{`{
  "success": true,
  "data": {
    "id": "assessment-uuid",
    "lead_id": "lead-uuid",
    "app_type": "lead_score",
    "status": "completed",
    "score": 75,
    "analysis_data": { ... },
    "recommendations": [ ... ],
    "created_at": "2024-12-23T10:00:00Z",
    "completed_at": "2024-12-23T10:01:00Z"
  }
}`}
      </CodeBlock>

      <h3 id="leads-api">Leads API</h3>

      <h4>GET /api/leads</h4>
      <p>Retrieve leads with optional filtering and pagination.</p>

      <div className="bg-slate-50 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-3">Query Parameters</h4>
        <ul className="space-y-2 text-sm">
          <li><code>page</code> - Page number (default: 1)</li>
          <li><code>limit</code> - Results per page (default: 20, max: 100)</li>
          <li><code>industry</code> - Filter by industry</li>
          <li><code>company_size</code> - Filter by company size</li>
          <li><code>min_score</code> - Minimum lead score</li>
          <li><code>created_after</code> - ISO date string</li>
        </ul>
      </div>

      <CodeBlock language="javascript" title="Example Request">
{`fetch('/api/leads?industry=technology&min_score=70&limit=50')
  .then(response => response.json())
  .then(data => console.log(data));`}
      </CodeBlock>

      <h4>GET /api/leads/{id}</h4>
      <p>Retrieve a specific lead with all associated assessments.</p>

      <CodeBlock language="json" title="Response">
{`{
  "success": true,
  "data": {
    "id": "lead-uuid",
    "email": "user@example.com",
    "company_name": "Example Corp",
    "website_url": "https://example.com",
    "industry": "Technology",
    "company_size": "smb",
    "lead_score": 75,
    "created_at": "2024-12-23T10:00:00Z",
    "assessments": [
      {
        "id": "assessment-uuid",
        "app_type": "lead_score",
        "score": 75,
        "completed_at": "2024-12-23T10:01:00Z"
      }
    ],
    "activities": [
      {
        "activity_type": "assessment_complete",
        "created_at": "2024-12-23T10:01:00Z"
      }
    ]
  }
}`}
      </CodeBlock>

      <h3 id="analytics-api">Analytics API</h3>

      <h4>GET /api/analytics/summary</h4>
      <p>Get analytics summary for dashboard display.</p>

      <CodeBlock language="json" title="Response">
{`{
  "success": true,
  "data": {
    "total_leads": 1250,
    "total_assessments": 2100,
    "conversion_rate": 0.68,
    "avg_lead_score": 72.5,
    "assessments_by_type": {
      "lead_score": 800,
      "pipeline_leak": 450,
      "proposal": 350,
      "tech_audit": 500
    },
    "leads_by_industry": {
      "technology": 400,
      "healthcare": 300,
      "finance": 250,
      "other": 300
    }
  }
}`}
      </CodeBlock>

      <h2 id="error-handling">Error Handling</h2>

      <p>The API uses standard HTTP status codes and returns detailed error information:</p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div>
          <h4 className="font-semibold mb-3">HTTP Status Codes</h4>
          <ul className="space-y-2 text-sm">
            <li><code className="text-green-600">200</code> - Success</li>
            <li><code className="text-blue-600">201</code> - Created</li>
            <li><code className="text-amber-600">400</code> - Bad Request</li>
            <li><code className="text-red-600">401</code> - Unauthorized</li>
            <li><code className="text-red-600">429</code> - Rate Limited</li>
            <li><code className="text-red-600">500</code> - Server Error</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Error Response Format</h4>
          <CodeBlock language="json">
{`{
  "success": false,
  "error": "Validation failed",
  "details": {
    "email": "Invalid email format",
    "website_url": "URL is required"
  }
}`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="rate-limits">Rate Limits</h2>

      <p>API endpoints have the following rate limits:</p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
        <ul className="space-y-2">
          <li><strong>Assessment API:</strong> 10 requests per minute per IP</li>
          <li><strong>Leads API:</strong> 60 requests per minute per IP</li>
          <li><strong>Analytics API:</strong> 30 requests per minute per IP</li>
        </ul>
      </div>

      <p>Rate limit headers are included in all responses:</p>

      <CodeBlock language="text" title="Rate Limit Headers">
{`X-RateLimit-Limit: 10
X-RateLimit-Remaining: 8
X-RateLimit-Reset: 1640995200`}
      </CodeBlock>

      <h2 id="examples">Code Examples</h2>

      <h3>JavaScript/Node.js</h3>

      <CodeBlock language="javascript" title="Submit Assessment">
{`async function submitAssessment(assessmentData) {
  try {
    const response = await fetch('/api/assessments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assessmentData)
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const result = await response.json();
    
    if (result.success) {
      console.log('Assessment completed:', result.data);
      return result.data;
    } else {
      console.error('Assessment failed:', result.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}`}
      </CodeBlock>

      <h3>Python</h3>

      <CodeBlock language="python" title="Fetch Leads">
{`import requests
import json

def fetch_leads(filters=None):
    url = "http://localhost:3000/api/leads"
    params = filters or {}
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        
        data = response.json()
        if data['success']:
            return data['data']
        else:
            print(f"API Error: {data['error']}")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None

# Usage
leads = fetch_leads({
    'industry': 'technology',
    'min_score': 70,
    'limit': 50
})`}
      </CodeBlock>

      <h3>cURL</h3>

      <CodeBlock language="bash" title="Submit Assessment via cURL">
{`curl -X POST http://localhost:3000/api/assessments \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "test@example.com",
    "app_type": "lead_score",
    "input_data": {
      "company_name": "Test Company",
      "website_url": "https://test.com",
      "industry": "Technology",
      "company_size": "smb"
    }
  }'`}
      </CodeBlock>

      <Callout type="warning" title="Important Notes">
        <ul>
          <li>Always validate input data before sending to the API</li>
          <li>Handle rate limiting gracefully with exponential backoff</li>
          <li>Store assessment IDs for future reference</li>
          <li>Monitor API response times and implement timeouts</li>
        </ul>
      </Callout>

      <h2>SDK Development</h2>

      <p>
        We're working on official SDKs for popular programming languages. 
        In the meantime, you can use the examples above or create wrapper functions 
        for your specific use case.
      </p>

      <Callout type="info" title="Need Help?">
        <p>
          For technical support or questions about API integration, 
          <a href="/contact" className="text-accent hover:underline">contact our development team</a>.
        </p>
      </Callout>
    </DocLayout>
  );
}