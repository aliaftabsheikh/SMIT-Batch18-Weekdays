# Supabase with JavaScript — A Complete Beginner's Guide

A step-by-step tutorial that takes you from zero to a working app backend using Supabase and plain JavaScript. No prior backend experience needed — if you can write a bit of JS and run a terminal command, you're ready.

*Written for `@supabase/supabase-js` **v2** (the current major version).*

---

## Table of Contents

1. [What is Supabase?](#1-what-is-supabase)
2. [How this tutorial works](#2-how-this-tutorial-works)
3. [Step 1 — Create your Supabase project](#3-step-1--create-your-supabase-project)
4. [Step 2 — Find your API keys](#4-step-2--find-your-api-keys)
5. [Step 3 — Set up your JavaScript project](#5-step-3--set-up-your-javascript-project)
6. [Step 4 — Connect to Supabase](#6-step-4--connect-to-supabase)
7. [Step 5 — Create your first table](#7-step-5--create-your-first-table)
8. [Step 6 — Insert data (Create)](#8-step-6--insert-data-create)
9. [Step 7 — Read data (Select)](#9-step-7--read-data-select)
10. [Step 8 — Filtering and querying](#10-step-8--filtering-and-querying)
11. [Step 9 — Update and Delete](#11-step-9--update-and-delete)
12. [Step 10 — Authentication](#12-step-10--authentication)
13. [Step 11 — Row Level Security (RLS)](#13-step-11--row-level-security-rls)
14. [Step 12 — Realtime subscriptions](#14-step-12--realtime-subscriptions)
15. [Step 13 — File storage](#15-step-13--file-storage)
16. [Step 14 — A small project: a shared task list](#16-step-14--a-small-project-a-shared-task-list)
17. [Common mistakes and how to fix them](#17-common-mistakes-and-how-to-fix-them)
18. [Where to go next](#18-where-to-go-next)

---

## 1. What is Supabase?

Supabase is an open-source "backend-as-a-service." In plain terms, it gives you the pieces most apps need on the server side without you having to build or host them yourself:

- **A database** — a full PostgreSQL database (a powerful, industry-standard SQL database).
- **An auto-generated API** — you create tables, and Supabase instantly gives you a way to read and write them from your app.
- **Authentication** — sign-up, log-in, passwords, magic links, and social logins (Google, GitHub, etc.).
- **Realtime** — get live updates pushed to your app the moment data changes.
- **Storage** — upload and serve files like images and PDFs.
- **Edge Functions** — run custom server code when you need it.

The mental model: **Supabase is your backend, and the `supabase-js` library is the remote control you use from JavaScript to talk to it.** You'll spend most of your time writing small JS calls like "insert this row" or "get me these users," and Supabase handles the database, security, and networking.

It's often compared to Firebase, but the big difference is that Supabase is built on a real SQL database, so your data lives in normal tables you can query with SQL.

---

## 2. How this tutorial works

You'll build understanding in layers. Each step is small and runnable. By the end you'll have touched every core feature and built a tiny working app.

**What you need installed:**

- **Node.js version 22 or newer.** (Supabase's library dropped support for Node 20 in early 2026, so use an active LTS version.) Check yours with `node --version`.
- A code editor (VS Code is a common free choice).
- A free Supabase account (we set this up in Step 1).

**A note on running the code:** Most examples below are meant to run in a Node.js script (a `.js` file you run with `node yourfile.js`). Where browser-only behavior matters (like auth sessions), it's called out.

---

## 3. Step 1 — Create your Supabase project

1. Go to **[supabase.com](https://supabase.com)** and sign up (you can sign in with GitHub).
2. Once in the dashboard, click **New Project**.
3. Fill in:
   - **Name** — anything, e.g. `my-first-app`.
   - **Database Password** — Supabase generates a strong one. **Copy it and save it somewhere safe.** You'll need it for direct database access later, and it can't be shown again.
   - **Region** — pick the one geographically closest to you or your users for lower latency.
4. Click **Create new project** and wait about a minute while Supabase provisions your database.

That's it — you now have a live PostgreSQL database and a full backend running in the cloud.

---

## 4. Step 2 — Find your API keys

Your app connects to Supabase using two pieces of information: your **Project URL** and an **API key**.

In the dashboard, go to **Project Settings** (the gear icon) → **API**. You'll find:

- **Project URL** — looks like `https://abcdefgh.supabase.co`. This is your project's address.
- **API keys** — Supabase has been moving to clearer names here:
  - **Publishable key** (older projects call this the **`anon` / public key**) — safe to use in a browser or any client-side code. It's designed to be public. Your security comes from Row Level Security (covered in Step 11), *not* from hiding this key.
  - **Secret key** (older projects call this the **`service_role` key**) — this **bypasses all security rules**. It must **only** ever be used on a server you control, never in browser code, and never committed to a public repo.

> **The single most important security rule in this whole tutorial:** the publishable/anon key is fine to expose; the secret/service_role key must be kept private, always. Treat it like a password.

Copy your **Project URL** and your **publishable (anon) key** — we'll use them next.

---

## 5. Step 3 — Set up your JavaScript project

Open a terminal, create a folder, and initialize a project:

```bash
mkdir my-first-app
cd my-first-app
npm init -y
```

Install the Supabase client library:

```bash
npm install @supabase/supabase-js
```

We'll use ES module syntax (`import`), so tell Node to treat your files as modules. Open the `package.json` that was just created and add this line:

```json
{
  "type": "module"
}
```

Now create a file to hold your secrets so they aren't hardcoded everywhere. Create a file named `.env`:

```bash
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_KEY=your-publishable-anon-key-here
```

And create a `.gitignore` file so you never accidentally commit secrets or dependencies:

```
node_modules
.env
```

To load the `.env` file, install one small helper:

```bash
npm install dotenv
```

---

## 6. Step 4 — Connect to Supabase

Create a file called `supabaseClient.js`. This creates one shared client that the rest of your app imports.

```js
// supabaseClient.js
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

That `supabase` object is your remote control. Every database query, auth call, and file upload goes through it.

Let's confirm the connection works. Create `test.js`:

```js
// test.js
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase.auth.getSession()

if (error) {
  console.error('Something went wrong:', error.message)
} else {
  console.log('Connected to Supabase! Session:', data.session)
}
```

Run it:

```bash
node test.js
```

You should see `Connected to Supabase! Session: null` (null is expected — nobody is logged in yet). If you see a connection error instead, double-check your URL and key in `.env`.

> **The golden pattern:** almost every Supabase call returns an object shaped like `{ data, error }`. You should **always check `error` first**, then use `data`. Supabase does not throw exceptions for most failures — it hands you an `error` object instead. Ignoring it is the number-one source of confusing bugs.

---

## 7. Step 5 — Create your first table

Databases store data in **tables** (think of a spreadsheet: columns define the shape, rows are the records). Let's make a `notes` table.

Go to the Supabase dashboard → **SQL Editor** → **New query**, paste this, and click **Run**:

```sql
create table notes (
  id bigint generated always as identity primary key,
  title text not null,
  content text,
  is_done boolean default false,
  created_at timestamptz default now()
);
```

What each part means:

- `id bigint generated always as identity primary key` — an auto-incrementing unique ID for every row. You never set this yourself; the database does.
- `title text not null` — a required text column.
- `content text` — optional text.
- `is_done boolean default false` — a true/false flag that defaults to false.
- `created_at timestamptz default now()` — automatically records when the row was created.

You could also build this table visually with the **Table Editor**, but SQL is worth getting comfortable with early.

> **Heads up on newer projects:** Supabase is rolling out a change (enforced on all projects by late 2026) where new tables in the public schema may need an explicit permission grant before the auto-generated API can see them. If you create a table and your app gets a "relation not found" or permission error, check the Table Editor's API/exposure settings for that table, or add the appropriate `grant` statements. For most tutorial projects created through the dashboard, tables are exposed automatically.

---

## 8. Step 6 — Insert data (Create)

Now let's add rows from JavaScript. Create `insert.js`:

```js
// insert.js
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase
  .from('notes')
  .insert({ title: 'Learn Supabase', content: 'Follow the beginner guide' })
  .select()

if (error) {
  console.error('Insert failed:', error.message)
} else {
  console.log('Inserted:', data)
}
```

Run it with `node insert.js`.

Two important things here:

1. **`.from('notes')`** picks the table you're working with. You'll start almost every database query this way.
2. **`.select()` at the end.** In `supabase-js` v2, `insert()`, `update()`, `delete()`, and `upsert()` **do not return the affected rows by default.** If you want the new row back (for example to get its auto-generated `id`), you must chain `.select()`. This is one of the most common surprises for beginners — an insert can succeed but `data` comes back `null` simply because you forgot `.select()`.

You can insert multiple rows at once by passing an array:

```js
const { data, error } = await supabase
  .from('notes')
  .insert([
    { title: 'Buy milk' },
    { title: 'Walk the dog', content: 'Before 6pm' },
  ])
  .select()
```

---

## 9. Step 7 — Read data (Select)

Reading is done with `.select()`. Create `read.js`:

```js
// read.js
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase
  .from('notes')
  .select('*')

if (error) {
  console.error('Read failed:', error.message)
} else {
  console.log('All notes:', data)
}
```

`select('*')` means "give me every column." You can ask for only specific columns to keep responses small:

```js
const { data } = await supabase
  .from('notes')
  .select('id, title, is_done')
```

> **Good to know:** By default, Supabase returns a **maximum of 1,000 rows** per query to protect against accidentally pulling huge amounts of data. For bigger datasets you'll paginate with `.range()` (shown in the next step). This limit is configurable in your project's API settings, but keeping it modest is a healthy default.

---

## 10. Step 8 — Filtering and querying

Real apps rarely want *all* rows. Supabase gives you a chainable set of filters. Here are the ones you'll use constantly.

**Match an exact value with `.eq()`** (equals):

```js
const { data } = await supabase
  .from('notes')
  .select('*')
  .eq('is_done', false)   // only notes that aren't done
```

**Other comparison filters:**

```js
.gt('created_at', someDate)   // greater than
.gte('created_at', someDate)  // greater than or equal
.lt('id', 100)                // less than
.neq('title', 'Buy milk')     // not equal
```

**Search text with `.ilike()`** (case-insensitive pattern match; `%` is a wildcard):

```js
const { data } = await supabase
  .from('notes')
  .select('*')
  .ilike('title', '%learn%')   // titles containing "learn"
```

**Match several possible values with `.in()`:**

```js
.in('id', [1, 2, 3])
```

**Sort, limit, and paginate:**

```js
const { data } = await supabase
  .from('notes')
  .select('*')
  .order('created_at', { ascending: false })  // newest first
  .limit(10)                                   // at most 10 rows

// Pagination: rows 0–9, then 10–19, etc.
const { data: pageTwo } = await supabase
  .from('notes')
  .select('*')
  .range(10, 19)
```

**Get exactly one row with `.single()`** (returns an object instead of an array, and errors if it doesn't find exactly one):

```js
const { data, error } = await supabase
  .from('notes')
  .select('*')
  .eq('id', 1)
  .single()
```

Because filters are chainable, you combine them freely:

```js
const { data } = await supabase
  .from('notes')
  .select('id, title')
  .eq('is_done', false)
  .ilike('title', '%buy%')
  .order('created_at', { ascending: false })
  .limit(5)
```

---

## 11. Step 9 — Update and Delete

**Update** changes existing rows. Always pair it with a filter (like `.eq()`) so you don't accidentally update every row, and add `.select()` if you want the updated rows back:

```js
// update.js
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase
  .from('notes')
  .update({ is_done: true })
  .eq('id', 1)
  .select()

if (error) console.error(error.message)
else console.log('Updated:', data)
```

**Delete** removes rows. Same rule — filter first, or you'll delete everything:

```js
// delete.js
import { supabase } from './supabaseClient.js'

const { error } = await supabase
  .from('notes')
  .delete()
  .eq('id', 1)

if (error) console.error(error.message)
else console.log('Deleted note 1')
```

**Upsert** is "insert, or update if it already exists" (matched on the primary key):

```js
const { data } = await supabase
  .from('notes')
  .upsert({ id: 1, title: 'Updated title' })
  .select()
```

> **Safety habit:** because `update()` and `delete()` affect *every* matching row, forgetting the filter is dangerous. Some developers add a deliberately broad-but-required filter, or test the same filter with a `select()` first to preview which rows will be affected.

---

## 12. Step 10 — Authentication

Supabase has a full auth system built in. Users can sign up with email/password, magic links, phone, or social providers. Here's the email/password flow — the most common starting point.

**Sign up a new user:**

```js
// signup.js
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase.auth.signUp({
  email: 'test@example.com',
  password: 'a-strong-password',
})

if (error) console.error('Sign up failed:', error.message)
else console.log('Signed up:', data.user)
```

By default, Supabase sends a confirmation email and the user must click the link before they can log in. (You can turn email confirmation off in the dashboard under **Authentication → Providers → Email** while testing.)

**Log in an existing user:**

```js
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'test@example.com',
  password: 'a-strong-password',
})
```

**Get the currently logged-in user:**

```js
const { data: { user } } = await supabase.auth.getUser()
console.log(user)
```

**Log out:**

```js
await supabase.auth.signOut()
```

**React to auth changes** (great in browser apps — this fires on login, logout, token refresh, etc.):

```js
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth event:', event)
  console.log('Current user:', session?.user ?? 'nobody')
})
```

> **`getUser()` vs `getSession()`:** `getSession()` reads the session from local storage and is fast but only as trustworthy as the local data. `getUser()` verifies the token with the Supabase server. For anything security-sensitive (especially on a server), prefer `getUser()`.

In the browser, `supabase-js` automatically stores the session and keeps the user logged in across page reloads — you generally don't manage tokens by hand.

---

## 13. Step 11 — Row Level Security (RLS)

This is the most important security concept in Supabase, and where beginners most often get stuck. Read this section slowly.

Remember that your publishable/anon key is **public**. So what stops a random person from reading or deleting everyone's data? **Row Level Security (RLS).** RLS is a PostgreSQL feature that lets you write rules ("policies") describing exactly which rows each user is allowed to see or change.

**When RLS is turned on for a table and no policy allows an action, that action is blocked** — even with a valid key. New tables are commonly created with RLS enabled and *no* policies, which means: everything is denied by default. This is why so many beginners hit "I can insert but `select` returns an empty array" — the data is there, but no policy grants read access.

Let's make this concrete with a realistic setup: a table where each user can only touch their own rows.

First, add an owner column and enable RLS (run in the SQL Editor):

```sql
-- add a column linking each note to a user
alter table notes add column user_id uuid default auth.uid();

-- turn on row level security
alter table notes enable row level security;
```

Now add policies. Each policy says "for this action, allow the row when this condition is true." `auth.uid()` is the ID of the currently logged-in user.

```sql
-- allow users to READ only their own notes
create policy "Users can read own notes"
on notes for select
using (auth.uid() = user_id);

-- allow users to INSERT notes as themselves
create policy "Users can insert own notes"
on notes for insert
with check (auth.uid() = user_id);

-- allow users to UPDATE only their own notes
create policy "Users can update own notes"
on notes for update
using (auth.uid() = user_id);

-- allow users to DELETE only their own notes
create policy "Users can delete own notes"
on notes for delete
using (auth.uid() = user_id);
```

Two keywords to understand:

- **`using`** controls which existing rows a user can see or act on (used for select, update, delete).
- **`with check`** controls what values a user is allowed to write (used for insert and update), preventing someone from creating a row "owned" by someone else.

After this, a logged-in user calling `supabase.from('notes').select('*')` automatically sees only their own notes — Supabase applies the policy for you. You don't add a `.eq('user_id', ...)` filter yourself; the database enforces it no matter what the client does.

> **Rule of thumb:** if a query mysteriously returns no rows or an insert silently affects nothing, suspect RLS first. Check that (a) RLS policies exist for that action, and (b) a user is actually logged in when the policy depends on `auth.uid()`.

---

## 14. Step 12 — Realtime subscriptions

Realtime lets your app receive changes the instant they happen in the database — no refreshing, no polling. This powers things like live chat, collaborative lists, and dashboards.

First, enable realtime for your table. In the dashboard go to **Database → Replication** (or the Realtime settings) and turn on realtime for the `notes` table.

Then subscribe from JavaScript using the `channel()` API:

```js
// realtime.js
import { supabase } from './supabaseClient.js'

const channel = supabase
  .channel('notes-changes')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'notes' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
```

Now, in another script or in the dashboard, insert or update a note — you'll see the change appear live in your subscribed script.

Breaking down the options:

- **`event`** can be `'INSERT'`, `'UPDATE'`, `'DELETE'`, or `'*'` for all of them.
- **`schema`** is almost always `'public'`.
- **`table`** is the table you're watching.
- **`payload`** contains the change details, including `payload.new` (the row after the change) and `payload.old` (before, where available).

When you're done listening, clean up:

```js
supabase.removeChannel(channel)
```

> **Note:** Realtime respects RLS. Users only receive change events for rows they're allowed to see. This older syntax `supabase.from('table').on(...).subscribe()` from v1 is deprecated — use `channel()` as shown.

---

## 15. Step 13 — File storage

Storage lets you upload and serve files (images, PDFs, videos). Files live in **buckets** — think of a bucket as a top-level folder with its own access rules.

**Create a bucket** in the dashboard under **Storage → New bucket**. Name it `avatars`. For a first test you can make it **public** (anyone with the URL can view files), but private buckets protected by policies are the norm for real apps.

**Upload a file:**

```js
// upload.js
import { supabase } from './supabaseClient.js'
import { readFile } from 'node:fs/promises'

const file = await readFile('./my-photo.png')

const { data, error } = await supabase
  .storage
  .from('avatars')                 // the bucket
  .upload('public/photo.png', file, {  // path inside the bucket
    contentType: 'image/png',
  })

if (error) console.error('Upload failed:', error.message)
else console.log('Uploaded to:', data.path)
```

**Get a public URL** (for public buckets):

```js
const { data } = supabase
  .storage
  .from('avatars')
  .getPublicUrl('public/photo.png')

console.log(data.publicUrl)
```

**Download a file:**

```js
const { data, error } = await supabase
  .storage
  .from('avatars')
  .download('public/photo.png')
// `data` is a Blob you can save or process
```

For private buckets you'd generate a temporary signed URL with `createSignedUrl()` instead of a public URL, so access expires after a set time.

---

## 16. Step 14 — A small project: a shared task list

Let's tie it together into one runnable script that signs a user in, creates a task, reads it back, and listens for live changes. This assumes you've enabled email/password auth, created the `notes` table with RLS policies from Step 11, and enabled realtime.

```js
// app.js
import { supabase } from './supabaseClient.js'

// 1. Log in (assumes this user already signed up and confirmed their email)
const { data: authData, error: authError } =
  await supabase.auth.signInWithPassword({
    email: 'test@example.com',
    password: 'a-strong-password',
  })

if (authError) {
  console.error('Login failed:', authError.message)
  process.exit(1)
}
console.log('Logged in as:', authData.user.email)

// 2. Listen for live changes before we make any
const channel = supabase
  .channel('task-feed')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'notes' },
    (payload) => console.log('New task appeared:', payload.new.title)
  )
  .subscribe()

// 3. Create a task (user_id fills in automatically from the column default + RLS)
const { data: inserted, error: insertError } = await supabase
  .from('notes')
  .insert({ title: 'Write my first Supabase app' })
  .select()
  .single()

if (insertError) console.error('Insert failed:', insertError.message)
else console.log('Created task with id:', inserted.id)

// 4. Read back this user's tasks (RLS ensures we only see our own)
const { data: myTasks, error: readError } = await supabase
  .from('notes')
  .select('id, title, is_done')
  .order('created_at', { ascending: false })

if (readError) console.error('Read failed:', readError.message)
else console.log('My tasks:', myTasks)

// 5. Mark the new task as done
await supabase
  .from('notes')
  .update({ is_done: true })
  .eq('id', inserted.id)

console.log('Marked task as done.')

// Give realtime a moment to deliver, then clean up
setTimeout(() => {
  supabase.removeChannel(channel)
  process.exit(0)
}, 2000)
```

Run it with `node app.js`. You've now used auth, insert, select, update, RLS, and realtime together — the core of most Supabase apps.

---

## 17. Common mistakes and how to fix them

**"My insert/update/delete succeeded but `data` is `null`."**
You forgot to chain `.select()`. In v2 these operations don't return rows unless you ask.

**"`select` returns an empty array even though I know rows exist."**
Almost always RLS. Either no read policy exists for the table, or the policy depends on `auth.uid()` but no user is logged in. Check your policies and confirm you're authenticated.

**"My update/delete changed nothing (or changed everything!)."**
Check your filter. A missing `.eq()` means the operation matched no rows (blocked by RLS) or every row (dangerous). Always filter deliberately.

**"I'm getting connection or auth errors on startup."**
Recheck the Project URL and key in your `.env`, and make sure `dotenv` is actually loading (`import 'dotenv/config'`). Confirm you copied the **publishable/anon** key, not a truncated value.

**"Should I ever put my secret/service_role key in front-end code?"**
Never. It bypasses RLS entirely. Client-side code uses the publishable/anon key only; the secret key stays on servers you control.

**"Realtime isn't firing."**
Confirm realtime is enabled for that specific table in the dashboard, that you used the `channel()` API, and that RLS allows the current user to see the changed rows.

**"I only ever get 1,000 rows back."**
That's the default cap. Paginate with `.range()`, or raise the limit in project settings if appropriate.

**Node version errors on install or run.**
Make sure you're on Node 22+ (`node --version`). Older Node versions are no longer supported by recent `supabase-js` releases.

---

## 18. Where to go next

You now understand the whole core surface of Supabase. Natural next steps:

- **Relationships between tables.** Learn foreign keys and Supabase's nested `select` syntax (e.g. `select('*, comments(*)')`) to fetch related data in one query.
- **A front-end framework.** Wire this into React, Vue, Svelte, or Next.js. For server-rendered frameworks like Next.js, use Supabase's SSR helpers so auth works correctly across server and client.
- **Database functions and triggers.** Run logic inside Postgres — for example, automatically creating a profile row when a user signs up.
- **Edge Functions.** Write custom server-side endpoints (for things like calling a third-party API with a secret key safely).
- **Deeper auth.** Add social logins (Google, GitHub), magic links, and multi-factor authentication.
- **The official docs.** The JavaScript API reference at **supabase.com/docs/reference/javascript** documents every method with examples, and is the best companion to keep open as you build.

The most valuable habit from here: whenever something behaves unexpectedly, check `error` first, then suspect RLS. Those two instincts will resolve the large majority of issues you'll hit while learning.

Happy building.
