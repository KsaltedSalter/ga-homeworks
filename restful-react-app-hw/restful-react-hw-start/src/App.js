import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/common/Home'
import NavBar from './components/common/NavBar'
import WineList from './components/wines/WineList'
import WineShow from './components/wines/WineShow'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wines/:id" component={WineShow} />
        <Route path="/wines" component={WineList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
