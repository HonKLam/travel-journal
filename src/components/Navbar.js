import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-items">
      <img src={logo} alt="logo" />
      <h1> Lam's (Dream) Travel Journal </h1>
    </nav>
  );
};

export default Navbar;
