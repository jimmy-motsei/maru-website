/**
 * Lead Engine Database Schema
 * Database: maru_lead_engine
 * 
 * Contains: AI assessments, leads, pipeline analysis, scoring data
 */

import { 
  pgTable, 
  uuid, 
  text, 
  integer,
  timestamp, 
  varchar,
  jsonb,
  boolean
} from 'drizzle-orm/pg-core';

// =============================================================================
// LEADS TABLE
// =============================================================================

export const leads = pgTable('leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').unique().notNull(),
  companyName: text('company_name'),
  website: text('website'),
  industry: varchar('industry', { length: 100 }),
  companySize: varchar('company_size', { length: 50 }),
  source: varchar('source', { length: 100 }),
  hubspotContactId: text('hubspot_contact_id'),
  firstSeen: timestamp('first_seen', { withTimezone: true }).defaultNow(),
  lastSeen: timestamp('last_seen', { withTimezone: true }).defaultNow(),
  totalAssessments: integer('total_assessments').default(0),
  metadata: jsonb('metadata'),
});

// =============================================================================
// ASSESSMENTS TABLE (Website Audits, Lead Scoring)
// =============================================================================

export const assessments = pgTable('assessments', {
  id: uuid('id').primaryKey().defaultRandom(),
  leadId: uuid('lead_id').references(() => leads.id, { onDelete: 'set null' }),
  email: text('email').notNull(),
  type: varchar('type', { length: 50 }).notNull(), // 'website_audit', 'lead_score', 'ai_readiness', 'pipeline_leak'
  url: text('url'),
  companyName: text('company_name'),
  status: varchar('status', { length: 20 }).default('pending'), // 'pending', 'processing', 'completed', 'failed'
  score: integer('score'),
  inputData: jsonb('input_data'),
  analysisData: jsonb('analysis_data'),
  recommendations: text('recommendations').array(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  completedAt: timestamp('completed_at', { withTimezone: true }),
});

// =============================================================================
// PIPELINE ANALYSIS TABLE (for Pipeline Leak Detector)
// =============================================================================

export const pipelineAnalyses = pgTable('pipeline_analyses', {
  id: uuid('id').primaryKey().defaultRandom(),
  leadId: uuid('lead_id').references(() => leads.id, { onDelete: 'set null' }),
  email: text('email').notNull(),
  companyName: text('company_name'),
  totalDeals: integer('total_deals'),
  score: integer('score'),
  conversionRates: jsonb('conversion_rates'),
  avgTimeInStage: jsonb('avg_time_in_stage'),
  leaks: jsonb('leaks'),
  recommendations: text('recommendations').array(),
  summary: jsonb('summary'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// =============================================================================
// OPERATIONS DIAGNOSTIC TABLE
// =============================================================================

export const operationsDiagnosticAssessments = pgTable('ai_readiness_assessments', {
  id: uuid('id').primaryKey().defaultRandom(),
  leadId: uuid('lead_id').references(() => leads.id, { onDelete: 'set null' }),
  email: text('email').notNull(),
  companyName: text('company_name'),
  industry: varchar('industry', { length: 100 }),
  companySize: varchar('company_size', { length: 50 }),
  responses: jsonb('responses'), // Question/answer pairs
  readinessScore: integer('readiness_score'),
  categoryScores: jsonb('category_scores'),
  recommendations: text('recommendations').array(),
  reportGenerated: boolean('report_generated').default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  completedAt: timestamp('completed_at', { withTimezone: true }),
});

// =============================================================================
// LEAD ACTIVITIES TABLE
// =============================================================================

export const leadActivities = pgTable('lead_activities', {
  id: uuid('id').primaryKey().defaultRandom(),
  leadId: uuid('lead_id').references(() => leads.id, { onDelete: 'cascade' }),
  activityType: varchar('activity_type', { length: 100 }).notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// =============================================================================
// OPERATIONS ASSESSMENT REPORTS TABLE
// Stores the generated report for delivery via /report/[token]
// =============================================================================

export const operationsReports = pgTable('operations_reports', {
  id: uuid('id').primaryKey().defaultRandom(),
  token: uuid('token').notNull().unique().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  website: text('website'),
  level: integer('level').notNull(),        // 1 | 2 | 3
  levelLabel: text('level_label').notNull(),
  painTag: text('pain_tag').notNull(),
  segmentB: boolean('segment_b').default(false),
  answers: jsonb('answers').notNull(),       // q1–q5 answer keys
  template: jsonb('template').notNull(),     // ReportTemplate (intro + insights)
  synthesis: jsonb('synthesis'),             // SynthesisOutput.objectA — null if Gemini failed
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type Assessment = typeof assessments.$inferSelect;
export type NewAssessment = typeof assessments.$inferInsert;
export type PipelineAnalysis = typeof pipelineAnalyses.$inferSelect;
export type NewPipelineAnalysis = typeof pipelineAnalyses.$inferInsert;
export type OperationsDiagnostic = typeof operationsDiagnosticAssessments.$inferSelect;
export type NewOperationsDiagnostic = typeof operationsDiagnosticAssessments.$inferInsert;
export type LeadActivity = typeof leadActivities.$inferSelect;
export type NewLeadActivity = typeof leadActivities.$inferInsert;
export type OperationsReport = typeof operationsReports.$inferSelect;
export type NewOperationsReport = typeof operationsReports.$inferInsert;
