import React from 'react';
import './single-accommodation.scss';
import { Link } from 'react-router-dom';
import Badge from '../../../../../components/badge/badge';

function SingleAccommodation({ accommodation }) {
  return (
    <div className="single-popular-accommodation">
      <Link className="single-popular-accommodation__image" to={`/accommodations/${accommodation.id}`}>
        <img alt={accommodation.name} src={accommodation.images[0]} />
      </Link>
      <div className="single-popular-accommodation__details">
        <Link to={`/accommodations/${accommodation.id}`} className="single-popular-accommodation__details-title">
          {accommodation.name}
        </Link>
        <div className="single-popular-accommodation__details-description">
          {accommodation.description}
        </div>
        <div className="single-popular-accommodation__details-services">
          {accommodation.services.map((s) => (
              <Badge type="primary" key={s}>{s}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleAccommodation;
