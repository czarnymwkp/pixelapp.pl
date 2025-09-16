import { NavLink } from "react-router-dom";

import { NavbarMain, NavbarWrapper } from "./Navbar.styled";

import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const user = useAuth();

  return (
    <NavbarWrapper>
      <NavbarMain>
        <NavLink to={"/"}>STRONA GŁÓWNA</NavLink>
        <NavLink to={"portfolio"}>PORTFOLIO</NavLink>
        <NavLink to={"contact"}>KONTAKT</NavLink>
        <NavLink to={"offert"}>OFERTA</NavLink>
        <NavLink to={"register"}>REJESTRACJA</NavLink>
        <NavLink to={"login"}>LOGOWANIE</NavLink>
        <p>{user ? "Zalogowany:  " + user.email : "Niezalogowany"}</p>
      </NavbarMain>
    </NavbarWrapper>
  );
};
