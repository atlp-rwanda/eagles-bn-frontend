import React from 'react';
import './popular-accommodations.scss';
import Skeleton from 'react-loading-skeleton';
import SingleAccommodation from './single-accommodation/single-accommodation';

function PopularAccommodations({ accommodations, pending }) {
  return (
    <div>
      <h3 className="card-title">Popular accommodations</h3>
      <div className="card-body">
        <div className="popular-accommodations">
          {pending
            ? (
              <>
                <Skeleton height={100} />
                <Skeleton height={100} />
              </>
            )
            : accommodations.map((a) => <SingleAccommodation accommodation={a} key={a.id} />)}
        </div>
      </div>
    </div>
  );
}

export default PopularAccommodations;
