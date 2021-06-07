import React from "react";
import "./navBlocks.scss";
import Card from "./navBlock";
import Svg1 from "../../../../svgs/fests"
import Svg2 from "../../../../svgs/clg-life"
import Svg3 from "../../../../svgs/faculty-staffs"

const cards = ()=>{
    return (
      <div className="cards-container container sectional-margin">
        <Card
          imageSvg={<Svg1 />}
          color="#FF6542"
          title="College Life"
          excerpt="A sneak peek at the beautiful phases of college life"
        />
        <Card
          imageSvg={<Svg2 />}
          color="#FF6542"
          title="Events & Fests"
          excerpt="At DUCS you are always Partying"
        />
        <Card
          imageSvg={<Svg3 />}
          color="#3D3B8E"
          title="Faculty & Staff"
          excerpt="The Foundation of DUCS"
        />
      </div>
    );
}

export default cards;