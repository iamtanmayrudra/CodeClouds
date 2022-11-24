import React from 'react';

import Navigation from '../basicComponents/Navigation';
import Logo from "../basicComponents/Logo";

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import './commonStyle/Header.css'


export default function Header() {

  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className="header">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col lg={4}>
            <Logo></Logo>
          </Col>
          <Col lg={8}>
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
