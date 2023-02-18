  import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

import ReviewCarousel from "./ReviewCarousel"

// Css
import "../../commonStyle/Testimony.scss";

// Images import  
import play_point from "../../assets/ppc-play.svg";
import jordan_pic from "../../assets/clients/v-jordan-macdonald.jpg";
import tim_pic from "../../assets/clients/v-tim-hill.jpg";
import dan_pic from "../../assets/clients/v-dan-foster.jpg";


  function Testimony(props) {
    return (
      <div className="reviews_panle"> 
        <Container>
          <Row>
            <Col lg={12}>
              <div className="block_heading text-center">
                <h2>See What Clients Are Saying</h2>
              </div>
            </Col>
            <Col lg={4}>
              <div className="banner_video">
                <img src={jordan_pic} className="img-fluid plays" alt="Jordan"/>
                <a href="/">
                  <img src={play_point} width="70" alt={play_point}/>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="banner_video">
                <img src={tim_pic} className="img-fluid plays" alt="Tim Hill"/>
                <a href="/">
                  <img src={play_point} width="70" alt={play_point}/>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="banner_video">
                <img src={dan_pic} className="img-fluid plays" alt="Dan Foster"/>
                <a href="/">
                  <img src={play_point} width="70" alt={play_point}/>
                </a>
              </div>
            </Col>

            <Col lg={12}>
                <div className="slider_top">
                  <ReviewCarousel />
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

export default Testimony