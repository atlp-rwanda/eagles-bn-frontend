/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap-spinner';
import jwt_decode from 'jwt-decode';
import { fetchAllAccommodations } from '../../store/accommodations/fetchAccommodation';
import AccommodationsView from '../../layout/components/accommodations/Accommodations';
import '../../layout/components/accommodations/Accommodations.scss';
import { mapStateToProps } from './mapStateToProps';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Accomodations extends Component {
  constructor() {
    super();
    this.displayButton = this.displayButton.bind(this);
  }
  componentDidMount() {
    const { getAllAccommodations } = this.props;
    getAllAccommodations();
  }
  displayButton() {
    const allowedRoles = ['admin', 'super-admin', 'manager', 'requester'];
    const token = localStorage.getItem('token');
    if (token) {
      const {
        payload: { role },
      } = jwt_decode(token);
      if (allowedRoles.includes(role)) {
        if (role === 'requester') {
          return <div></div>;
        }
        if (role === 'manager') {
          return (
            <Link to="/accommodations/create">
              <span className="btn btn-primary">Create Accommodation</span>
            </Link>
          );
        }
      }
    }
    return <div></div>;
  }
  render() {
    const errorStyle = {
      fontSize: '3rem',
      textAlign: 'center',
      textTransform: 'capitalize',
      padding: '7rem',
      backgroundColor: '#3182CE',
      color: 'white',
    };
    const { accommodations, error, pending } = this.props;
    if (pending) return <Spinner animation="border" variant="danger" />;
    return (
      <div className="accommodations-wrapper">
        <div></div>
        {error && (
          <p className="accommodations-fetch-error" style={errorStyle}>
            {error.message}
          </p>
        )}
        <h1 style={{ marginBottom: '1rem' }}>{this.displayButton()}</h1>
        {/* <CreateAccommodation /> */}
        {accommodations?.map((accommodation) => (
          <div key={accommodation.id}>
            <AccommodationsView
              image={accommodation.images[0]}
              name={accommodation.name}
              description={accommodation.description}
              id={accommodation.id}
            />
          </div>
        ))}
        <div></div>
      </div>
    );
  }
}
// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch) => ({
  getAllAccommodations: () => dispatch(fetchAllAccommodations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accomodations);
