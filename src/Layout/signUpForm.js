import React from 'react'
import './signUpFrom.scss'
import Backdrop from './Backdrop';
import {useSpring,config, animated,useTransition} from 'react-spring'

const Form = (props) => {
    // const styles = useSpring({
    //     from:{opacity:0,y:'0%',x:'-50%'}, 
    //     to:{opacity: props.in ? 1 : 0 , y:'-50%',x:'-50%'}
    // });
    const transitions = useTransition(props.in, {
        from: { opacity:0,y:'-100%',x:'-50%' },
        enter: { opacity: 1, y:'-50%',x:'-50%' },
        leave: { opacity:0,y:'0%',x:'-50%' },
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
    })
    return (
        <>
        <Backdrop onClose={props.onClose} in={props.in}/>
        {
            transitions( (styles,item ) => item &&
            <animated.div style={styles} className = "signup-container">
            <div className="signup-form">
                <button className="close-button" onClick={props.onClose}>X</button>
                <h2>Sign In</h2>
                <h4>Sign in to your account for free access.</h4>
                <form>
                    <label for = "email">
                        <p>Email</p>
                        <input id="email" type="text" />
                    </label>
                    <label for = "password">
                        <p>Password</p>
                        <input id="password" type="password" />
                    </label>
                </form>
                <h4 class="signText">Don't have an account? <a href="#" className="sign-up">Sign up</a></h4>
            </div>
        </animated.div>
            )

        }
        </>
    );    
}

export default Form;