// Supabase Configuration
// Untuk production, gunakan environment variables

const SUPABASE_CONFIG = {
    url: import.meta.env?.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env?.VITE_SUPABASE_ANON_KEY || ''
};

// Initialize Supabase Client
let supabase = null;

async function initSupabase() {
    if (typeof createClient !== 'undefined') {
        supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        console.log('✅ Supabase initialized');
        return supabase;
    } else {
        console.warn('⚠️ Supabase library not loaded. Make sure to include it in HTML.');
        return null;
    }
}

// Export untuk digunakan di file lain
window.supabaseClient = {
    init: initSupabase,
    get: () => supabase
};
