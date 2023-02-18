import React from "react";

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import "./commonStyle/outSource.scss";

// Import image
import outDev from "../assets/to_the_moon.webp"

function OutSource(props) {
  return (
    <div className="source_content">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="block_heading">
                <h2>{props.source_heading}</h2>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={6}>
                <div className="sourche_box">
                  <h3>Industry Leading Solutions</h3>
                  <p>
                    We can help you expand your business, upgrade technology and
                    break through roadblocks with world-class solutions.
                  </p>
                </div>
                <div className="sourche_box">
                  <h3>Transparent Communication</h3>
                  <p>
                    You’re kept in the loop throughout your project. We value
                    the importance of honest and clear communication.
                  </p>
                </div>
                <div className="sourche_box">
                  <h3>Secure Development Environment</h3>
                  <p>
                    We value security and privacy as much as you do. Your
                    information is safe and secure in our state-of-the-art
                    systems.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="sourche_box">
                  <h3>Cost-Friendly Development</h3>
                  <p>
                    Whether you’re a small online business or large enterprise,
                    our hiring model accommodates budgets of any size.
                  </p>
                </div>
                <div className="sourche_box">
                  <h3>Obligation-Free Hiring Models</h3>
                  <p>
                    When you hire development experts from CodeClouds, you are
                    free from any hassle of contracts or restraints.
                  </p>
                </div>
                <div className="sourche_box">
                  <h3>Agile & Efficient Development</h3>
                  <p>
                    We consider all facets of your project allowing us to
                    identify any problems and solve them before they happen.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <div className="moon_imagew">
              <img src={outDev} alt={outDev} width={328} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OutSource
