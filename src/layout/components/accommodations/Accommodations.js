/* eslint-disable linebreak-style */
import React from 'react';
import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';

function Accommodations({ image, name, description,id }) {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="links">
          <Link to={`/accommodations/${id}`} className={"btn btn-primary view-detail"}>View Detail</Link>
     {/*     <a href={`/accommodations/${id}`} className="btn btn-primary view-detail">
          view detail
          </a>*/}

        </div>
      </div>
    </div>
  );
}

export default Accommodations;
