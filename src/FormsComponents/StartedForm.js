import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// Bootstrap Module
import { Row, Col, Button, Form, Dropdown, DropdownButton, InputGroup } from "react-bootstrap";

function StartedForm(){

    const [countryNumber, setCountryNumber] = useState();

    return (
        <div className='bg-white p-5'>
            <Form>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Business / Company (Optional)</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Label>Phone</Form.Label>
                        <InputGroup className="mb-3">
                            <PhoneInput className="form-control d-flex" aria-label="Text input with dropdown button" placeholder={countryNumber} value={countryNumber} onChange={setCountryNumber}/>
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
                                        <DropdownButton variant="outline-secondary" className='bg-white' title="+" id="input-group-dropdown-1" >
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                        <Form.Control aria-label="Text input with dropdown button" />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Preferred Start Date</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
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
