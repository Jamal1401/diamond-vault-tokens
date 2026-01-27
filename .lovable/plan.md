
# Store Consultation Form Submissions in Database

## Overview
Add a database table to permanently store all consultation form submissions. This will give you a complete record of all inquiries, in addition to the email notifications you already receive.

## What Will Be Built

### 1. Database Table for Inquiries
A new `consultation_inquiries` table will store:
- First name, last name, and email
- What describes the inquirer (e.g., "Asset Manager", "Investor")
- What they're interested in (e.g., "Tokenization", "Investment Opportunities")
- Their message
- Submission timestamp
- Email sent status (to track if notification was delivered)

### 2. Updated Backend Function
The existing email-sending function will be enhanced to:
- Save the inquiry to the database first
- Then send the email notification
- Record whether the email was successfully sent

### 3. Benefits
- Permanent record of all inquiries even if emails fail
- Ability to search, filter, and export inquiry data later
- Track inquiry trends over time
- No changes needed to the front-end form

---

## Technical Details

### Database Migration

```sql
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

-- Allow the edge function (using service role) to insert records
-- No public access policies needed since this is admin-only data
```

### Edge Function Update
Update `supabase/functions/send-consultation-email/index.ts` to:
1. Create a Supabase client with the service role key
2. Insert the inquiry record into the database
3. Send the email notification
4. Update the record with email sent status

### Files to Modify
| File | Change |
|------|--------|
| Database | New `consultation_inquiries` table |
| `supabase/functions/send-consultation-email/index.ts` | Add database insert logic |

### Security Considerations
- The table uses RLS but has no public access policies
- Only the backend function (using service role) can write to this table
- Sensitive contact information is protected from public access
