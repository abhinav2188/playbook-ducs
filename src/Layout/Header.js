import React from 'react'
import './layout.scss'
import {Link} from 'react-router-dom'

const Header = (props) =>{
    return (
        <header>
            <div className="header-content">
                <h3 id="logo">DUCS Playbook</h3>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/explore" className="nav-link">Explore</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/" className="nav-link sign-up">Sign Up</Link>
                </div>    
            </div>
        </header>
    );
}


export default Header;