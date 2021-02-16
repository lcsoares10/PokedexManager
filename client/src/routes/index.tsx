import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Error404 from '../pages/error404'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
