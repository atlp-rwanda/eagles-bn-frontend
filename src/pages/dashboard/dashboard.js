/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <h2>
        This is the dashboard
      </h2>
      <Link to="/requests">Go to requests</Link>
      <Link to="/accommodations">View Accommodations</Link>
    </>
  );
}
