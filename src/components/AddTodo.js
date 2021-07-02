import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/todos";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(actions.handleAddTodo(todo));
    setTodo("");
  };

  return (
    <form className="add-todo">
      <input
        placeholder="Add your todos here"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        data-testid="add-todo"
      />
      <button onClick={onSubmit} data-testid="submit-button">Submit</button>
    </form>
  );
};

export default AddTodo;
