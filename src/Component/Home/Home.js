/* This is home component */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Home.css';
const Home = (props) => {
    const {name,image,price} = props.ratedLanguage;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="card-image" src={image} />
                    <Card.Body>
                        <Card.Title>Course Name:{name}</Card.Title>
                        <Card.Text>Price:{price}</Card.Text>
                        <button className="btn btn-success">Enroll Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Home;