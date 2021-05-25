import React from 'react'
import './contact.scss'

import cimg from "../assets/contactimg.svg"
import fb from "../assets/Facebook.svg"
import insta from "../assets/instagram.svg"
import ln from "../assets/linkedin.svg"
import tw from "../assets/twitter.svg"

const contact = () => {
    return (
        <div className="contact-wrapper">

        <div className="contact-section container">
        <div className="left">
            <h2>We would love to <br/> hear from you</h2>
            <p>Fill up the form to get in touch and we will get back to you ASAP.</p>
            <img src={cimg} alt=""/>
        </div>
        <div className="right">
            <form className="contact-form" action="#" method="POST">
                <input type="text" id="name" placeholder="Name" required/>
                <input type="email" id="email" placeholder="Email" required/>
                <input type="tel" id="ph-num" placeholder="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                <textarea id="message" cols="30" rows="7" placeholder="Write your message here...">
                </textarea>
                <button type="submit">Send</button>
            </form>
            <div className="social-media-links">
                <h4>Follow Us</h4>
                    <div className="icons">
                        <a href="#"><img src={fb} alt="facebook logo"/></a>
                        <a href="#"><img src={tw} alt="twitter logo"/></a>
                        <a href="#"><img src={ln} alt="linkedin logo"/></a>
                        <a href="#"><img src={insta} alt="instagram logo"/></a>
                </div>
            </div>

        </div>
        </div>

        </div>
    );
}

export default contact;