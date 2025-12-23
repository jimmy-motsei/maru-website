import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, page, timestamp, assessment_type, step, ...data } = body;

    // Basic validation
    if (!event || !page) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = supabaseAdmin;

    // Store analytics event
    const { error } = await supabase
      .from('analytics_events')
      .insert({
        event_type: event,
        page_path: page,
        timestamp: new Date(timestamp),
        assessment_type,
        step,
        metadata: data,
        user_agent: request.headers.get('user-agent'),
        ip_address: request.ip || request.headers.get('x-forwarded-for'),
      });

    if (error) {
      console.error('Analytics error:', error);
      return NextResponse.json({ error: 'Failed to store event' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}