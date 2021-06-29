import {React,useState} from 'react'
import './contact.scss'
import cimg from "../assets/contactimg.svg"
import {fbColor,instaColor,twitterColor, linkedinColor} from "../svgs/socialMediaIcons";
import WithAnimationLoad from "../HOC/WithAnimationLoad";
import {firestoreDB} from "../services/firebase";


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        message: '',
    });

    const updateInput = e => {
        e.preventDefault();
        setFormData({
         ...formData,
        [e.target.name]: e.target.value,
        })
        console.log(formData);
    }
    const handleSubmit = e => {
        e.preventDefault()
        sendData()
        setFormData({
            name: '',
            email: '',
            phone:'',
            message: ''
        })
    }
    const sendData = () => {
       
            firestoreDB.collection("contact-form").add({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            timestamp: new Date()
            }).then(() =>{
                alert("Form submitted successfully");
            }).catch((err)=>{
                alert("Error!");
                console.error(err);
            })
        }



    return (
        <WithAnimationLoad className="contact-wrapper main">

        <div className="contact-section container">
        <div className="left">
            <h2>We would love to <br/> hear from you</h2>
            <p>Fill up the form to get in touch and we will get back to you ASAP.</p>
            <img src={cimg} alt=""/>
        </div>
        <div className="right">
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Name" onChange={updateInput}  value={formData.name || ''} required/>
                <input type="email" id="email" name="email" placeholder="Email" onChange={updateInput} value={formData.email || ''} required/>
                <input type="tel" id="ph-num" name="phone" placeholder="Phone" pattern="[0-9]{10}" onChange={updateInput} value={formData.phone || ''}  />
                <textarea id="message" cols="30" name="message" rows="7" placeholder="Write your message here..." onChange={updateInput} value={formData.message || ''} required>
                </textarea>
                <button type="submit">Send</button>
            </form>
            <div className="social-media-links">
                <h4>Follow Us</h4>
                    <div className="icons">
                        <a href="#">{fbColor}</a>
                        <a href="#">{twitterColor}</a>
                        <a href="#">{linkedinColor}</a>
                        <a href="#">{instaColor}</a>
                </div>
            </div>

        </div>
        </div>

        </WithAnimationLoad>
    );
}

export default Contact;