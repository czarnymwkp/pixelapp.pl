import { NavLink, Outlet } from "react-router-dom";
import { Content, OffertLayoutWrapper, OffertNav } from "./Offert.styled";

export const OffertLayout = () => {
  return (
    <OffertLayoutWrapper>
      <OffertNav>
        <NavLink to="/offert/websites">Strony internetowe</NavLink>
        <NavLink to="/offert/webapp">Aplikacje Webowe</NavLink>
        <NavLink to="/offert/graphic">Grafiki pod Marketplace</NavLink>
        <NavLink to="/offert/services">Zagraniczne Rynki</NavLink>
      </OffertNav>
      <Content>
        <Outlet></Outlet>
      </Content>
    </OffertLayoutWrapper>
  );
};
