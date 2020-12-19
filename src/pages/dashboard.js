import React from 'react';
import './trips/Trip.scss';
import {
  BrowserRouter as Router, Route, Link,
} from 'react-router-dom';
import Header from './layout/header';
import Request from './trips/Request';

export default function Dashboard() {
  return (
    <Router>
      <div>
        <Header />
        This is the dashboard
        <Link to="/request">
          <button
            type="submit"
            value="Submit"
            className="reqwesting"
          >
            {' '}
            Go To Your Request
          </button>
        </Link>
        <Route path="/request" exact component={Request} />
      </div>
    </Router>
  );
}
