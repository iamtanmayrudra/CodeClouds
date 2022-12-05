import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import "./commonStyle/Hire.scss";

import cc_team from "../assets/cc_team.jpg"


function Hire(props) {
  return (
    <div className='hire_block'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="hire_describe">
                    <h2>{props.hire_title}</h2>.
                    <p>CodeClouds’ tailored development and consulting services are fully equipped with the knowledge and experience to help you build your business for success. With over a decade of technical expertise in a wide range of web technologies, you can be confident in our ability to deliver premium solutions with affordability in mind.</p>

                    <p className='mt-3'>Don’t waste time sifting through dozens of other development companies — use our quick free quote tool to discover how affordable your project can be with CodeClouds!</p>
                </div>
                <Row>
                    <Col lg={6}>
                        <div className="counter_box">
                            <h2>98%</h2>
                            <h3>Client Satisfaction</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="counter_box">
                            <h2>500+</h2>
                            <h3>Technology Experts</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="counter_box">
                            <h2>2,300+</h2>
                            <h3>Projects Per Year</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="counter_box">
                            <h2>4</h2>
                            <h3>Offices Worldwide</h3>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg={6}>
                <div className="cc_team_pic pl-4">
                    <img src={cc_team} alt={cc_team} />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hire
