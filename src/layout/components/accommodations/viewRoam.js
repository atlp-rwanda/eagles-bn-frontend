import React from 'react';
import { Link } from 'react-router-dom';
function ViewRoam({ price, details, imagesurl, id }) {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #111111',
    padding: '2rem',
  };
  const boxStyle = {
    padding: '2rem',
    background: ' rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  };
  const boardTitle = {
    fontWeight: '900',
  };
  return (
    <>
      <div className="roomcard" style={styles}>
        <div className="room-info" style={boxStyle}>
          <h4>
            <b style={boardTitle}>Price:</b> {price}RWF/Night
          </h4>
          <h4>
            <b style={boardTitle}>Details:</b> {details}
          </h4>
          <img
            src={imagesurl}
            style={{ width: '200px', objectFit: 'contain' }}
          />
        </div>
        <Link to={`/rooms/${id}/booking`}>Book Now</Link>
      </div>
    </>
  );
}

export default ViewRoam;
