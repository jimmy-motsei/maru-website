import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const supabase = supabaseAdmin;
    const journeyData = await request.json();
    
    // Get or create lead based on session/IP
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Create anonymous lead for tracking
    let leadId = null;
    
    // Try to get existing lead from session or create anonymous one
    const { data: existingLead } = await supabase
      .from('leads')
      .select('id')
      .eq('email', `anonymous_${clientIP.replace(/\./g, '_')}@tracking.local`)
      .single();
    
    if (existingLead) {
      leadId = existingLead.id;
    } else {
      const { data: newLead } = await supabase
        .from('leads')
        .insert({
          email: `anonymous_${clientIP.replace(/\./g, '_')}@tracking.local`,
          company_name: 'Anonymous Visitor',
        })
        .select('id')
        .single();
      
      leadId = newLead?.id;
    }
    
    // Track the journey event
    if (leadId) {
      await supabase
        .from('lead_activities')
        .insert({
          lead_id: leadId,
          activity_type: journeyData.event,
          page_url: journeyData.page,
          assessment_type: journeyData.metadata?.tool_type,
          metadata: {
            ...journeyData.metadata,
            timestamp: journeyData.timestamp,
            user_agent: userAgent,
            ip: clientIP,
          },
        });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Journey tracking error:', error);
    return NextResponse.json({ error: 'Failed to track journey' }, { status: 500 });
  }
}