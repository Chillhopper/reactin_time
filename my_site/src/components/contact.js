import React, { useContext } from 'react'
import './contact.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LGtheme } from './theme';

function Contact(){
    const contextObj = useContext(LGtheme)
    return(
<>

<div className={`container-fluid bg-${contextObj.theme}`} style={{minHeight: '100vh'}}>
    <div className="container pt-5">
        <div className="row">
            <div className="col-md-3">
                <div className="contact-info">
                    <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                    <h2>Contact Us</h2>
                    <h4>We would love to hear from you !</h4>
                </div>
            </div>
            <div className={`col-md-9 bg-${contextObj.theme}`}>
                <div className="contact-form">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" rows="3" id="comment"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
    );  
}


export default Contact