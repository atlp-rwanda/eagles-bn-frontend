import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/pages/login';
import './App.scss';

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navbar">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">login</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}
