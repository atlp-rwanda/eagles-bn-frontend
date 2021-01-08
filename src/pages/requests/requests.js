import React, { Component } from 'react';
import './requests.scss';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { FormInput } from '../../components/form/input/input';
import { FormSelect } from '../../components/form/select/select';
import RequestsTable from './requests-table';
import fetchRequests from '../../store/actions/requests';
import { updateTripStatus } from '../../store/tripStatus/actions';
import { getRequests, getRequestsError, getRequestsPending } from '../../store/reducers/requests';
import { getUser } from '../../store/reducers/user';

class Requests extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchRequests();
  }
  render() {
    return (
      <div className="card">
        <div className="card-header requests-card">
          <h3>Trip Requests</h3>
          <a href="#" className="btn btn-primary btn-sm">Request trip</a>
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
            <RequestsTable requests={this.props.requests} user={this.props.user} 
            updateTripStatus={this.props.updateTripStatus}fetchRequests={this.props.fetchRequests}
            tripStatusMessage={this.props.tripStatusMessage} tripStatusError={this.props.tripStatusError}
            isLoading={this.props.isLoading}
           />}
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchRequests: () => dispatch(fetchRequests()),
// });
const mapStateToProps = (state) => ({
  error: getRequestsError(state),
  requests: getRequests(state),
  pending: getRequestsPending(state),
  user: getUser(state),
  isLoading:state.tripStatusReducer.isLoading,
  tripStatusError:state.tripStatusReducer.error,
  tripStatusMessage:state.tripStatusReducer.message,
  // trip : state.bussinessReducer.businesses.find(business =>(business.id === Number(id))),
});
export default connect(mapStateToProps, {fetchRequests,updateTripStatus})(Requests);
