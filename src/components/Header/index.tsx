import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import "./styles.css";

interface IHeaderProps {
  title: string;
  isHome?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, isHome }) => {
  return (
    <header>
      <h1>{title}</h1>
      {!isHome && (
        <Link to="/">
          <FiHome />
        </Link>
      )}
    </header>
  );
};

export default Header;
