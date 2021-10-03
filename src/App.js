import { useState, useEffect } from "react";
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
    setTasks(tasks.map((t) => (t.id === id ? { ...t, task: task } : t)));
  }

  // Page load
  useEffect(() => {
    const localTasks = localStorage.getItem("tasks");


    if (localTasks !== undefined && localTasks !== null) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  // update on tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="bg-background h-screen w-screen">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <All
                addTask={addTask}
                editTask={editTask}
                completeTask={completeTask}
                removeTask={removeTask}
                tasks={tasks}
              />
            </Route>
            <Route exact path="/pending">
              <Pending
                addTask={addTask}
                editTask={editTask}
                completeTask={completeTask}
                removeTask={removeTask}
                tasks={tasks}
              />
            </Route>
            <Route exact path="/completed">
              <Completed
                addTask={addTask}
                editTask={editTask}
                completeTask={completeTask}
                removeTask={removeTask}
                tasks={tasks}
              />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
