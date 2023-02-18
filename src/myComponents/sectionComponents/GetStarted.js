import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";
// Css
import "../../commonStyle/GetStarted.scss";

// Import Form Module
import StartedForm from "../FormsComponents/StartedForm"



function GetStarted(props) {
  return (
    <div className='getStartedPanel'>
      <Container>
        <Row>
            <Col lg={12}>
              <div className="block_heading text-center text-white">
                <h2 className='text-white'>{props.startedHeading}</h2>
                <p>{props.para}</p>
              </div>
            </Col>
            <Col lg={12}>
              <StartedForm/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GetStarted
