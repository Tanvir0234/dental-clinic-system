import React from 'react';
import './Header.css'
import logo from '../../image/images.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';




const Header = () => {
    
    const { handleLogOut, user } = useAuth();

    return (
        
        <>
         <Navbar expand="lg"  variant="light" bg="light">
      <Container>
        <Navbar.Brand className="text-danger fw-bold"  href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Dazzle <span className="text-primary fw-bold">Dentistry</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto py-2" >
            <Nav.Link className=" margin btn btn-outline-primary fw-bold me-2" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="btn btn-outline-primary fw-bold me-2" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="btn btn-outline-primary fw-bold me-2" as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link className="btn btn-outline-primary fw-bold me-2" as={Link} to="/contactUs">
              Contact Us
            </Nav.Link>

            <Nav.Link className="btn btn-outline-primary fw-bold me-2" as={Link} to="/aboutUs">
              About Us
            </Nav.Link>
            {user.email ? '' :<Nav.Link className="btn btn-primary margin me-2  fw-bold text-white" as={Link} to="/registration">
              Sign Up
            </Nav.Link>}

            {user.email ? (
              <>
                <p className="mb-0 mt-2 ms-3 fw-bold">
                 
                  Hello, {user.displayName}
                </p>
                <button
                  onClick={handleLogOut}
                  className="btn btn-danger fw-bold"
                >
                  Log Out
                </button>{" "}
                
              </>
            ) : (
              <Nav.Link className="btn btn-outline-primary text-dark fw-bold" as={Link} to="/login">
                log In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Header;