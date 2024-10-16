import { useLoaderData } from "react-router-dom";
import User from "./User";

interface User {
  id: number;
  name: string;
  website: string;
  company: Company;
  email: string;
}

interface Company {
  bs?: string;
  catchPhrase?: string;
  name: string;
}

export default function Users() {
  const usersData: User[] = useLoaderData();

  const allUsers = usersData.map((user) => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      website={user.website}
      company={user.company}
      email={user.email}
    />
  ));

  return (
    <>
      <h1>Users</h1>
      <div className="users">{allUsers}</div>
    </>
  );
}
