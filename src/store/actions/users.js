// {
//   name: "",
//   email: ""
// }

import { ADD_USER } from "./constants";

export const addUser = (name, email) => ({
  type: ADD_USER,
  user: {
    name,
    email
  }
});
