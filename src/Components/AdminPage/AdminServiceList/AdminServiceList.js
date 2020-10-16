import React, { useEffect, useState } from 'react';
import './AdminServiceList.css'
import logo from '../../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBriefcase, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminServiceData from './AdminServiceData/AdminServiceData';
// import userLogo from '../../images/logos/users-alt 1.png'
// import plusLogo from '../../images/logos/plus 1.png'

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderedData, setOrderedData] = useState([])
    // for getting all ordered service from database
    useEffect(() => {
        fetch(`https://obscure-plains-54568.herokuapp.com/get-all-ordered-service`)
        .then(response => response.json())
        .then(data => setOrderedData(data))
    }, [])
    return (
        
            <div className="user-page">
                <div className="userPageLeftSide">
                    <Link to='/'><img className="userPageLogo" src={logo} alt=""/></Link>
                    <div className="user-page-link">
                        <Link className="userPageLink orderLink color-active" to='/admin/service-list'>
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
                        <Link className="reviewLink inactive-color" to="/admin/add-admin">
                            <div className="d-flex justify-content-left review align-items-center">
                                <FontAwesomeIcon icon={faUserPlus} />
                                <p className="mx-0 my-2 pl-2">Add Admin</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="userPageRightSide">
                    <h3 className="rightSideListText">Service list</h3>
                    <div className="rightSideMain row pl-0">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{padding: '10px 10px 10px 20px', borderRadius: '10px 0 0 10px', width: '150px'}}>Name</th>
                                    <th style={{width: '240px'}}>Email ID</th>
                                    <th style={{width: '185px'}}>Service</th>
                                    <th>ProjectDetails</th>
                                    <th style={{borderRadius: '0 10px 10px 0', width: '110px'}}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderedData.length === 0 && <button className="btn btn-primary m-auto" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                  </button>
                                }
                                {
                                    orderedData.map(data => <AdminServiceData key={data._id} details={data}></AdminServiceData>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
    );
};

export default AdminServiceList;