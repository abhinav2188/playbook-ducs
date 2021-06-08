import React from "react";
import "./hero.scss";
import heroSvg from "../../../../svgs/hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero-section">
      <div class="hero-content">
        <h1>
          Welcome to <span className="ducs">DUCS</span>
        </h1>
        <h3>
          A community where we create bright ideas, a culture that is inclusive
          of everyone and where everyone who joins feels they have opportunities
          to succeed and grow.
        </h3>
        <Link to="/college-life" className="action-button">
          Take a look
        </Link>
      </div>
      <img className="hero-img" src={heroSvg} alt="" />
    </div>
  );
};

export default Hero;
