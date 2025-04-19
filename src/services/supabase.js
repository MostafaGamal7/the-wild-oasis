import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://xckmclmqaqrgcxhdozzu.supabase.co";
const supabase = createClient(supabaseUrl, process.env.SUPABSE_TOKEN);
export default supabase;
