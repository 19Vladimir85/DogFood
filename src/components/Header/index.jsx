import React from "react";
import logo from "./img/logo.svg";

import "./index.css";

const Header = ({ children }) => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="logo" className="logo__pic" />
      </a>
      {children}
    </header>
  );
};

export default Header;
