import React, { useEffect, useState } from 'react';
import './AdminServiceData.css';

const AdminServiceData = (props) => {
    const {name, email, description, status, service, image, _id} = props.details;

    const handleStatusChange =(e, serviceId) => {
            const status = {status:`${e.target.value}`};
            console.log(status)
            //for changing the status
            fetch(`https://obscure-plains-54568.herokuapp.com/status-update/id?id=${serviceId}`,{
                method:'PATCH',
                headers: { 'content-type':'application/json'},
                body:JSON.stringify(status)
            })
    
  
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{description}</td>
            <td>
                <select onChange={(e)=>handleStatusChange(e, _id)} defaultValue={status}>
                    <option value="Pending">Pending</option>
                    <option value="On going">On going</option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default AdminServiceData;