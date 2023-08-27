import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';

export default function Header() {
    const {darkMode , setDarkMode} = useState({
        backgroundColor : 'white' , 
        color : 'black'
    });
    const handleMode =()=>{
        // setDarkMode({
        //     backgroundColor : 'black' , 
        //     color : 'white'
        // });
        console.log("handle mode");
    }
    return (
    <Navbar collapseOnSelect expand="lg" style={darkMode} className="bg-body-tertiary">
      <Container>
        <LinkContainer to='/'>
            <Navbar.Brand>MERN</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="www.sarahweb.info">About Us</Nav.Link>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <LinkContainer to='/userProfile'>
              <NavDropdown.Item>User Profile</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer to='/updateProfile'>
              <NavDropdown.Item>Settings</NavDropdown.Item>
           </LinkContainer>

            </NavDropdown>
          </Nav>
          <Nav>
          <div>
            <label htmlFor="modeBtn">Dark Mode</label>
            <input type="checkbox" name="modeBtn" onClick={handleMode} />
          </div>  
         <LinkContainer to='/LoginScreen'>
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

