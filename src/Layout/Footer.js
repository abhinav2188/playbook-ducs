import React, { useState } from 'react'
import './footer.scss'
import ReviewForm from "../Components/ReviewForm"
import Slider from "../UI/slider"
import {closeIcon} from "../svgs/navBarIcons"
import { Link } from 'react-router-dom'

const Footer = () => {

    const [showReviewForm,setShowReviewForm]  = useState(false);


    return (
        <>
        <div className="footer">
        <div className="bottom-nav">
            <h3>Help your juniors and colleagues with your contribution to our playbook.</h3>
            <div className="form-buttons">
                <button onClick={()=>setShowReviewForm(true)}>Share your moments of DUCS</button>
                <Link exact to="/add-material" ><button>Upload your Notes</button></Link>
            </div> 
        </div>

        <Slider show={showReviewForm} close={()=> setShowReviewForm(false)} className="review-form-container">
            <button className="close-button" onClick={()=>setShowReviewForm(false)}>{closeIcon}</button>
            <h2>Write us your Experience in DUCS!</h2>
            <ReviewForm className="form"/>
        </Slider>
        <footer >
            <p>©2021 DUCS Playbook</p>
        </footer>
        </div>

        </>
    );
}

export default Footer;