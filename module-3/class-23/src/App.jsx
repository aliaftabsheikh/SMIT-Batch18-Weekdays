import React, {useState, useEffect} from 'react'
import { useGetTodosQuery, useGetTodoByIdQuery } from './services/todo.js'
const App = () => {

  const {data, isLoading, isError} = useGetTodosQuery()
  console.log(data)



  const {data: todoDataById, isLoading: isTodoLoading, isError: isTodoError} = useGetTodoByIdQuery(5)
console.log(todoDataById)
  if(isError){
    return <p>Something went wrong</p>
  }


  // const [todos, setTodos] = useState([])

  // const [loading, setLoading] = useState(true)

  // async function getTodos(){
  //   const response = await fetch('https://jsonplaceholder.typicode/todos')

  //   const data = await response.json()

  //   return data;


  // }


  // useEffect(() => {
  //   let ignore = false
  //   getTodos()
  //     .then((data) => {
  //       if (!ignore) setTodos(data)
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => {
  //       if (!ignore) setLoading(false)
  //     })
  //   return () => {
  //     ignore = true
  //   }
  // }, [])
  return (
    // <div>
    //   {loading ? <p>Loading...</p> : <p>{todos.length} todos</p>}
    //   </div>
    <p>
     {
      isLoading? (
        <p>Loading...</p>
      ): (
        data.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))
      )
     }
    </p>
  )
}

export default App