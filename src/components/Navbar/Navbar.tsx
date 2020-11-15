import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Menu = () => {
  return (
    <Navbar bg="light" expand="md" className="mainNavbar">
      <div>
        <Navbar.Brand as={Link} to="/">
          GlitchCommerce
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-cotrols="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/signup">
            Registrarse
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            Iniciar Sesion
          </Nav.Link>{" "}
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Que quieres comprar?" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
