import React, { useState } from "react";

// Bootstrap Module
import { Container, Row, Col, Card } from "react-bootstrap";

// Css
import "../../commonStyle/Services.scss";

// Material Icon
import MaterialIcon from "react-google-material-icons";

import spaceShip from "../assets/spaceship-new.webp";
// Services Icons
import custWeb from "../assets/services/custom_web.svg";
import ecomStore from "../assets/services/ecommerce_store.svg";
import funnel from "../assets/services/funnel.svg";
import mobileApp from "../assets/services/mobile_app.svg";
import cDesign from "../assets/services/creative_design.svg";
import crmCon from "../assets/services/crm-consulting.svg";
import frontBack from "../assets/services/frontback_end.svg";
import payGate from "../assets/services/payment-gateway.svg";



function DevServices(props) {
  
    // Common Word Declear
    const eCom = useState("eCommerce");
    const webD = useState("Web Development");
    const mobApp = useState("Mobile App Development");
    const crDesign = useState("Creative Design");

    return (
        <div className="service_component">
            <Container>
                <Row className="align-items-center">
                    <Col lg={9}>
                        <div className="top_dev block_heading">
                            <h1>{props.services_heading}</h1>
                            <p>At CodeClouds, we deliver high-quality and efficient web solutions for all kinds of businesses. Whether you need an expert for {webD}, {mobApp}, {eCom} or {crDesign}; we have a team of professionals who handle your project with outstanding dedication and professionalism.</p>
                            <p>With over 13 years of development and technology consulting experience under our belt, don’t miss the opportunity to find <a href="/" className="d-inline-flex align-items-center">a perfect solution for your project <MaterialIcon icon="trending_flat" /></a></p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="rocket_sps d-flex justify-content-center">
                            <img src={spaceShip} alt={spaceShip} width={107} />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="cardServiceBox">
                            <Row>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={custWeb} alt={custWeb} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">Custom Web Development</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={ecomStore} alt={ecomStore} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">Ecommerce Store Development</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={funnel} alt={funnel} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">Landing Page Design & Development</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={mobileApp} alt={mobileApp} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">Mobile App Development</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={cDesign} alt={cDesign} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">Creative Design Services</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={crmCon} alt={crmCon} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">CRM Consulting &amp; Development</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={frontBack} alt={frontBack} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">Front & Back-End Development</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img src={payGate} alt={payGate} width={58} height={50} />
                                            <Card.Text>
                                                <a href="/">CMS Development Services</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DevServices;
