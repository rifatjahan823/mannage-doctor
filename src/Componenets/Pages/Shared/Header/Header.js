import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className='bg'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='img-fluid' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/">About</Nav.Link>
                            <Nav.Link as={Link} to="/">Make Appoinment</Nav.Link>
                            <Nav.Link as={Link} to="/">For Doctors</Nav.Link>
                        </Nav>
                        <div className='d-flex login'>
                            <Link as={Link} to="/appoinment">Make an Appoinment</Link>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Header;