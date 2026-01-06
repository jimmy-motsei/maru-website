import { NextRequest, NextResponse } from 'next/server';
import { dbWebsite } from '@/lib/db';
import { analyticsEvents } from '@/lib/db/schema/website';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, page, timestamp, assessment_type, step, ...data } = body;

    // Basic validation
    if (!event || !page) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Store analytics event using Drizzle/Neon
    await dbWebsite.insert(analyticsEvents).values({
      eventType: event,
      pagePath: page,
      createdAt: timestamp ? new Date(timestamp) : new Date(),
      assessmentType: assessment_type,
      step,
      metadata: data,
      userAgent: request.headers.get('user-agent') || null,
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}