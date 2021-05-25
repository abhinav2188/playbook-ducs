import React from "react";
import "./explore.scss";
import "./explore2.scss";
import { Helmet } from "react-helmet";
import ExploreCard from "./home/sections/exploreCards/exploreCard";

import space from "../assets/illustration.svg";
import cardImg1 from "../assets/library.svg";
import cardImg2 from "../assets/blue.svg";
import cardImg3 from "../assets/flame.svg";

const Page = () => {
  return (
    <>
      <img src={space} alt="" class="space" />
      <section class="explore">
        <div className="content">
          <div className="textBox">
            <h3>Explore new things</h3>
            <p>
              Explore the campus, access high quality notes or level up skills
              with free resources.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <ExploreCard
              imageSvg={<img src={cardImg1} />}
              bgcolor="#eebed3"
              title="Study
            Material"
            />
          </div>
          <div className="column">
            <ExploreCard
              imageSvg={<img src={cardImg2} />}
              bgcolor="#dee8f9"
              title="Recreation"
            />
          </div>
          <div className="column">
            <ExploreCard
              imageSvg={<img src={cardImg3} />}
              bgcolor="#c8f2fe"
              title="Productivity"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
