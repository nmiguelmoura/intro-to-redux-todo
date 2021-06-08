import { useSelector } from "react-redux";

const Header = () => {
  const todos = useSelector((state) => state);
  const incompleteTodos = todos.filter(todo => !todo.isComplete)
  return <header>MY TODOS: {incompleteTodos.length}</header>;
};

export default Header;
