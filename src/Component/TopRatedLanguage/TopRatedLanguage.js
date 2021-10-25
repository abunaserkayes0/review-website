import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../Home/Home';
import './TopRatedLanguage.css'
const TopRatedLanguage = () => {
    const[ratedLanguages,setRatedLanguages]=useState([]);
    useEffect(() => {
        fetch('./fakeDb.json')
            .then(response => response.json())
            .then(data=>setRatedLanguages(data.slice(0,4)))
    },[])
    const bannerImageUrl = 'https://i.ibb.co/PgRmRxD/banner-image.png';
    return (
        <div>
            <Container>
                <Row className="row ms-4">
                    <Col md={8} className="mt-5 pt-5">
                        <h1 className="fw-bold">Learn New Languages and Move Forward</h1>
                        <p>BBC Learning English is a department of the BBC World Service devoted to English language teaching.The service provides free resources and activities for teachers and students, primarily through its website. It also produces radio programmes which air on some of the BBC World.</p>
                        <button className="btn btn-primary">Read More</button>
                    </Col>
                    <Col md={4}>
                        <div className="banner-image mt-5">
                            <img src={bannerImageUrl} alt="" />
                        </div>
                    </Col>
                </Row>
                <div>
                    <div className="text-center">
                        <h2 className="text-bold">Our Service</h2>
                        <p>Our service is most popular and it's learning Environment space.</p>
                    </div>
                    
                </div>
            </Container>
            <Container>
            <Row xs={1} md={2} className="g-5">
            {
                ratedLanguages.map(ratedLanguage=><Home key={ratedLanguage.id} ratedLanguage={ratedLanguage}></Home>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default TopRatedLanguage;