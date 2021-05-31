import React from 'react'
import './_base.scss'
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom'
import {useTransition,animated} from 'react-spring'
import Layout from './Layout/layout'
import Sidebar from './Layout/Sidebar';
import Home from './Pages/home/home'
import Explore from './Pages/explore'
import CollegeLife from './Pages/college-life'
import Contact from './Pages/contact'
import Test from "./Pages/test"

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Sidebar/>
        <Switch>
        <Route path='/phases-of-college-life' component={CollegeLife} />
        <Route path='/explore' component={Explore} />
        <Route path='/contact' component={Contact} />
        <Route path='/test' component={Test} />
        <Route path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
