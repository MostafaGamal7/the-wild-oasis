import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://xckmclmqaqrgcxhdozzu.supabase.co";
// const supabase = createClient(supabaseUrl, process.env.SUPABSE_TOKEN);
const supabaseKey = import.meta.env.VITE_SUPABASE_TOKEN;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
