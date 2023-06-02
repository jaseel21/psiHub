import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./header.css"

function header() {
  return (
    <div>

<Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
      <Container>
        <Navbar.Brand className='logo' href="#home">psiHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className=''>
            <Link className="nav-text tec" to="/">HOME</Link>
            <Link className="nav-text" to="/about">ABOUT</Link>
            <Link className="nav-text" to="/contact">CONTACT</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default header