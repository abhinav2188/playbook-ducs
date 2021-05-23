import React from 'react'
import './_base.scss'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './Layout/layout'
import Home from './Pages/home/home'
import Explore from './Pages/explore'

const App = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/explore' component={Explore} />
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
