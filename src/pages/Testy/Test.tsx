import { useState } from "react";
import { FormTest1 } from "../../components/Test/FormsTest/FormTest1";
import { TestUserList } from "../../components/Test/UserList";
import { UserList } from "../../components/Test/TanstakUsers";
import { AddUserFormTest } from "../../components/Test/AddUserFormTest";

export const Test = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  const addUsers = (user: any) => {
    const newUsers = [...users, { ...user, id: Date.now() }];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div className="p-2 ">
        <h1>Dodawanie za pomoca tanstacka usera:</h1>
        <AddUserFormTest></AddUserFormTest>
      </div>

      <h1 className="text-white">TanstackQuery - uzycie</h1>
      <div className="p-4">
        <UserList></UserList>
      </div>
      <div>
        <FormTest1 onAddUser={addUsers}></FormTest1>
      </div>
      <div>
        <h1>Pobieranie danych standardową metodą</h1>
        <TestUserList users={users}></TestUserList>
      </div>
    </div>
  );
};
