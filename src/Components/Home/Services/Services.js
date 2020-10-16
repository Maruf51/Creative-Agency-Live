import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [servicesData, setServicesData] = useState([])
    useEffect(() => {
        fetch(`https://obscure-plains-54568.herokuapp.com/getServices`)
        .then(response => response.json())
        .then(data => setServicesData(data))
    }, [])
    return (
        <div className="services-container container mb-5">
            <h2 className="text-center pb-4">Provide awesome <span className="green-text">services</span></h2>
            <div className="row d-flex justify-content-center">
                {
                    servicesData.length === 0 && <button className="btn btn-primary m-auto" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>
                }
                {
                    servicesData.map(serviceData => <Service data={serviceData} key={serviceData._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;