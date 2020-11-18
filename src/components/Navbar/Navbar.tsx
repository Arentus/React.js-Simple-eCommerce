import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="light" expand="md" className="mainNavbar">
      <div>
        <Navbar.Brand as={Link} to="/">
          GlitchCommerce
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/signup">
            {t("Sign Up")}
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            {t("Sign In")}
          </Nav.Link>{" "}
        </Nav>
      </Navbar.Collapse>

      <Form className="searchBar mt-1" inline>
        <AiOutlineSearch className="mr-3" size={25} />
        <FormControl type="text" placeholder={t("sPlaceholder")} />
      </Form>
    </Navbar>
  );
};

export default Menu;
