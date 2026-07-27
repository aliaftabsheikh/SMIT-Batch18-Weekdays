import { supabase } from "./supabaseClient.js"

/**
 * Aurora — a small Kanban todo board backed by the Supabase `notes` table.
 *
 * Column mapping:
 *   title    -> the card text
 *   content  -> an optional detail line
 *   status   -> Kanban stage: 'todo' | 'doing' | 'done'
 *   is_done  -> kept in sync with status (true when status === 'done')
 */

const TABLE = 'notes'
const BUCKET = 'batch18'            // Supabase Storage bucket for note photos
const MAX_IMAGE_BYTES = 5 * 1024 * 1024   // 5 MB upload cap

// The board's columns, in order. [statusKey, column label]
const STAGES = [
    ['todo', 'To Do'],
    ['doing', 'In Progress'],
    ['done', 'Done'],
]

// Normalize a row's stage (older rows may lack `status`; fall back to is_done).
const stageOf = (t) => t.status ?? (t.is_done ? 'done' : 'todo')

/* ----------------------------- App state ----------------------------- */
const state = {
    todos: [],        // rows loaded from Supabase
    editingId: null,  // id of the card currently in inline-edit mode
    search: '',           // current search query text
    searchResults: null,  // null = not searching; array = DB matches
    userId: null,         // id of the currently logged-in user
    draggingId: null,     // id of the card currently being dragged
}

/* --------------------------- DOM references -------------------------- */
const els = {
    form: document.getElementById('add-form'),
    title: document.getElementById('task-title'),
    detail: document.getElementById('task-detail'),
    addBtn: document.getElementById('add-btn'),
    // Photo attachment (add-note form)
    photo: document.getElementById('task-photo'),
    attachBtn: document.getElementById('attach-btn'),
    attachPreview: document.getElementById('attach-preview'),
    attachThumb: document.getElementById('attach-thumb'),
    attachName: document.getElementById('attach-name'),
    attachClear: document.getElementById('attach-clear'),
    search: document.getElementById('search-input'),
    board: document.getElementById('board'),
    loading: document.getElementById('loading'),
    countActive: document.getElementById('count-active'),
    countDone: document.getElementById('count-done'),
    clearDone: document.getElementById('clear-done'),
    toasts: document.getElementById('toasts'),
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
        .eq('user_id', state.userId)     // only this user's todos
        .order('id', { ascending: true })

    els.loading.hidden = true
    els.board.hidden = false

    if (error) {
        console.error('Error fetching tasks:', error.message)
        toast("Couldn't load your tasks. Check the connection and refresh.", 'error')
        return
    }
    state.todos = data
    renderBoard()
}

//! CREATE — add a new card (always lands in the To Do column)
async function addTodo(title, content, imageUrl = null) {
    const { data, error } = await supabase
        .from(TABLE)
        .insert({ title, content, is_done: false, status: 'todo', user_id: state.userId, image_url: imageUrl })
        .select()

    if (error) {
        console.error('Error adding task:', error.message)
        toast("That task didn't save. Try again.", 'error')
        return
    }
    state.todos.push(data[0])
    renderBoard()
}

//! STORAGE — upload a photo to the public `batch18` bucket and return its URL.
//  Browser-side version of upload.js: a unique per-user path avoids collisions.
async function uploadImage(file) {
    if (!validateImage(file)) return null

    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase()
    const path = `notes/${state.userId}/${Date.now()}-${crypto.randomUUID()}.${ext}`

    const { error } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, { contentType: file.type, upsert: false })

    if (error) {
        console.error('Error uploading photo:', error.message)
        toast("Couldn't upload the photo. Try again.", 'error')
        return null
    }

    // Bucket is public, so the public URL loads directly.
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
    return data.publicUrl
}

// Guard: only images, and only up to the size cap.
function validateImage(file) {
    if (!file.type.startsWith('image/')) {
        toast('Please choose an image file.', 'error')
        return false
    }
    if (file.size > MAX_IMAGE_BYTES) {
        toast('That image is over 5 MB. Pick a smaller one.', 'error')
        return false
    }
    return true
}

//! UPDATE — move a card to another column (status), keeping is_done in sync
async function moveTodo(id, status) {
    const { data, error } = await supabase
        .from(TABLE)
        .update({ status, is_done: status === 'done' })
        .eq('id', id)
        .select()

    if (error) {
        console.error('Error moving card:', error.message)
        toast("Couldn't move that card.", 'error')
        return
    }
    replaceInState(data[0])
    renderBoard()
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
    renderBoard()
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
        renderBoard() // undo the leaving animation
        return
    }
    state.todos = state.todos.filter(t => t.id !== id)
    renderBoard()
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
    renderBoard()
    toast(`Cleared ${doneIds.length} completed ${doneIds.length === 1 ? 'task' : 'tasks'}.`)
}

/* ============================== Rendering ============================= */

function renderBoard() {
    // When searching, show the DB matches; otherwise the full list.
    const source = state.searchResults ?? state.todos

    const done = state.todos.filter(t => stageOf(t) === 'done').length
    els.countActive.textContent = state.todos.length - done
    els.countDone.textContent = done
    els.clearDone.hidden = done === 0

    // Fill each column with its cards.
    for (const [status, label] of STAGES) {
        const list = els.board.querySelector(`.col-list[data-status="${status}"]`)
        const cards = source.filter(t => stageOf(t) === status)

        list.innerHTML = ''
        for (const todo of cards) list.appendChild(buildTask(todo))

        // Empty-column placeholder (also keeps the area as a drop target).
        if (cards.length === 0) {
            const hint = document.createElement('li')
            hint.className = 'col-empty'
            hint.textContent = state.searchResults ? 'No matches here' : 'Drop cards here'
            list.appendChild(hint)
        }

        // Per-column count in the header.
        els.board.querySelector(`.col-count[data-count="${status}"]`).textContent = cards.length
    }
}

function buildTask(todo) {
    const isDone = stageOf(todo) === 'done'
    const li = document.createElement('li')
    li.className = 'glass task' + (isDone ? ' completed' : '')
    li.dataset.id = todo.id

    // Inline-edit view — not draggable, so text selection works while editing.
    if (state.editingId === todo.id) {
        li.draggable = false
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

    // Normal view — draggable card
    li.draggable = true
    const detail = todo.content
        ? `<span class="detail">${escapeHtml(todo.content)}</span>`
        : ''
    const photo = todo.image_url
        ? `<img class="task-photo" src="${escapeHtml(todo.image_url)}" alt="" loading="lazy">`
        : ''
    li.innerHTML = `
        ${photo}
        <button class="check" data-action="toggle" aria-label="Toggle complete" aria-pressed="${isDone}">
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

// Add task (uploads the attached photo first, if any)
els.form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const title = els.title.value.trim()
    if (!title) return
    const content = els.detail.value.trim() || null
    const file = els.photo.files[0]

    let imageUrl = null
    if (file) {
        els.addBtn.classList.add('is-busy')      // spinner while uploading
        imageUrl = await uploadImage(file)
        els.addBtn.classList.remove('is-busy')
        if (!imageUrl) return                    // upload failed — keep the form as-is
    }

    await addTodo(title, content, imageUrl)
    els.form.reset()
    clearPhoto()
    els.title.focus()
})

// Show a preview when a photo is chosen
els.photo.addEventListener('change', () => {
    const file = els.photo.files[0]
    if (!file) { clearPhoto(); return }
    if (!validateImage(file)) { clearPhoto(); return }

    if (els.attachThumb.src) URL.revokeObjectURL(els.attachThumb.src)
    els.attachThumb.src = URL.createObjectURL(file)
    els.attachName.textContent = file.name
    els.attachPreview.hidden = false
    els.attachBtn.classList.add('has-file')
})

// Remove the chosen photo
els.attachClear.addEventListener('click', clearPhoto)

function clearPhoto() {
    els.photo.value = ''
    if (els.attachThumb.src) {
        URL.revokeObjectURL(els.attachThumb.src)
        els.attachThumb.removeAttribute('src')
    }
    els.attachName.textContent = ''
    els.attachPreview.hidden = true
    els.attachBtn.classList.remove('has-file')
}

// Search — query the database as the user types (debounced)
let searchTimer
els.search.addEventListener('input', () => {
    const q = els.search.value.trim()
    clearTimeout(searchTimer)
    if (!q) {                        // cleared -> show the full board again
        state.search = ''
        state.searchResults = null
        renderBoard()
        return
    }
    searchTimer = setTimeout(async () => {
        state.search = q
        state.searchResults = await findByText(q)
        renderBoard()
    }, 300)
})

// Clear completed
els.clearDone.addEventListener('click', clearCompleted)

// Delegated actions on the board's cards
els.board.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]')
    if (!btn) return
    const li = btn.closest('.task')
    const id = Number(li.dataset.id)
    const todo = state.todos.find(t => t.id === id)

    switch (btn.dataset.action) {
        case 'toggle':   // the check button flips a card between Done and To Do
            if (todo) moveTodo(id, stageOf(todo) === 'done' ? 'todo' : 'done')
            break
        case 'edit':
            state.editingId = id
            renderBoard()
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
            renderBoard()
            break
    }
})

// Keyboard support inside inline-edit fields (Enter = save, Esc = cancel)
els.board.addEventListener('keydown', (e) => {
    if (state.editingId === null) return
    const li = e.target.closest('.task')
    if (!li) return
    if (e.key === 'Enter') {
        e.preventDefault()
        commitEdit(li, Number(li.dataset.id))
    } else if (e.key === 'Escape') {
        state.editingId = null
        renderBoard()
    }
})

/* ------------------------- Drag & drop (native HTML5) ------------------------- */

// Which card is being dragged (delegated on the board).
els.board.addEventListener('dragstart', (e) => {
    const card = e.target.closest('.task')
    if (!card) return
    state.draggingId = Number(card.dataset.id)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', card.dataset.id)   // Firefox needs data set
    card.classList.add('dragging')
})

els.board.addEventListener('dragend', (e) => {
    e.target.closest('.task')?.classList.remove('dragging')
    state.draggingId = null
    clearDropTargets()
})

// Allow dropping onto a column's list and highlight it.
els.board.addEventListener('dragover', (e) => {
    const list = e.target.closest('.col-list')
    if (!list) return
    e.preventDefault()                       // required to allow a drop
    e.dataTransfer.dropEffect = 'move'
    if (!list.classList.contains('drop-target')) {
        clearDropTargets()
        list.classList.add('drop-target')
    }
})

els.board.addEventListener('drop', (e) => {
    const list = e.target.closest('.col-list')
    if (!list) return
    e.preventDefault()
    clearDropTargets()
    const id = state.draggingId
    const status = list.dataset.status
    const todo = state.todos.find(t => t.id === id)
    if (todo && stageOf(todo) !== status) moveTodo(id, status)   // only if the column changed
})

function clearDropTargets() {
    els.board.querySelectorAll('.col-list.drop-target')
        .forEach(l => l.classList.remove('drop-target'))
}

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
    const input = els.board.querySelector(`.task[data-id="${id}"] [data-edit="title"]`)
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
        state.userId = user.id       // remember who's logged in for inserts/queries
        els.userEmail.textContent = user.email
        showAuth(false)
        resetView()
        loadTodos()          // loads only THIS user's rows
    } else {
        state.userId = null
        showAuth(true)
        state.todos = []
        renderBoard()
    }
})



// ------------------


async function findByText(text) {
    const { data, error } = await supabase
        .from(TABLE)
        .select('*')
        .eq('user_id', state.userId)     // search only this user's todos
        .ilike('title', `%${text}%`)

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













// =========================== FILE UPLOAD ================================
// Moved to upload.js — Node scripts can't import supabaseClient.js because it
// loads Supabase from a browser CDN URL. Run: node upload.js