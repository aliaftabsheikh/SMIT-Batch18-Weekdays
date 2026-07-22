import { createClient } from 'https://esm.sh/@supabase/supabase-js'





const supabaseUrl = '###'
const supabaseKey = '###'

export const supabase = createClient(supabaseUrl, supabaseKey)
