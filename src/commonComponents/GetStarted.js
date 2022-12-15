import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";
// Css
import "./commonStyle/GetStarted.scss";



function GetStarted(props) {
  return (
    <div className='getStartedPanel'>
      <Container>
        <Row>
            <Col lg={12}>
                <div className="block_heading text-centerq">
                    <h2>{props.startedHeading}</h2>
                    <p>{props.para}</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GetStarted
