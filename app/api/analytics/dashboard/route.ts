import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getSessionFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const session = await getSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const timeframe = searchParams.get('timeframe') || '30d';
    const assessmentType = searchParams.get('assessment_type');

    // Calculate date range
    const endDate = new Date();
    const startDate = new Date();
    
    switch (timeframe) {
      case '7d':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(endDate.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(endDate.getDate() - 90);
        break;
      default:
        startDate.setDate(endDate.getDate() - 30);
    }

    // Get assessment metrics
    let assessmentQuery = supabaseAdmin
      .from('assessments')
      .select('*')
      .gte('created_at', startDate.toISOString())
      .lte('created_at', endDate.toISOString());

    if (assessmentType) {
      assessmentQuery = assessmentQuery.eq('app_type', assessmentType);
    }

    const { data: assessments, error: assessmentError } = await assessmentQuery;

    if (assessmentError) {
      throw assessmentError;
    }

    // Get lead metrics
    const { data: leads, error: leadError } = await supabaseAdmin
      .from('leads')
      .select('*')
      .gte('created_at', startDate.toISOString())
      .lte('created_at', endDate.toISOString());

    if (leadError) {
      throw leadError;
    }

    // Calculate metrics
    const metrics = {
      overview: {
        totalAssessments: assessments?.length || 0,
        totalLeads: leads?.length || 0,
        conversionRate: leads?.length && assessments?.length 
          ? ((leads.length / assessments.length) * 100).toFixed(1)
          : '0',
        avgLeadScore: leads?.length 
          ? (leads.reduce((sum, lead) => sum + (lead.lead_score || 0), 0) / leads.length).toFixed(1)
          : '0',
      },
      
      assessmentBreakdown: assessments?.reduce((acc, assessment) => {
        const type = assessment.app_type;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {},
      
      dailyStats: generateDailyStats(assessments || [], leads || [], startDate, endDate),
      
      topPerformers: assessments
        ?.filter(a => a.score)
        ?.sort((a, b) => b.score - a.score)
        ?.slice(0, 10)
        ?.map(a => ({
          id: a.id,
          type: a.app_type,
          score: a.score,
          created_at: a.created_at,
        })) || [],
    };

    return NextResponse.json(metrics);

  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

interface Assessment {
  id: string;
  app_type: string;
  score?: number;
  created_at: string;
}

interface Lead {
  id: string;
  lead_score?: number;
  created_at: string;
}

function generateDailyStats(assessments: Assessment[], leads: Lead[], startDate: Date, endDate: Date) {
  const stats = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split('T')[0];
    
    const dayAssessments = assessments.filter(a => 
      a.created_at.startsWith(dateStr)
    ).length;
    
    const dayLeads = leads.filter(l => 
      l.created_at.startsWith(dateStr)
    ).length;

    stats.push({
      date: dateStr,
      assessments: dayAssessments,
      leads: dayLeads,
      conversion: dayAssessments > 0 ? ((dayLeads / dayAssessments) * 100).toFixed(1) : '0',
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return stats;
}