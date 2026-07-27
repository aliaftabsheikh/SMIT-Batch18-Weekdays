-- ============================================================
--  Aurora — per-user todos setup
--  Run in the Supabase dashboard → SQL Editor → New query → Run.
--
--  Personalization is done in the APP (crud.js): every insert stores the
--  logged-in user's id in user_id, and loads/searches filter by it
--  (.eq('user_id', ...)). RLS is intentionally OFF because this project's
--  login tokens (ES256) aren't being validated by the database, which made
--  auth.uid() null and blocked every row. Client-side filtering keeps each
--  user seeing only their own todos.
--  NOTE: with RLS off there is no database-level security — fine for a
--  classroom/learning app, not for production.
-- ============================================================

-- 1. Recreate the notes table with every column the app uses (safe to re-run).
create table if not exists notes (
    id          bigint generated always as identity primary key,
    created_at  timestamptz not null default now(),
    title       text not null,
    content     text,
    is_done     boolean not null default false,
    status      text not null default 'todo',  -- Kanban stage: 'todo' | 'doing' | 'done'
    user_id     uuid,                      -- set explicitly by the app on insert
    image_url   text                       -- public URL of an optional attached photo
);

-- 1b. Kanban board: add the status column on existing tables and backfill it.
--     Run these two lines if your notes table was created before the board update.
alter table notes add column if not exists status text not null default 'todo';
update notes set status = case when is_done then 'done' else 'todo' end
  where status is null or status = 'todo' and is_done = true;

-- 1c. Photo attachments: add the image_url column on existing tables.
--     Run this line if your notes table was created before the photo update.
alter table notes add column if not exists image_url text;

-- 2. Make sure RLS is OFF so the app can read/write with the publishable key.
alter table notes disable row level security;

-- 3. Remove any leftover per-user policies from an earlier RLS attempt.
drop policy if exists "Users can read own notes"   on notes;
drop policy if exists "Users can insert own notes" on notes;
drop policy if exists "Users can update own notes" on notes;
drop policy if exists "Users can delete own notes" on notes;

-- ------------------------------------------------------------
-- Classroom tip: keep "Confirm email" OFF under
-- Authentication → Providers → Email so new sign-ups can log in immediately.
-- ------------------------------------------------------------

-- ============================================================
--  Storage — allow the publishable key to upload/read files
--
--  storage.objects always has RLS enabled (you can't disable it like a
--  normal table), so uploads with the anon/publishable key are rejected
--  by default ("new row violates row-level security policy"). These
--  policies open up just the 'batch18' bucket, matching the classroom
--  "keep it simple" approach used for notes above.
--  NOTE: this makes the bucket world-writable/readable — fine for a
--  classroom demo, not for production.
-- ============================================================

drop policy if exists "Public can upload to batch18" on storage.objects;
drop policy if exists "Public can read batch18"       on storage.objects;

create policy "Public can upload to batch18"
on storage.objects for insert
to public
with check (bucket_id = 'batch18');

create policy "Public can read batch18"
on storage.objects for select
to public
using (bucket_id = 'batch18');
