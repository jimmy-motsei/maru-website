import { NextRequest, NextResponse } from 'next/server';
import { createOrUpdateContact } from '@/lib/hubspot';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadId, email, assessmentType, assessmentData } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Get lead data from database
    const { data: lead, error: leadError } = await supabaseAdmin
      .from('leads')
      .select('*')
      .eq('email', email)
      .single();

    if (leadError && leadError.code !== 'PGRST116') {
      console.error('Database error:', leadError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Prepare HubSpot contact data
    const contactData: any = {
      email,
      firstname: lead?.first_name || '',
      lastname: lead?.last_name || '',
      company: lead?.company_name || '',
      website: lead?.website_url || '',
      phone: lead?.phone || '',
      assessment_count: lead?.assessment_count || 1,
      last_assessment_date: new Date().toISOString(),
    };

    // Add assessment-specific data
    if (assessmentType && assessmentData) {
      switch (assessmentType) {
        case 'lead_score':
          contactData.lead_score_predictor = assessmentData.score;
          break;
        case 'pipeline_leak':
          contactData.pipeline_leak_score = assessmentData.leakScore;
          break;
        case 'proposal':
          contactData.proposal_generated = true;
          break;
        case 'tech_audit':
          contactData.tech_audit_score = assessmentData.efficiencyScore;
          break;
      }
    }

    // Sync to HubSpot
    const hubspotResult = await createOrUpdateContact(contactData);

    if (hubspotResult.success) {
      // Update lead record with HubSpot contact ID
      if (lead && hubspotResult.contactId) {
        await supabaseAdmin
          .from('leads')
          .update({ hubspot_contact_id: hubspotResult.contactId })
          .eq('id', lead.id);
      }

      return NextResponse.json({
        success: true,
        message: hubspotResult.message,
        contactId: hubspotResult.contactId,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: hubspotResult.message,
      }, { status: 500 });
    }

  } catch (error) {
    console.error('HubSpot sync error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}