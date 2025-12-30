import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { getAvailableTools } from '@/lib/assessments/tech-audit';

export async function GET() {
  try {
    // const tools = await getAvailableTools();
    const tools: any[] = [];
    return NextResponse.json({
      success: true,
      tools,
    });
  } catch (error) {
    console.error('Tools API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tools' },
      { status: 500 }
    );
  }
}