import React from 'react';
import { icons } from 'react-icons/lib';
import './contact.css';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiMailFill, RiPhoneFill } from 'react-icons/ri';

const Contact = () => {
    return (
        <div className="project__contact" id="contact">
            {/* Contact Header */}
            <div className="project__contact-header">
                <h1>Contact us</h1>
            </div>

            {/* Contact Info Container */}
            <div className="project__contact-container">
                <div className="project__contact-container_info">
                    <div className="project__contact-container_info-inputbox">
                        <label htmlFor="email">Send a question or give feedback</label>
                        <textarea name="email" id="email" cols="30" rows="10">
                            Type here
                        </textarea>
                        {/* <div className="project__contact-container_info-inputbox-email">
                            <label htmlFor="email">Enter your email: </label>
                            <input type="email" id="email" name="Email" />
                            <input type="submit" value="Submit" />
                        </div> */}
                        <div className="project__contact-container_info-inputbox-submit">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                    <div className="project__contact-container_info-phone">
                        <p>
                            We are also open for phone call from 8AM to 4PM
                        </p>
                        <p>
                            073-558 99 41
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Icons */}
            <div className="project__contact-content">
                <div className="project__contact-content_icons">
                    <a href="#"><RiFacebookFill size={62} color="white" /></a>
                    <a href="#"><RiInstagramFill size={62} color="white" /></a>
                    <a href="#"><RiTwitterFill size={62} color="white" /></a>
                    <a href="#"><RiMailFill size={62} color="white" /></a>
                    <a href="#"><RiPhoneFill size={62} color="white" /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact

// Contact Us
// Send a question or give feedback
// Textbox + submit button
// We are also open for phone call from 8AM to 4PM
// (phone number)
// icons(fb, insta, twitter, email, phone number)

// Partners
// Bitcoin, osv