import React,{useState} from 'react'
import './layout.scss'
import {Link} from 'react-router-dom'
import SignUpForm  from "./signUpForm"

const Header = (props) =>{

    const [showForm , setShowForm ] = useState(false);

    return (
        <>
        <header>
            <div className="header-content">
                <h3 id="logo">DUCS Playbook</h3>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/explore" className="nav-link">Explore</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/" className="sign-up-button"  onClick={(e)=>{
                        e.preventDefault();
                        setShowForm(k => !k);
                    }}>Sign Up</Link>
                </div>    
            </div>
        </header>
        <SignUpForm in={showForm} onClose={() => setShowForm(false)}/> 
            {/* {
                showForm ? <SignUpForm in={showForm} onClose={() => setShowForm(false)}/> : ""
            } */}
        </>
    );
}


export default Header;