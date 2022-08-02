import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
  
  const[user]=useAuthState(auth)
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link}  to="/">JWT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link}   to="/home">Home</Nav.Link>
              <Nav.Link as={Link}  to="products">Products</Nav.Link>
              <Nav.Link as={Link}  to="uploadpd">Upload Product</Nav.Link>
              <Nav.Link as={Link}  to="orderlist">Order List</Nav.Link>
              
            </Nav>
            <Nav>

             {user? <button onClick={()=>signOut(auth)} className='btn btn-primary'>Sign Out</button>
              :<Nav.Link as={Link} to="/login">Login</Nav.Link>}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        );
};

export default Header;