import React from 'react'
import './signUpFrom.scss'
import Backdrop from './Backdrop';

const Form = (props) => {
    return (
        <>
        <Backdrop onClose={props.onClose} />
        <div className = "signup-container">
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
        </div>
        </>
    );    
}

export default Form;