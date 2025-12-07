import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zjxedlarvkccijspnwwo.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqeGVkbGFydmtjY2lqc3Bud3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTkxNTcsImV4cCI6MjA4MDM3NTE1N30.46g4qCvPidBttY4swjAiE9qtATxkBlqp0tkXYXWWWwk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
