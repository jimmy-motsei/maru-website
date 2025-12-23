import { z } from 'zod';

// Common validation schemas
export const emailSchema = z.string().email().max(255);
export const urlSchema = z.string().url().max(500);
export const nameSchema = z.string().min(1).max(100).trim();
export const companySchema = z.string().max(200).trim().optional();
export const phoneSchema = z.string().max(20).trim().optional();

// Assessment validation schemas
export const leadScoreSchema = z.object({
  email: emailSchema,
  website_url: urlSchema,
  company_name: companySchema,
  first_name: nameSchema.optional(),
  last_name: nameSchema.optional(),
});

export const pipelineLeakSchema = z.object({
  email: emailSchema,
  company_name: companySchema,
  csv_data: z.string().min(1).max(1000000), // 1MB limit
});

export const proposalSchema = z.object({
  email: emailSchema,
  company_name: nameSchema,
  project_description: z.string().min(10).max(2000),
  budget_range: z.string().max(50),
  timeline: z.string().max(100),
});

export const techAuditSchema = z.object({
  email: emailSchema,
  company_name: companySchema,
  current_tools: z.array(z.string().max(100)).max(50),
  team_size: z.number().min(1).max(10000),
});

// Sanitization functions
export function sanitizeString(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>'"&]/g, (char) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;',
      };
      return entities[char] || char;
    })
    .trim();
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Only allow http and https
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error('Invalid protocol');
    }
    return parsed.toString();
  } catch {
    throw new Error('Invalid URL format');
  }
}

// Validation middleware
export function validateInput<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean;
  data?: T;
  errors?: string[];
} {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map(err => `${err.path.join('.')}: ${err.message}`),
      };
    }
    return {
      success: false,
      errors: ['Validation failed'],
    };
  }
}

// SQL injection prevention
export function sanitizeForDatabase(input: string): string {
  return input
    .replace(/'/g, "''") // Escape single quotes
    .replace(/;/g, '') // Remove semicolons
    .replace(/--/g, '') // Remove SQL comments
    .replace(/\/\*/g, '') // Remove block comment start
    .replace(/\*\//g, '') // Remove block comment end
    .trim();
}

// File upload validation
export function validateFileUpload(file: File, maxSize: number = 5 * 1024 * 1024): {
  valid: boolean;
  error?: string;
} {
  if (file.size > maxSize) {
    return { valid: false, error: 'File too large' };
  }
  
  const allowedTypes = ['text/csv', 'application/csv', 'text/plain'];
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Invalid file type' };
  }
  
  return { valid: true };
}