// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://xsowdwnpguftmlvsogdb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzb3dkd25wZ3VmdG1sdnNvZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTc0MzQsImV4cCI6MjA3MTMzMzQzNH0.yFz01fJCqTuaY-jzgqlcgueiU4Id71t66xtjhAGXNWI';

export const supabase = createClient(supabaseUrl, supabaseKey);
