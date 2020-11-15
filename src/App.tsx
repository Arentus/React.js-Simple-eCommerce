import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/Navbar/Navbar";
import {
  Navbar as subNav,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  AiOutlineShoppingCart,
  AiFillQuestionCircle,
  AiFillMobile,
} from "react-icons/ai";
const iconSize = 20;
function App() {
  return (
    <Router>
      <div>
        <div className="subNav d-flex justify-content-between">
          <div className="d-flex navItems">
            <Nav.Link as={Link} to="/signup">
              <AiFillQuestionCircle size={iconSize} />
            </Nav.Link>
            <subNav.Text>
              {" "}
              <AiFillMobile size={iconSize} />
              <small> +58 424 361 72 35</small>
            </subNav.Text>
          </div>

          <Nav.Link as={Link} to="/signup">
            <AiOutlineShoppingCart size={25} />
          </Nav.Link>
        </div>
        <Navbar />
        <Switch>
          {routes.map(({ path, component }) => (
            <Route exact={true} key={path} path={path} component={component} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
