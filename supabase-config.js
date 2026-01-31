// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

(function () {
    'use strict';

    // Production akan menggunakan environment variables dari Vercel
    // Development menggunakan hardcoded credentials (safe karena .env di gitignore)
    const SUPABASE_CONFIG = {
        url: 'https://wxcsynvsimmnravjnidi.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Y3N5bnZzaW1tbnJhdmpuaWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4MjQwMTUsImV4cCI6MjA4NTQwMDAxNX0.p5qRh2bbj04BO-9_UzzUUh1OH4dZb2BSlBwwoNonuaE'
    };

    // Initialize Supabase Client (akan dipanggil otomatis)
    let supabaseClient = null;

    async function initSupabase() {
        if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
            supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
            console.log('✅ Supabase connected to:', SUPABASE_CONFIG.url);

            // Test connection
            const { data, error } = await supabaseClient.from('presenters').select('count');
            if (error) {
                console.warn('⚠️ Supabase connection warning:', error.message);
            } else {
                console.log('✅ Database ready!');
            }

            return supabaseClient;
        } else {
            console.error('❌ Supabase library not loaded. Make sure to include CDN script in HTML.');
            return null;
        }
    }

    // Auto-initialize saat script loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSupabase);
    } else {
        initSupabase();
    }

    // Export untuk digunakan di file lain (global namespace)
    window.supabaseClient = {
        init: initSupabase,
        get: () => supabaseClient,
        config: SUPABASE_CONFIG
    };
})();
