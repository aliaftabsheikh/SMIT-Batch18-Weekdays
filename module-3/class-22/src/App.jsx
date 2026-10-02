import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from './features/todoSlice'

const App = () => {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [filter, setFilter] = useState('all')
  const [editingId, setEditingId] = useState(null)
  const [editingTitle, setEditingTitle] = useState('')

  const completedCount = todos.filter((todo) => todo.completed).length
  const activeCount = todos.length - completedCount
  const progress = todos.length ? Math.round((completedCount / todos.length) * 100) : 0
  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const filters = [
    { id: 'all', label: 'All', count: todos.length },
    { id: 'active', label: 'Active', count: activeCount },
    { id: 'completed', label: 'Done', count: completedCount },
  ]

  function handleSubmit(event) {
    event.preventDefault()
    const cleanTitle = title.trim()

    if (!cleanTitle) return

    dispatch(addTodo({ title: cleanTitle, completed: false }))
    setTitle('')
  }

  function handleToggle(todo) {
    dispatch(editTodo({
      id: todo.id,
      title: todo.title,
      completed: !todo.completed,
    }))
  }

  function startEditing(todo) {
    setEditingId(todo.id)
    setEditingTitle(todo.title)
  }

  function saveEdit(event, todo) {
    event.preventDefault()
    const cleanTitle = editingTitle.trim()

    if (!cleanTitle) return

    dispatch(editTodo({
      id: todo.id,
      title: cleanTitle,
      completed: todo.completed,
    }))
    setEditingId(null)
    setEditingTitle('')
  }

  function clearCompleted() {
    todos
      .filter((todo) => todo.completed)
      .forEach((todo) => dispatch(deleteTodo(todo.id)))
  }

  return (
    <div className="todo-app min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-slate-900 sm:px-6 lg:py-14">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(24px, -18px, 0) scale(1.08); }
        }

        @keyframes rise-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes task-in {
          from { opacity: 0; transform: translateX(-12px) scale(.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .todo-orb { animation: float 11s ease-in-out infinite; }
        .todo-orb--slow { animation-delay: -5s; animation-duration: 15s; }
        .todo-panel { animation: rise-in .7s cubic-bezier(.22, 1, .36, 1) both; }
        .todo-entry { animation: task-in .45s cubic-bezier(.22, 1, .36, 1) both; }
        .todo-row:hover .todo-actions { opacity: 1; transform: translateX(0); }

        @media (prefers-reduced-motion: reduce) {
          .todo-orb, .todo-panel, .todo-entry { animation: none; }
        }
      `}</style>

      <div className="todo-orb pointer-events-none absolute -left-20 top-12 h-56 w-56 rounded-full bg-violet-500/30 blur-3xl" />
      <div className="todo-orb todo-orb--slow pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <main className="todo-panel relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/50 bg-white/90 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

        <header className="border-b border-slate-100 px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-300/60">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
                  <path d="m5 12 4.2 4.2L19 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-violet-600">Daily flow</p>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Make today count.</h1>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 px-4 py-3 text-center text-white shadow-lg shadow-slate-300/50">
              <p className="text-2xl font-black leading-none">{activeCount}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">to focus on</p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-gradient-to-r from-violet-50 via-fuchsia-50 to-cyan-50 p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-800">Your momentum</p>
                <p className="text-sm text-slate-500">{completedCount} of {todos.length} tasks completed</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-sm font-extrabold text-violet-700 shadow-sm">{progress}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/90 shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        <section className="px-6 py-6 sm:px-10 sm:py-8">
          <form onSubmit={handleSubmit} className="group flex gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm transition focus-within:border-violet-300 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-violet-100">
            <label htmlFor="new-todo" className="sr-only">Add a new task</label>
            <input
              id="new-todo"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="What would make today amazing?"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white shadow-md shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-violet-200 active:translate-y-0 sm:px-5"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:inline">Add task</span>
            </button>
          </form>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <div className="flex rounded-xl bg-slate-100 p-1">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={filter === item.id}
                  className={`rounded-lg px-3 py-2 text-sm font-bold transition sm:px-4 ${
                    filter === item.id
                      ? 'bg-white text-violet-700 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {item.label} <span className="ml-1 text-xs opacity-70">{item.count}</span>
                </button>
              ))}
            </div>

            {completedCount > 0 && (
              <button
                type="button"
                onClick={clearCompleted}
                className="rounded-lg px-3 py-2 text-sm font-bold text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
              >
                Clear completed
              </button>
            )}
          </div>

          <ul className="mt-5 space-y-3">
            {visibleTodos.map((todo, index) => (
              <li
                key={todo.id}
                className={`todo-entry todo-row group flex items-center gap-3 rounded-2xl border p-3.5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  todo.completed
                    ? 'border-emerald-100 bg-emerald-50/70 hover:shadow-emerald-100'
                    : 'border-slate-100 bg-white hover:border-violet-100 hover:shadow-violet-100'
                }`}
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(todo)}
                  disabled={editingId === todo.id}
                  aria-label={todo.completed ? `Mark ${todo.title} as active` : `Mark ${todo.title} as complete`}
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition duration-300 disabled:cursor-not-allowed ${
                    todo.completed
                      ? 'border-emerald-500 bg-emerald-500 text-white shadow-md shadow-emerald-200'
                      : 'border-slate-300 text-transparent hover:border-violet-500 hover:bg-violet-50'
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="m5 12 4.2 4.2L19 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="min-w-0 flex-1">
                  {editingId === todo.id ? (
                    <form onSubmit={(event) => saveEdit(event, todo)} className="flex items-center gap-2">
                      <label htmlFor={`edit-${todo.id}`} className="sr-only">Edit task</label>
                      <input
                        id={`edit-${todo.id}`}
                        autoFocus
                        value={editingTitle}
                        onChange={(event) => setEditingTitle(event.target.value)}
                        className="min-w-0 flex-1 rounded-lg border border-violet-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 outline-none ring-violet-100 focus:ring-4"
                      />
                      <button type="submit" className="rounded-lg bg-violet-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-violet-700">Save</button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="rounded-lg px-2 py-2 text-xs font-bold text-slate-400 transition hover:text-slate-700"
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <>
                      <p className={`truncate font-bold transition ${todo.completed ? 'text-emerald-800 line-through decoration-emerald-400/70' : 'text-slate-800'}`}>
                        {todo.title}
                      </p>
                      <p className={`mt-1 text-xs font-semibold ${todo.completed ? 'text-emerald-600' : 'text-slate-400'}`}>
                        {todo.completed ? 'Completed — nice work!' : 'Ready when you are'}
                      </p>
                    </>
                  )}
                </div>

                {editingId !== todo.id && (
                  <div className="todo-actions flex shrink-0 translate-x-1 gap-1 opacity-0 transition duration-200 focus-within:translate-x-0 focus-within:opacity-100 sm:group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => startEditing(todo)}
                      aria-label={`Edit ${todo.title}`}
                      className="grid h-9 w-9 place-items-center rounded-xl text-slate-400 transition hover:bg-violet-50 hover:text-violet-600"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                        <path d="M13.5 6.5 17.5 10.5M4 20l4.2-1 10.7-10.7a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      aria-label={`Delete ${todo.title}`}
                      className="grid h-9 w-9 place-items-center rounded-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                        <path d="M4 7h16M10 11v5M14 11v5M6 7l1 13h10l1-13M9 7V4h6v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {visibleTodos.length === 0 && (
            <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-violet-500 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
                  <path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="mt-4 font-extrabold text-slate-800">{filter === 'all' ? 'A fresh canvas awaits.' : 'Nothing to see here yet.'}</h2>
              <p className="mt-1 text-sm text-slate-500">{filter === 'all' ? 'Add one small task and build your momentum.' : 'Try another view to see your tasks.'}</p>
              {filter !== 'all' && (
                <button type="button" onClick={() => setFilter('all')} className="mt-4 text-sm font-bold text-violet-600 transition hover:text-violet-800">
                  View all tasks
                </button>
              )}
            </div>
          )}
        </section>

        <footer className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-6 py-4 text-xs font-semibold text-slate-400 sm:px-10">
          <span>Small steps create big progress.</span>
          <span className="hidden sm:inline">Stay focused ✦</span>
        </footer>
      </main>
    </div>
  )
}

export default App