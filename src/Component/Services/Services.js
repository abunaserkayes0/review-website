import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Services.css'
const Services = (props) => {
    console.log(props.allLanguage);
    const {name,image,price,author_name,author_image} = props.allLanguage;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="service-image" src={image}/>
                    <Card.Body className="d-md-flex justify-content-around align-items-center">
                            <div className="text-center">
                                <Card.Title className="fw-bold mt-2">{name}</Card.Title>
                                <Card.Title className="fw-bold mt-3">{price}</Card.Title>
                            </div>
                            <div className="text-center">
                                <Card.Img className="author-image" src={author_image}/>
                                <Card.Title className="fw-bold">{author_name}</Card.Title>
                            </div>
                    </Card.Body>
                    <button className="btn btn-primary w-50 mx-auto my-3">Enroll Now</button>
                </Card>
            </Col>
        </div>
    );
};

export default Services;