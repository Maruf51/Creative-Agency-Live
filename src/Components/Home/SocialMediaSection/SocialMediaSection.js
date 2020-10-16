import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const SocialMediaSection = () => {
    return (
        <div className="text-center mt-5">
            <a className="mx-5 my-3" target="_blank" href="https://slack.com/">
                <img className="social-media-image" src={slack} alt="" />
            </a>
            <a className="mx-5 my-3" target="_blank" href="https://www.google.com/">
                <img className="social-media-image" src={google} alt="" />
            </a>
            <a className="mx-5 my-3" target="_blank" href="https://www.uber.com/">
                <img className="social-media-image" src={uber} alt="" />
            </a>
            <a className="mx-5 my-3" target="_blank" href="https://www.netflix.com/">
                <img className="social-media-image" src={netflix} alt="" />
            </a>
            <a className="mx-5 my-3" target="_blank" href="https://www.airbnb.com/">
                <img className="social-media-image" src={airbnb} alt="" />
            </a>
        </div>
    );
};

export default SocialMediaSection;