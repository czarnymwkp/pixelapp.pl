import styled from "styled-components";

export const RegisterFormWrapper = styled.form`
display: flex;
flex-direction:row;
gap:20px;
margin: 30px;
padding:20px;
border: 1px black solid;
border-radius:20px;
height:30vh;
align-items:center;
justify-content: center;
box-shadow: 2px 2px 15px #A4BF69;

    @media(max-width: 1024px){
    flex-direction:column;}

`

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  min-height: 200px;
  max-width: 600px;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 15px #A4BF69;

  @media (max-width: 760px) {
    flex-direction: column; /* pola jedno pod drugim */
    gap: 15px;
    margin: 15px;
    padding: 15px;
    width: 90%; /* nie na całą szerokość */
    height: auto; /* dopasowuje się do treści */
  }
`;
