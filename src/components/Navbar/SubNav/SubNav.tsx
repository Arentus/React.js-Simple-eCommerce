import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillQuestionCircle,
  AiFillMobile,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";

const iconSize = 20;

export const SubNav = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("es");

  const toggleLanguage = () => {
    if (lang === "es") {
      setLang("en");
      i18n.changeLanguage("en");
    } else {
      setLang("es");
      i18n.changeLanguage("es");
    }
  };

  return (
    <div className="subNav d-flex justify-content-between">
      <div className="d-flex navItems">
        <Nav.Link as={Link} to="/signup">
          <AiFillQuestionCircle size={iconSize} />
          <small>{t("Help")}</small>
        </Nav.Link>
        <Navbar.Text>
          <AiFillMobile size={iconSize} />
          <small> +58 424 361 72 35</small>
        </Navbar.Text>
      </div>
      <div className="navItems">
        <Nav.Link onClick={toggleLanguage}>{lang}</Nav.Link>
        <Nav.Link as={Link} to="/wishlist">
          <AiOutlineHeart size={25} />
        </Nav.Link>
        <Nav.Link className="cart" as={Link} to="/cart">
          <AiOutlineShoppingCart className="cart__icon" size={25} />
          <span className="cart__quantity">2</span>
        </Nav.Link>
      </div>
    </div>
  );
};
