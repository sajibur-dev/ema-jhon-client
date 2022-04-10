import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt={logo} />
      </Link>
      <div>
        <Link to="/shop">shop</Link>
        <Link to="/review">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">about</Link>
        <Link to="/login">login</Link>
      </div>
    </nav>
  );
};

export default Header;
