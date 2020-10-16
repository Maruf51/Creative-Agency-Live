import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer p-5">
            <div className="container footer-container row d-flex justify-content-between pb-5">
                <div className="col-lg-5 col-md-12 col-sm-12 ml-5 footer-text">
                    <h2 className="pt-1 pb-4">Let us handle your project, professionally</h2>
                    <p className="footer-p">With well written codes, we build amazing app for all platforms, mobiles and web apps in general</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 footer-form">
                    <form action="">
                        <input name="email" placeholder="Your email address" className="footer-input" type="text"/>
                        <input name="name/company" placeholder="Your name / company's name" className="footer-input" type="text"/>
                        <textarea className="footer-input" name="message" placeholder="Your message" cols="30" rows="10"></textarea>
                        <Button className="mt-1 send-btn" style={{padding: '6px 40px', marginLeft: '5%'}} variant="dark">Send</Button>
                    </form>
                </div>
            </div>
            <p className="text-center m-0 pt-5 pb-0 copyright">copyright orange labs 2020</p>
        </div>
    );
};

export default Footer;