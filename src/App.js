import React from 'react'
import './_base.scss'
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom'
import {useTransition,animated, useSpring} from 'react-spring'
import Layout from './Layout/layout'
import Home from './Pages/home/home'
import Explore from './Pages/explore'
import CollegeLife from './Pages/college-life'
import Contact from './Pages/contact'
import Test from "./Pages/test"
import Notes from "./Pages/notes"
import UserProvider from './providers/UserProvider'

const AnimatedRoutes = (props) => {
  
  const styles = useSpring({
    from:{opacity:0},
    to :{opacity:1}
  });

  return (
    <animated.div style={styles}>
      {props.children}
    </animated.div>
  )


}

const App = () => {

  return (
    <BrowserRouter>
    <UserProvider>
    <div className="root">
    <Switch>
        <Route path='/explore' component={Explore} />
        <Route path='/college-life' component={CollegeLife} />
        <Route path='/explore' component={Explore} />
        <Route path='/contact' component={Contact} />
        <Route path='/test' component={Test} />
        <Route path='/notes' component={Notes} />
        <Route path='/' component={Home} />
      </Switch>

    </div>
      </UserProvider>
    </BrowserRouter>
    
  );
}

export default App;
