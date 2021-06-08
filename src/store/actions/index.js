import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from "./constants";

export const AddTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO_STATUS,
  id
});
