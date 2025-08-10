import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xraubwcsqobukkuiqdoz.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYXVid2NzcW9idWtrdWlxZG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjgwNDMsImV4cCI6MjA3MDQwNDA0M30.V5ed-KjpOpQQV0J9gz5RTJrGRqUFsdWaVfTtJt8APxQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
