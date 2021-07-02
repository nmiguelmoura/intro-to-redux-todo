const Todo = ({
  id,
  text,
  isComplete,
  toggleTodoCompleteStatus,
  deleteTodo
}) => {
  return (
    <div className="todo" data-testid="todo">
      <input
        id={id}
        type="checkbox"
        checked={isComplete}
        onChange={() => toggleTodoCompleteStatus(id)}
        data-testid="input-field"
      />
      <label htmlFor={id} data-iscomplete={isComplete}>
        {text}
      </label>

      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default Todo;
