/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './layout/main/Main';
import Signup from './components/Signup';
import Login from './pages/auth/login/login';
import Profile from './pages/Profile';
import Navbar from './components/shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" from="/" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
