import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import { todoApi } from "../services/todo";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})