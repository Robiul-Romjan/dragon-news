
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';

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
        </div>
    );
};

export default RightNav;