-- Create table for consultation inquiries
CREATE TABLE public.consultation_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  describes_you TEXT NOT NULL,
  interested_in TEXT NOT NULL,
  message TEXT NOT NULL,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_inquiries ENABLE ROW LEVEL SECURITY;

-- No public access policies - only service role can access this table