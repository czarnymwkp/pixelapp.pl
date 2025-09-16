import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../../firebase";
import { LoginFormWrapper } from "../../../styles/Form/Form";
import { FormInput } from "../../../styles/Inputs/Inputs";
import { FormButton } from "../../../styles/Buttons/Button.styled";

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

  const onSubmit = async (data: LoginData) => {
    console.log(register);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      alert("Zalogowany jako: " + userCredential.user.email);
    } catch (error) {
      alert("Błąd: " + error);
    }
  };
  return (
    <>
      <h2>LOGOWANIE</h2>
      <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormInput type="email" placeholder="Email" {...register("email")} />
        {errors.email && <span>{errors.email?.message}</span>}
        <FormInput
          type="password"
          placeholder="Hasło"
          {...register("password")}
        />
        <FormButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logowanie" : "Zaloguj"}
        </FormButton>
      </LoginFormWrapper>
    </>
  );
};
