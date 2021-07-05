import React,{useState, useEffect, useContext} from 'react'
import './Header.scss'
import {Link,NavLink} from 'react-router-dom'
import SignUpForm  from "../Components/signUpForm"
import { UserContext } from "../providers/UserProvider";
import { logOut } from "../services/firebase";
import { signInWithGoogle } from '../services/firebase';
import SideBar from "../UI/slider";
import {menuIcon,logoutIcon} from "../svgs/navBarIcons";
import {animated, useTransition} from 'react-spring';


const Header = (props) =>{

    const [offsetY,setOffsetY] = useState(0);
    const [showHeader,setShowHeader] = useState(true);
    const handleScroll = () => {
        setOffsetY(prev => {
            setShowHeader(window.pageYOffset==0 || prev>window.pageYOffset);
            // if(prev<window.pageYOffset && showHeader === true)
            // setShowHeader(false);
            // else if(prev>window.pageYOffset && showHeader === false)
            // setShowHeader(true);
            return window.pageYOffset;
        });
    }
    useEffect(()=>{
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
        // console.log(theme.getPropertyValue('--header-bg-color'));
        // console.log(theme.getPropertyValue('--header-txt-color'));
        t.style.setProperty('--header-txt-color',props.theme.color);
        t.style.setProperty('--header-bg-color', props.theme.backgroundColor);
   },[props.theme])

   useEffect(()=>{
      console.log("show header:",showHeader);
   },[showHeader])



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


    const headerTrans = useTransition(showHeader,{
        from:{y:'-100%'},
        enter:{y:'0%'},
        leave:{y:'-100%'},
        config:{
            duration:200
        } 
    });
    return (
        <>
        {
            headerTrans((styles,item) =>
            item && 
            <animated.div className="header" style={styles}>
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
            </animated.div>
            )
        }
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
