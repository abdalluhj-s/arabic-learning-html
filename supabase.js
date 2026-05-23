// Supabase Configuration
const SUPABASE_URL = 'https://vqubujpihuesgpgghwgm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2CfrzbkCFF6KsPWC3RtC4g_rgjVtz8l';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Check if user is logged in as admin
async function checkAdminAuth() {
    const { data: { session }, error: sessionError } = await _supabase.auth.getSession();
    
    if (sessionError || !session) {
        console.log("No active session found");
        window.location.href = 'login.html';
        return null;
    }

    const user = session.user;

    // Check user role from your user_roles table
    const { data, error } = await _supabase
        .from('user_roles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle(); // Use maybeSingle to avoid 406 errors if not found

    if (error) {
        console.error("Error fetching user role:", error.message);
        alert('Database Error: ' + error.message);
        return null;
    }

    if (!data || data.role !== 'admin') {
        alert('Access Denied: You are not authorized as an admin. Your ID: ' + user.id);
        window.location.href = 'index.html';
        return null;
    }
    
    return user;
}
