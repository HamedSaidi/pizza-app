import React, { Suspense } from 'react'
import { Router, Route, Switch } from "react-router-dom"

import { AddressPage, ListPage, PaymentPage, DonePage } from './pages'
import '../App.css'
import { history } from '../store'

const App = () => {
  return (
    <div className="App">
      <main className="App-main">
          <Router history={history}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={AddressPage} />
                <Route exact path="/list" component={ListPage} />
                <Route exact path="/payment" component={PaymentPage} />
                <Route exact path="/done" component={DonePage} />
              </Switch>
            </Suspense>
          </Router>
      </main>
    </div>
  )
}

// <ConnectedRouter history={history}>
// </ConnectedRouter>
export default App
