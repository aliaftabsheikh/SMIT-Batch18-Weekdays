import {supabase} from "./supabaseClient.js"


const {data, error} = await supabase.auth.getSession()

if (error) {
  console.error('Something went wrong:', error.message)
} else {
  console.log('Connected to Supabase! Session:', data.session)
}