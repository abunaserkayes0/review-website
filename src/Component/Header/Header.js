import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand>Learning.</Navbar.Brand>
                <Nav className="ms-auto">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/service">Service</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;