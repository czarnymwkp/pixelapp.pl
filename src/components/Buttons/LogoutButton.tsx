import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { LogoutButtonStyled } from "../../styles/Buttons/Button.styled";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("wylogowany pomyślnie");
      navigate("/");
    } catch (error) {
      alert("Błąd" + (error as Error).message);
    }
  };
  return <LogoutButtonStyled onClick={handleLogout}>Logout</LogoutButtonStyled>;
};
