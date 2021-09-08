import React from "react";
import { FiCamera, FiCheckSquare, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

const PageMenu: React.FC = () => {
  return (
    <div className="pageMenu">
      <Link to="/posts" className="menuItem">
        <FiMessageSquare />
        Posts
      </Link>
      <Link to="/gallery" className="menuItem">
        <FiCamera />
        Albuns
      </Link>
      <Link to="/todos" className="menuItem">
        <FiCheckSquare />
        To-Dos
      </Link>
    </div>
  );
};

export default PageMenu;
