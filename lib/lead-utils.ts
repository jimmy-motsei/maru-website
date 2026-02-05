import { dbLeadEngine } from './db';
import { leads, leadActivities, assessments } from './db/schema/lead-engine';
import { eq } from 'drizzle-orm';
import { Lead } from './types/lead-generation';

export async function createOrUpdateLead(data: {
  email: string;
  company_name?: string;
  website_url?: string;
  industry?: string;
  company_size?: string;
}): Promise<Lead> {
  // Check if lead exists
  const existingLeads = await dbLeadEngine
    .select()
    .from(leads)
    .where(eq(leads.email, data.email))
    .limit(1);

  if (existingLeads.length > 0) {
    const existingLead = existingLeads[0];
    
    // Update missing fields
    const updateData: Record<string, string | Date> = {};
    if (data.company_name && !existingLead.companyName) updateData.companyName = data.company_name;
    if (data.website_url && !existingLead.website) updateData.website = data.website_url;
    if (data.industry && !existingLead.industry) updateData.industry = data.industry;
    if (data.company_size && !existingLead.companySize) updateData.companySize = data.company_size;
    
    // Only update if there are changes
    if (Object.keys(updateData).length > 0) {
      const [updatedLead] = await dbLeadEngine
        .update(leads)
        .set({
          ...updateData,
          lastSeen: new Date(),
        })
        .where(eq(leads.id, existingLead.id))
        .returning();
      
      return updatedLead as unknown as Lead;
    }
    
    // Just update last seen
    const [touchedLead] = await dbLeadEngine
      .update(leads)
      .set({ lastSeen: new Date() })
      .where(eq(leads.id, existingLead.id))
      .returning();
      
    return touchedLead as unknown as Lead;
  }

  // Create new lead
  const [newLead] = await dbLeadEngine
    .insert(leads)
    .values({
      email: data.email,
      companyName: data.company_name,
      website: data.website_url,
      industry: data.industry,
      companySize: data.company_size,
      firstSeen: new Date(),
      lastSeen: new Date(),
    })
    .returning();

  return newLead as unknown as Lead;
}

export async function trackActivity(
  leadId: string,
  activityType: string,
  metadata?: Record<string, unknown>
) {
  try {
    await dbLeadEngine.insert(leadActivities).values({
      leadId,
      activityType,
      metadata,
    });
  } catch (error) {
    console.error('Failed to track activity:', error);
  }
}

export async function updateLeadScore(leadId: string) {
  try {
    const completedAssessments = await dbLeadEngine
      .select({ score: assessments.score })
      .from(assessments)
      .where(eq(assessments.leadId, leadId));

    if (completedAssessments && completedAssessments.length > 0) {
      const validScores = completedAssessments.filter(a => a.score !== null).map(a => a.score as number);
      
      if (validScores.length > 0) {
        const avgScore = Math.round(
          validScores.reduce((sum, score) => sum + score, 0) / validScores.length
        );

        // Does leads table have a score column? The schema says `totalAssessments` but not `lead_score` directly in the provided schema view in step 90.
        // Checking step 90 view of schema: `leads` table has: id, email, companyName, website, industry, companySize, source, hubspotContactId, firstSeen, lastSeen, totalAssessments, metadata.
        // It DOES NOT have `lead_score`. 
        // Wait, the original code tried to update `lead_score`. 
        // Let's assume metadata is the place or we need to add a column. 
        // Re-reading original code: `.update({ lead_score: avgScore })`. 
        // If the column existed in Supabase but not in Drizzle schema, that's an issue. 
        // Let's verify Step 90 again.
        // leads table definition: no 'score' or 'lead_score'. 
        // I should probably add it or store it in metadata. 
        // For now, let's store it in metadata to be safe and avoid another migration cycle immediately if not needed for query.
        // OR better: check if `lead_score` was in the "tools-extended.sql" or similar.
        // Result: I will store it in metadata for now to avoid breaking type safety, unless I update the schema.
        // Actually, looking at the previous file content, it was `.update({ lead_score: avgScore })`.
        // This suggests the column likely exists in the DB or Supabase was loose. 
        // Given I just pushed the schema from `lib/db/schema/lead-engine.ts`, if I add it to the code but it's not in schema, Drizzle will complain.
        // Let's safe-guard by putting it in metadata.
        
        /* 
           Original: 
           .update({ lead_score: avgScore })
        */
        
        await dbLeadEngine
          .update(leads)
          .set({ 
             metadata: { score: avgScore } // Storing in metadata for now as schema doesn't have it
          }) 
          .where(eq(leads.id, leadId));
      }
    }
  } catch (error) {
    console.error('Failed to update lead score:', error);
  }
}