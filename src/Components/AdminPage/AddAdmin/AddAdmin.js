import React, { useEffect, useState } from 'react';
import './AddAdmin.css'
import logo from '../../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBriefcase, faUserPlus, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';
// import userLogo from '../../images/logos/users-alt 1.png'
// import plusLogo from '../../images/logos/plus 1.png'

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [email, setEmail] = useState()

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleAddAdmin = e => {
        e.preventDefault();

        fetch(`https://obscure-plains-54568.herokuapp.com/add-admin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email})
        })
        .then(response => response.json())
        .then(data => {
            if(data.insertedCount > 0){
                alert('An Admin has been added.')
            }
        })
    }
    return (
        
            <div className="user-page">
                <div className="userPageLeftSide">
                    <Link to='/'><img className="userPageLogo" src={logo} alt=""/></Link>
                    <div className="user-page-link">
                        <Link className="userPageLink orderLink inactive-color" to='/admin/service-list'>
                            <div className="d-flex justify-content-left order align-items-center">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <p className="mx-0 my-2 pl-2">Service list</p>
                            </div>
                        </Link>
                        <Link className="serviceListLink inactive-color" to="/admin/add-service">
                            <div className="d-flex justify-content-left serviceList align-items-center">
                                <FontAwesomeIcon icon={faPlus} />
                                <p className="mx-0 my-2 pl-2">Add Service</p>
                            </div>
                        </Link>
                        <Link className="reviewLink color-active" to="/admin/add-admin">
                            <div className="d-flex justify-content-left review align-items-center">
                                <FontAwesomeIcon icon={faUserPlus} />
                                <p className="mx-0 my-2 pl-2">Add Admin</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="userPageRightSide">
                    <h3 className="rightSideListText">Add Admin</h3>
                    <div className="rightSideMain row pl-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 p-4 add-admin-area">
                            <div className="col-lg-7 col-md-12 col-sm-12 p-0">
                                <form onSubmit={handleAddAdmin} action="">
                                    <label style={{fontWeight: '600'}} htmlFor="title">Service Title</label>
                                    <div>
                                        <input style={{width: '73%'}} onChange={handleEmail} placeholder="jon@gmail.com" className="add-service-input mr-2" name="email" type="email" id="title" required/>
                                        <button type="submit" className="btn btn-success add-service-btn add-admin-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default AddAdmin;