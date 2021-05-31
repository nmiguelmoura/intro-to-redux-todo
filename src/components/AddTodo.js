import React from "react";

const AddTodo = ({createTodo}) => {
  const [todo, setTodo] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    createTodo(todo);
    setTodo("");
  }

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
