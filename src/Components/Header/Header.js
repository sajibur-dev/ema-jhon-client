import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt={logo} />
            <div>
                <a href="/shop">shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory Management</a>
            </div>
        </nav>
    );
};

export default Header;