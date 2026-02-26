import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ikugrhbivvpdbvednqoo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrdWdyaGJpdnZwZGJ2ZWRucW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODg2OTQsImV4cCI6MjA4NzQ2NDY5NH0.7gx6B2hPA3hl5halJWqHfL8tNrbCQxIWBgnhQfDwyec";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
