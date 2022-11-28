import React, {useState} from 'react'

// Bootstrap Module
import { Container, Row, Col, Button } from "react-bootstrap";

// Css
import './commonStyle/Banner.scss';

// Material Icon
import MaterialIcon from 'react-google-material-icons';

// Images
import video_pic from "../assets/video-pic.jpg";
import play_point from "../assets/ppc-play.svg";

function Banner(props) {

  // Common Word Declear
  const eCom = useState("eCommerce");
  const webD = useState("Web Development");
  const mobApp = useState("Mobile App Development");
  const crmDev = useState("CRM Development");
  const crDesign = useState("Creative Design"); 

  return (
    <div className='home_banner'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={5} className="banner_left_area">
            <h1>{props.title_banner}</h1>
            <p>We’ve been delivering extraordinary {eCom}, {webD}, {mobApp}, {crmDev}, and {crDesign} services for over 13 years!</p>
            <Button btn variant="light">Get a Free Quote <MaterialIcon icon="arrow_forward" size={22}/></Button>
          </Col>
          <Col lg={7}>
            <div className="banner_video">
              <img src={video_pic} className="img-fluid plays" alt={video_pic}/>
              <a href="/">
                <img src={play_point} width="70" alt={play_point}/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
