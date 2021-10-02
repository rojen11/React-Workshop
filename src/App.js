import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import All from "./pages/all";
import Completed from "./pages/completed";
import Pending from "./pages/pending";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { id: nanoid(), task, completed: false }]);
  }

  function removeTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function completeTask(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function editTask(id, task) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, task } : t)));
  }

  return (
    <div className="bg-background h-screen w-screen">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <All />
            </Route>
            <Route exact path="/pending">
              <Pending />
            </Route>
            <Route exact path="/completed">
              <Completed />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
