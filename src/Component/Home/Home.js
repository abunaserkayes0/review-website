import React from 'react';
import logo from '../../images/banner-image.png'
import './Home.css'
const Home = () => {
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
                        <div className="banner-image">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;