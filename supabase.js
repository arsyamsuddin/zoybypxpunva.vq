const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ywenkjvizpvrxcvgxiaj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZW5ranZpenB2cnhjdmd4aWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NTMxNDksImV4cCI6MjA1NjMyOTE0OX0.DbiizZRd626yNMYjd_dASTrTHaFM7XiTxJdZfu0hkHg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;