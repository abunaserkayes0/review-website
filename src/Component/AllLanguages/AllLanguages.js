import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';

const AllLanguages = () => {
    const[allLanguages,setAllLanguages] =useState([])
    useEffect(() => {
        fetch('./fakeDb.json')
            .then(response => response.json())
            .then(data=>setAllLanguages(data))
    },[])
    return (
        <div className="container my-5">
            <Row xs={1} md={3} className="g-5">
            {
                allLanguages.map(allLanguage=><Services key={allLanguage.id} allLanguage={allLanguage}></Services>)
            }
            </Row>
        </div>
    );
};

export default AllLanguages;