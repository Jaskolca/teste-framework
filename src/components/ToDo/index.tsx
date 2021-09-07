import React from "react";
import "./styles.css";

interface IToDoParams {
  id: number;
  title: string;
  completed: boolean;
  onClick: (id: number) => void;
}

const ToDo: React.FC<IToDoParams> = ({ id, title, completed, onClick }) => {
  return (
    <label className={`toDoItem ${completed && "completed"}`}>
      <input onChange={() => onClick(id)} type="checkbox" checked={completed} />
      {title}
    </label>
  );
};

export default ToDo;
