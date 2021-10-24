import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="text-center bg-light my-5 py-3">
                <h1>Learning languages</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <p>San Francisco, CA 94102, US</p>
                        <p>1234 Some St</p>
                    </div>
                    <div className="ms-5">
                        <p>Phone: 800 123 4567</p>
                        <p>Fax: 1.800.123.4566</p>
                    </div>
                </div>
                <div>
                    <i className="fab fa-facebook-square fa-3x mx-3"></i>
                    <i className="fab fa-instagram-square fa-3x mx-3"></i>
                    <i className="fab fa-linkedin fa-3x mx-3"></i>
                    <i className="fab fa-vimeo fa-3x mx-3"></i>
                </div>
            </footer>
        </div>
    );
};

export default Footer;