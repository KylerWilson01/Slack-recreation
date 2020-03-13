import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider, AuthRoute } from '../lib/Auth'

import HomePage from "./HomePage"
import Login from "./Login"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <Route path="/login" component={Login} />
        <AuthRoute exact path="/" component={HomePage} />
      </Router>
    </AuthProvider>
  )
}
