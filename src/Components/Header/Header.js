import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
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
        {user ? (
          <button style={{border:'none',backgroundColor:'#1c2b35'}} onClick={() => signOut(auth)}><FontAwesomeIcon className='logout-icon' icon={faArrowRightFromBracket} /></button>
        ) : (
          <Link to="/login"><FontAwesomeIcon   className='logout-icon' icon={faArrowRightToBracket}/></Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
