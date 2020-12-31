/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap-spinner';
import {fetchAllAccommodations} from '../../store/accommodations/fetchAccommodation';
import AccommodationsView from '../../layout/components/accommodations/Accommodations';
import '../../layout/components/accommodations/Accommodations.scss';
import {mapStateToProps} from './mapStateToProps'

// eslint-disable-next-line react/prefer-stateless-function
class Accomodations extends Component {
  componentDidMount() {
    const { getAllAccommodations } = this.props;
    getAllAccommodations();
  }

  render() {
    const errorStyle = {
      fontSize: '3rem', textAlign: 'center', textTransform: 'capitalize', padding: '7rem', backgroundColor: '#3182CE', color: 'white',
    };
    const { accommodations, error, pending } = this.props;
    if (pending) return <Spinner animation="border" variant="danger" />;
    return (
      <div className="accommodations-wrapper">
        <div></div>
        {error && (
        <p
          className="accommodations-fetch-error"
          style={errorStyle}
        >
          { error.message}
        </p>
        )}

        {
            accommodations.map((accommodation) => (
              <div key={accommodation.id}>
                <AccommodationsView image={accommodation.images[0]} name={accommodation.name} description={accommodation.description} id={accommodation.id} />
              </div>
            ))
}
<div></div>
      </div>
    );
  }
}
// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch) => ({ getAllAccommodations: () => dispatch(fetchAllAccommodations()) });

export default connect(mapStateToProps, mapDispatchToProps)(Accomodations);
