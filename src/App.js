import React from 'react'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Music from './components/pages/Music'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div id='site-container'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/music' component={Music} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
