import { supabase } from "./supabaseClient.js"

/**
 * Aurora — a small todo app backed by the Supabase `notes` table.
 *
 * Column mapping (we reuse the existing table, no schema changes):
 *   title    -> the task text
 *   content  -> an optional detail line
 *   is_done  -> completed state
 */

const TABLE = 'notes'
const PAGE_SIZE = 5   // how many todos to show per page

/* ----------------------------- App state ----------------------------- */
const state = {
    todos: [],        // rows loaded from Supabase
    filter: 'all',    // 'all' | 'active' | 'done'
    editingId: null,  // id of the task currently in inline-edit mode
    search: '',           // current search query text
    searchResults: null,  // null = not searching; array = DB matches
    page: 1,              // current page (1-based)
}

/* --------------------------- DOM references -------------------------- */
const els = {
    form: document.getElementById('add-form'),
    title: document.getElementById('task-title'),
    detail: document.getElementById('task-detail'),
    search: document.getElementById('search-input'),
    list: document.getElementById('todo-list'),
    empty: document.getElementById('empty-state'),
    emptyTitle: document.getElementById('empty-title'),
    emptyText: document.getElementById('empty-text'),
    loading: document.getElementById('loading'),
    countActive: document.getElementById('count-active'),
    countDone: document.getElementById('count-done'),
    filters: document.querySelectorAll('.filter'),
    clearDone: document.getElementById('clear-done'),
    toasts: document.getElementById('toasts'),
    pager: document.getElementById('pager'),
    pagePrev: document.getElementById('page-prev'),
    pageNext: document.getElementById('page-next'),
    pageInfo: document.getElementById('page-info'),
    // Auth
    app: document.querySelector('.app'),
    authScreen: document.getElementById('auth-screen'),
    authForm: document.getElementById('auth-form'),
    authEmail: document.getElementById('auth-email'),
    authPassword: document.getElementById('auth-password'),
    authSubmit: document.getElementById('auth-submit'),
    authTitle: document.getElementById('auth-title'),
    authToggle: document.getElementById('auth-toggle'),
    authSwitchText: document.getElementById('auth-switch-text'),
    userEmail: document.getElementById('user-email'),
    signOut: document.getElementById('sign-out'),
}

let authMode = 'login'   // 'login' | 'signup'

/* ============================ CRUD (Supabase) ========================= */

//! READ — load every task once on startup
async function loadTodos() {
    const { data, error } = await supabase
        .from(TABLE)
        .select('*')
        .order('id', { ascending: true })

    els.loading.hidden = true

    if (error) {
        console.error('Error fetching tasks:', error.message)
        toast("Couldn't load your tasks. Check the connection and refresh.", 'error')
        return
    }
    state.todos = data
    render()
}

//! CREATE — add a new task
async function addTodo(title, content) {
    const { data, error } = await supabase
        .from(TABLE)
        .insert({ title, content, is_done: false })
        .select()

    if (error) {
        console.error('Error adding task:', error.message)
        toast("That task didn't save. Try again.", 'error')
        return
    }
    state.todos.push(data[0])
    render()
}

//! UPDATE — flip the completed state
async function toggleTodo(id, isDone) {
    const { data, error } = await supabase
        .from(TABLE)
        .update({ is_done: isDone })
        .eq('id', id)
        .select()

    if (error) {
        console.error('Error updating task:', error.message)
        toast("Couldn't update that task.", 'error')
        return
    }
    replaceInState(data[0])
    render()
}

//! UPDATE — save edited title / detail
async function editTodo(id, title, content) {
    const { data, error } = await supabase
        .from(TABLE)
        .update({ title, content })
        .eq('id', id)
        .select()

    if (error) {
        console.error('Error editing task:', error.message)
        toast("Your edit didn't save.", 'error')
        return
    }
    replaceInState(data[0])
    state.editingId = null
    render()
}

//! DELETE — remove a single task
async function deleteTodo(id) {
    const { error } = await supabase
        .from(TABLE)
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting task:', error.message)
        toast("Couldn't delete that task.", 'error')
        render() // undo the leaving animation
        return
    }
    state.todos = state.todos.filter(t => t.id !== id)
    render()
}

//! DELETE — clear all completed tasks at once
async function clearCompleted() {
    const doneIds = state.todos.filter(t => t.is_done).map(t => t.id)
    if (!doneIds.length) return

    const { error } = await supabase
        .from(TABLE)
        .delete()
        .in('id', doneIds)

    if (error) {
        console.error('Error clearing done tasks:', error.message)
        toast("Couldn't clear completed tasks.", 'error')
        return
    }
    state.todos = state.todos.filter(t => !t.is_done)
    render()
    toast(`Cleared ${doneIds.length} completed ${doneIds.length === 1 ? 'task' : 'tasks'}.`)
}

/* ============================== Rendering ============================= */

function render() {
    const active = state.todos.filter(t => !t.is_done).length
    const done = state.todos.length - active

    els.countActive.textContent = active
    els.countDone.textContent = done
    els.clearDone.hidden = done === 0

    // Highlight the active filter tab
    els.filters.forEach(btn =>
        btn.classList.toggle('is-active', btn.dataset.filter === state.filter))

    // When searching, render the DB matches; otherwise the full list.
    const source = state.searchResults ?? state.todos
    const visible = source.filter(t => {
        if (state.filter === 'active') return !t.is_done
        if (state.filter === 'done') return t.is_done
        return true
    })

    // --- Pagination (client-side): show PAGE_SIZE todos per page ---
    const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE))
    if (state.page > totalPages) state.page = totalPages   // clamp after deletes/filter/search
    if (state.page < 1) state.page = 1
    const start = (state.page - 1) * PAGE_SIZE
    const pageItems = visible.slice(start, start + PAGE_SIZE)

    els.list.innerHTML = ''
    for (const todo of pageItems) els.list.appendChild(buildTask(todo))

    const isEmpty = visible.length === 0
    els.list.hidden = isEmpty
    els.empty.hidden = !isEmpty
    if (isEmpty) setEmptyCopy()

    renderPager(totalPages)
}

function renderPager(totalPages) {
    els.pager.hidden = totalPages <= 1   // hide when everything fits on one page
    els.pageInfo.textContent = `Page ${state.page} of ${totalPages}`
    els.pagePrev.disabled = state.page <= 1
    els.pageNext.disabled = state.page >= totalPages
}

function setEmptyCopy() {
    // No results for an active search gets its own message.
    if (state.searchResults) {
        els.emptyTitle.textContent = 'No matches'
        els.emptyText.textContent = `No tasks match “${state.search}”.`
        return
    }
    const copy = {
        all: ['All clear', "Add your first task above and watch it come to life."],
        active: ['Inbox zero', "Nothing active right now. Enjoy the calm."],
        done: ['Nothing done yet', "Completed tasks will collect here."],
    }[state.filter]
    els.emptyTitle.textContent = copy[0]
    els.emptyText.textContent = copy[1]
}

function buildTask(todo) {
    const li = document.createElement('li')
    li.className = 'glass task' + (todo.is_done ? ' completed' : '')
    li.dataset.id = todo.id

    // Inline-edit view
    if (state.editingId === todo.id) {
        li.innerHTML = `
            <div class="body">
                <input class="edit-field" data-edit="title" value="${escapeHtml(todo.title ?? '')}" maxlength="160" />
                <input class="edit-field detail-edit" data-edit="detail" value="${escapeHtml(todo.content ?? '')}" placeholder="Add a detail (optional)" maxlength="240" />
            </div>
            <div class="actions" style="opacity:1;transform:none">
                <button class="icon-btn" data-action="save" aria-label="Save">${icon.check}</button>
                <button class="icon-btn" data-action="cancel" aria-label="Cancel">${icon.close}</button>
            </div>`
        return li
    }

    // Normal view
    const detail = todo.content
        ? `<span class="detail">${escapeHtml(todo.content)}</span>`
        : ''
    li.innerHTML = `
        <button class="check" data-action="toggle" aria-label="Toggle complete" aria-pressed="${todo.is_done}">
            ${icon.check}
        </button>
        <div class="body">
            <span class="title">${escapeHtml(todo.title ?? '')}</span>
            ${detail}
        </div>
        <div class="actions">
            <button class="icon-btn" data-action="edit" aria-label="Edit task">${icon.pencil}</button>
            <button class="icon-btn danger" data-action="delete" aria-label="Delete task">${icon.trash}</button>
        </div>`
    return li
}

/* ============================ Interactions =========================== */

// Add task
els.form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = els.title.value.trim()
    if (!title) return
    const content = els.detail.value.trim() || null
    addTodo(title, content)
    els.form.reset()
    els.title.focus()
})

// Filter tabs
els.filters.forEach(btn =>
    btn.addEventListener('click', () => {
        state.filter = btn.dataset.filter
        state.page = 1              // start filtered results from page 1
        render()
    }))

// Pagination — step between pages
els.pagePrev.addEventListener('click', () => { state.page--; render() })
els.pageNext.addEventListener('click', () => { state.page++; render() })

// Search — query the database as the user types (debounced)
let searchTimer
els.search.addEventListener('input', () => {
    const q = els.search.value.trim()
    clearTimeout(searchTimer)
    if (!q) {                        // cleared -> show the full list again
        state.search = ''
        state.searchResults = null
        state.page = 1
        render()
        return
    }
    searchTimer = setTimeout(async () => {
        state.search = q
        state.searchResults = await findByText(q)
        state.page = 1               // show search results from page 1
        render()
    }, 300)
})

// Clear completed
els.clearDone.addEventListener('click', clearCompleted)

// Delegated actions on the task list
els.list.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]')
    if (!btn) return
    const li = btn.closest('.task')
    const id = Number(li.dataset.id)
    const todo = state.todos.find(t => t.id === id)

    switch (btn.dataset.action) {
        case 'toggle':
            if (todo) toggleTodo(id, !todo.is_done)
            break
        case 'edit':
            state.editingId = id
            render()
            focusEdit(id)
            break
        case 'delete':
            li.classList.add('leaving')
            setTimeout(() => deleteTodo(id), 220)
            break
        case 'save':
            commitEdit(li, id)
            break
        case 'cancel':
            state.editingId = null
            render()
            break
    }
})

// Keyboard support inside inline-edit fields (Enter = save, Esc = cancel)
els.list.addEventListener('keydown', (e) => {
    if (state.editingId === null) return
    const li = e.target.closest('.task')
    if (!li) return
    if (e.key === 'Enter') {
        e.preventDefault()
        commitEdit(li, Number(li.dataset.id))
    } else if (e.key === 'Escape') {
        state.editingId = null
        render()
    }
})

function commitEdit(li, id) {
    const title = li.querySelector('[data-edit="title"]').value.trim()
    const content = li.querySelector('[data-edit="detail"]').value.trim() || null
    if (!title) {
        toast('A task needs a title.', 'error')
        return
    }
    editTodo(id, title, content)
}

function focusEdit(id) {
    const input = els.list.querySelector(`.task[data-id="${id}"] [data-edit="title"]`)
    if (input) {
        input.focus()
        input.setSelectionRange(input.value.length, input.value.length)
    }
}

/* ============================== Helpers ============================== */

function replaceInState(row) {
    const i = state.todos.findIndex(t => t.id === row.id)
    if (i !== -1) state.todos[i] = row
}

function toast(message, kind = 'info') {
    const el = document.createElement('div')
    el.className = 'toast' + (kind === 'error' ? ' error' : '')
    el.textContent = message
    els.toasts.appendChild(el)
    setTimeout(() => {
        el.style.transition = 'opacity .3s, transform .3s'
        el.style.opacity = '0'
        el.style.transform = 'translateY(8px)'
        setTimeout(() => el.remove(), 300)
    }, 3200)
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

// Small inline SVG icon set (kept here so markup stays clean)
const icon = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>',
}

/* ============================ Authentication ========================= */

// Show the auth screen or the app.
function showAuth(show) {
    els.authScreen.hidden = !show
    els.app.hidden = show
}

// Clear the current user's view so the next user doesn't inherit it.
function resetView() {
    state.search = ''
    state.searchResults = null
    state.filter = 'all'
    state.page = 1
    els.search.value = ''
}

// Flip between the login and sign-up modes.
function setAuthMode(mode) {
    authMode = mode
    const isSignup = mode === 'signup'
    els.authTitle.textContent = isSignup ? 'Create your account' : 'Welcome back'
    els.authSubmit.textContent = isSignup ? 'Sign up' : 'Log in'
    els.authSwitchText.textContent = isSignup ? 'Already have an account?' : 'New here?'
    els.authToggle.textContent = isSignup ? 'Log in' : 'Create an account'
    els.authPassword.autocomplete = isSignup ? 'new-password' : 'current-password'
}

els.authToggle.addEventListener('click', () =>
    setAuthMode(authMode === 'login' ? 'signup' : 'login'))

// Sign up / log in
els.authForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = els.authEmail.value.trim()
    const password = els.authPassword.value

    const { data, error } = authMode === 'signup'
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        toast(error.message, 'error')
        return
    }
    // Sign-up with email confirmation on returns no session yet.
    if (authMode === 'signup' && !data.session) {
        toast('Account created — check your email to confirm, then log in.')
        setAuthMode('login')
    }
    els.authForm.reset()
    // On success with a session, onAuthStateChange swaps to the app below.
})

// Sign out — onAuthStateChange handles the UI reset.
els.signOut.addEventListener('click', () => supabase.auth.signOut())

// Single source of truth for auth: fires on initial load, sign-in, and sign-out,
// so the todo list always reflects the currently authenticated user.
supabase.auth.onAuthStateChange((event, session) => {
    const user = session?.user
    if (user) {
        els.userEmail.textContent = user.email
        showAuth(false)
        resetView()
        loadTodos()          // RLS returns only THIS user's rows
    } else {
        showAuth(true)
        state.todos = []
        render()
    }
})



// ------------------


async function findByText(text) {
    const { data, error } = await supabase.from(TABLE).select('*').ilike('title', `%${text}%`)

    if (error) {
        console.error('Error searching tasks:', error.message)
        toast("Couldn't search your tasks. Check the connection and try again.", 'error')
        return []
    } else {
        if (data.length === 0) {
            toast("No tasks found matching your search.", 'info')
        }
    }
    return data
}



async function paginatedTodos(page = 1, pageSize = 3) {
    const { data, error } = await supabase.from(TABLE).select('*')
        .order('created_at', { ascending: false })  // newest first
        .limit(pageSize)

    if (error) {
        console.error('Error fetching paginated tasks:', error.message)
    }
    return data
}



// --------------------------- AUTHENTICATION ------------------------------



async function userSignUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })

    if (error) {
        console.error('Error signing up:', error.message)
        toast("Couldn't sign you up. Try a different email or check your password.", 'error')
        return
    }
    console.log('Signed up successfully:', data)
}

userSignUp('a@example.com', '12345678')  // removed: was triggering on every page load and hitting the email rate limit



async function userSignIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'courseviewer123@gmail.com',
        password: '12345678',
    })

    if(error) {
        console.error('Error logging in:', error.message)
        toast("Couldn't log in. Check the credentials and try again.", 'error')
        return
    }
    console.log('Logged in successfully:', data)
}
// userSignIn()


async function userSignOut() {
    await supabase.auth.signOut()
        .then(() => {
            console.log('Logged out successfully')
        })
        .catch((error) => {
            console.error('Error logging out:', error.message)
            toast("Couldn't log you out. Try again.", 'error')
        })
}

userSignOut()

async function userLoggedIn() {
    const { data: { user } } = await supabase.auth.getUser()
console.log(user)
}

userLoggedIn()