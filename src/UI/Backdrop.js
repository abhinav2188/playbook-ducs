import React from 'react'
import {useTransition,animated} from 'react-spring'

const styles = {
    backdrop : {
        position:'fixed',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        backgroundColor : 'rgba(0,0,0,0.8)',
        zIndex:2
    }
}

const Backdrop = (props) => {
    const transitions = useTransition(props.in, {
        from: { opacity:0 },
        enter: { opacity: 1 },
        leave: { opacity:0 },
    })

    return transitions( (style,item) => item &&
    <animated.div style={style}>
    <div style={styles.backdrop} onClick={props.onClose}>
    </div>
    </animated.div>
    )
    
}

export default Backdrop;