import { NavLink } from "react-router-dom";
import { NavbarMain, NavbarWrapper, MobileMenu } from "./Navbar.styled";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { LogoutButton } from "../Buttons/LogoutButton";
import { LoginButton } from "../Buttons/LoginButton";

import LOGO from "./../../../public/logo.png";

export const Navbar = () => {
  const user = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <NavbarWrapper>
      <div>
        <img src={LOGO} width={200} className="p-4" alt="" />
      </div>

      <NavbarMain>
        <NavLink to="/">STRONA GŁÓWNA</NavLink>
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
