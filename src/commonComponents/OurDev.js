import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import "./commonStyle/OurDev.scss";

function OurDev(props) {
  return (
    <div className="our_dev_area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="dev_title text-center">
              <h1 className="text-white">{props.dev_title}</h1>
              <p className="text-white">
                Our flexible development plans help you build, grow and maintain
                your online business without the expensive management or
                resource costs.
              </p>
            </div>
          </Col>
          <Col lg={12}>
            <Row>
              <Col lg={4}>
                <div className="plan_box">
                  <h2 className="plan_headign">Plus Plan</h2>
                </div>
              </Col>
              <Col lg={4}>
                <div className="plan_box">
                  <h2 className="plan_headign">Premium Plan</h2>
                </div>
              </Col>
              <Col lg={4}>
                <div className="plan_box">
                  <h2 className="plan_headign">Custom Plan <sup>*</sup></h2>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurDev;