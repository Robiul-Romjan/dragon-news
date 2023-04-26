
import React from 'react';
import "./RightNav.css"
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "/images/bg.png";

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-3'>Login with</h4>
            <div className="login-with">
                <button className='btn btn-outline-primary w-100 mb-3'><FaGoogle /> login with goggle </button>
                <button className='btn btn-outline-secondary w-100'><FaGithub /> login with github </button>
            </div>
            <div className="find-us-with mt-5">
                <h4 className='mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div className="amazing mt-4">
                <div className="amazing-text text-center px-3">
                    <div>
                        <h2>Create an Amazing Newspaper</h2>
                        <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className='btn btn-danger'>Learn More</button>
                    </div>
                </div>
                <img className='w-100' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;