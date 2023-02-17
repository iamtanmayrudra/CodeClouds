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

import BigCom from "../assets/expertise/ode-bigcommerce.svg";
import Drupals from "../assets/expertise/ode-drupal.svg";
import Magento from "../assets/expertise/ode-magento.svg";
import Shopify from "../assets/expertise/ode-shopify.svg";
import UltraCart from "../assets/expertise/ode-ultracart.svg";
import WooCommerce from "../assets/expertise/ode-woocommerce.svg";
import Wordpress from "../assets/expertise/ode-wordpress.svg";

import Sticky from "../assets/expertise/ode-stickyio.svg";
import Next from "../assets/expertise/ode-drupal.svg";
import Konnective from "../assets/expertise/ode-magento.svg";
import Respons from "../assets/expertise/ode-shopify.svg";
import Sublytics from "../assets/expertise/ode-ultracart.svg";

import Android from "../assets/expertise/ode-android.svg";
import Ionic from "../assets/expertise/ode-ionic.svg";
import Ios from "../assets/expertise/ode-ios.svg";
import Hybrid from "../assets/expertise/hybrid_app.svg";


function Tech(props) {
  return (
    <div className="tech_body">
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
                  <h3>Ecommerce &amp; CMS</h3>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={BigCom} alt="BigCommerce" />
                        <p>BigCommerce</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Drupals} alt="Drupal" />
                        <p>Drupal</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Magento} alt="Magento" />
                        <p>Magento</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Shopify} alt="Shopify" />
                        <p>Shopify</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={UltraCart} alt="UltraCart" />
                        <p>UltraCart</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={WooCommerce} alt="WooCommerce" />
                        <p>WooCommerce</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Wordpress} alt="Wordpress" />
                        <p>Wordpress</p>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col lg={3}>
                <div className="skillCard">
                  <h3>CRM Consulting</h3>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Sticky} alt="sticky.io" />
                        <p>sticky.io</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Next} alt="29 NEXT" />
                        <p>29 NEXT</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Konnective} alt="Konnective CRM" />
                        <p>Konnective CRM</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Respons} alt="Response" />
                        <p>Response CRM</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Sublytics} alt="Sublytics" />
                        <p>Sublytics</p>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col lg={3}>
                <div className="skillCard">
                  <h3>Mobile App Development</h3>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Android} alt="Android" />
                        <p>Android</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Ionic} alt="Ionic" />
                        <p>Ionic</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Ios} alt="iOS" />
                        <p>iOS</p>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <a href="/">
                        <img src={Hybrid} alt="jQuery" />
                        <p>Hybrid</p>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tech