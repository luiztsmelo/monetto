import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://vsctgtixkrzdzxkozilc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzY3RndGl4a3J6ZHp4a296aWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1Nzc2ODcsImV4cCI6MTk4OTE1MzY4N30.-ablMa0O_7rovwm7oyEe_vD2Nj2X7aSfEbR6SLD8a04'
)
