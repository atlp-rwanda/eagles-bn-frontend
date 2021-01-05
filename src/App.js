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
import Logout from './pages/auth/Logout';
import Login from './pages/auth/login/login';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/login" from="/" />}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Logout} />
          <Route component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
