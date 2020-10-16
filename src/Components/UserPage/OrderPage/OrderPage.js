import React, { useContext, useEffect } from 'react';
import './OrderPage.css';
import logo from '../../../images/logos/logo.png'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBriefcase, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { useState } from 'react';
// import userLogo from '../../images/logos/users-alt 1.png'
// import plusLogo from '../../images/logos/plus 1.png'

const OrderPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedService, setSelectedService] = useState({})
    // for getting the service that user selected
    useEffect(() => {
        fetch(`https://obscure-plains-54568.herokuapp.com/service/${loggedInUser.id}`)
        .then(response => response.json())
        .then(data => {
            setSelectedService(data)
        })
    }, []);

    // submitting user ordered service
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newData = data;
        newData.image = selectedService.image;
        newData.status = "Pending";
        fetch(`https://obscure-plains-54568.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedCount){
                alert('Your Request has been sent.')
            }
        })
    };
    return (
        
            <div className="user-page">
                <div className="userPageLeftSide">
                    <Link to='/'><img className="userPageLogo" src={logo} alt=""/></Link>
                    <div className="user-page-link">
                        <Link className="userPageLink orderLink color-active" to='/user/order'>
                            <div className="d-flex justify-content-left order align-items-center">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <p className="mx-0 my-2 pl-2">Order</p>
                            </div>
                        </Link>
                        <Link className="serviceListLink inactive-color" to="/user/service-list">
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
                    <h3 className="rightSideListText">Order</h3>
                    <div className="rightSideMain">
                    <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-md-9 col-sm-12 mt-4 p-0">
                        <div className="form-group">
                            <input className="order-input form-control" type="text" placeholder="Your name / company's name" defaultValue={loggedInUser.displayName} name="name" ref={register} required/>
                        </div>
                        <div className="form-group">
                            <input className="order-input form-control" type="email" placeholder="Your email address" defaultValue={loggedInUser.email} name="email" ref={register} required/>
                        </div>
                        <div className="form-group">
                            <input className="order-input form-control" type="text" placeholder="Service" name="service" defaultValue={selectedService.title} ref={register} readOnly="readonly" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="order-input order-textarea form-control" type="text" placeholder="Project details" name="description" ref={register} required/>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <input className="order-input form-control" type="number" min="0" placeholder="Price" name="price" ref={register} required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="order-photo-upload" htmlFor="photoUpload">Upload project file</label>
                                <input id="photoUpload" className="order-input form-control" type="file" placeholder="Upload project file"/>
                            </div>
                        </div>
                        <Button type="submit" className="send-btn order-btn" variant="dark">Send</Button>
                        </form>
                    </div>
                </div>
            </div>
        
    );
};

export default OrderPage;