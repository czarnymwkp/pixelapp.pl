import { NavLink } from "react-router-dom"

import { NavbarMain, NavbarWrapper } from "./Navbar.styled"


export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarMain>
            <NavLink to={"/"}>STRONA GŁÓWNA</NavLink>
            <NavLink to={"portfolio"}>PORTFOLIO</NavLink>
            <NavLink to={"contact"}>KONTAKT</NavLink>
            <NavLink to={"offert"}>OFERTA</NavLink>
            </NavbarMain>
        </NavbarWrapper>
    )
} 