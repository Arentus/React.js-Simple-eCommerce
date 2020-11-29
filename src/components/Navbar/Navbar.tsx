import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/useAuth";
import { AiOutlineLogout } from "react-icons/ai";

const Menu = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const exit = () => {
    logout();
  };
  return (
    <Navbar bg="light" expand="md" className="navbar">
      <Navbar.Brand as={Link} to="/">
        GlitchCommerce
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="navbar__content" id="basic-navbar-nav">
        <Form className="navbar__search" inline>
          <FormControl type="text" placeholder={t("sPlaceholder")} />
        </Form>
        <Nav className="navbar__links">
          {user ? (
            <>
              <Nav.Link as={Link} to="/user">
                {user.email}
              </Nav.Link>{" "}
              <Nav.Link onClick={exit}>
                <AiOutlineLogout className="cart__icon" />
                Salir
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/signup">
                {t("Sign Up")}
              </Nav.Link>
              <Nav.Link as={Link} to="/signin">
                {t("Sign In")}
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
