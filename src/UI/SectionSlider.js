import React ,{useState,useRef} from "react";
import "./SectionSlider.scss";
import {useTransition,animated, useSpring} from 'react-spring'

const Dot = (props) => {
  const dotStyles = useSpring({
    scale: props.active ? 1.5 : 1
  })
  const [displayInfo,setDisplayInfo] = useState(false);
  const dotInfoTransition = useTransition(displayInfo,{
    from:{opacity:0},
    enter:{opacity:1},
    leave:{opacity:0}
  })

  return(
    <div className="dot-container">
        <animated.div onClick={props.onClick} className="dot" style={dotStyles} 
          onMouseEnter ={() => setDisplayInfo(true) }
          onMouseLeave = {() => setDisplayInfo(false)}
        ></animated.div> 
        {
          dotInfoTransition((styles,item) => 
          item && 
          <animated.div className="dot-info" style={styles}>
            <p>{props.info}</p>
          </animated.div>)
        }
    </div>
  );
} 

const SectionSlider = (props) => {

  const [activeSection, setActiveSection] = useState(0); 
  const styles = useSpring({ 
      transform : `translateY(${-activeSection*100}%)`
  });
  
  const [startCoordinates,setStartCoordinates] = useState([0,0]);
  const [endCoordinates,setEndCoordinates] = useState([0,0]);

  function onTouchStartHandler(e){
    setStartCoordinates([e.targetTouches[0].pageX,e.targetTouches[0].pageY]);
    // console.log(startCoordinates);
  }   
  function onTouchMoveHandler(e){
    setEndCoordinates([e.targetTouches[0].pageX,e.targetTouches[0].pageY]);
    // console.log(endCoordinates);
  }
  function onTouchEndHandler(e){
    var distX = endCoordinates[0] - startCoordinates[0];
    var distY = endCoordinates[1] - startCoordinates[1];
    if(distY < -200){
      nextSection();
    }
    if(distY > 200){
      prevSection();
    }
  }   

  const [pageChanged,setPageChanged] = useState(false);
  function onWheelHandler(e){
    if(e.deltaY > 100 && pageChanged===false){
      nextSection();
      setPageChanged(true);
      setTimeout(()=>
      setPageChanged(false),500);
    }
    else if(e.deltaY < -100 && pageChanged===false) {
      prevSection();
      setPageChanged(true);
      setTimeout(()=>
      setPageChanged(false),500);
    }  
  }

  function nextSection(){
    setActiveSection(i => i+1<props.sections.length?i+1:i);
  }
  function prevSection(){
    setActiveSection(i => i-1>=0?i-1:i);
  }

  return (
    <div className="hslider">
    <animated.div className="hslider-container" style={styles} 
        onTouchStart ={(e) =>{onTouchStartHandler(e)}} 
        onTouchEnd={(e)=>{onTouchEndHandler(e)}}
        onTouchMove={e => {onTouchMoveHandler(e)}} 
        onWheel={(e)=>{onWheelHandler(e)}} >
      {
        props.sections.map((item, index) => {
        return (
          <div key={index} className="hslider-slide">
            {item}
          </div>
        );
      })
      }
    </animated.div>

    <div className="hslider-controller">    
        {
            props.sectionNames.map((name,index) => (
              <Dot key={index} info={name} active={index==activeSection} onClick={()=>setActiveSection(index)}/>
            ))
        }
    </div>
    </div>
  );
};

export default SectionSlider;
