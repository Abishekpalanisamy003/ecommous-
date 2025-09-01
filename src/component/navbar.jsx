import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from 'react-icons/fa';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{fontSize:"20px",border:"1px solid white",boxShadow:"1px 2px white"}} >
      <Container fluid className="align-items-center" >
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/">Ecomous</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="login" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/user">User</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/adminlogin">Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{width:"400px"}}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button as={Link} to="/cart" variant="outline-primary">
              <FaShoppingCart className="me-1" /> Cart
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
