import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
        todos: [
            {
                id: 1,
                title: 'Learn Redux Toolkit',
                completed: false,
            },
           
            
        ],
    }


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: action.payload.completed,
            }

            state.todos.push(todo)
            console.log('Todo added:', todo)
        }
    },

    removeTodo: (state, action)=>{
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        console.log('Todo removed:', action.payload.id)
    }
})

export const { addTodo, removeTodo } = todoSlice.actions


export default todoSlice.reducer