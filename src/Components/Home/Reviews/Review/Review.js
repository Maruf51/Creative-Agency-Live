import React from 'react';
import './Review.css';

const Review = ({data}) => {
    const {name, company, description, image} = data;
    return (
        <div>
            <div className="review-card p-4">
                <div className="d-flex align-items-center">
                    <div>
                        <img className="review-image m-auto" src={image} alt=""/>
                    </div>
                    <div className="pl-3">
                        <h5 className="pt-3 pb-2 m-0 font-700">{name}</h5>
                        <h6>{company}</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-secondary m-0">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;