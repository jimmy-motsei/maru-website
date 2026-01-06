# Neon Database Setup - Manual Action Plan

## Overview

This document provides step-by-step instructions for setting up the multi-database architecture in Neon for the Maru website.

**Architecture:**
- **Single Neon Project** → `neon-teal-window` (or your existing project)
- **Two Logical Databases:**
  - `maru_website` - Core site data (users, sessions)
  - `maru_lead_engine` - AI tools data (assessments, leads, pipeline analysis)

---

## Step 1: Create Logical Databases in Neon

### Option A: Via Neon SQL Editor

1. Go to [Neon Console](https://console.neon.tech)
2. Select your project (`neon-teal-window`)
3. Click **SQL Editor** in the left sidebar
4. Run the following SQL commands:

```sql
-- Create the databases
CREATE DATABASE maru_website;
CREATE DATABASE maru_lead_engine;

-- Verify creation
SELECT datname FROM pg_database WHERE datname LIKE 'maru_%';
```

### Option B: Via Neon Console UI

1. Go to [Neon Console](https://console.neon.tech)
2. Select your project
3. Click **Databases** in the left sidebar
4. Click **New Database**
5. Create `maru_website`
6. Repeat for `maru_lead_engine`

---

## Step 2: Get Connection Strings

For each database, you need the **pooled** connection string.

1. In Neon Console, click **Connection Details**
2. Select the database dropdown and choose `maru_website`
3. Ensure **Pooled connection** is selected
4. Copy the connection string (it should contain `-pooler` in the hostname)
5. Repeat for `maru_lead_engine`

**Connection String Format:**
```
postgres://[user]:[password]@[endpoint]-pooler.[region].aws.neon.tech/[database]?sslmode=require
```

Example:
```
postgres://neondb_owner:abc123@ep-cool-night-123456-pooler.us-east-1.aws.neon.tech/maru_website?sslmode=require
```

---

## Step 3: Configure Environment Variables

### Local Development

Update your `.env.local`:

```bash
DATABASE_URL_WEBSITE=postgres://neondb_owner:xxxxx@ep-xxxxx-xxxxx-pooler.us-east-1.aws.neon.tech/maru_website?sslmode=require
DATABASE_URL_LEAD_ENGINE=postgres://neondb_owner:xxxxx@ep-xxxxx-xxxxx-pooler.us-east-1.aws.neon.tech/maru_lead_engine?sslmode=require
```

### Vercel Production

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project (`maru-website`)
3. Go to **Settings** → **Environment Variables**
4. Add both variables:
   - `DATABASE_URL_WEBSITE` = (your pooled connection string)
   - `DATABASE_URL_LEAD_ENGINE` = (your pooled connection string)
5. Select environments: **Production**, **Preview**, **Development**

---

## Step 4: Push Database Schemas

Run these commands from the `maru-website` project root:

```bash
# Push schema to maru_website database
npm run db:push:website

# Push schema to maru_lead_engine database
npm run db:push:lead-engine

# Or push both at once
npm run db:push:all
```

---

## Step 5: Verify with Drizzle Studio

Open Drizzle Studio to inspect your databases:

```bash
# View website database
npm run db:studio:website

# View lead engine database
npm run db:studio:lead-engine
```

This opens a browser UI at `http://localhost:4983` where you can:
- Browse tables
- Insert test data
- Run queries

---

## Step 6: Test Database Connections

Create a simple API route to test connections:

```typescript
// app/api/db-health/route.ts
import { checkDatabaseConnections } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const health = await checkDatabaseConnections();
  return NextResponse.json(health);
}
```

Then visit: `http://localhost:3000/api/db-health`

Expected response:
```json
{
  "website": true,
  "leadEngine": true
}
```

---

## Troubleshooting

### Connection Refused
- Ensure you're using the **pooled** connection string (with `-pooler` in hostname)
- Check that the database exists in Neon

### Authentication Failed
- Verify the password in your connection string
- Check that the user has access to the database

### Too Many Connections (in development)
- The connection caching in `lib/db/index.ts` should prevent this
- If issues persist, restart your dev server

---

## Schema Tables Reference

### maru_website Database
| Table | Description |
|-------|-------------|
| `users` | User accounts (id, email, name, role) |
| `sessions` | Authentication sessions |
| `admin_users` | Admin dashboard users |

### maru_lead_engine Database
| Table | Description |
|-------|-------------|
| `leads` | Contact/company information |
| `assessments` | Website audits, lead scoring |
| `pipeline_analyses` | Pipeline leak detector results |
| `ai_readiness_assessments` | AI readiness questionnaire results |

---

## Next Steps

1. ✅ Create databases in Neon
2. ✅ Configure environment variables (local + Vercel)
3. ✅ Run `npm run db:push:all` to create tables
4. ⬜ Migrate existing data from Supabase (if applicable)
5. ⬜ Update API routes to use new `dbLeadEngine` client
6. ⬜ Test thoroughly in development
7. ⬜ Deploy to production
