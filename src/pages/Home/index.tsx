import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import UserCard from "../../components/UserCard";

import "./styles.css";

interface IUser {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get("users").then(({ data }) => setUsers(data));
  }, []);

  return (
    <div id="container">
      <Header title="Home" isHome />
      <div id="content">
        {users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
