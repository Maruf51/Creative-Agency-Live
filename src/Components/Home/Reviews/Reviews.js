import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import './Reviews.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [ReviewsData, setReviewsData] = useState([])
    useEffect(() => {
        fetch(`https://obscure-plains-54568.herokuapp.com/getReviews`)
        .then(response => response.json())
        .then(data => setReviewsData(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3,
        autoplaySpeed: 4000,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            }
        ]
      };
    return (
        
        <div className="container mt-5 mb-5">
            <h2 className="text-center pb-4">Clients <span className="green-text">Feedback</span></h2>
                <Slider {...settings}>
                    {
                        ReviewsData.length === 0 && <button className="btn btn-primary m-auto" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                      </button>
                    }
                    {
                        ReviewsData.map(reviewData => <Review data={reviewData} key={reviewData._id}></Review>)
                    }
                </Slider>
        </div>
    );
};

export default Reviews;