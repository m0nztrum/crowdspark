import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
    'https://ujgplhkdujbnkhgrenib.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZ3BsaGtkdWpibmtoZ3JlbmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMjMzNzAsImV4cCI6MjA0Njg5OTM3MH0.0p2RqRoO8YXoOGloxJsOIm6GZ6BUjKRmsjmzAzwDpYM',
);

export { supabase };
