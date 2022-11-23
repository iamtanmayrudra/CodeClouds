import React from 'react';

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function Navigation() {
  return (
    <div>
      <Nav variant="pills" activeKey="1" className="d-flex justify-content-end">
              <Nav.Item>
                <Nav.Link eventKey="1" href="/home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" title="About" href="/About">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" href="/Contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
    </div>
  )
}

export default Navigation
