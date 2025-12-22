import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { createOrUpdateLead, updateLeadScore, trackActivity } from '@/lib/lead-utils';
import { Assessment, Lead } from '@/lib/types/lead-generation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, app_type, input_data } = body;

    if (!email || !app_type || !input_data) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Create or get lead
    const lead = await createOrUpdateLead({
      email,
      company_name: input_data.company_name,
      website_url: input_data.website_url,
      industry: input_data.industry,
      company_size: input_data.company_size,
    });

    // 2. Track activity
    await trackActivity(lead.id, 'assessment_start', { app_type });

    // 3. Create assessment record
    const { data: assessment, error: assessmentError } = await supabaseAdmin
      .from('assessments')
      .insert({
        lead_id: lead.id,
        app_type,
        input_data,
        status: 'in_progress',
      })
      .select()
      .single();

    if (assessmentError) {
      console.error('Assessment creation error:', assessmentError);
      return NextResponse.json(
        { success: false, error: 'Failed to create assessment' },
        { status: 500 }
      );
    }

    // 4. Process assessment based on type
    let analysisResult;
    switch (app_type) {
      case 'lead_score':
        analysisResult = await processLeadScore(input_data);
        break;
      case 'pipeline_leak':
        analysisResult = await processPipelineLeak(input_data);
        break;
      case 'proposal':
        analysisResult = await processProposal(input_data);
        break;
      case 'tech_audit':
        analysisResult = await processTechAudit(input_data);
        break;
      default:
        return NextResponse.json(
          { success: false, error: 'Invalid assessment type' },
          { status: 400 }
        );
    }

    // 5. Update assessment with results
    const { error: updateError } = await supabaseAdmin
      .from('assessments')
      .update({
        analysis_data: analysisResult,
        score: analysisResult.score,
        recommendations: analysisResult.recommendations,
        status: 'completed',
        completed_at: new Date().toISOString(),
      })
      .eq('id', assessment.id);

    if (updateError) {
      console.error('Assessment update error:', updateError);
      return NextResponse.json(
        { success: false, error: 'Failed to update assessment' },
        { status: 500 }
      );
    }

    // 6. Update lead score and track completion
    await updateLeadScore(lead.id);
    await trackActivity(lead.id, 'assessment_complete', { app_type, score: analysisResult.score });

    return NextResponse.json({
      success: true,
      data: {
        assessment_id: assessment.id,
        ...analysisResult,
      },
    });

  } catch (error) {
    console.error('Assessment API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Assessment processing functions
async function processLeadScore(input: any) {
  const { analyzeWebsite } = await import('@/lib/assessments/lead-score-simple');
  return await analyzeWebsite(input);
}

async function processPipelineLeak(input: any) {
  const { analyzePipeline } = await import('@/lib/assessments/pipeline-leak');
  return await analyzePipeline(input);
}

async function processProposal(input: any) {
  const { generateProposal } = await import('@/lib/assessments/proposal');
  return await generateProposal(input);
}

async function processTechAudit(input: any) {
  const { auditTechStack } = await import('@/lib/assessments/tech-audit');
  return await auditTechStack(input);
}