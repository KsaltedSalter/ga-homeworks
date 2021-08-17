import React, { useState } from 'react'
//import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Buzzwords from './sections/Buzzwords'
import Nats from './sections/Nats'
import Profile from './sections/Profile'
import './App.css'

function App() {
  const [selectedUser, setSelectedUser] = useState('')

  

  return (
    <div className="App">
      <Router>
      <Header />
      <main>
        <Switch>
        <Route exact path='/buzzwords'>
        <Buzzwords />
        </Route>
        <Route exact path='/nats'>
        <Nats handleUserClick={setSelectedUser} />
        </Route>
        <Route exact path='/profile/:username'>
        <Profile username={selectedUser} />
        </Route>
        </Switch>
      </main>
      </Router>
    </div>
  )
}

export default App

//function BlogPost() {
//  let { slug } = useParams();
//  return <div>Now showing post {slug}</div>;
//}
//
//ReactDOM.render(
//  <Router>
//    <Switch>
//      <Route exact path="/">
//        <HomePage />
//      </Route>
//      <Route path="/blog/:slug">
//        <BlogPost />
//      </Route>
//    </Switch>
//  </Router>,
//  node
//);

//ReactDOM.render(
//  <Router>
//    <div>
//      <Route exact path="/">
//        <Home />
//      </Route>
//      <Route path="/news">
//        <NewsFeed />
//      </Route>
//    </div>
//  </Router>,
//  node
//);