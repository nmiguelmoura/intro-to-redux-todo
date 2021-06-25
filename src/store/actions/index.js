import { save, remove, get } from "../../apiMock";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS, GET_TODOS } from "./constants";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const handleAddTodo = (todo) => {
  return (dispatch) => {
    const saveData = async () => {
      const resp = await save(todo);
      if (resp.statusCode === 200) {
        dispatch(addTodo(resp.data));
        return;
      }

      // trigger some error here
    };

    saveData();
  };
};

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const handleDeleteTodo = (id) => {
  return (dispatch) => {
    const deleteData = async () => {
      const resp = await remove(id);
      if (resp.statusCode === 200) {
        dispatch(deleteTodo(id));
      }

      // error
    };

    deleteData();
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO_STATUS,
  id
});

export const getTodos = (todos) => ({
  type: GET_TODOS,
  todos
})

export const handleGetTodos = () => {
  return (dispatch) => {
    const getData = async () => {
      const resp = await get();
      if (resp.statusCode === 200) {
        // resp.data.forEach((todo) => dispatch(addTodo(todo)));
        dispatch(getTodos(resp.data))
      }
    };
    getData();
  };
};
