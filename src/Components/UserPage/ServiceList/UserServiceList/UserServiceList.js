import React from 'react';
import './UserServiceList.css';

const UserServiceList = ({data}) => {
    const {image, status, service, description} = data;
    return (
        <div className="col-lg-5 col-md-9 col-sm-12 pt-4 pb-0 pl-0 userService">
            <div style={{borderRadius: '20px'}} className="bg-white p-4 h-100">
                <div className="d-flex justify-content-between">
                    <img className="service-image m-0" src={`data:image/png;base64,${image.img}`} alt=""/>
                    {
                        status === "On going" && <p className="ongoing">{status}</p> || status === "Done" && <p className="done">{status}</p> || status === "Pending" && <p className="pending">{status}</p>
                    }
                </div>
                <h4 className="font-700 mt-3 mb-0">{service}</h4>
                <p className="mt-2 mb-0 text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default UserServiceList;