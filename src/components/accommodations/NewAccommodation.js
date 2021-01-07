import React, { Component } from 'react';
import { createAccommodation } from '../../store/accommodations/accommodationActions';
import { connect } from 'react-redux';
import '../../layout/components/accommodations/CreateAccommodation.scss';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchLocation } from '../../store/accommodations/accommodationActions';
import { accommodation } from './mapStateToProps';

class NewAccommodation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      images: '',
      lat: '',
      long: '',
      location_id: '',
      services: [],
      amenities: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { error, message } = this.props;
    const amenities = this.state.amenities.toString().split(',');
    const services = this.state.services.toString().split(',');
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    if (this.state.images) {
      formData.append('images', this.state.images);
    }
    formData.append('lat', this.state.lat);
    formData.append('long', this.state.long);
    formData.append('location_id', this.state.location_id);

    amenities.forEach((amenity) => {
      formData.append('amenities', amenity);
    });
    services.forEach((service) => {
      formData.append('services', service);
    });
    this.props.newAccommodation(formData);
    if (error) toast.error(error);
    if (message) {
      e.target.reset();
      return toast.success(message);
    }
  }
  componentDidMount() {
    this.props.fetchLocationAction();
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error || message !== prevProps.message) {
      if (error) {
        return toast.error(error);
      }
      if (message) {
        return toast.success(message);
      }
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  imageChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
    if (event.target.files) {
      this.setState({
        [event.target.id]: event.target.files[0],
      });
    }
  }

  render() {
    const { locations } = this.props;
    console.log('locationsssssssss', locations);
    return (
      <div className="form-container">
        <div className="header">
          <h2>New Accommodation</h2>
        </div>
        <div className="content">
          <form className="form-group" onSubmit={this.handleSubmit} ref="form">
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
            <textarea
              className="form-input"
              type="text"
              placeholder="Description"
              name="description"
              onChange={this.handleChange}
            />
            <input
              className="form-input"
              type="file"
              multiple
              id="images"
              onChange={this.imageChange}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Latitude"
              name="lat"
              onChange={this.handleChange}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Longitude"
              name="long"
              onChange={this.handleChange}
            />
            <select
              className="form-input"
              onChange={this.handleChange}
              required
              name="location_id"
            >
              <option>Select Location...</option>
              {locations.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            <input
              className="form-input"
              type="text"
              placeholder="Amenities such as Wifi, Loundry(Separate with a comma)"
              name="amenities"
              onChange={this.handleChange}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Services like breakfast (Separate with a comma)"
              name="services"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="accommodationButton btn btn-primary"
            >
              Add Accommodation
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = ({ accommodation }) => ({
//   pending: accommodation.pending,
//   error: accommodation.error,
//   accommodations: accommodation.accommodations,
//   message: accommodation.message,
// });

const mapDispatchToProps = (dispatch) => ({
  newAccommodation: (data) => dispatch(createAccommodation(data)),
  fetchLocationAction: () => dispatch(fetchLocation()),
});
export default connect(accommodation, mapDispatchToProps)(NewAccommodation);
