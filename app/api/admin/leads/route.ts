import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getSessionFromRequest, validateSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  // Check authentication
  const session = getSessionFromRequest(request);
  if (!session || !validateSession(session)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const sort = searchParams.get('sort') || 'created_at';
    const minScore = searchParams.get('min_score');
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = supabaseAdmin
      .from('leads')
      .select('*')
      .range(offset, offset + limit - 1);

    // Apply search filter
    if (search) {
      query = query.or(`email.ilike.%${search}%,company_name.ilike.%${search}%,first_name.ilike.%${search}%,last_name.ilike.%${search}%`);
    }

    // Apply score filter
    if (minScore) {
      query = query.gte('lead_score', parseInt(minScore));
    }

    // Apply sorting
    const sortOrder = sort === 'lead_score' ? { ascending: false } : { ascending: false };
    query = query.order(sort, sortOrder);

    const { data: leads, error } = await query;

    if (error) {
      throw error;
    }

    // Get total count for pagination
    let countQuery = supabaseAdmin
      .from('leads')
      .select('*', { count: 'exact', head: true });

    if (search) {
      countQuery = countQuery.or(`email.ilike.%${search}%,company_name.ilike.%${search}%,first_name.ilike.%${search}%,last_name.ilike.%${search}%`);
    }

    if (minScore) {
      countQuery = countQuery.gte('lead_score', parseInt(minScore));
    }

    const { count } = await countQuery;

    return NextResponse.json({
      leads: leads || [],
      total: count || 0,
      limit,
      offset,
    });

  } catch (error) {
    console.error('Admin leads API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}