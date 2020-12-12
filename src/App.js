import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './layout/main/Main';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line import/no-named-as-default
import Signup from './components/Signup';
// eslint-disable-next-line import/no-named-as-default
import Login from './pages/auth/login/login';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ToastContainer />
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/login" from="/" />)} />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route>
              <Main />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}
