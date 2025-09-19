import { useState } from "react";
import { useAddUser } from "../../hooks/useAddUser";

export const AddUserFormTest = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const addUser = useAddUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !surname) return;

    addUser.mutate({
      name,
      surname,
    });
    setName("");
    setSurname("");
  };

  return (
    <div>
      <form
        className="flex gap-4 p-8 m-5 border-2 border-white-600 rounded-xl items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 rounded"
          type="text"
          placeholder="Imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-2 rounded"
          type="text"
          placeholder="Nazwisko"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <button className="pl-6 pr-6 rounded bg-white ml-2" type="submit">
          Dodaj usera
        </button>
      </form>
    </div>
  );
};
