// Integração futura: configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env.
// Este protótipo não precisa do Supabase para funcionar.
export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
}
