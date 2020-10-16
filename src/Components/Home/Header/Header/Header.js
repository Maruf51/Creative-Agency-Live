import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <HeaderNavbar></HeaderNavbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;