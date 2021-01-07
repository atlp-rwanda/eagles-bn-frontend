import React from 'react';

export const handleDisplay = (values) => {
  const items = [];
  values.map((item) => {
    items.push(<li key={item}>{item}</li>);
  });

  return items;
};

const viewServices = ({ amenities, services }) => {
  return (
    <>
      <div className="amenities">
        <h4>Amenities</h4>
        <ol>{handleDisplay(amenities)}</ol>
      </div>
      <div className="services">
        <h4>Services</h4>
        <ol>{handleDisplay(services)}</ol>
      </div>
    </>
  );
};
export default viewServices;
