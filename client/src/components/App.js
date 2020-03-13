import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from "./HomePage"

export default props => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  )
}
