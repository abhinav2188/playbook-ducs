import React,{useState, useEffect, useContext} from 'react'
import './Header.scss'
import {Link,NavLink} from 'react-router-dom'
import SignUpForm  from "./signUpForm"
import { UserContext } from "../providers/UserProvider";
import { logOut } from "../services/firebase";
import { signInWithGoogle } from '../services/firebase';
import SideBar from "./sideNavBar";
import {menuIcon,logoutIcon} from "../svgs/navBarIcons"


const Header = (props) =>{

    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => {
      // console.log("handleScroll");
      setOffsetY(window.pageYOffset);
    }
    useEffect(()=>{
      // console.log("useEffect");
      window.addEventListener("scroll",handleScroll);
      return () => window.removeEventListener("scroll",handleScroll);
    },[]);
  
    // const [showForm , setShowForm ] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    
    const user = useContext(UserContext);
    const [authState,setAuthState] = useState(user?true:false);

   useEffect( ()=>{
        setAuthState(user ? true:false);
   },[user])


   useEffect(()=>{
        var t = document.querySelector(':root');
        var theme = getComputedStyle(t);
        console.log(theme.getPropertyValue('--header-bg-color'));
        console.log(theme.getPropertyValue('--header-txt-color'));
        t.style.setProperty('--header-txt-color',props.theme.color);
        t.style.setProperty('--header-bg-color',offsetY>100 ? props.theme.backgroundColor: "transparent");
   },[props.theme,offsetY])

   const staticLinks = [
    <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink>,
    <NavLink exact to="/notes" className="nav-link" activeClassName="nav-link-active">Study-Material</NavLink>,
    <NavLink exact to="/college-life" className="nav-link" activeClassName="nav-link-active">College-Life</NavLink>,
    <NavLink exact to="/explore" className="nav-link" activeClassName="nav-link-active">Explore</NavLink>,
    <NavLink exact to="/contact" className="nav-link" activeClassName="nav-link-active">Contact</NavLink>,
    ];

    const signUpLogout = authState?
    <div className="auth">
        <span>{user.displayName}</span>
        <button to="/" className="logout-button"  onClick={()=>{
            logOut();
            setAuthState(false);
        }}>{logoutIcon}</button> 
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
        <SideBar show={showSideBar} close={()=>setShowSideBar(false)}>
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

//  className="sidebar" style={{color:props.theme.color , backgroundColor:props.theme.backgroundColor}}