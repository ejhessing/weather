import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import Tips from './components/Tips'


document.addEventListener('DOMContentLoaded', () => {
  render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/tips' component={Tips} />
      </Router>
    ),
    document.getElementById('app')
  )
})
