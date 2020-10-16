/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../../../images/logos/logo.png';
import { Link } from "react-router-dom";
import './HeaderNavbar.css';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <Link to="/"><img style={{height: '45px'}} src={logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex align-items-center">
                    <Link className="mx-3 navbar-link homeLink" to="/">Home</Link>
                    <Link className="mx-3 navbar-link" to="/user/service-list">Dashboard</Link>
                    <Link className="mx-3 navbar-link" to="/admin/service-list">Admin</Link>
                    <Link className="mx-3 navbar-link" to="/">Contact Us</Link>
                    {
                        loggedInUser.isSignedIn ? <div className="d-flex align-items-center">
                            <p className="m-0 mx-3 loggedInUserName">{loggedInUser.displayName}</p>
                            <img className="loggedInUserPhoto" src={loggedInUser.photoURL} alt=""/>
                        </div> : 
                        <Button className="login-btn" style={{padding: '6px 30px'}} variant="dark"><Link to="/login">Login</Link></Button>
                    }
                </div>
            </div>
        </nav>
    );
};

export default HeaderNavbar;