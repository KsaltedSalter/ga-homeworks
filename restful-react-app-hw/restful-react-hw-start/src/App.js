import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/common/Home'
import NavBar from './components/common/NavBar'
import WineEdit from './components/wines/WineEdit'
import WineList from './components/wines/WineList'
import WineNew from './components/wines/WineNew'
import WineShow from './components/wines/WineShow'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wines/:id/edit" component={WineEdit} />
        <Route path="/wines/:id" component={WineShow} />
        <Route path="/wines" component={WineList} />
        <Route path="/new" component={WineNew} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
