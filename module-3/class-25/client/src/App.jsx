import { useState } from 'react'
import { useGetTodosQuery, usePostTodoMutation, useDeleteTodoMutation } from './features/todos/todosApi.js'

function App() {
  const { data: todos = [], error, isFetching, isLoading, refetch } = useGetTodosQuery()
  const [title, setTitle] = useState('')
  const [addError, setAddError] = useState('')
  const [deleteError, setDeleteError] = useState('')
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation()
  const [postTodo, { isLoading: isPosting }] = usePostTodoMutation()

  const handleAddTodo = async (event) => {
    event.preventDefault()
    const trimmedTitle = title.trim()

    if (!trimmedTitle) {
      setAddError('Enter a todo title.')
      return
    }
    try {
      await postTodo({ title: trimmedTitle, completed: false }).unwrap()
      setTitle('')
      setAddError('')
    } catch {
      setAddError('Unable to add this todo. Please try again.')
    }
  }

  async function handleDeleteTodo(id) {
    try {
      await deleteTodo(id).unwrap()
      setDeleteError('')
    } catch {
      setDeleteError('Unable to delete this todo. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900">
      <section className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-indigo-600">RTK Query</p>
            <h1 className="text-3xl font-bold">My Todos</h1>
          </div>
          <button
            type="button"
            onClick={refetch}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isFetching}
          >
            {isFetching ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {isLoading && <p className="text-slate-600">Loading todos...</p>}

        {error && (
          <p className="rounded-lg bg-red-50 p-4 text-red-700">
            Unable to load todos. Make sure the Express server is running on port 3000.
          </p>
        )}

        {!isLoading && !error && todos.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-600">
            No todos yet.
          </p>
        )}

        <form onSubmit={handleAddTodo} className="mb-6">
          <label htmlFor="todo-title" className="mb-2 block text-sm font-semibold text-slate-700">
            Add a todo
          </label>
          <div className="flex gap-3">
            <input
              id="todo-title"
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value)
                if (addError) setAddError('')
              }}
              placeholder="What needs to be done?"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              disabled={isPosting}
            />
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isPosting}
            >
              {isPosting ? 'Adding...' : 'Add Todo'}
            </button>
          </div>
          {addError && <p className="mt-2 text-sm text-red-700">{addError}</p>}
        </form>

        {deleteError && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{deleteError}</p>}

        {todos.length > 0 && (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-4"
              >
                <span className={`mr-auto ${todo.completed ? 'text-slate-400 line-through' : 'font-medium'}`}>
                  {todo.title}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    todo.completed
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {todo.completed ? 'Completed' : 'Pending'}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="rounded-lg bg-red-600 px-3 py-1 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
