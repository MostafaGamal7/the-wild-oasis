import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://xckmclmqaqrgcxhdozzu.supabase.co";
const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhja21jbG1xYXFyZ2N4aGRvenp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1MDU3MTQsImV4cCI6MjAxNTA4MTcxNH0.BQusEUVLiF8xXSJqkNNPztu8ssnFV_X1Zqy04jH1o_4"
);
export default supabase;
