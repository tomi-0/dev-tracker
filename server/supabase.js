import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '../server/utils/config.js'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)