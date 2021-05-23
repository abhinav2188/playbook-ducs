import React, { useEffect } from "react"
import "./hero.scss"
import heroSvg from "../../../../svgs/hero.svg"
import anime from 'animejs'

const Hero = () => {
    useEffect( () => {
        anime({
            targets:".hero-section .hero-content",
            scale:[0.9,1.2]
        });
    },[])
    return(
        <div id="hero-section">
            <div class="hero-content">
                <h1>Welcome to <span className="ducs">DUCS</span></h1>
                <h3>A community where we create bright ideas, build strong relationships, find inspiration and achieve goals together</h3>
                <a href="#" class="action-button">Take a look</a>    
            </div>
            <img className='hero-img' src={heroSvg} alt=""/>
        </div>
    );

}

export default Hero;