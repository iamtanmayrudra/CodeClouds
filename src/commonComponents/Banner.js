import React, {useState} from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import './commonStyle/Banner.scss';

// Material Icon
import MaterialIcon from 'react-google-material-icons';

// Images import  
import video_pic from "../assets/video-pic.jpg";
import play_point from "../assets/ppc-play.svg";
import subta from "../assets/certificate/subta-member.svg";
import glassdoor from "../assets/certificate/glassdoor-rank.svg";
import ambitionbox from "../assets/certificate/ambitionbox-award.svg";
import clutch from "../assets/certificate/clutch.svg";


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
        <Row>
          <Col lg={5} className="banner_left_area">
            <h1>{props.title_banner}</h1>
            <p className='my-4'>We’ve been delivering extraordinary {eCom}, {webD}, {mobApp}, {crmDev}, and {crDesign} services for over 13 years!</p>
            <a href='/' className='btn'>Get a Free Quote <MaterialIcon icon="arrow_forward" size={22}/></a>
            <ul className='banner_certificates d-flex'>
              <li><img src={subta} width="85" alt={subta} /></li>
              <li><img src={glassdoor}  width="85"alt={glassdoor} /></li>
              <li><img src={ambitionbox} width="85" alt={ambitionbox} /></li>
              <li><img src={clutch} width="85" alt={clutch} /></li>
            </ul>
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
