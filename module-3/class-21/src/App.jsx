import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './features/todo/todoSlice'

const App = () => {
  const inputRef = useRef()

  const dispatch = useDispatch()

  const todos = useSelector((state)=> state.todos.todos)

  function handleSubmit(e){
    e.preventDefault()
    dispatch(addTodo({
      title: inputRef.current.value,
      completed: false
    }))
    inputRef.current.value = ''
  }
  return (
   
    <div>
      <h1>Todo List</h1>

     <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter todo" />
        <button type="submit">Add Todo</button>
     </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App