import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const todos = useSelector((state) => state);
  const incompleteTodos = todos.filter((todo) => !todo.isComplete);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <div>
        <p>Username: ??USERNAME HERE?? - MY TODOS: {incompleteTodos.length}</p>
      </div>
    </header>
  );
};

export default Header;
