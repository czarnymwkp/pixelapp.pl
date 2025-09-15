import styled from "styled-components";

export const OffertLayoutWrapper = styled.div`

    display:flex;
    min-height:80vh;

`
export const OffertNav = styled.nav`
  width: 240px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius:10px;
  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }

    &.active {
      background: ${({ theme }) => theme.colors.dark };
      color: white;
      font-weight: bold;
    }
  }
`;

export const Content = styled.section`
  flex: 1;
  width: 1200px; 
  padding: 30px;
  background: white;
`;