import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todos = () => {
  const [todos, setTodos] = React.useState([]);

  const createTodo = (todo) => {
    const newTodos = [
      ...todos,
      {
        id: todo.toLowerCase().replace(" ", ""),
        text: todo,
        isComplete: false
      }
    ];
    setTodos(newTodos);
  };

  const toggleTodoCompleteStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        isComplete: !todo.isComplete
      };
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <AddTodo createTodo={createTodo} />
      <div classname="todos">
        {todos.map(({ id, text, isComplete }) => (
          <Todo
            key={id}
            id={id}
            text={text}
            isComplete={isComplete}
            toggleTodoCompleteStatus={toggleTodoCompleteStatus}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
