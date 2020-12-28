/* eslint-disable guard-for-in */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap-spinner';
import {fetchSingleAccommodation} from '../../store/accommodations/fetchAccommodation';
import Gallery from './accommodationImage';
import Amenities from '../../layout/components/accommodations/viewServices';
import {enhanceRooms} from '../../layout/components/accommodations/roamHelper';
import {mapStateToProps} from './mapStateToProps'

// eslint-disable-next-line react/prefer-stateless-function
class Accomodations extends Component {
  
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { match: { params: { id } }, getOneAccommodation } = this.props;
    getOneAccommodation(id);
  }

  render() {
    const errorStyle = { fontSize: '3rem', textAlign: 'center', textTransform: 'capitalize', padding: '7rem', backgroundColor: '#3182CE', color: 'white',};
    const { accommodation, error, pending } = this.props;
    if (pending) return <Spinner type="border" color="danger" size="5rem" />;
    const acc = accommodation;
    let description, amenity = [], service = [], roam;
    if (Object.keys(acc).length !== 0 && acc.constructor === Object) {
      const allRoams = acc.rooms
      roam = enhanceRooms(allRoams)
      amenity = acc.amenities;
      service = acc.services;
      description = acc.description;
    }
    return (
      <div className="details">{error && ( <p style={errorStyle}> { error.message}</p>)}
        <div className='single-container'>
          <div className="acc"><h1>{acc.name}</h1><Gallery imageUrl={acc.images} /><p style={{ lineHeight: '1.2', padding: '1rem 0'}}>{description}</p>
            <hr />
            <div className="amenser"> <Amenities amenities={amenity} services={service}/></div><hr />
            <div className="rooms"><h1>Rooms Available</h1><div>{roam}</div> </div>
          </div> <div><h1 style={{color: 'red'}}>Another staff goes here. feel free to remove this h1</h1></div>
        </div>
      </div>); }
}
// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch) => ({ getOneAccommodation: (accommodationId) => dispatch(fetchSingleAccommodation(accommodationId)) });

export default connect(mapStateToProps, mapDispatchToProps)(Accomodations);
