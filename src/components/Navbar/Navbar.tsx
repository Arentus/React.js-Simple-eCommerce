import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

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
          <Nav.Link as={Link} to="/signup">
            {t("Sign Up")}
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            {t("Sign In")}
          </Nav.Link>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
