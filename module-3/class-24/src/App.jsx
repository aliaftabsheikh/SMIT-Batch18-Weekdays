import { Link, Route, Routes, useParams } from 'react-router'
import { useGetTodoByIdQuery, useGetTodosQuery } from './services/todoApi'

const LoadingMessage = () => (
  <p className="text-slate-600" role="status">Loading todos...</p>
)

const ErrorMessage = () => (
  <p className="text-red-700" role="alert">Unable to load todos. Please try again later.</p>
)

const TodoList = () => {
  const { data, isError, isLoading } = useGetTodosQuery()

  return (
    <main className="mx-auto min-h-screen max-w-4xl bg-slate-50 px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">My Todos</h1>
      {isLoading && <LoadingMessage />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <div className="grid gap-4 sm:grid-cols-2">
        {data?.map((todo) => (
          <Link
            key={todo.id}
            to={`/todo/${todo.id}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h2 className="mb-3 text-lg font-semibold text-slate-800">{todo.title}</h2>
            <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${todo.completed ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
              {todo.completed ? 'Completed' : 'Not Completed'}
            </span>
          </Link>
        ))}
      </div>}
    </main>
  )
}

const TodoDetail = () => {
  const { todoId } = useParams()
  const { data: todo, isError, isLoading } = useGetTodoByIdQuery(todoId)

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-slate-50 px-4 py-10 sm:px-6">
      <Link
        to="/"
        className="mb-6 inline-flex font-medium text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        &larr; Back to todos
      </Link>
      {isLoading && <LoadingMessage />}
      {isError && <ErrorMessage />}
      {todo && (
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="mb-2 text-sm font-medium text-slate-500">Todo #{todo.id}</p>
          <h1 className="mb-5 text-2xl font-bold tracking-tight text-slate-900">{todo.title}</h1>
          <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${todo.completed ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
            {todo.completed ? 'Completed' : 'Not Completed'}
          </span>
        </article>
      )}
    </main>
  )
}

const App = () => (
  <Routes>
    <Route path="/" element={<TodoList />} />
    <Route path="/todo/:todoId" element={<TodoDetail />} />
  </Routes>
)

export default App