/*This is NotFound Component it's use * path*/
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="text-center my-5">
                <i class="far fa-frown-open fa-10x my-3"></i>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <h3>The page you are looking for does't exist or an other error occurred.</h3>
                <h3><Link className="text-decoration-none text-danger" to="/home">Go back</Link> and head over to home page</h3>
        </div>
    );
};

export default NotFound;