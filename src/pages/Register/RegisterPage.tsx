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

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../../firebase";

import { FormInput } from "../../styles/Inputs/Inputs";
import { RegisterFormWrapper } from "../../styles/Form/Form";
import { FormButton } from "../../styles/Buttons/Button.styled";

export const RegisteryForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(cred.user, { displayName: username });

      alert("Uzytwkonik zarejestrowany");
    } catch (error) {
      alert("Błąd" + (error as Error).message);
    }
  };

  return (
    <>
      <h2>REJESTRACJA</h2>
      <RegisterFormWrapper onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Nazwa uzytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Email uzytkownika"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton type="submit">Dodaj uytkownika</FormButton>
      </RegisterFormWrapper>
    </>
  );
};
