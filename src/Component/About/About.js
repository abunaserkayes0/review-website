import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchLocation,faBookReader,faCertificate} from '@fortawesome/free-solid-svg-icons'
import './About.css';
const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs md={12} className="about-section">
                        <h1 className="text-center text-white text-bold pt-5 mt-5 about-title">About Us</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
            <h2 className="text-center fw-bold my-5">Supreme Work Flow</h2>
                <Row xs={1} md={3} className="g-4 text-center">
                    <Col>
                        <Card>
                            <Card.Body>
                            <FontAwesomeIcon className="fs-1 my-5 bg-light p-2" icon={faSearchLocation} />
                            <Card.Title className="fs-3 fw-bold">Find Your Course</Card.Title>
                            <Card.Text>
                                Learning is a complex process of discovery, collaboration, and
                                inquiry facilitated by language. Composed of interrelated and
                                rule-governed symbol systems, language is a social and uniquely
                                human means of representing, exploring, and communicating
                                meaning.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <FontAwesomeIcon className="fs-1 my-5 bg-light p-2" icon={faBookReader}/>
                            <Card.Title className="fs-3 fw-bold">Book Your Seat</Card.Title>
                            <Card.Text>
                                Learning is a complex process of discovery, collaboration, and
                                inquiry facilitated by language. Composed of interrelated and
                                rule-governed symbol systems, language is a social and uniquely
                                human means of representing, exploring, and communicating
                                meaning.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <FontAwesomeIcon className="fs-1 my-5 bg-light p-2" icon={faCertificate}/>
                            <Card.Title className="fs-3 fw-bold">Instant Certified</Card.Title>
                            <Card.Text>
                                Learning is a complex process of discovery, collaboration, and
                                inquiry facilitated by language. Composed of interrelated and
                                rule-governed symbol systems, language is a social and uniquely
                                human means of representing, exploring, and communicating
                                meaning.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;