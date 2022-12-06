import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import "./commonStyle/Testimony.scss";

  function Testimony(props) {
    return (
      <div className="reviews_panle">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="block_heading text-center">
                <h2>See What Clients Are Saying</h2>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>

            <Col lg={12}>
                
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

export default Testimony