import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { data: leads, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    // Create CSV content
    const headers = [
      'Email',
      'First Name',
      'Last Name', 
      'Company',
      'Website',
      'Phone',
      'Lead Score',
      'Assessment Count',
      'Created Date',
      'HubSpot ID'
    ];

    const csvRows = [
      headers.join(','),
      ...(leads || []).map(lead => [
        `"${lead.email || ''}"`,
        `"${lead.first_name || ''}"`,
        `"${lead.last_name || ''}"`,
        `"${lead.company_name || ''}"`,
        `"${lead.website_url || ''}"`,
        `"${lead.phone || ''}"`,
        lead.lead_score || 0,
        lead.assessment_count || 0,
        `"${new Date(lead.created_at).toLocaleDateString()}"`,
        `"${lead.hubspot_contact_id || ''}"`
      ].join(','))
    ];

    const csvContent = csvRows.join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="leads-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });

  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export leads' },
      { status: 500 }
    );
  }
}