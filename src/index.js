import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Login from './components/Login'
import NotFound from './components/NotFound'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={ Login }/>
      <Route path='/user/:username' component={ App }/>
      <Route component={ NotFound }/>
    </Switch>
  </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'))
