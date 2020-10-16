import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const SocialMediaSection = () => {
    return (
        <div className="text-center mt-5">
            <a target="_blank" href="https://slack.com/">
                <img className="social-media-image mx-5 my-3" src={slack} alt="" />
            </a>
            <a target="_blank" href="https://www.google.com/">
                <img className="social-media-image mx-5 my-3" src={google} alt="" />
            </a>
            <a target="_blank" href="https://www.uber.com/">
                <img className="social-media-image mx-5 my-3" src={uber} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/">
                <img className="social-media-image mx-5 my-3" src={netflix} alt="" />
            </a>
            <a target="_blank" href="https://www.airbnb.com/">
                <img className="social-media-image mx-5 my-3" src={airbnb} alt="" />
            </a>
        </div>
    );
};

export default SocialMediaSection;