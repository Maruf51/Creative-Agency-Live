import React from 'react';
import './HeaderMain.css';
import { Button } from 'react-bootstrap';
import headerFrame from '../../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <div className="container row m-auto d-flex justify-content-between header-main-container align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-12 header-main-text-area">
                <h1 className="header-h1">Let's Grow Your Brand To The Next Level</h1>
                <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, laboriosam. Non autem recusandae fuga voluptatibus!</p>
                <Button style={{padding: '6px 30px'}} variant="dark">Hire us</Button>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 m-auto header-main-image-area">
                <img className="header-frame" src={headerFrame} alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;