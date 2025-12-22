import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  
  test('Assessment API - Lead Score', async ({ request }) => {
    const response = await request.post('/api/assessments', {
      data: {
        app_type: 'lead_score',
        email: 'test@example.com',
        input_data: {
          website_url: 'https://example.com',
          company_name: 'Test Company',
          industry: 'technology',
          company_size: 'smb'
        }
      }
    });
    
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data.score).toBeGreaterThan(0);
    expect(data.data.factors).toBeDefined();
    expect(data.data.recommendations).toBeDefined();
    expect(Array.isArray(data.data.recommendations)).toBe(true);
  });

  test('Assessment API - Pipeline Leak', async ({ request }) => {
    const csvData = `id,stage,amount,created_date,last_activity,status
1,prospecting,5000,2024-01-01,2024-01-15,open
2,proposal,10000,2024-01-05,2024-01-20,open
3,negotiation,15000,2024-01-10,2024-01-25,open`;

    const response = await request.post('/api/assessments', {
      data: {
        app_type: 'pipeline_leak',
        email: 'test@example.com',
        input_data: {
          csv_data: csvData
        }
      }
    });
    
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data.score).toBeGreaterThanOrEqual(0);
    expect(data.data.total_deals).toBeGreaterThan(0);
    expect(data.data.leaks_detected).toBeDefined();
    expect(data.data.revenue_at_risk).toBeGreaterThanOrEqual(0);
  });

  test('Assessment API - Proposal Generation', async ({ request }) => {
    const response = await request.post('/api/assessments', {
      data: {
        app_type: 'proposal',
        email: 'test@example.com',
        input_data: {
          company_info: {
            name: 'Test Company',
            industry: 'technology',
            size: 'smb',
            challenges: ['automation', 'efficiency']
          },
          project_scope: {
            services: ['lead generation', 'automation'],
            timeline: '3-6months',
            budget_range: '10k-25k'
          },
          decision_makers: {
            primary_contact: 'John Doe',
            stakeholders: ['Jane Smith', 'Bob Johnson']
          }
        }
      }
    });
    
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data.score).toBeGreaterThan(0);
    expect(data.data.proposal_sections).toBeDefined();
    expect(data.data.proposal_sections.executive_summary).toBeDefined();
  });

  test('Assessment API - Tech Audit', async ({ request }) => {
    const response = await request.post('/api/assessments', {
      data: {
        app_type: 'tech_audit',
        email: 'test@example.com',
        input_data: {
          selected_tools: [
            { tool_id: '1', monthly_cost: 50, users_count: 5 },
            { tool_id: '2', monthly_cost: 25, users_count: 3 }
          ],
          company_size: 'smb',
          industry: 'technology'
        }
      }
    });
    
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data.score).toBeGreaterThanOrEqual(0);
    expect(data.data.total_monthly_cost).toBeGreaterThan(0);
    expect(data.data.redundancies_found).toBeDefined();
    expect(Array.isArray(data.data.redundancies_found)).toBe(true);
  });

  test('Tools API', async ({ request }) => {
    const response = await request.get('/api/tools');
    
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
    
    // Check tool structure
    const tool = data.data[0];
    expect(tool.id).toBeDefined();
    expect(tool.name).toBeDefined();
    expect(tool.category).toBeDefined();
  });

  test('Assessment API - Invalid Type', async ({ request }) => {
    const response = await request.post('/api/assessments', {
      data: {
        app_type: 'invalid_type',
        email: 'test@example.com',
        input_data: {}
      }
    });
    
    expect(response.status()).toBe(400);
    const data = await response.json();
    expect(data.success).toBe(false);
    expect(data.error).toContain('Invalid assessment type');
  });

  test('Assessment API - Missing Email', async ({ request }) => {
    const response = await request.post('/api/assessments', {
      data: {
        app_type: 'lead_score',
        input_data: {
          website_url: 'https://example.com'
        }
      }
    });
    
    expect(response.status()).toBe(400);
    const data = await response.json();
    expect(data.success).toBe(false);
    expect(data.error).toContain('Missing required fields');
  });

  test('Assessment API - Response Time', async ({ request }) => {
    const startTime = Date.now();
    
    const response = await request.post('/api/assessments', {
      data: {
        app_type: 'lead_score',
        email: 'test@example.com',
        input_data: {
          website_url: 'https://example.com',
          company_name: 'Test Company',
          industry: 'technology',
          company_size: 'smb'
        }
      }
    });
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    expect(response.ok()).toBeTruthy();
    expect(responseTime).toBeLessThan(30000); // Should complete within 30 seconds
  });
});