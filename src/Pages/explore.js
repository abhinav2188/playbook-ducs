import React from "react";
import "./explore.scss";

import space from "../assets/illustration.svg";
import cardImg1 from "../assets/library.svg";
import cardImg2 from "../assets/blue.svg";
import cardImg3 from "../assets/flame.svg";

const Card = (props) => {
    return (
        <div className="explore-card" style={{backgroundColor:props.bgColor}}>
            <div className="card-img">
                <img src={props.imgSrc} alt=""/>
            </div>
            <h4 className="card-title">{props.title}</h4>
        </div>
    );
}

const Page = () => {
    return (
      <>
      <img src={space} className="explore-bg" alt=""/>
      <div id="explore" className="container">
            <div className="explore-content">
                <div className="top">
                    <h2>Explore NEW things</h2>
                    <p>Explore the campus, access high quality notes, level up skills with free resources</p>
                </div>
                <div className="explore-cards">
                    <Card key="e1" title="Study Material" imgSrc={cardImg1} bgColor="#EEBED3"/>
                    <Card key="e2" title="Recreation" imgSrc={cardImg2} bgColor="#DEE8F9"/>
                    <Card key="e3" title="Productivity" imgSrc={cardImg3} bgColor="#C8F2FE"/>
                </div>
            </div>
      </div>
      </>
  );
};

export default Page;
