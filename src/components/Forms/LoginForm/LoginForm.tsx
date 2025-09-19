import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../../firebase";
import { LoginFormWrapper } from "../../../styles/Form/Form";
import { FormInput } from "../../../styles/Inputs/Inputs";
import { FormButton } from "../../../styles/Buttons/Button.styled";
import { useNavigate } from "react-router-dom";

import FaceLogin from "../../../../public/loginFace.png";

type LoginData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>();

  const navigate = useNavigate();

  const onSubmit = async (data: LoginData) => {
    console.log(register);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      navigate("../test");
      alert("Zalogowany jako: " + userCredential.user.email);
    } catch (error) {
      alert("Błąd: " + error);
    }
  };
  return (
    <>
      <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <img src={FaceLogin} width={200} alt="" />
        <label htmlFor="">Twój email:</label>
        <FormInput type="email" placeholder="Email" {...register("email")} />
        {errors.email && <span>{errors.email?.message}</span>}
        <label htmlFor="">Twoje hasło:</label>
        <FormInput
          type="password"
          placeholder="Hasło"
          {...register("password")}
        />
        <div className="flex gap-6">
          <div className="flex gap-2">
            <input type="radio" />
            <p>zapamiętaj hasło</p>
          </div>
          <div>
            <p>Zapomniałeś hasła?</p>
          </div>
        </div>
        <FormButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logowanie" : "Zaloguj"}
        </FormButton>
      </LoginFormWrapper>
    </>
  );
};
