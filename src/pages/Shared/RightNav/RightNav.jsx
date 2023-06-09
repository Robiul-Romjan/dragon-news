
import React, { useContext } from 'react';
import "./RightNav.css"
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "/images/bg.png";
import { AuthContext } from '../../../providers/AuthProvider';

const RightNav = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
         googleSignIn()
         .then(result => {
            console.log(result.user)
         })
         .catch(error => {
            console.log(error.message)
         })
    };

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div>
            <h4 className='mb-3'>Login with</h4>
            <div className="login-with">
                <button onClick={handleGoogleSignIn} className='btn btn-outline-primary w-100 mb-3'><FaGoogle /> Login with goggle </button>
                <button onClick={handleGithubSignIn} className='btn btn-outline-secondary w-100'><FaGithub /> login with github </button>
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