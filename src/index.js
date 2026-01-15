import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PayAllowancesExplainers from './views/pay-allowances-explainers'
import Home from './views/home'
import HealthcareTRICARE from './views/healthcare-tricare'
import PCSHousing from './views/pcs-housing'
import RetirementBenefits from './views/retirement-benefits'
import DELETETEST from './views/delete-test'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={PayAllowancesExplainers}
          exact
          path="/pay-allowances-explainers"
        />
        <Route component={Home} exact path="/" />
        <Route component={HealthcareTRICARE} exact path="/healthcare-tricare" />
        <Route component={PCSHousing} exact path="/pcs-housing" />
        <Route
          component={RetirementBenefits}
          exact
          path="/retirement-benefits"
        />
        <Route component={DELETETEST} exact path="/delete-test" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
