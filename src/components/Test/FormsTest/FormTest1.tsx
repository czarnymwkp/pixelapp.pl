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
      className="flex flex-col gap-4"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="rounded p-2"
        type="text"
        placeholder="name"
        {...register("name", {
          required: "Pole wymagane",
          minLength: { value: 8, message: "Minimalnie 8 znaków" },
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        className="rounded p-2"
        type="text"
        placeholder="surname"
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
