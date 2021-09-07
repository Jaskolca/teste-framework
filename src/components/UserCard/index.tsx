import React from "react";
import "./styles.css";

import defaultAvatar from "../../assets/default-avatar.png";
import { Link } from "react-router-dom";

interface IUser {
  name: string;
  id: number;
  isPage?: boolean;
}

const UserCard: React.FC<IUser> = ({ name, id, isPage }) => {
  return (
    <div className={`userCard ${isPage && "sticky"}`}>
      <img src={defaultAvatar} alt={name} className="avatar" />
      <span className="userName">{name}</span>
      <hr />
      {isPage && <Link to="/">Home</Link>}
      <Link to={`/user/${id}/posts`}>Posts</Link>
      <Link to={`/user/${id}/gallery`}>Albuns</Link>
      <Link to={`/user/${id}/todos`}>To-do</Link>
    </div>
  );
};

export default UserCard;
