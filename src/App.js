import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import All from "./pages/all";
import Completed from "./pages/completed";
import Pending from "./pages/pending";

function App() {
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
