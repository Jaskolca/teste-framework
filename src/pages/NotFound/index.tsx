import React from "react";

import "./styles.css";

import ObiWan from "../../assets/obiwan.svg";

const NotFound: React.FC = () => {
  return (
    <div id="containerNF">
      <img src={ObiWan} alt="Obi Wan" className="obiwan" />
      <h1>"Esta não é a página que você está procurando."</h1>
    </div>
  );
};

export default NotFound;
