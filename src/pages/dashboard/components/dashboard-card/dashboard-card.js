import React from 'react';
import './dashboard-card.scss';
import Skeleton from 'react-loading-skeleton';

function DashboardCard({
  image, value, title, pending,
}) {
  return (
    <div className="dashboard-card">
      <img src={image} alt={title} />
      <h4>
        {pending ? <Skeleton width={250} /> : value}
      </h4>
      <p>
        {title}
      </p>
    </div>
  );
}
export default DashboardCard;
