import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zjxedlarvkccijspnwwo.supabase.co"
const supabaseAnonKey = "sb_publishable_51jcxIYbafMbl3GB9-4v7A_NQD_cK3C"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
