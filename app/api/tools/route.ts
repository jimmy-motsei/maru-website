import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: tools, error } = await supabaseAdmin
      .from('tools')
      .select('*')
      .order('name');

    if (error) {
      console.error('Tools fetch error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch tools' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: tools || [],
    });

  } catch (error) {
    console.error('Tools API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}