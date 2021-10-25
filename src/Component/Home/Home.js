import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Home.css';
const Home = (props) => {
    const {name,image,price} = props.ratedLanguage;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-fluid rated-image" src={image} />
                    <Card.Body className="text-center">
                    <Card.Title className="fw-bold"> Course Name:{name}</Card.Title>
                    <Card.Text className="fw-bold"> Price:{price}</Card.Text>
                    <button className="btn btn-success fw-bold">Enroll Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Home;