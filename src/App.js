import React, { useEffect } from "react";
import "./_base.scss";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./Pages/home/home";
import Explore from "./Pages/explore";
import CollegeLife from "./Pages/college-life";
import Contact from "./Pages/contact";
import Test from "./Pages/test";
import Notes from "./Pages/notes";
import UserProvider from "./providers/UserProvider";
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Admin from "./Pages/Admin/admin"


const ConditionalFooter = (props) => {
  const location = useLocation();
  return (
    (location.pathname!="/test" && location.pathname!="/college-life") ? <Footer/>:""
  );
} 

const App = () => {
  
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="root">
          <Header/>
            <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/explore" component={Explore} />
            <Route path="/college-life" component={CollegeLife} />
            <Route path="/explore" component={Explore} />
            <Route path="/contact" component={Contact} />
            <Route path="/test" component={Test} />
            <Route path="/notes" component={Notes} />
            <Route path="/" component={Home} />
          </Switch>
          <ConditionalFooter/>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
