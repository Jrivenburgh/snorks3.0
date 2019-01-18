import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animals from "./pages/Animals";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Animals} />
          <Route exact path="/Animals" component={Animals} />
          <Route exact path="/Animals/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
