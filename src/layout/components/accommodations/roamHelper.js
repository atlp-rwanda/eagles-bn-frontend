/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import SingleRoom from './viewRoam';

export const enhanceRooms = (values) => {
  return values.map((room) => {
    return (
      <SingleRoom
        details={room.details}
        price={room.price}
        key={room.id}
        id={room.id}
        imagesurl={room.images}
      />
    );
  });
};
