import { useState } from "react";
import { FormTest1 } from "../../components/Test/FormsTest/FormTest1";
import { TestUserList } from "../../components/Test/UserList";
import { UserList } from "../../components/Test/TanstakUsers";
import { AddUserFormTest } from "../../components/Test/AddUserFormTest";
import { Counter } from "../../components/Test/UseReducerTest";
import { ShopingCart } from "../../components/Test/UseReducerKartTest";

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
    <div className="flex  flex-col justify-center items-center">
      <div className="p-2 ">
        <h2 className="text-white">Dodawanie za pomoca tanstacka usera:</h2>
        <AddUserFormTest></AddUserFormTest>
      </div>
      <div className="p-2 ">
        <h2 className="text-white">UseReducer cwiczenia</h2>
        <Counter></Counter>
      </div>
      <div className="p-2 ">
        <h2 className="text-white">UseReducer Koszyk zakupów</h2>
        <ShopingCart></ShopingCart>
      </div>

      <h1 className="text-white">TanstackQuery - uzycie</h1>
      <div className="p-4">
        <UserList></UserList>
      </div>
      <div>
        <FormTest1 onAddUser={addUsers}></FormTest1>
      </div>
      <h1 className="text-white">Pobieranie danych standardową metodą</h1>
      <div className="flex min-w-[400px] min-h-[150px] gap-4 p-8 m-5 border-2 border-white rounded-xl items-center justify-center">
        <TestUserList users={users} />
      </div>
    </div>
  );
};
