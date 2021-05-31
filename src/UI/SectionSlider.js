import React ,{useState} from "react";
import "./SectionSlider.scss";
import {useTransition,animated, useSpring} from 'react-spring'

const sections = [
  <h1>section 1</h1>,
  <h1>section 2</h1>,
  <h1>section 3</h1>,
  <h1>section 4</h1>,
  <h1>section 5</h1>,
  <h1>section 6</h1>,
  <h1>section 7</h1>,
  <h1>section 8</h1>,
];
const SectionSlider = (props) => {

    const [activeSection, setActiveSection] = useState(0); 
    const styles = useSpring({ 
        transform : `translateY(${-activeSection*100}%)`
     });

  return (
    <div className="hslider" onScroll={() => {console.log("scroll")}}>
    <animated.div className="hslider-container" style={styles}>
    {
        sections.map((item, index) => {
        return (
          <div key={index} className="hslider-slide">
            {item}
          </div>
        );
      })}
    </animated.div>
    <div className="hslider-controller">    
        {
            sections.map((item,index) => (
                <button className="dot" key={index} onClick={() => {
                        console.log(index);
                        setActiveSection(index);
                }}>
                {index}
                </button>
            ))
        }
    </div>
    </div>
  );
};

export default SectionSlider;
