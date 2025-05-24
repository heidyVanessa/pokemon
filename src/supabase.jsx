// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdgrloucelxsnuwpgnro.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZ3Jsb3VjZWx4c251d3BnbnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODEzOTgsImV4cCI6MjA2MzI1NzM5OH0.umALjTkKPEU7zNqpfnANcN_t_1jU9MAdRL-rtC23nYU';
export const supabase = createClient(supabaseUrl, supabaseKey);