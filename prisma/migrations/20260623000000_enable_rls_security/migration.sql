-- Enable Row Level Security (RLS) on all public tables.
--
-- Why: Supabase exposes the `public` schema through PostgREST (anon API key).
-- With RLS disabled, anyone holding the anon key could read/write every row
-- directly, bypassing the Express backend. The Security Advisor flags this.
--
-- Safe for this project: the backend connects via Prisma using the table-owner
-- role (`postgres`) in DATABASE_URL. Table owners BYPASS RLS unless FORCE is
-- used, so Prisma queries keep working. We intentionally add NO policies and do
-- NOT use FORCE -- this simply closes the anon/PostgREST surface.

ALTER TABLE public."User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Profile" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."BankAccount" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."EWallet" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Client" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Product" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Invoice" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."InvoiceItem" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Payment" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."RecurringInvoice" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."RecurringInvoiceItem" ENABLE ROW LEVEL SECURITY;
