import React from "react";
import PropTypes from "prop-types";
import "./exploreCards.scss";

const exploreCard = (props) => {
  return (
    <div className="explore-card-container">
      <div className="card">
        <h4 class="card-title">{props.title}</h4>
        <div className="card-bg-img" style={{ backgroundColor: props.bgcolor }}>
          {props.imageSvg}
        </div>
      </div>
    </div>
  );
};

exploreCard.propTypes = {
  imageSvg: {
    type: PropTypes.object,
    required: true,
  },
  title: PropTypes.string,
  bgcolor: PropTypes.string,
};

export default exploreCard;
