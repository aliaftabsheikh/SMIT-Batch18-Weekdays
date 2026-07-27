import { createClient } from 'https://esm.sh/@supabase/supabase-js'





const supabaseUrl = 'https://oazlbzfnheikrculotot.supabase.co'
const supabaseKey = 'sb_publishable_bNaKAauKAXmcT2Prd5CZLw_NDPMYNiR'

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: true,       // save the session token in localStorage
        autoRefreshToken: true,     // silently refresh it before it expires
        storage: window.localStorage,
    },
})
