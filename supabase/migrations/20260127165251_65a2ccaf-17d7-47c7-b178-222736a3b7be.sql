-- Table for investor interest registrations
CREATE TABLE public.investor_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  investor_types TEXT[] NOT NULL DEFAULT '{}',
  ticket_size TEXT,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.investor_inquiries ENABLE ROW LEVEL SECURITY;

-- Table for asset owner assessment requests
CREATE TABLE public.asset_owner_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  organisation TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  inventory_value TEXT,
  description TEXT,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.asset_owner_inquiries ENABLE ROW LEVEL SECURITY;