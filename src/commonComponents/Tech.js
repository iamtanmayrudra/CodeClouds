import React from 'react'

// Bootstrap Module
import { Container, Row, Col, Card } from "react-bootstrap";

// Css
import "./commonStyle/Tech.scss";


// Images SkillsSet
import Angular from "../assets/expertise/ode-angular.svg";
import CodeIgniter from "../assets/expertise/ode-codeigniter.svg";
import jquery from "../assets/expertise/ode-jquery.svg";
import Laravel from "../assets/expertise/ode-laravel.svg";
import Nods from "../assets/expertise/ode-nodejs.svg";
import Reac from "../assets/expertise/ode-react.svg";
import Php from "../assets/expertise/ode-php-new.svg";
import Sim from "../assets/expertise/ode-symphony.svg";


function Tech(props) {
  return (
    <div className='tech_body'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="block_heading text-center">
                        <h2>{props.tech_heading}</h2>
                    </div>
                </Col>
                <Col lg={12}>
                    <Row>
                        <Col lg={3}>
                            <div className="skillCard">
                                <h3>Web Development</h3>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={Angular} alt="Angular" />
                                            <p>Angular</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={CodeIgniter} alt="CodeIgniter" />
                                            <p>CodeIgniter</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={jquery} alt="jQuery" />
                                            <p>jQuery</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={Laravel} alt="Laravel" />
                                            <p>Laravel</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={Nods} alt="Node.js" />
                                            <p>Node.js</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={Reac} alt="React" />
                                            <p>React</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={Php} alt="PHP" />
                                            <p>PHP</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <a href="/">
                                            <img src={Sim} alt="Simphony" />
                                            <p>Simphony</p>
                                        </a>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="skillCard">

                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="skillCard">

                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="skillCard">

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Tech