import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiCamera,
  FiCheckSquare,
  FiMessageSquare,
} from "react-icons/fi";
import "./styles.css";

import defaultAvatar from "../../assets/default-avatar.png";

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
      {isPage && (
        <Link to="/">
          <FiHome /> Home
        </Link>
      )}
      <Link to={`/user/${id}/posts`}>
        <FiMessageSquare />
        Posts
      </Link>
      <Link to={`/user/${id}/gallery`}>
        <FiCamera /> Albuns
      </Link>
      <Link to={`/user/${id}/todos`}>
        <FiCheckSquare />
        To-do
      </Link>
    </div>
  );
};

export default UserCard;
