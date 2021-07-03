import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import './marquee.scss';
import {animated, useSpring} from 'react-spring'

const Marquee = (props) =>{

    const [extras,setExtras]  = useState([]);
    const [elementWidth , setElementWidth]  = useState(0);
    const [stopAnim , setStopAnim] = useState(false);


    useEffect( ()=>{
        for(let i=0;i<props.activeItemsCount;i++)
        setExtras(e => {
            e.push(i);
            return e;
        });
        setElementWidth(100 / props.activeItemsCount);
    },[props.activeItemsCount,props.itemsArray] );

   
    const styles = useSpring({
        from :{
            x : '0%'
        },
        to : {
            x: (props.itemsArray.length * -1 * elementWidth)+'%' ,
        },
        loop:true,
        config:{
            duration: 3000 * props.itemsArray.length,
            easing: t=>t
        },
        pause:stopAnim || (props.itemsArray.length <= props.activeItemsCount)
    });


    return (
            <div className="marquee-container" onMouseEnter={()=>setStopAnim(true)} onMouseLeave={()=>setStopAnim(false)}>
                <animated.div style={styles} className="marquee-content" >
                    {
                        props.itemsArray.map((item,index) => (
                        <div className="marquee-element" key={index} style={{width:elementWidth+'%'}} >
                            {item}
                        </div>
                        ))
                    }
                    {
                        props.itemsArray.length>props.activeItemsCount &&
                        extras.map(i => (
                        <div className="marquee-element" key={i+props.itemsArray.length} style={{width:elementWidth+'%'}}>
                            {props.itemsArray[i]}
                        </div>
                    ))}
                </animated.div>
            </div>
    );
}

Marquee.propTypes = {
    itemsArray: PropTypes.array,
    activeItemsCount : PropTypes.number
}

export default Marquee;
