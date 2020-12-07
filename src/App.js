/* eslint-disable linebreak-style */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from "./pages/auth/login/login";
import Dashboard from "./pages/dashboard";

export default function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/login" from="/"/>)}  />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

