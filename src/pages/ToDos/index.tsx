import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../services/api";
import ToDo from "../../components/ToDo";
import UserCard from "../../components/UserCard";
import PageMenu from "../../components/PageMenu";

interface IToDosParams {
  userId: string;
}

interface IUser {
  id: number;
  name: string;
}

interface IToDo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const ToDos: React.FC = () => {
  const { userId } = useParams<IToDosParams>();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [toDos, setToDos] = useState<IToDo[]>([]);

  const handleOnClick = (id: number) => {
    const toDoList = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.completed = !toDo.completed;
      }

      return toDo;
    });

    setToDos(toDoList);
  };

  useEffect(() => {
    if (userId) {
      api.get<IUser>(`users/${userId}`).then(({ data }) => setUser(data));
    }
  });

  useEffect(() => {
    api
      .get<IToDo[]>("todos", {
        params: {
          userId,
        },
      })
      .then(({ data }) => setToDos(data));
  }, [userId]);

  return (
    <div id="container">
      <Header title="To-Dos" />
      <div id="content">
        {!userId && <PageMenu />}
        {!!userId && <UserCard {...user} isPage />}
        <section className="pageContent">
          {toDos.map((toDo) => (
            <ToDo {...toDo} onClick={handleOnClick} key={toDo.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ToDos;
