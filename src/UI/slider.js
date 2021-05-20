import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./slider.scss"
import {TransitionGroup, Transition,SwitchTransition, CSSTransition} from 'react-transition-group'

const Slider = (props) => {
    const [activeSlides,setActiveSlides] = useState([]);
    const changeSlides = () => {
        setActiveSlides(activeSlides.map(i => (i+1)%props.slidesArray.length ));
    }
    useEffect(()=>{
        console.log("slider making active array");
        var arr = [];
        for(let i=0;i<props.activeCount;i++)
        arr.push(i);
        setActiveSlides(arr);
        // const id = setInterval(()=>{
        //     changeSlides();
        // },1000);

        // return () =>{
        //     clearInterval(id);
        // }
    },[]);
    // useEffect( ()=>{
    //     setTimeout(changeSlides,2000);
    // },[activeSlides]);

    const [state, setState] = useState(false);
    // <div className="slide">
    //     {props.slidesArray[i]} 
    // </div>   

    return(
        <div className="slider-container">
            <TransitionGroup className="slider">
                {
                    activeSlides.map( i => {
                        return (
                            <CSSTransition
                            key={i}
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                            classNames='fade'
                            >
                                {props.slidesArray[i]}
                            </CSSTransition>
                        );
                    }) 
                }
            </TransitionGroup>
            <div className="slider-controls">
                <button onClick={changeSlides}>Change</button>
            </div>
        </div>
    );
}

Slider.propTypes = {
    activeCount : PropTypes.number,
    slidesArray : PropTypes.arrayOf(Object)
}

export default Slider;