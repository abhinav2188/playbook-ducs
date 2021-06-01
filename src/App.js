import React from 'react'
import './_base.scss'
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom'
import {useTransition,animated} from 'react-spring'

import Layout from './Layout/layout'
import Home from './Pages/home/home'
import Explore from './Pages/explore'
import CollegeLife from './Pages/college-life'
import Contact from './Pages/contact'
import Test from "./Pages/test"
import UserProvider from './providers/UserProvider'

const App = () => {

  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Switch>
          <Route path='/phases-of-college-life' component={CollegeLife} />
          <Route path='/explore' component={Explore} />
          <Route path='/contact' component={Contact} />
          <Route path='/test' component={Test} />
          <Route path='/' component={Home} />
          </Switch>
        </Layout>
      </UserProvider>
    </BrowserRouter>
    
  );
}

export default App;
