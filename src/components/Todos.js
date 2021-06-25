import React from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";

const Todos = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.handleGetTodos())
  }, [dispatch])

  const toggleTodoCompleteStatus = (id) => {
    dispatch(actions.toggleTodo(id));
  };

  const deleteTodo = (id) => {
    dispatch(actions.handleDeleteTodo(id));
  };

  return (
    <div>
      <div className="todos">
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
