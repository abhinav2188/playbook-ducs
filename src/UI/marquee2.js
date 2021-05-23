import React, { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";
import './marquee2.scss';
import Anime from 'react-anime';
import anime from 'animejs';


const Marquee = (props) =>{

    const [extras,setExtras]  = useState([]);
    const [elementWidth , setElementWidth]  = useState(0);

    // const [marqueeAnimation, setMarqueeAnimation] = useState();
    // const marqEl = useRef(null);
    // const marqAnim = useRef(null);

    useEffect( ()=>{
        for(let i=0;i<props.activeItemsCount;i++)
        setExtras(e => {
            e.push(i);
            return e;
        });
        setElementWidth(100 / props.activeItemsCount);
        // marqAnim.current = anime({
        //     targets:marqEl.current,
        //     translateX : [0,(-1 *props.itemsArray.length * elementWidth)+'%'],
        //     duration : 3000 *props.itemsArray.length,
        //     loop:true,
        //     easing:'linear',
        //     autoplay:true
        // });
        // // marqAnim.current.play();
        // console.log(marqEl);
    },[] );

    

    return (
            <div className="marquee-container container">
                <Anime translateX={ [0,(-1 *props.itemsArray.length * elementWidth)+'%']} duration={3000*props.itemsArray.length} easing="linear" loop >
                <div className="marquee-content" >
                    {
                        props.itemsArray.map((item,index) => (
                        <div className="marquee-element" key={index} style={{width:elementWidth+'%'}} >
                            {item}
                        </div>
                        ))
                    }
                    {
                        extras.map(i => (
                        <div className="marquee-element" key={i+props.itemsArray.length} style={{width:elementWidth+'%'}}>
                            {props.itemsArray[i]}
                        </div>
                    ))}

                </div>
                </Anime>
            </div>
    );
}

Marquee.propTypes = {
    itemsArray: PropTypes.array,
    activeItemsCount : PropTypes.number
}

export default Marquee;
