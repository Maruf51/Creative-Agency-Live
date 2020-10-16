import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Service.css';

const Service = ({data}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {title, description, image, _id} = data;

    //for setting an id to the loggedInUser Context
    const handleServiceClick = () => {
        const newData = {...loggedInUser}
        newData.id = _id;
        setLoggedInUser(newData)
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 text-center p-4 mt-2 service">
            <Link to="/user/order">
                <div onClick={handleServiceClick} className="service-card px-5">
                    <img className="service-image m-auto" src={`data:image/png;base64,${image.img}`} />
                    <h5 className="pt-3 pb-2 m-0 font-700">{title}</h5>
                    <p className="text-secondary m-0">{description}</p>
                </div>
            </Link>
        </div>
    );
};
export default Service;