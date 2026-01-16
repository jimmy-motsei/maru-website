/**
 * Environment Variable Validation
 * Validates required environment variables on startup
 */

const requiredEnvVars = [
  'NEXT_PUBLIC_SITE_URL',
] as const;

const optionalEnvVars = [
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY',
  'GOOGLE_AI_API_KEY',
  'HUBSPOT_API_KEY',
  'SMTP_HOST',
  'SMTP_USER',
  'SMTP_PASS',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD',
] as const;

export function validateEnv() {
  const missing: string[] = [];
  
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  });

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.join('\n')}\n\nPlease check your .env.local file.`
    );
  }
}

export function getEnv(key: string, fallback?: string): string {
  const value = process.env[key];
  if (!value && !fallback) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return value || fallback || '';
}
