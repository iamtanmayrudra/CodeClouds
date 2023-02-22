import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import '../footerComponent/Footer.scss';

// Material Icon
// import MaterialIcon from 'react-google-material-icons';

// Images import  
import FooterLogo from "../../assets/footerElements/codeclouds_colour.svg";

// React Router Dom
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="globalFooter">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="footerAbout">
              <Link to={"/"}>
                <img src={FooterLogo} alt="Footer Logo" style={{width: "200px"}} />
              </Link>
            </div>
          </Col>
          <Col lg={9}>
            <div className="footerNavs">
              <Row>
                <Col> qwdfgbwdfbvfwqwdfdq</Col>
                <Col>ddwdv</Col>
                <Col>sdvdwsdcv</Col>
                <Col>dd</Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer
