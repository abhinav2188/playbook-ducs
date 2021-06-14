import React from "react";
import "./explore.scss";

import space from "../assets/illustration.svg";
import cardImg1 from "../assets/study.svg";
import cardImg2 from "../assets/time.svg";
import cardImg3 from "../assets/productivity.jpg";
import WithAnimationLoad from "../HOC/WithAnimationLoad";

import Layout from "../Layout/layout"


const Card = (props) => {
  return (
    <div className="explore-card" style={{ background: props.grad }}>
      <div className="card-img">
        <img src={props.imgSrc} alt="" />
      </div>
      <h4 className="card-title">{props.title}</h4>
    </div>
  );
};

const Page = () => {
  return (
      <Layout>
    <WithAnimationLoad className="main">
      <img src={space} className="explore-bg" alt="" />
      <div id="explore" className="container">
        <div className="explore-content">
          <div className="top">
            <h2>Explore NEW things</h2>
            <p>
              Explore the campus, access high quality notes, level up skills
              with free resources
            </p>
          </div>
          <div className="explore-cards">
            <Card
              key="e1"
              title="Study Material"
              imgSrc={cardImg1}
              grad="linear-gradient(
45deg
, #412FAF, #50C1E8)"
            />
            <Card
              key="e2"
              title="Recreation"
              imgSrc={cardImg2}
              grad="linear-gradient(
45deg
, #2FB8FF, #95E8DC)"
            />
            <Card
              key="e3"
              title="Productivity"
              imgSrc={cardImg3}
              grad="linear-gradient(
45deg
, #2587A6, #6FF7E8)"
            />
          </div>
        </div>
      </div>
    </WithAnimationLoad>
  </Layout> 
 );
};

export default Page;
