import React from 'react'
import './header.scss'

const Header = (props) =>{
    return (
        <header>
            <div className="content">
                <h3 id="logo">DUCS Playbook</h3>
                <div>
                    <a href="#">Home</a>
                    <a href="#">Explore</a>
                    <a href="#">Contact</a>
                    <a href="#" className="sign-up">Sign Up</a>
                </div>    
            </div>
        </header>
    );
}


export default Header;