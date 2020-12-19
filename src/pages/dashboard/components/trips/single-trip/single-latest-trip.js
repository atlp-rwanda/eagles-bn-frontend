import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../../../../components/badge/badge';
import './single-latest-trip.scss';

function SingleLatestTrip({ trip }) {
  return (
    <div className="single-latest-trip">
      <h4>
        {trip.departure.name}
        ,
        {' '}
        {trip.trip_type}
      </h4>
      <p>
        {trip.reasons}
      </p>
      <Link to={`/accommodations/${trip.Accommodation.id}`}>{trip.Accommodation.name}</Link>
      <div className="single-latest-trip__footer">
        <span className="single-latest-trip__footer-date">Departure date: {new Date(trip.departure_date).toDateString()}</span>
        <Badge
          type={(trip.status).toLowerCase() === 'approved' ? 'success'
            : ((trip.status).toLowerCase() === 'rejected' ? 'danger' : 'primary')}
        >
          {trip.status}
        </Badge>
      </div>
    </div>
  );
}

export default SingleLatestTrip;
