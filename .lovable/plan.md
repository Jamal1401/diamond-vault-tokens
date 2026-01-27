
# Store All Form Submissions in Database

## Overview
Add database storage for the two remaining forms that currently only show toast notifications:
1. **Investors "Register Interest" form** - collects email, investor type, and expected ticket size
2. **Asset Owners "Request Assessment" form** - collects name, organisation, role, email, inventory value, and description

Both forms will follow the same pattern as the existing Consultation form: save to database first, then send email notification to your team.

## What Will Be Built

### 1. Two New Database Tables

**investor_inquiries** table:
- Email address
- Investor type(s) - Investor, Platform, Advisor (stored as array)
- Expected ticket size
- Email sent status
- Submission timestamp

**asset_owner_inquiries** table:
- Name, organisation, and role
- Email address
- Approximate asset value
- Holdings description
- Email sent status
- Submission timestamp

### 2. Two New Backend Functions

**save-investor-inquiry**: Handles the Investors page form
- Saves inquiry to database
- Sends email notification to your team
- Tracks email delivery status

**save-asset-owner-inquiry**: Handles the Asset Owners page form
- Saves inquiry to database
- Sends email notification to your team
- Tracks email delivery status

### 3. Updated Form Pages

Both forms will be updated to call their respective backend functions instead of just showing a toast.

---

## Technical Details

### Database Migrations

```sql
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
```

### Edge Functions

Two new backend functions following the same pattern as `send-consultation-email`:

| Function | Purpose |
|----------|---------|
| `save-investor-inquiry` | Save investor registrations + send email |
| `save-asset-owner-inquiry` | Save asset owner requests + send email |

### Frontend Updates

| File | Change |
|------|--------|
| `src/pages/tokenisation/Investors.tsx` | Call backend function on form submit |
| `src/pages/tokenisation/AssetOwners.tsx` | Call backend function on form submit |

### Email Notifications

All submissions will trigger email notifications to the same address (`jamal.akhtar@billitondiamondauctions.com`) with appropriate subject lines:
- Investor: "New Investor Interest Registration"
- Asset Owner: "New Asset Assessment Request"

### Security

- Both tables use RLS with no public access policies
- Only backend functions (using service role) can write to these tables
- All sensitive contact information is protected from public access
