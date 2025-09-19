// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../../firebase";
// import { useState } from "react";

// type User = {
//   login: string;
//   password: string;
// };

// export const RegisterPage = () => {
//   const [user, setUser] = useState<User>({ login: "", password: "" });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!user.login.trim() || !user.password.trim()) return;
//     const id = await addUser(user.login, user.password);
//     alert("uzytkownik dodany:" + id);
//     setUser({ login: "", password: "" });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const addUser = async (login: string, password: string) => {
//     try {
//       const ref = await addDoc(collection(db, "users"), {
//         login,
//         password,
//         createdAt: serverTimestamp(),
//       });
//       return ref.id;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <h1>Rejestracja uytkownika</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="login"
//           type="text"
//           placeholder="Login"
//           value={user.login}
//           onChange={handleChange}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={handleChange}
//         />
//         <button type="submit">Zarejestruj się</button>
//       </form>
//     </div>
//   );
// };

import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { RegisterFormWrapper } from "../../../styles/Form/Form";
import { FormInput } from "../../../styles/Inputs/Inputs";
import { auth } from "../../../firebase";
import { FormButton } from "../../../styles/Buttons/Button.styled";

import FaceLogin from "../../../../public/loginFace.png";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

export const RegisteryForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(cred.user, { displayName: data.username });

      alert("Uzytwkonik zarejestrowany");
    } catch (error) {
      alert("Błąd" + (error as Error).message);
    }
  };

  return (
    <>
      <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <img src={FaceLogin} width={200} alt="" />
        <label htmlFor="">Nazwa uźytkownika:</label>
        <FormInput
          type="text"
          placeholder="Nazwa uzytkownika"
          {...register("username")}
        />
        <label htmlFor="">Twój email:</label>
        <FormInput
          type="text"
          placeholder="Email uzytkownika"
          {...register("email")}
        />
        <label htmlFor="">Hasło:</label>
        <FormInput
          type="password"
          placeholder="Hasło"
          {...register("password")}
        />
        <FormButton type="submit">Dodaj uytkownika</FormButton>
      </RegisterFormWrapper>
    </>
  );
};
