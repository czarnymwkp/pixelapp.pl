type TestUser1 = {
  id: number;
  name: string;
  surname: string;
};
export const TestUserList = ({ users }: { users: TestUser1[] }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <>
            <li>Imię: {user.name}</li>
            <li>Nazwisko: {user.surname}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
