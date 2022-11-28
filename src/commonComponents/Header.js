import React, { useState } from "react";

import Navigation from '../basicComponents/Navigation';
import Logo from "../basicComponents/Logo";

// Bootstrap Module
import { Container, Row, Col, Button } from "react-bootstrap";

// Css
import './commonStyle/Header.css';


export default function Header() {

  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const[text, setText] = useState("Where is my typo");
  // setText("All are added");

  const handelerClick = ()=>{
    console.log('text');
    setText("Succesfully Proceed");
  }

  const textHandler = () => {};

  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
 

  return (
    <div className="header">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col lg={4}>
            <Logo></Logo>
          </Col>
          <Col lg={8}>
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>

      <div className="mega-text">
        <Container>
          <h1>Heading - {text}</h1>
          <textarea className="form-control" onChange={textHandler} value={text}></textarea>
          <Button className="btn my-3" onClick={handelerClick}>Click</Button>
        </Container>
      </div>
    </div>
  );
}
