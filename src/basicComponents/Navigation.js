import React from 'react';

// Bootstrap Module
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

import MaterialIcon from 'react-google-material-icons';
import "@fontsource/roboto-slab";


import Logo from "../basicComponents/Logo";


function Navigation() {
  return (
    <div className="top_nav">
      <Navbar collapseOnSelect expand="lg" className='justify-content-between'>
        <Navbar.Brand href="/">
          <Logo></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className=' justify-content-end'>
          <Nav className="">
            <NavDropdown title="Products" id="nav-dropdown">
              <NavDropdown.Item eventKey="1.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="1.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="1.3">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="nav-dropdown">
              <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="2.3">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="nav-dropdown">
              <NavDropdown.Item eventKey="3.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="3.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Portfolio" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <MaterialIcon icon="sort" size={24} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation
