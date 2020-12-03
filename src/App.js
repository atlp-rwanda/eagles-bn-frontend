import React from 'react';
import './App.css';
import Login from './components/pages/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <ul className="navbar">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li >
          <li className="nav-item">
            <Link to="/login">login</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route path="/">  
          </Route>
        </Switch>
        <h1>Barefoot Nomad</h1>
        </header>
      </div>
    </Router>
  );
}

