import React from 'react'

// Bootstrap Module
import { Container, Row, Col } from "react-bootstrap";

// Css
import "./commonStyle/Testimony.scss";

// Images import  
import play_point from "../assets/ppc-play.svg";
import video_pic from "../assets/video-pic.jpg";


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
                <img src={video_pic} className="img-fluid plays" alt={video_pic}/>
                <a href="/">
                  <img src={play_point} width="70" alt={play_point}/>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="banner_video">
                <img src={video_pic} className="img-fluid plays" alt={video_pic}/>
                <a href="/">
                  <img src={play_point} width="70" alt={play_point}/>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="banner_video">
                <img src={video_pic} className="img-fluid plays" alt={video_pic}/>
                <a href="/">
                  <img src={play_point} width="70" alt={play_point}/>
                </a>
              </div>
            </Col>

            <Col lg={12}>
                
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

export default Testimony