/**
 * Drizzle Kit Configuration
 * 
 * Multi-Database Strategy:
 * Since Drizzle Kit works with one database at a time, we use a DATABASE_TARGET
 * environment variable to switch between databases during migrations.
 * 
 * Usage:
 *   DATABASE_TARGET=website npx drizzle-kit push
 *   DATABASE_TARGET=lead_engine npx drizzle-kit push
 * 
 * Or use npm scripts:
 *   npm run db:push:website
 *   npm run db:push:lead-engine
 */

import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// Load .env.local (where Vercel env pull writes)
dotenv.config({ path: '.env.local' });

const target = process.env.DATABASE_TARGET || 'website';

// Configuration maps for each database
const configs = {
  website: {
    schema: './lib/db/schema/website.ts',
    out: './lib/db/migrations/website',
    url: process.env.DATABASE_URL_WEBSITE,
  },
  lead_engine: {
    schema: './lib/db/schema/lead-engine.ts',
    out: './lib/db/migrations/lead-engine',
    url: process.env.DATABASE_URL_LEAD_ENGINE,
  },
};

const config = configs[target as keyof typeof configs];

if (!config) {
  throw new Error(`Invalid DATABASE_TARGET: ${target}. Use 'website' or 'lead_engine'`);
}

if (!config.url) {
  console.warn(`⚠️  Warning: No database URL configured for ${target}`);
  console.warn(`   Set DATABASE_URL_${target.toUpperCase()} in your .env.local`);
}

export default defineConfig({
  schema: config.schema,
  out: config.out,
  dialect: 'postgresql',
  dbCredentials: {
    url: config.url || '',
  },
  verbose: true,
  strict: true,
});
