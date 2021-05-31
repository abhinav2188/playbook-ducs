import React,{useState} from "react"
import PropTypes from 'prop-types'
import "./treeMenu.scss"
import {animated, Spring, useTransition} from 'react-spring'

const caret = <svg style={{width:'100%'}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 16L16 26L6 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26 6L16 16L6 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



const TreeMenu = (props) => {
    const [show, setShow] = useState(false);
    
    const menuTransitions = useTransition(show,{
        from : {opacity:0,maxHeight:'0vh'},
        enter :{opacity:1,maxHeight:'100vh'},
        leave:{opacity:0,maxHeight:'0vh'},
    })
    
    return (
        <div className="tree-menu">
            <div className="toggle-head" onClick={() => setShow(s=>!s)}>
                <Spring transform={show?`rotate(0deg)`:'rotate(-90deg)'}>
                {styles => 
                <animated.div className="caret" style={styles}>
                    {caret}
                </animated.div>}
                </Spring>
                <span>{props.toggleHead}</span>
            </div>
            {
                menuTransitions((styles,item) => item &&
                <animated.div style={styles} className={`toggle-menu ${props.isOverlay&&'float-up'}`} >
                    <div className="menu-items">
                        {props.children}
                    </div>
                </animated.div>
                )
            }
        </div>
    );

}
// position:props.isOverlay ? "absolute":"",
// top:'1.5rem',
// left:0,
// transform: props.isOverlay ? "translateY(20px)": "translateY(0)",
// zIndex: props.isOverlay?2:0,
// marginLeft: props.isOverlay?"0":"0.5rem",

TreeMenu.propTypes = {
    toggleHead : PropTypes.object,
    isOverlay : PropTypes.bool,
}

export default TreeMenu;