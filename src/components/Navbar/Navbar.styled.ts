import styled from "styled-components";

export const NavbarMain = styled.nav`
    display: flex;
    width:100%;
    gap:30px;
    color:white ;
    a {
        color:white;    
        font-size:16px;
    }      
`
export const NavbarWrapper = styled.div`
display:flex;
position:fixed;
width:100%;
top:0;
left:0;
padding-bottom:20px;
background: ${({theme}) => theme.colors.primary};
padding: 20px;
`