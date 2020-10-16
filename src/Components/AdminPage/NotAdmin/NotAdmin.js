import React from 'react';
import { Link } from 'react-router-dom';

const NotAdmin = () => {
    return (
        <div style={{height: '100vh', width: '100%', display: 'flex',}}>
            <h1 className="m-auto text-center">You are not an admin. <br/>Please <Link to="/">go back</Link></h1>
        </div>
    );
};

export default NotAdmin;