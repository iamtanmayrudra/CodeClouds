import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// Import the library
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

// Module CSS
import "./Form.scss"


// Bootstrap Module
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";

function StartedForm(){

    const [countryNumber, setCountryNumber] = useState("+91");

    return (
        <div className='bg-white p-5' style={{ borderRadius: '10px' }}>
            <Form>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Business / Company (Optional)</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Label>Phone</Form.Label>
                        <InputGroup className="mb-3">
                            <PhoneInput defaultCountry="IN" className="form-control d-flex phoneControl" maxlength="16" minlength="10" aria-label="Text input with dropdown button" placeholder={countryNumber} value={countryNumber} onChange={setCountryNumber}/>
                        </InputGroup>
                    </Col>
                    <hr/>
                    <Col lg={6}>
                        <Row>
                            <Col lg={12}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>What type of expert(s) do you need?</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Length of Hire (optional)</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control aria-label="Text input with dropdown button" />
                                        <Form.Select className="border-left" style= {{ border:'1px solid #ddd' }}>
                                            <option>Week (1)</option>
                                            <option>Month (1)</option>
                                            <option>Year (1)</option>
                                        </Form.Select>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Preferred Start Date</Form.Label>
                                    <Datetime dateFormat="MM/DD/YYYY" timeFormat={false}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Describe your project in detail:</Form.Label>
                            <Form.Control as="textarea" placeholder="" style={{ height: '120px' }} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default StartedForm
