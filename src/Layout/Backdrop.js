import React from 'react'

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

const backdrop = (props) => {
    return(
        <div style={styles.backdrop} onClick={props.onClose}>
        </div>
    );
}

export default backdrop;