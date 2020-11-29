import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes, { privateRoutes } from "./config/routes";
import Navbar from "./components/Navbar/Navbar";
import { SubNav } from "./components/Navbar/SubNav/SubNav";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { Home } from "./pages/Home";
import { ProvideAuth } from "./context/useAuth";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Navbar />
        <SubNav />
        <Switch>
          <Route exact path="/" component={Home} />

          {Object.values(routes).map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}

          {Object.values(privateRoutes).map(({ path, component }) => (
            <PrivateRoute key={path} path={path} component={component} />
          ))}

          <Route component={NotFound} />
        </Switch>
      </Router>
    </ProvideAuth>
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
