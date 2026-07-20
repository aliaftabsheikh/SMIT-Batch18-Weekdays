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

/* ----------------------------- App state ----------------------------- */
const state = {
    todos: [],        // rows loaded from Supabase
    filter: 'all',    // 'all' | 'active' | 'done'
    editingId: null,  // id of the task currently in inline-edit mode
}

/* --------------------------- DOM references -------------------------- */
const els = {
    form: document.getElementById('add-form'),
    title: document.getElementById('task-title'),
    detail: document.getElementById('task-detail'),
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
}

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

    const visible = state.todos.filter(t => {
        if (state.filter === 'active') return !t.is_done
        if (state.filter === 'done') return t.is_done
        return true
    })

    els.list.innerHTML = ''
    for (const todo of visible) els.list.appendChild(buildTask(todo))

    const isEmpty = visible.length === 0
    els.list.hidden = isEmpty
    els.empty.hidden = !isEmpty
    if (isEmpty) setEmptyCopy()
}

function setEmptyCopy() {
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
        render()
    }))

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

/* =============================== Boot =============================== */
loadTodos()
