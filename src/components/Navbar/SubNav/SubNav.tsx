import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillQuestionCircle,
  AiFillMobile,
  AiOutlineHeart,
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
    <div className="subNavbar">
      <div className="d-flex navItems">
        <Nav.Link as={Link} to="/signup">
          <AiFillQuestionCircle size={iconSize} />
          <small>{t("Help")}</small>
        </Nav.Link>
        <Navbar.Text>
          <AiFillMobile size={iconSize} />
          <small>
            <a href="/w"> Whatsapp</a>
          </small>
        </Navbar.Text>
      </div>
      <div className="subNavbar__categories">
        <Navbar.Text>
          <a href="/ebook" className="subNavbar__category">
            eBooks
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a href="/electronics" className="subNavbar__category">
            Electronics
          </a>
        </Navbar.Text>

        <Navbar.Text>
          <a href="/specials" className="subNavbar__category">
            Specials
          </a>
        </Navbar.Text>

        <Navbar.Text>
          <a href="/flash" className="subNavbar__category">
            Flash Sale
          </a>
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
