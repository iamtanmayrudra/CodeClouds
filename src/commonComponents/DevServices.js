import React, { useState } from "react";

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import "./commonStyle/Banner.scss";

// Material Icon
import MaterialIcon from "react-google-material-icons";



function DevServices(props) {
  return (
    <div className="service_component">
      <Container>
        <Row>
          <Col lg={9}>
            <div className="top_dev">
              <h1>{props.services_heading}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DevServices;
