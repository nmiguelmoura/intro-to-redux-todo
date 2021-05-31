const Todo = ({
  id,
  text,
  isComplete,
  toggleTodoCompleteStatus,
  deleteTodo
}) => {
  return (
    <div className="todo">
      <input
        id={id}
        type="checkbox"
        checked={isComplete}
        onChange={() => toggleTodoCompleteStatus(id)}
      />
      <label htmlFor={id} data-isComplete={isComplete}>{text}</label>

      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default Todo;
