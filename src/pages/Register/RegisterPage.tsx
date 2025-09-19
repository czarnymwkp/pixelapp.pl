import { RegisteryForm } from "../../components/Forms/RegiterForm/RegisterForm";

export const RegisteryPage = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h2 className="text-white text-2xl uppercase  ">Zarejestruj się</h2>
      <RegisteryForm></RegisteryForm>
    </div>
  );
};
