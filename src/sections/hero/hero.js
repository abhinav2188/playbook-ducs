import React from "react"
import "./hero.scss"
import heroSvg from "../../svgs/hero.svg"

const hero = () => {
    return(
        <div id="hero-section">
            <div class="content">
                <h1>Welcome to <span>DUCS</span></h1>
                <h3>A community where we create bright ideas, build strong relationships, find inspiration and achieve goals together</h3>
                <a href="#" class="action-button">Take a look</a>    
            </div>
            <img src={heroSvg} alt=""/>
        </div>
    );

}

export default hero;