import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <a href="/">
        <img src={logo} alt={logo} />
      </a>
      <div>
        <a href="/shop">shop</a>
        <a href="/review">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">about</a>
      </div>
    </nav>
  );
};

export default Header;
