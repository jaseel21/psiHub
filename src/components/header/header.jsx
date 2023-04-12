import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./header.css"

function header() {
  return (
    <div>

<Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Contact us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default header