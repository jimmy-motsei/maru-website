import { supabaseAdmin } from './supabase';
import { Lead, Assessment, LeadActivity } from './types/lead-generation';

export async function createOrUpdateLead(data: {
  email: string;
  company_name?: string;
  website_url?: string;
  industry?: string;
  company_size?: string;
}): Promise<Lead> {
  const { data: existingLead } = await supabaseAdmin
    .from('leads')
    .select('*')
    .eq('email', data.email)
    .single();

  if (existingLead) {
    const { data: updatedLead } = await supabaseAdmin
      .from('leads')
      .update({
        company_name: data.company_name || existingLead.company_name,
        website_url: data.website_url || existingLead.website_url,
        industry: data.industry || existingLead.industry,
        company_size: data.company_size || existingLead.company_size,
      })
      .eq('id', existingLead.id)
      .select()
      .single();
    
    return updatedLead!;
  }

  const { data: newLead } = await supabaseAdmin
    .from('leads')
    .insert(data)
    .select()
    .single();

  return newLead!;
}

export async function trackActivity(
  leadId: string,
  activityType: LeadActivity['activity_type'],
  metadata?: Record<string, any>
) {
  await supabaseAdmin
    .from('lead_activities')
    .insert({
      lead_id: leadId,
      activity_type: activityType,
      metadata,
    });
}

export async function updateLeadScore(leadId: string) {
  const { data: assessments } = await supabaseAdmin
    .from('assessments')
    .select('score')
    .eq('lead_id', leadId)
    .eq('status', 'completed');

  if (assessments && assessments.length > 0) {
    const avgScore = Math.round(
      assessments.reduce((sum, a) => sum + (a.score || 0), 0) / assessments.length
    );

    await supabaseAdmin
      .from('leads')
      .update({ lead_score: avgScore })
      .eq('id', leadId);
  }
}