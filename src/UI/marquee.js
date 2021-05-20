import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import './marquee.scss';

const Marquee = (props) =>{

    const [extras,setExtras]  = useState([]);
    
    useEffect( ()=>{
        var r = document.querySelector(':root');

        var displayCount = getComputedStyle(r).getPropertyValue('--elements-displayed');
        console.log(getComputedStyle(r).getPropertyValue('--elements-width'));

        r.style.setProperty('--elements-count',props.itemsArray.length);

        var tmp = [];
        for(let i=0;i<displayCount;i++){
            console.log(i);
            tmp.push(i);
        }
        console.log(tmp);
        setExtras(tmp);
        console.log(extras);

    },[] );

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {
                    props.itemsArray.map((item,index) => (
                    <div className="marquee-element" key={index} >
                        {item}
                    </div>
                    ))
                }
                {
                    extras.map(i => (
                    <div className="marquee-element" key={i+props.itemsArray.length}>
                        {props.itemsArray[i]}
                    </div>
                ))}
            </div>
        </div>
    );
}

Marquee.propTypes = {
    itemsArray: PropTypes.array
}

export default Marquee;
