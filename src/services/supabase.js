import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://xymetprhvhaodfebesxu.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bWV0cHJodmhhb2RmZWJlc3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4OTQ4MDYsImV4cCI6MjAyMjQ3MDgwNn0.ePc7huuU6RZYBejs5IoTEm-r9u4gpN-1KoqYRzhU0ng';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
