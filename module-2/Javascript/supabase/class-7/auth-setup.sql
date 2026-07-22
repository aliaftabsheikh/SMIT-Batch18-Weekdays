-- ============================================================
--  Aurora — per-user todos setup
--  Run this ONCE in the Supabase dashboard → SQL Editor → New query → Run.
-- ============================================================

-- 1. Link every note to the user who created it.
--    `default auth.uid()` auto-fills the logged-in user's id on insert,
--    so the app never has to set user_id itself.
alter table notes add column if not exists user_id uuid default auth.uid();

-- 2. Turn on Row Level Security. Once enabled, EVERYTHING is denied
--    until a policy below explicitly allows it.
alter table notes enable row level security;

-- 3. Policies — each user may only touch their own rows.
--    `auth.uid()` is the id of the currently logged-in user.
create policy "Users can read own notes"
  on notes for select
  using (auth.uid() = user_id);

create policy "Users can insert own notes"
  on notes for insert
  with check (auth.uid() = user_id);

create policy "Users can update own notes"
  on notes for update
  using (auth.uid() = user_id);

create policy "Users can delete own notes"
  on notes for delete
  using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- Notes:
--  * Rows created BEFORE this migration have user_id = NULL and will
--    be invisible to everyone under RLS. That's fine for a clean
--    per-user start. (To claim old rows for a user, you could run:
--    update notes set user_id = '<that-user-uuid>' where user_id is null;)
--
--  * For easy classroom testing, turn OFF email confirmation under
--    Authentication → Providers → Email. Otherwise a new user must
--    click the confirmation email before they can log in.
-- ------------------------------------------------------------
