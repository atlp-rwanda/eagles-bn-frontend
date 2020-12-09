/* eslint-disable import/no-named-as-default */
/* eslint-disable linebreak-style */
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
import 'react-toastify/dist/ReactToastify.css';
import RoleSettings from './pages/roles/users_fetching'

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
          <Route exact path="/roles" component={RoleSettings}/>
          <Route component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
