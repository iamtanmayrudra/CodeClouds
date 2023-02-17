import React from "react";

import Navigation from './headerAssets/Navigation';

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import './Header.scss';


export default function Header() {
  return (
    <div className="header">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col lg={12}>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
