import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Server-side client with service role key
const adminUrl = process.env.SUPABASE_URL;
const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = (adminUrl && adminKey)
  ? createClient(adminUrl, adminKey)
  : null;