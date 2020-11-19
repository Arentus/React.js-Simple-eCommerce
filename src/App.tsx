import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/Navbar/Navbar";
import { SubNav } from "./components/Navbar/SubNav/SubNav";

function App() {
  return (
    <Router>
      <Navbar />
      <SubNav />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact={true} key={path} path={path} component={component} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="container">
      <h1>Sorry, Not Found.</h1>
    </div>
  );
}
export default App;
