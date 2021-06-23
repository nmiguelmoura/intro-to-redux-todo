import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <UserInfo />
          </Route>
          <Route path="/todos">
            <AddTodo />
            <Todos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
