import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import Home from '../pages/Home'
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="/*" component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
