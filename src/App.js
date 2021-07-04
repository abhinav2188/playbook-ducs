import React, { useState,useEffect } from "react";
import "./_base.scss";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./Pages/home/home";
import Explore from "./Pages/explore";
import CollegeLife from "./Pages/college-life";
import Contact from "./Pages/contact";
import Test from "./Pages/test";
import Notes from "./Pages/notes";
import UserProvider from "./providers/UserProvider";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const ConditionalFooter = (props) => {
  const location = useLocation();
  return (
    (location.pathname!="/college-life") ? <Footer/>:""
  );
};

const HeaderWithTheme = () => {
  
  const [theme,setTheme] = useState({
    color:"#fff",
    backgroundColor:"rgba(0,0,100,0.5)" 
  });
  const location = useLocation();
  
  useEffect(()=>{
    if(location.pathname == '/'){
      setTheme(prev => ({
        ...prev,
        color:"#fff",
        backgroundColor:"rgba(0,0,0,0.3)" 
      }));
    }
    else{
      setTheme(prev => ({
        ...prev,
        color : "#000",
        backgroundColor: "rgba(255,255,255,0.5)"
      }));
    }
  },[location.pathname])

  return (
  <Header theme={theme}/>
  );

}

const App = () => {




  return (
    <BrowserRouter>
      <UserProvider>
        <div className="root">
          <HeaderWithTheme/>
          <Switch>
            <Route path="/college-life" component={CollegeLife} />
            <Route path="/explore" component={Explore} />
            <Route path="/contact" component={Contact} />
            <Route path="/test" component={Test} />
            <Route path="/notes" component={Notes} />
            <Route path="/" component={Home} />
          </Switch>
          <ConditionalFooter />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
