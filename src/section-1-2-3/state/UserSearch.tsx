import { useState } from "react";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Ajay", age: 29 },
  { name: "Alka", age: 30 },
  { name: "Pooja", age: 29 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name.toLowerCase().includes(name));

    setUser(foundUser);
  };
  return (
    <div>
      <h1>Search User</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
