import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Home from '../Home/Home';
import './TopRatedLanguage.css'
const TopRatedLanguage = () => {
    const[ratedLanguages,setRatedLanguages]=useState([]);
    useEffect(() => {
        fetch('./fakeDb.json')
        .then(response => response.json())
        .then(data=>setRatedLanguages(data.top))
    }, [])
    const bannerImageUrl = 'https://i.ibb.co/PgRmRxD/banner-image.png';
    return (
        <div>
            <div className="Container">
                <div className="row ms-4">
                    <div className="col-md-7 mt-5 pt-5">
                        <h1 className="fw-bold">Learn New Languages and Move Forward</h1>
                        <p>BBC Learning English is a department of the BBC World Service devoted to English language teaching.The service provides free resources and activities for teachers and students, primarily through its website. It also produces radio programmes which air on some of the BBC World.</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                    <div className="col-md-5">
                        <div className="banner-image mt-5">
                            <img src={bannerImageUrl} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <h2 className="text-bold">Our Service</h2>
                        <p>Our service is most popular and it's learning Environment space.</p>
                    </div>
                    
                </div>
            </div>
            <div>
            <Row xs={1} md={2} className="g-5">
            {
                ratedLanguages.map(ratedLanguage=><Home key={ratedLanguage.id} ratedLanguage={ratedLanguage}></Home>)
            }
            </Row>
            </div>
        </div>
    );
};

export default TopRatedLanguage;