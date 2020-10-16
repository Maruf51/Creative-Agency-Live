import React, { useEffect, useState } from 'react';
import './ServiceList.css'
import logo from '../../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBriefcase, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';
import UserServiceList from './UserServiceList/UserServiceList';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [userOrdered, setUserOrdered] = useState([])
    // for getting user ordered service
    useEffect(() => {
        fetch(`https://obscure-plains-54568.herokuapp.com/getUserOrder/?email=${loggedInUser.email}`)
        .then(response => response.json())
        .then(data => setUserOrdered(data))
    }, [])
    return (
        
            <div className="user-page">
                <div className="userPageLeftSide">
                    <Link to='/'><img className="userPageLogo" src={logo} alt=""/></Link>
                    <div className="user-page-link">
                        <Link className="userPageLink orderLink inactive-color" to='/user/order'>
                            <div className="d-flex justify-content-left order align-items-center">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <p className="mx-0 my-2 pl-2">Order</p>
                            </div>
                        </Link>
                        <Link className="serviceListLink color-active" to="/user/service-list">
                            <div className="d-flex justify-content-left serviceList align-items-center">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <p className="mx-0 my-2 pl-2">Service list</p>
                            </div>
                        </Link>
                        <Link className="reviewLink inactive-color" to="/user/review">
                            <div className="d-flex justify-content-left review align-items-center">
                                <FontAwesomeIcon icon={faCommentDots} />
                                <p className="mx-0 my-2 pl-2">Review</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="userPageRightSide">
                    <h3 className="rightSideListText">Service list</h3>
                    <div className="rightSideMain row pr-0 pl-0">
                        {
                            userOrdered.length === 0 && <button className="btn btn-primary m-auto" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                          </button>
                        }
                        {
                            userOrdered.map(data => <UserServiceList data={data} key={data._id}></UserServiceList>)
                        }
                    </div>
                </div>
            </div>
        
    );
};

export default ServiceList;