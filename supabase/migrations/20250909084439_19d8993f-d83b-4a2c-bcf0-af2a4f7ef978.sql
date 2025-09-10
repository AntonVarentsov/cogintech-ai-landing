-- Fix RLS policies for form_submissions_log table
-- Remove the existing overly restrictive policy and add proper access control

DROP POLICY IF EXISTS "Service role can manage form logs" ON public.form_submissions_log;

-- Create new policies that properly restrict access
-- Only authenticated users with admin role can view logs (assuming we'll add roles later)
-- For now, completely restrict public access
CREATE POLICY "Restrict all public access to form logs" 
ON public.form_submissions_log 
FOR ALL 
USING (false);

-- Only service role can insert/manage logs (for the edge function)
CREATE POLICY "Service role can manage form logs" 
ON public.form_submissions_log 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix RLS policies for csrf_tokens table
-- Remove the existing policy and add proper access control

DROP POLICY IF EXISTS "Service role can manage CSRF tokens" ON public.csrf_tokens;

-- Completely restrict public access to CSRF tokens
CREATE POLICY "Restrict all public access to csrf tokens" 
ON public.csrf_tokens 
FOR ALL 
USING (false);

-- Only service role can manage CSRF tokens (for the edge functions)
CREATE POLICY "Service role can manage CSRF tokens" 
ON public.csrf_tokens 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix the search_path issue in the cleanup function
CREATE OR REPLACE FUNCTION public.cleanup_old_records()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  -- Удаляем логи старше 30 дней
  DELETE FROM public.form_submissions_log 
  WHERE created_at < NOW() - INTERVAL '30 days';
  
  -- Удаляем истекшие CSRF токены
  DELETE FROM public.csrf_tokens 
  WHERE expires_at < NOW() OR used = TRUE;
END;
$function$;