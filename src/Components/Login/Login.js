import React, { useContext } from 'react';
import './Login.css'
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/googleLogo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { googleSignIn, initializeLoginFrameworkFirebase } from '../LoginManager/LoginManager';
import { useState } from 'react';
import { UserContext } from '../../App';

    initializeLoginFrameworkFirebase()

const Login = () => {
    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser)
    
    const [error, setError] = useState()
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(data => {
            const newData = {...loggedInUser}
            newData.isSignedIn = data.isSignedIn;
            newData.displayName = data.displayName;
            newData.email = data.email;
            newData.photoURL = data.photoURL;
            newData.error = data.error;
            setError(data.error);

            // for checking user is admin or not
            if(data.isSignedIn === true){
                fetch(`https://obscure-plains-54568.herokuapp.com/get-admin/?email=${data.email}`)
                .then(response => response.json())
                .then(result => {
                    if(result === true){
                        newData.admin = true;
                        setLoggedInUser(newData);
                        history.replace(from);
                    }
                    else{
                        newData.admin = false;
                        setLoggedInUser(newData);
                        history.replace(from);
                    }
                })
                
            }
        })
    }
    
    return (
        <div className="text-center loginPage">
            <Link to='/'><img className="loginLogo" src={logo} alt=""/></Link>
            <div className="loginArea d-flex align-items-center">
                <div className="m-auto">
                    <h3 className="loginWithText">Login with</h3>
                    {
                        error && <p className="text-danger" style={{fontSize: '12px'}}>{error}</p>
                    }
                    <div className="loginGoogle" onClick={handleGoogleSignIn}>
                        <img className="googleLogo" src={googleLogo} alt=""/>
                        <p className="googleText">Continue with Google</p>
                    </div>
                    <p className="createAccountText">Don't have an account? <Link to="/login">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;