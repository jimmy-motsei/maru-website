import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getSessionFromRequest } from '@/lib/auth';
import { z } from 'zod';
import { sanitizeIlikeTerm } from '@/lib/security';

const allowedSortFields = ['created_at', 'lead_score', 'email', 'company_name'] as const;

const querySchema = z.object({
  search: z.string().max(120).optional(),
  sort: z.enum(allowedSortFields).optional(),
  min_score: z.coerce.number().int().min(0).max(100).optional(),
  limit: z.coerce.number().int().min(1).max(200).optional(),
  offset: z.coerce.number().int().min(0).max(10000).optional(),
});

export async function GET(request: NextRequest) {
  const session = await getSessionFromRequest(request);
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const parsed = querySchema.safeParse({
      search: searchParams.get('search') || undefined,
      sort: searchParams.get('sort') || undefined,
      min_score: searchParams.get('min_score') || undefined,
      limit: searchParams.get('limit') || undefined,
      offset: searchParams.get('offset') || undefined,
    });

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 });
    }

    const search = sanitizeIlikeTerm(parsed.data.search || '');
    const sort = parsed.data.sort || 'created_at';
    const minScore = parsed.data.min_score;
    const limit = parsed.data.limit ?? 100;
    const offset = parsed.data.offset ?? 0;

    let query = supabaseAdmin
      .from('leads')
      .select('*')
      .range(offset, offset + limit - 1);

    // Apply search filter
    if (search) {
      query = query.or(`email.ilike.%${search}%,company_name.ilike.%${search}%,first_name.ilike.%${search}%,last_name.ilike.%${search}%`);
    }

    // Apply score filter
    if (typeof minScore === 'number') {
      query = query.gte('lead_score', minScore);
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

    if (typeof minScore === 'number') {
      countQuery = countQuery.gte('lead_score', minScore);
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