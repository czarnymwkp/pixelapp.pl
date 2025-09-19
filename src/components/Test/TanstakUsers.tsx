import { useUsers } from "../../hooks/useUsers";

export const UserList = () => {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) return <p>Ładowanie...</p>;
  if (isError) return <p>Błąd...</p>;

  return (
    <>
      <div>
        {data?.map((u: any, i: number) => (
          <p className="uppercase" key={i}>
            {u.name}
          </p>
        ))}
      </div>
    </>
  );
};
