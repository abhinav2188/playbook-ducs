import React,{useState, useEffect, useContext} from 'react'
import './layout.scss'
import {Link} from 'react-router-dom'
import SignUpForm  from "./signUpForm"
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import { logOut } from "../services/firebase";
import { signInWithGoogle } from '../services/firebase';

const Header = (props) =>{

    // const [showForm , setShowForm ] = useState(false);
    // const [showSideBar, setShowSideBar] = useState(false);
    
    const user = useContext(UserContext);
    const [authState,setAuthState] = useState(user?true:false);

   useEffect( ()=>{
        setAuthState(user ? true:false);
   },[user])

   function handleLogout(){
       logOut();
       setAuthState(false);
   }

    return (
        <>
        <header>
            <div className="header-content">
                <h3 id="logo">DUCS Playbook</h3>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/explore" className="nav-link">Explore</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>

                   { authState ?
                    <div>
                        <span>{user?.displayName}</span>
                        <button className="logout-button"  onClick={handleLogout}>LogOut</button>
                    </div>
                    :
                    <button className="sign-up-button"  onClick={()=>{
                            // setShowForm(true);
                            signInWithGoogle();
                    }}>Sign Up</button>  }                 
                </div>    
            </div>
        </header>

        {/*<SignUpForm in={showForm} onClose={() => setShowForm(false)}/> */}
            {/* {
                showForm ? <SignUpForm in={showForm} onClose={() => setShowForm(false)}/> : ""
            } */}
        </>
    );
}


export default Header;