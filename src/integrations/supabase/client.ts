// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://quifvvzkjpldafjibzkm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1aWZ2dnpranBsZGFmamliemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NzQ1MzQsImV4cCI6MjA0OTU1MDUzNH0.jLEfaOiqrL95bXa_kXsoO1yHHHNkuHeIi3Drp3X2yJM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);