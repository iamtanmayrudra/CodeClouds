import React from 'react'

// Bootstrap Module
import { Container, Row, Col, Button } from "react-bootstrap";

// Css
import "../../commonStyle/OurDev.scss";

// Material Icon
import MaterialIcon from 'react-google-material-icons';

function OurDev(props) {

  return (
    <div className="our_dev_area">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={9}>
            <div className="block_heading text-center">
              <h1 className="text-white">{props.dev_title}</h1>
              <p className="text-white">
                Our flexible development plans help you build, grow and maintain
                your online business without the expensive management or
                resource costs.
              </p>
            </div>
          </Col>
          <Col lg={12}>
            <Row className="align-items-strech">
              <Col lg={4}>
                <div className="plan_box">
                  <div className="plan_box_header">
                    <h2 className="plan_headign">Plus Plan</h2>
                    <h3>
                      <i>Formerly Part-Time Plan</i>
                    </h3>
                    <p>
                      Perfect for those who still require ongoing development
                      but not as often throughout the month
                    </p>
                  </div>
                  <ul>
                    <li>
                      <MaterialIcon icon="done" size={18}/> No Hidden Fees
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Shared Development
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Managed Monthly Plan
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> 80 hrs/month (4 hrs/weekday) Available: 2AM-10AM EST
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Emergency Support 18/5
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Upgrade or Cancel Anytime
                    </li>
                  </ul>
                  <Button
                    as="input"
                    type="button"
                    value="Get Started"
                    className="btn_started"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div className="plan_box">
                  <div className="plan_box_header">
                    <h2 className="plan_headign">Premium Plan</h2>
                    <h3>
                      <i>Formerly Full-Time Plan</i>
                    </h3>
                    <p>
                      Ideal for businesses who require regular ongoing
                      development throughout the month.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <MaterialIcon icon="done" size={18}/> No Hidden Fees
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Dedicated Development
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Managed Monthly Plan
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/>{" "}
                      <span>
                        160 hrs/month (8 hrs/weekday) Available: 2AM-10AM EST
                      </span>
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Emergency Support 18/5
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Upgrade or Cancel
                      Anytime
                    </li>
                  </ul>
                  <Button
                    as="input"
                    type="button"
                    value="Get Started"
                    className="btn_started mx-auto"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div className="plan_box">
                  <div className="plan_box_header">
                    <h2 className="plan_headign">
                      Custom Plan <sup>*</sup>
                    </h2>
                    <h3>
                      <i>Only available for large projects</i>
                    </h3>
                    <p>
                      Got a large project but want to keep your costs in sight?
                      Hire our team on the fixed price model!
                    </p>
                  </div>
                  <ul>
                    <li>
                      <MaterialIcon icon="done" size={18}/> No Hidden Fees
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Fixed Price per Project
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Changes Incur Additional
                      Cost
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Payment in Milestones
                    </li>
                    <li>
                      <MaterialIcon icon="done" size={18}/> Upgrade Anytime
                    </li>
                  </ul>
                  <Button
                    as="input"
                    type="button"
                    value="Get Started"
                    className="btn_started"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurDev;