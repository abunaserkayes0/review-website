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
                            <Card.Title className="fw-bold">{name}</Card.Title>
                            <br />
                                <Card.Title className="fw-bold">{price}</Card.Title>
                            </div>
                            <div className="text-center">
                                <Card.Img className="author-image" src={author_image}/>
                                <Card.Title className="fw-bold">{author_name}</Card.Title>
                            </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Services;