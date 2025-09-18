import { NavLink } from "react-router-dom";
import { NavbarMain, NavbarWrapper, MobileMenu } from "./Navbar.styled";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const Navbar = () => {
  const user = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <NavbarWrapper>
      <div>LOGO</div>

      <NavbarMain>
        <NavLink to="/">STRONA GŁÓWNA</NavLink>
        <NavLink to="portfolio">PORTFOLIO</NavLink>
        <NavLink to="contact">KONTAKT</NavLink>
        <NavLink to="offert">OFERTA</NavLink>
        <NavLink to="register">REJESTRACJA</NavLink>
        <NavLink to="login">LOGOWANIE</NavLink>
        <NavLink to="test">TESTY</NavLink>
      </NavbarMain>

      <div>{user ? "Zalogowany: " + user.email : "Niezalogowany"}</div>

      {open && (
        <MobileMenu>
          <NavLink to="/">STRONA GŁÓWNA</NavLink>
          <NavLink to="portfolio">PORTFOLIO</NavLink>
          <NavLink to="contact">KONTAKT</NavLink>
          <NavLink to="offert">OFERTA</NavLink>
          <NavLink to="register">REJESTRACJA</NavLink>
          <NavLink to="login">LOGOWANIE</NavLink>
          <p>{user ? "Zalogowany: " + user.email : "Niezalogowany"}</p>
        </MobileMenu>
      )}

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </NavbarWrapper>
  );
};
