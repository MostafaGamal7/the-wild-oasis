import { createClient } from "@supabase/supabase-js";

// OLD
// Create a single supabase client for interacting with your database
// export const supabaseUrl = "https://xckmclmqaqrgcxhdozzu.supabase.co";
// const supabase = createClient(supabaseUrl, process.env.SUPABSE_TOKEN);

export const supabaseUrl = "https://gadcehaddekxmslafamf.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_TOKEN;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
