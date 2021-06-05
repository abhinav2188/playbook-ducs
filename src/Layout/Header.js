import React,{useState, useEffect, useContext} from 'react'
import './layout.scss'
import {Link,NavLink} from 'react-router-dom'
import SignUpForm  from "./signUpForm"
import { UserContext } from "../providers/UserProvider";
import { logOut } from "../services/firebase";
import { signInWithGoogle } from '../services/firebase';
import SideBar from "./sideNavBar";
import {menuIcon} from "../svgs/navBarIcons"

const Header = (props) =>{

    // const [showForm , setShowForm ] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    
    const user = useContext(UserContext);
    const [authState,setAuthState] = useState(user?true:false);

   useEffect( ()=>{
        setAuthState(user ? true:false);
   },[user])

   const active = {
       borderBottom : '1px black solid',
       color:'#0f0'
   }
   const staticLinks = [
    <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink>,
    <NavLink exact to="/notes" className="nav-link" activeClassName="nav-link-active">Study-Material</NavLink>,
    <NavLink exact to="/college-life" className="nav-link" activeClassName="nav-link-active">College-Life</NavLink>,
    <NavLink exact to="/explore" className="nav-link" activeClassName="nav-link-active">Explore</NavLink>,
    <NavLink exact to="/contact" className="nav-link" activeClassName="nav-link-active">Contact</NavLink>,
    ];

    const signUpLogout = authState?
    <div>
        <span>{user.displayName}</span>
        <button to="/" className="logout-button"  onClick={()=>{
            logOut();
            setAuthState(false);
        }}>Logout</button> 
    </div>:
    <button className="sign-up-button"  onClick={()=>{
        signInWithGoogle();
        // setShowForm(s=>!s);
    }}>Sign Up</button>;


    return (
        <>
        <header>
            <div className="header-content">
                <Link to="/">
                    <h3 id="logo">DUCS<br/>Playbook</h3>
                </Link>
                <div className="nav-links">
                    {[
                        ...staticLinks,
                        signUpLogout
                    ]}
                </div> 
                <button onClick={()=> setShowSideBar(s=>!s)} className="menu-button">{menuIcon}</button>
            </div>
        </header>
        {/* <SignUpForm in={showForm} onClose={() => setShowForm(false)}/> */}
        <SideBar show={showSideBar} close={()=>setShowSideBar(false)} className="sidebar">
            <div className="nav-links">
                {[
                    ...staticLinks,
                ]}
            </div> 
        </SideBar>
        </>
    );
}


export default Header;