import React from 'react';
import './UserReview.css'
import logo from '../../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBriefcase, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';
// import userLogo from '../../images/logos/users-alt 1.png'
// import plusLogo from '../../images/logos/plus 1.png'

const UserReview = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit } = useForm();
    // for adding review to the database
    const onSubmit = data => {
        const newData = data;
        data.image = loggedInUser.photoURL;

        fetch('https://obscure-plains-54568.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedCount){
                alert('Your Review has been added. Thanks for supporting us.')
                history.replace(from);
            }
        })
    };
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
                        <Link className="serviceListLink inactive-color" to="/user/service-list">
                            <div className="d-flex justify-content-left serviceList align-items-center">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <p className="mx-0 my-2 pl-2">Service list</p>
                            </div>
                        </Link>
                        <Link className="reviewLink color-active" to="/user/review">
                            <div className="d-flex justify-content-left review align-items-center">
                                <FontAwesomeIcon icon={faCommentDots} />
                                <p className="mx-0 my-2 pl-2">Review</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="userPageRightSide">
                    <h3 className="rightSideListText">Review</h3>
                    <div className="rightSideMain">
                        <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-md-9 mol-sm-12 mt-4 p-0">
                            <div className="form-group">
                                <input className="order-input form-control" name="name" type="text" placeholder="Your name" ref={register} required/>
                            </div>
                            <div className="form-group">
                                <input className="order-input form-control" name="company" type="text" placeholder="Company's name. Designation" ref={register} required/>
                            </div>
                            <div className="form-group">
                                <textarea className="order-input order-textarea form-control" name="description" type="text" placeholder="Description" ref={register} required/>
                            </div>
                            <Button type="submit" className="send-btn review-page-btn" variant="dark">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        
    );
};

export default UserReview;