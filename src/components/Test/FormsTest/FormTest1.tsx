//import { useState } from "react";
import { useForm } from "react-hook-form";

export type TestUser1 = {
  name: string;
  surname: string;
  password: string;
  country?: string;
  confirmPassword: string;
};

export const FormTest1 = ({
  onAddUser,
}: {
  onAddUser: (u: TestUser1) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TestUser1>();

  const password = watch("password");
  //   const [name, setName] = useState();
  //   const [surname, setSurname] = useState();
  //   const [password, setPassword] = useState();

  const onSubmit = (data: TestUser1) => {
    onAddUser(data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-4 p-8 m-4 border-2 border-white-600 rounded-xl"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="">Imię</label>
      <input
        className="rounded p-2"
        type="text"
        placeholder="Wpisz imię"
        {...register("name", {
          required: "Pole wymagane",
          minLength: { value: 8, message: "Minimalnie 8 znaków" },
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <label htmlFor="">Nazwisko</label>
      <input
        className="rounded p-2"
        type="text"
        placeholder="Wpisz nazwisko"
        {...register("surname", { required: "Pole jest wymagane" })}
      />
      {errors.surname && <p>{errors.surname.message}</p>}
      <label className="bg-white rounded" htmlFor="">
        Podaj hasło
      </label>
      <input
        className="rounded p-2"
        type="password"
        placeholder="Hasło"
        {...register("password", { required: "Pole jest wymagane" })}
      />
      <label className="bg-white rounded" htmlFor="">
        Powtórz hasło
      </label>
      <input
        className="rounded p-2"
        type="password"
        placeholder="Hasło"
        {...register("confirmPassword", {
          required: "Potwierdzenie hasła jest wymagane",
          validate: (value) => value === password || "Hasła nie sa takie same",
        })}
      />
      <button className="rounded bg-white p-1 uppercase" type="submit">
        Wyślij dane
      </button>
    </form>
  );
};
