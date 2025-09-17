import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* logo lewo, menu prawo */
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  z-index: 1000;

  .hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;

    @media (max-width: 1024px) {
      display: block;
    }
  }
`;

export const NavbarMain = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex: 1; /* ← to ważne: daje środkowej sekcji elastyczne miejsce */

  a {
    color: white;
    font-size: 16px;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

/* nowe mobilne menu */
export const MobileMenu = styled.div`
  position: absolute;
  top: 60px; /* odsuń od górnej belki */
  left: 0;
  width: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  z-index: 1000;

  a,
  p {
    color: white;
  }

  /* chowaj na desktopie */
  @media (min-width: 761px) {
    display: none;
  }
`;
