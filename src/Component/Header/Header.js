import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link}  to="/">JWT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link}   to="/home">Home</Nav.Link>
              <Nav.Link as={Link}  to="uploadpd">Upload Product</Nav.Link>
              <Nav.Link as={Link}  to="orderlist">Order List</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        );
};

export default Header;