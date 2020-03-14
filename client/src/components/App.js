import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider, AuthRoute } from '../lib/Auth'

import HomePage from "./HomePage"
import Login from "./Login"
import Register from "./Register"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <AuthRoute exact path="/" component={HomePage} />
      </Router>
    </AuthProvider>
  )
}
