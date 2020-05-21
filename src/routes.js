import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MainLayout } from './components'
import Home from './pages/home/Home'

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
