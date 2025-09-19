import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h2 className="text-white text-2xl uppercase  ">
        Zaloguj się do swojego konta
      </h2>
      <LoginForm></LoginForm>
    </div>
  );
};
