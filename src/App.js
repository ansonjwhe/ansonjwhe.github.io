import React from 'react'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Music from './components/pages/Music'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function App() {
  const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }
  return (
    <div id='site-container'>
      <BrowserRouter onUpdate={hashLinkScroll}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/music' component={Music} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}