import { createSlice , nanoid} from "@reduxjs/toolkit";



const initialState = {
        todos: [
            {
                id: 1,
                title: "Learn React",
                completed: false
            }
        ]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,

    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id : nanoid(),
                title : action.payload.title,
                completed : action.payload.completed
            }

            state.todos.push(newTodo)
            console.log("New Todo Added", newTodo)
        },

        editTodo: (state, action) => {
            const {id, title, completed} = action.payload

            const existingTodo = state.todos.find(todo => todo.id === id)

            if(!existingTodo) {
                console.log("Todo not found")
                return
            }

            existingTodo.title = title
            existingTodo.completed = completed

            console.log("Todo Updated", existingTodo)


        },

        deleteTodo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter(todo => todo.id !== id)
            console.log("Todo Deleted", id)
        }

    },
})

export const {addTodo, editTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer