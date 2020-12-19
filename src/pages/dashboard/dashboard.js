/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './dashboard.scss';
import { connect } from 'react-redux';
import {
  getRequesterDashboard,
  getRequesterDashboardError,
  getRequesterDashboardPending,
} from '../../store/reducers/requester-dashboard';
import fetchRequesterDashboard from '../../store/actions/requester-dashboard';
import DashboardCard from './components/dashboard-card/dashboard-card';
import PopularAccommodations from './components/accommodations/popular-accommodations';
import fetchPopularAccommodation from '../../store/actions/popular-accommodations';
import { getPopularAccommodations, getPopularAccommodationsPending } from '../../store/reducers/popular-accommodations';
import LatestTrips from './components/trips/latest-trips';
import { getLatestTrips, getLatestTripsPending } from '../../store/reducers/latest-trips';
import fetchLatestTrips from '../../store/actions/latest-trips';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchDashboard();
    this.props.fetchAccommodations();
    this.props.fetchTrips();
  }

  render() {
    return (
      <div className="cards-container">
        <div className="dashboard">
          <h3 className="dashboard-title">Dashboard</h3>
          <div className="dashboard-cards">
            <DashboardCard
              title="Available accommodations"
              value={`${this.props.dashboard.accommodations} Accommodations`}
              image="https://img.icons8.com/officel/60/000000/5-star-hotel.png"
              pending={this.props.dashboardPending}
            />
            <DashboardCard
              title="My trips"
              value={`${this.props.dashboard.trips} trips`}
              image="https://img.icons8.com/nolan/80/airplane-take-off.png"
              pending={this.props.dashboardPending}
            />
            <DashboardCard
              title="Pending Bookings"
              value={`${this.props.dashboard.pendingBookings} bookings`}
              image="https://img.icons8.com/ultraviolet/65/000000/booking.png"
              pending={this.props.dashboardPending}
            />
            <DashboardCard
              title="Total bookings"
              value={`${this.props.dashboard.bookings} bookings`}
              image="https://img.icons8.com/dotty/64/26e07f/booking.png"
              pending={this.props.dashboardPending}
            />
          </div>
        </div>
        <div className="card dashboard-lists">
          <PopularAccommodations
            pending={this.props.accommodationsPending}
            accommodations={this.props.accommodations}
          />
          <LatestTrips pending={this.props.tripsPending} trips={this.props.trips} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDashboard: () => dispatch(fetchRequesterDashboard()),
  fetchAccommodations: () => dispatch(fetchPopularAccommodation()),
  fetchTrips: () => dispatch(fetchLatestTrips()),
});
const mapStateToProps = (state) => ({
  error: getRequesterDashboardError(state),
  dashboard: getRequesterDashboard(state),
  dashboardPending: getRequesterDashboardPending(state),
  accommodations: getPopularAccommodations(state),
  accommodationsPending: getPopularAccommodationsPending(state),
  trips: getLatestTrips(state),
  tripsPending: getLatestTripsPending(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
