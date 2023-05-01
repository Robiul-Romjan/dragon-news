import React, { useContext } from 'react';
import "./Header.css"
import logo from "/images/logo.png";
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="header-logo text-center mt-5">
                <img src={logo} alt="" />
                <p className='text-secondary mt-4'>Journalism Without Fear or Favour</p>
                <p className='dynamic-date'>{moment().format("dddd, MMMM D, YYYY.")}</p>
            </div>
            <div className="latest-news d-flex mt-4">
                <button className='latest'>
                    Latest
                </button>
                <Marquee className='move-news' speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='nav-link' to="/category/0">Home</Link>
                            <Link className='nav-link' to="/about">About</Link>
                            <Link className='nav-link' to="/career">Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link href="#deets">{user?.email}</Nav.Link>
                            }
                            {
                                user ?
                                <button onClick={handleLogOut} className='btn btn-danger'>Log Out</button>:
                                <Link className='btn btn-danger' to="/login">Log In</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;