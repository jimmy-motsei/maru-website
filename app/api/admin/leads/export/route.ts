import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getSessionFromRequest } from '@/lib/auth';
import { escapeCsvCell } from '@/lib/security';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await getSessionFromRequest(request);
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

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
        escapeCsvCell(lead.email || ''),
        escapeCsvCell(lead.first_name || ''),
        escapeCsvCell(lead.last_name || ''),
        escapeCsvCell(lead.company_name || ''),
        escapeCsvCell(lead.website_url || ''),
        escapeCsvCell(lead.phone || ''),
        lead.lead_score || 0,
        lead.assessment_count || 0,
        escapeCsvCell(new Date(lead.created_at).toLocaleDateString()),
        escapeCsvCell(lead.hubspot_contact_id || '')
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