import { createClient } from 'https://esm.sh/@supabase/supabase-js'





const supabaseUrl = 'https://oazlbzfnheikrculotot.supabase.co'
const supabaseKey = 'sb_publishable_bNaKAauKAXmcT2Prd5CZLw_NDPMYNiR'

export const supabase = createClient(supabaseUrl, supabaseKey)
