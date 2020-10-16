import React, { useEffect, useState } from 'react';
import './AdminAddService.css'
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

const AdminAddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // for showing selected photo name on the UI
    const [photoName, setPhotoName] = useState(null)
    // selected file
    const [servicePhoto, setServicePhoto] = useState(null)
    // info from form
    const [serviceInfo, setServiceInfo] = useState({})
    // for handling file
    const handlePhoto = e => {
        setServicePhoto(e.target.files[0])
        const photo = e.target.value;
        setPhotoName(photo.slice(12, 100))
    }
    // taking value from input
    const handleServiceInput = e => {
        const newData = {...serviceInfo}
        newData[e.target.name] = e.target.value;
        setServiceInfo(newData)
    }
    // submitting form data to backend
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image', servicePhoto)
        formData.append('title', serviceInfo.title)
        formData.append('description', serviceInfo.description)

        fetch('https://obscure-plains-54568.herokuapp.com/add-service', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('New service successfully added.')
        })
        .catch(error => {
            console.error(error)
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
                        <Link className="serviceListLink color-active" to="/admin/add-service">
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
                    <h3 className="rightSideListText">Add Service</h3>
                    <div className="rightSideMain row pl-0">
                        <form action="" className="w-100 add-service-form">
                            <div className="justify-content-center bg-white add-service-area">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <label style={{fontWeight: '600'}} htmlFor="title">Service Title</label>
                                        <input placeholder="Enter Title" className="add-service-input" name="title" onChange={handleServiceInput} type="text" id="title" required/>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                                        <label style={{fontWeight: '600'}} htmlFor="description">Description</label>
                                        <textarea placeholder="Enter Designation" className="add-service-input service-textarea" type="text" id="description" name="description" onChange={handleServiceInput} required cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-upload">
                                    <label style={{fontWeight: '600'}} htmlFor="photoUpload">Icon</label>
                                    <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                                        <label className="service-photo" htmlFor="photoUpload"><FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon> Upload Image</label>
                                        <input onChange={handlePhoto} name="image" className="service-image-upload" type="file" id="photoUpload" required/>
                                        {
                                            photoName && <h6 className="photoName">{photoName}</h6>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-3">
                                <button onClick={(e) => handleSubmit(e)} className="btn btn-success add-service-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    );
};

export default AdminAddService;