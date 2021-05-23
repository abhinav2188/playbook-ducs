import React, { useEffect } from 'react'
import './slider.scss'
import {CSSTransition} from  'react-transition-group'


const slide = (props) => {
    return (
        <CSSTransition key={props.id} in={props.in} classNames="fade" unmountOnExit>
            {props.children}
        </CSSTransition>
    );
}

export default slide;