import { save } from "../../apiMock";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from "./constants";

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

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO_STATUS,
  id
});
