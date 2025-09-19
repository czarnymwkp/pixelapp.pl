import styled from "styled-components";

export const OffertLayoutWrapper = styled.div`

    display:flex;
    min-height:100vh;
    margin-top:50px;
    @media (max-width: 760px){
    flex-direction:column;
    }

`
export const OffertNav = styled.nav`
  position: fixed;     /* zawsze przyklejony */
  top: 100px;           /* wysokość Twojego topowego NavbarWrapper */
  left: 0;
  bottom: 0;
  width: 250px;
  background:rgb(224, 238, 194);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  a {
    color: rgb(90, 107, 51);
    text-decoration: none;
    font-weight: 500;
  }

  a.active {
    color: ;
    background: rgb(255, 255, 255);
    padding: 8px;
    
    border-radius: 6px;
  }
   @media (max-width: 760px) {
    position: relative;   /* nie fixed na mobile */
    top: 0;
    left: 0;
    bottom: auto;
    width: 100vw;
    overflow-x: auto;     /* przewijanie jeśli za dużo linków */}
   

`;

export const Content = styled.div`
  flex: 1;
  margin-top:60px;
  padding: 20px;
 margin-left:250px;
  @media (max-width: 760px) {
 
    margin-left:0px;
  }
`;