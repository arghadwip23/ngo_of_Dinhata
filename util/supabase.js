import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_API
    );
   
export default supabase