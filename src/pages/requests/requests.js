import React, { Component } from 'react';
import './requests.scss';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { FormInput } from '../../components/form/input/input';
import { FormSelect } from '../../components/form/select/select';
import RequestsTable from './requests-table';
import fetchRequests from '../../store/actions/requests';
import { getRequests, getRequestsError, getRequestsPending } from '../../store/reducers/requests';
import { getUser } from '../../store/reducers/user';
import TripRequest from './trip-request';

class Requests extends Component {
  componentDidMount() {
    this.props.fetchRequests();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header requests-card">
          <h3>Trip Requests</h3>
          <a href="#" className="btn btn-primary btn-sm">Request</a>
        </div>
        <div className="card-body">
          <form className="requests-card__form">
            <div className="requests-card__form-input">
              <FormInput type="date" label="Departure Date"/>
            </div>
            <div className="requests-card__form-input">
              <FormInput type="date" label="Return Date"/>
            </div>
            <div className="requests-card__form-input">
              <FormSelect options={['One way trip', 'Two way trip']} label="Trip type"/>
            </div>
            <div className="requests-card__form-input">
              <FormSelect options={['Rejected', 'Approved']} label="Status"/>
            </div>
            <div className="requests-card__form-input">
              <label>&nbsp;</label>
              <button type="submit" className="btn btn-primary btn-block">Filter</button>
            </div>
          </form>

          {this.props.pending ? <Skeleton count={20} height={40}/> :
            <RequestsTable requests={this.props.requests} user={this.props.user}/>}
        </div>
        <TripRequest />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRequests: () => dispatch(fetchRequests()),
});
const mapStateToProps = (state) => ({
  error: getRequestsError(state),
  requests: getRequests(state),
  pending: getRequestsPending(state),
  user: getUser(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Requests);
