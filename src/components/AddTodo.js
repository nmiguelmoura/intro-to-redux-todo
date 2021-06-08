import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

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
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};

export default AddTodo;
