/*This is Contact Component use Contact path*/
import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="w-50 mx-auto text-white bg-success p-5 my-5 rounded-3">
            <h2 className="fw-bold mb-3">Sign Up</h2>
            <form action="">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">First Name*</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Last Name*</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address*</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password*</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password*</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button type="submit" class="btn btn-danger">Sign In</button>
            </form>
        </div>
    );
};

export default Contact;