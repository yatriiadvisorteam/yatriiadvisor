import {createClient} from "@supabase/supabase-js"
import { Database } from "../types/supabase";

const supa_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supa_key = process.env.NEXT_PUBLIC_ANNON_KEY!;

export const SupaClient = createClient<Database>(supa_url,supa_key);