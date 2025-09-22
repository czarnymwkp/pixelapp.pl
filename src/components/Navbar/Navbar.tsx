import { NavLink } from "react-router-dom";
import { NavbarMain, NavbarWrapper, MobileMenu } from "./Navbar.styled";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LogoutButton } from "../Buttons/LogoutButton";
import { LoginButton } from "../Buttons/LoginButton";

import LOGO from "./../../../public/logo.png";

export const Navbar = () => {
  const user = useAuth();
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const { t } = useTranslation();
  return (
    <NavbarWrapper>
      <div>
        <img src={LOGO} width={200} className="p-4" alt="" />
      </div>

      <NavbarMain>
        <NavLink to="/">{t("mainPage")}</NavLink>
        <NavLink to="portfolio">PORTFOLIO</NavLink>
        <NavLink to="contact">KONTAKT</NavLink>
        <NavLink to="offert">OFERTA</NavLink>
        <NavLink to="register">REJESTRACJA</NavLink>

        {user ? <NavLink to="test">TESTY</NavLink> : null}
      </NavbarMain>

      <div className="flex">
        {user ? (
          <div>
            {user.email} <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
        <div>
          <button
            className="p-3 border-2 border-white bg-white  rounded-full m-4 "
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "pl" : "en")
            }
          >
            {i18n.language === "en" ? "PL" : "EN"}
          </button>
        </div>
      </div>

      {open && (
        <MobileMenu>
          <NavLink to="/">STRONA GŁÓWNA</NavLink>
          <NavLink to="portfolio">PORTFOLIO</NavLink>
          <NavLink to="contact">KONTAKT</NavLink>
          <NavLink to="offert">OFERTA</NavLink>
          <NavLink to="register">REJESTRACJA</NavLink>

          <p>{user ? "Zalogowany: " + user.email : "Niezalogowany"}</p>
        </MobileMenu>
      )}

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </NavbarWrapper>
  );
};
