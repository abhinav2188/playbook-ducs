import React from 'react';
import {animated, useTransition} from 'react-spring';
import "./slider.scss"
import Backdrop from "./Backdrop"

const Sidebar = (props) => {
    const sidebarTransitons = useTransition(props.show,{
        from:{opacity:0,x:'100%'},
        enter:{opacity:1,x:'0%'},
        leave:{opacity:0,x:'100%'}
    });

    return (
        <>
        <Backdrop in={props.show} onClose={props.close}/>
        {
        sidebarTransitons((styles,item) => 
        item &&
        <animated.div style={styles} className={`sideNavBar ${props.className}`}>
            {props.children}
        </animated.div> )
        }
        </>
    );
}

export default Sidebar;

