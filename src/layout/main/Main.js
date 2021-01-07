/* eslint-disable react/forbid-prop-types */
/* eslint-disable linebreak-style */
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './main.scss';
import Profile from '../../pages/Profile';
import Navbar from '../../components/shared/Navbar';
import Requests from '../../pages/requests/requests';
import Dashboard from '../../pages/dashboard/dashboard';
import {
  getUser,
  getUserError,
  getUserPending,
} from '../../store/reducers/user';
import { fetchCurrentUser } from '../../store/actions/current_user';
import {
  getUser,
  getUserError,
  getUserPending,
} from '../../store/reducers/user';
import Accommodations from '../../components/accommodations/Accomodations';
import SingleAccommodation from '../../components/accommodations/SingleAccommodation';
import Booking from '../../components/booking/booking';

class Main extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchCurrentUser();
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Navbar />
        {user ? (
          <div className="container">
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/requests" component={Requests} />
            <Route exact path="/accommodations" component={Accommodations} />
            <Route exact path="/accommodations/:id" component={SingleAccommodation} />
            <Route exact path="/rooms/:id/booking" component={Booking} />
          </div>
        ) : null}
      </>
    );
  }
}

Main.propTypes = {
  fetchCurrentUser: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});

const mapStateToProps = (state) => ({
  error: getUserError(state),
  user: getUser(state),
  pending: getUserPending(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
