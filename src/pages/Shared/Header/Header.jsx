import React from 'react';
import "./Header.css"
import logo from "/images/logo.png";
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
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
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Carrer</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <button className='btn btn-dark'>Login</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;