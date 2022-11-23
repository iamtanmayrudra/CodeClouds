import React from 'react';

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// Css
import './commonStyle/Header.css'

// Image Import
import logo from "../assets/logo.png";




export default function Header() {

  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={4}>
            <a href="/">
              <img src={logo} alt={logo} />
            </a>
          </Col>
          <Col lg={8}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
