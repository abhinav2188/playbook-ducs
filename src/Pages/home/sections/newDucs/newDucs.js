import React from 'react';
import fimg from "../../../../svgs/ft3-img.svg";
import "./newDucs.scss"

const sec = (props) => {
    return (
        <div class="section-container sectional-margin">
            <div className="container newducs">
                <div className="ndcs-content">
                    <h1>New to DUCS?</h1>
                    <h3>Click here to explore places of interest, Amazing street food, Chai ki Taprees and lot more</h3>
                    <a href="#" className="action-button">Explore</a>
                </div>
                <img className="feature-img" src={fimg} alt=""/>
            </div>
        </div>
    );
}

export default sec;
