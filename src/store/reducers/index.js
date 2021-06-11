import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from "../actions/constants";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.todo
      ];

    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);

    case TOGGLE_TODO_STATUS:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            isComplete: !item.isComplete
          };
        }

        return item;
      });

    default:
      return state;
  }
};
