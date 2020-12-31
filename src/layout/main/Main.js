/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import Navigation from '../components/navigation/navigation';
import './main.scss';
import Requests from '../../pages/requests/requests';
import Dashboard from '../../pages/dashboard/dashboard';
import { fetchCurrentUser } from '../../store/actions/current_user';
import { getUser, getUserError, getUserPending } from '../../store/reducers/user';
import Accommodations from '../../components/accommodations/Accomodations';
import SingleAccommodation from '../../components/accommodations/SingleAccommodation';

class Main extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <div>
        {/* <Navigation /> */}
        {this.props.user ? (
          <div className="container">
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/requests" component={Requests} />
            <Route exact path="/accommodations" component={Accommodations} />
            <Route path="/accommodations/:id" exact component={SingleAccommodation} />
          </div>
        ) : ''}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});
const mapStateToProps = (state) => ({
  error: getUserError(state),
  user: getUser(state),
  pending: getUserPending(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
