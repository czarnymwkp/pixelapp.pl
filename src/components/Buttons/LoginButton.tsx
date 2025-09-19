import { useNavigate } from "react-router-dom";
import { LoginButtonStyled } from "../../styles/Buttons/Button.styled";

export const LoginButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return <LoginButtonStyled onClick={handleClick}>Zaloguj</LoginButtonStyled>;
};
