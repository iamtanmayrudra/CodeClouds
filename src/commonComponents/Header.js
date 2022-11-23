import React from 'react';

import Navigation from '../basicComponents/Navigation'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

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
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>
    </>
  );
}
