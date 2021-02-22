import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import Pokemon from '../pages/Pokemon'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:name" component={Pokemon} />
        <Route path="/myPokedex" component={Pokedex} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="/*" component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
