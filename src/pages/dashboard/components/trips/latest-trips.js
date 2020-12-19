import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SingleLatestTrip from './single-trip/single-latest-trip';
import './latest-trips.scss';
import Alert from '../../../../components/shared/alert/alert';

function LatestTrips({ trips, pending }) {
  return (
    <div>
      <h3 className="card-title">My latest trips</h3>
      <div className="card-body latest-trips">
        {pending
          ? (
            <>
              <Skeleton height={100} />
              <Skeleton height={100} />
            </>
          )
        // eslint-disable-next-line max-len
          : trips.length > 0 ? trips.map((t) => <SingleLatestTrip trip={t} key={t.id} />) : (<Alert type="danger">No trips</Alert>)}
      </div>
    </div>
  );
}

export default LatestTrips;
