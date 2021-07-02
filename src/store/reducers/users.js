import { ADD_USER } from "../actions/constants";

export const user = (state = {}, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...action.user
      }

    default:
      return state;
  }
};
