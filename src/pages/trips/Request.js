/* eslint-disable max-len */
/* eslint-disable camelcase */
import './Trip.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateTrip, FectchLocation, FectchAccommodation } from '../../store/actions/trip';

class Request extends Component {
  constructor() {
    super();
    this.state = {
      to: '',
      from: '',
      departure_date: '',
      return_date: '',
      reasons: '',
      accommodation_id: '',
      trip_type: '',
      name: '',
      email: '',
      passport: '',
      id_number: '',
      phone: '',
      gender: '',
      marital_status: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.FectchAccommodation();
    this.props.FectchLocation();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('=============== create props for state', this.state);
    this.props.CreateTrip(this.state);
  }

  render() {
    const {
      to, from, departure_date, return_date,
      reasons, accommodation_id, trip_type, name, email, passport,
      id_number, phone, gender, marital_status,
    } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="form-container">
          <div className="container">
            <div className="div-right">
              <div>
                <label>From:</label>
                <select name="from" onChange={this.onChange} value={from}>
                  <option defaultValue="DEFAULT">Select where you from</option>
                  {
                  this.props.trips.map((trip) => (
                    <option key={trip.id} value={trip.id}>{trip.code}</option>
                  ))
}
                </select>
              </div>
              <div>
                <label>Depart Date:</label>
                <input type="date" name="departure_date" onChange={this.onChange} value={departure_date} />
              </div>
              <br />
              <div>
                <label>Return Date:</label>
                <input type="date" name="return_date" onChange={this.onChange} value={return_date} />
              </div>
              <br />
              <div>
                <label>Reason:</label>
                <textarea name="reasons" onChange={this.onChange} value={reasons} />
              </div>
              <br />
              <div>
                <label>Email:</label>
                <input type="text" name="email" onChange={this.onChange} value={email} />
              </div>
              <br />
              <div>
                <label>Accommodation:</label>
                <select name="accommodation_id" onChange={this.onChange} value={accommodation_id}>
                  <option defaultValue="DEFAULT">Select Your Accommodation</option>
                  {this.props.accommodations.map((accommodation) => (
                    <option key={accommodation.id} value={accommodation.id}>
                      {accommodation.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Trip Type:</label>
                <select name="trip_type" onChange={this.onChange} value={trip_type}>
                  <option defaultValue="DEFAULT">Select your Trip Type</option>
                  <option value="oneWayTrip">one way trip</option>
                  <option value="returnTrip">return trip</option>
                </select>
              </div>
            </div>
            <div className="div-left">
              <div>
                <label>Destination:</label>
                <select name="to" onChange={this.onChange} value={to}>
                  <option defaultValue="DEFAULT">Select Your Destination</option>
                  {this.props.trips.map((trip) => (
                    <option key={trip.id} value={trip.id}>{trip.code}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.onChange} value={name} />
              </div>
              <div>
                <label>Passport:</label>
                <input type="text" name="passport" onChange={this.onChange} value={passport} />
              </div>
              <br />
              <div>
                <label>Identity Number:</label>
                <input type="text" name="id_number" onChange={this.onChange} value={id_number} />
              </div>
              <br />
              <div>
                <label>Tel:</label>
                <input type="text" name="phone" onChange={this.onChange} value={phone} />
              </div>
              <br />
              <div>
                <label>Gender:</label>
                <select name="gender" onChange={this.onChange} value={gender}>
                  <option defaultValue="DEFAULT">Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <br />
              <div>
                <label>Martual Status:</label>
                <select name="marital_status" onChange={this.onChange} value={marital_status}>
                  <option defaultValue="DEFAULT">Select your Marital Status</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
            </div>
            <br />
            <button type="submit" value="Submit">Submit Request</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.TripReducer.loading,
  trips: state.TripReducer.trips,
  error: state.TripReducer.error,
  loadingAccommoidation: state.Accommodation.loading,
  accommodations: state.Accommodation.accommodations,
  errorAccommoidation: state.Accommodation.error,
});
// const mapStateToProps = (dispatch) => ({
//   trips: () => dispatch(FectchLocation()),
// // });
// const mapDispatchToProps = (dispatch) => ({
//   createsTrips: (postdata) => dispatch(CreateTrip(postdata)),
//   FectchLocations: () => dispatch(FectchLocation()),
//   FectchAccommodations: () => dispatch(FectchAccommodation(dispatch)),
// });

export default connect(mapStateToProps, { CreateTrip, FectchLocation, FectchAccommodation })(Request);
