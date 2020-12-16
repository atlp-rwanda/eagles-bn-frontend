/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FectchAccommodation } from '../../store/actions/accommadation';

class Request extends Component {
  constructor() {
    super();
    this.state = { };
  }

  componentDidMount() {
    this.props.FectchAccommodation();
  }

  render() {
    return (
      <div>
        {this.props.accommodations.map((accommodation) => (
          accommodation.name
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.Accommodation.loading,
  accommodations: state.Accommodation.accommodations,
  error: state.Accommodation.error,
});
export default connect(mapStateToProps, { FectchAccommodation })(Request);
