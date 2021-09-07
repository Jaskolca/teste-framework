import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

interface IHeaderProps {
  title: string;
  isHome?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, isHome }) => {
  const { goBack } = useHistory();
  return (
    <header>
      <h1>{title}</h1>
      {!isHome && <input type="button" onClick={goBack} value="Voltar" />}
    </header>
  );
};

export default Header;
