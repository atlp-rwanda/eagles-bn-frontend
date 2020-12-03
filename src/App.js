/* eslint-disable linebreak-style */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/pages/login';
import { increment } from './redux/actions';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
          <h1>Barefoot Nomad</h1>
          <h2>
            counter:
            {counter}
          </h2>
          {/* eslint-disable-next-line react/button-has-type */ }
          <button
            onClick={() => dispatch(increment())}
            style={{
              color: 'white', padding: '5px', textAlign: 'center', backgroundColor: 'brown',
            }}
          >
            Increment
          </button>
        </header>
      </div>
    </Router>
  );
}
