import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice.js'
import { todoApi } from '../services/todoApi.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
  
})
