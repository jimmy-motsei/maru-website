import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { createOrUpdateLead, updateLeadScore, trackActivity } from '@/lib/lead-utils';
import { Assessment, Lead } from '@/lib/types/lead-generation';
import { rateLimit, createRateLimitResponse } from '@/lib/rate-limit';
import { validateInput, sanitizeString, sanitizeEmail, sanitizeUrl } from '@/lib/validation';
import { z } from 'zod';

// Request validation schema
const assessmentRequestSchema = z.object({
  email: z.string().email().max(255),
  app_type: z.enum(['lead_score', 'pipeline_leak', 'proposal', 'tech_audit']),
  input_data: z.object({
    company_name: z.string().max(200).optional(),
    website_url: z.string().url().max(500).optional(),
    industry: z.string().max(100).optional(),
    company_size: z.string().max(50).optional(),
  }).passthrough(), // Allow additional fields for different assessment types
});

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting
    const rateLimitResult = rateLimit(request, '/api/assessments');
    const { headers } = createRateLimitResponse(rateLimitResult);
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers }
      );
    }

    // 2. Input validation
    const body = await request.json();
    const validation = validateInput(assessmentRequestSchema, body);
    
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid input', details: validation.errors },
        { status: 400, headers }
      );
    }

    const { email, app_type, input_data } = validation.data!;

    // 3. Sanitize inputs
    const sanitizedData = {
      email: sanitizeEmail(email),
      app_type,
      input_data: {
        ...input_data,
        company_name: input_data.company_name ? sanitizeString(input_data.company_name) : undefined,
        website_url: input_data.website_url ? sanitizeUrl(input_data.website_url) : undefined,
        industry: input_data.industry ? sanitizeString(input_data.industry) : undefined,
      },
    };

    // 4. Create or get lead
    const lead = await createOrUpdateLead({
      email: sanitizedData.email,
      company_name: sanitizedData.input_data.company_name,
      website_url: sanitizedData.input_data.website_url,
      industry: sanitizedData.input_data.industry,
      company_size: sanitizedData.input_data.company_size,
    });

    // 5. Track activity
    await trackActivity(lead.id, 'assessment_start', { app_type });

    // 6. Create assessment record
    const { data: assessment, error: assessmentError } = await supabaseAdmin
      .from('assessments')
      .insert({
        lead_id: lead.id,
        app_type,
        input_data: sanitizedData.input_data,
        status: 'in_progress',
      })
      .select()
      .single();

    if (assessmentError) {
      console.error('Assessment creation error:', assessmentError);
      return NextResponse.json(
        { success: false, error: 'Failed to create assessment' },
        { status: 500, headers }
      );
    }

    // 7. Process assessment based on type
    let analysisResult;
    try {
      switch (app_type) {
        case 'lead_score':
          analysisResult = await processLeadScore(sanitizedData.input_data);
          break;
        case 'pipeline_leak':
          analysisResult = await processPipelineLeak(sanitizedData.input_data);
          break;
        case 'proposal':
          analysisResult = await processProposal(sanitizedData.input_data);
          break;
        case 'tech_audit':
          analysisResult = await processTechAudit(sanitizedData.input_data);
          break;
        default:
          return NextResponse.json(
            { success: false, error: 'Invalid assessment type' },
            { status: 400, headers }
          );
      }
    } catch (processingError) {
      console.error('Assessment processing error:', processingError);
      return NextResponse.json(
        { success: false, error: 'Assessment processing failed' },
        { status: 500, headers }
      );
    }

    // 8. Update assessment with results
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
        { status: 500, headers }
      );
    }

    // 9. Update lead score and track completion
    await updateLeadScore(lead.id);
    await trackActivity(lead.id, 'assessment_complete', { app_type, score: analysisResult.score });

    return NextResponse.json({
      success: true,
      data: {
        assessment_id: assessment.id,
        ...analysisResult,
      },
    }, { headers });

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
  const { analyzePipelineLeaks } = await import('@/lib/assessments/pipeline-leak');
  return await analyzePipelineLeaks(input.csvData);
}

async function processProposal(input: any) {
  const { generateProposal } = await import('@/lib/assessments/proposal');
  return await generateProposal(input);
}

async function processTechAudit(input: any) {
  const { auditTechStack } = await import('@/lib/assessments/tech-audit');
  return await auditTechStack(input);
}