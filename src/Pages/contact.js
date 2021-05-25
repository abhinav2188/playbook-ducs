import React from 'react'
import './contact.scss'

const contact = () => {
    return (
        <div className="contact-section">
        <div className="main-content">
            <div className="left-content">
                <span>We would love to <br/> hear from you</span>
                <span>Fill up the form to get in touch and we will get back to you ASAP.</span>
                <img src="./assets/contactimg.svg"/>
            </div>
            <div className="right-content">
                <form className="contact-form" action="#" method="POST">
                    <input type="text" id="name" placeholder="Name" required/>
                    <input type="email" id="email" placeholder="Email" required/>
                    <input type="tel" id="ph-num" placeholder="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    <textarea id="message" cols="30" rows="7" placeholder="Write your message here...">
                    </textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="social-media-links">
                    <span>Follow us</span>
                    <div className="icons">
                        <a href="#"><img src="./assets/Facebook.svg" alt="facebook logo"/></a>
                        <a href="#"><img src="./assets/twitter.svg" alt="twitter logo"/></a>
                        <a href="#"><img src="./assets/linkedin.svg" alt="linkedin logo"/></a>
                        <a href="#"><img src="./assets/instagram.svg" alt="instagram logo"/></a>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}

export default contact;