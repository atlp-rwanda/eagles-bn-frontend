/* eslint-disable guard-for-in */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap-spinner';
import { fetchSingleAccommodation } from '../../store/accommodations/fetchAccommodation';
import Gallery from './accommodationImage';
import Amenities from '../../layout/components/accommodations/viewServices';
import { enhanceRooms } from '../../layout/components/accommodations/roamHelper';
import { mapStateToProps } from './mapStateToProps';
import jwt_decode from 'jwt-decode';
import {
  deleteAccommodation,
  editAccommodation,
  fetchLocation,
} from '../../store/accommodations/accommodationActions';
import { createRoom } from '../../store/rooms/room';
import { toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// eslint-disable-next-line react/prefer-stateless-function
class Accomodations extends Component {
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
      price: '',
      details: '',
      roomImages: '',
    };
    this.displayButton = this.displayButton.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getAccommodation = this.getAccommodation.bind(this);
    this.submitRoom = this.submitRoom.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const { id } = this.props.accommodation;
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
    this.props.editAccommodationAction(id, formData);
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
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const {
      match: {
        params: { id },
      },
      getOneAccommodation,
      accommodation,
    } = this.props;
    getOneAccommodation(id);
    this.props.fetchLocationAction();
    this.getAccommodation(accommodation);
  }
  onDelete(id) {
    const { deleteAccommodationAction } = this.props;
    deleteAccommodationAction(id);
    window.location.replace('/accommodations');
  }
  submitRoom(e) {
    e.preventDefault();
    const { accommodation } = this.props;
    console.log('accommodations: ', accommodation);
    const formData = new FormData();
    formData.append('price', this.state.price);
    formData.append('details', this.state.details);
    if (this.state.roomImages) {
      formData.append('images', this.state.roomImages);
    }
    this.props.createRoomAction(accommodation.id, formData);
  }
  displayButton() {
    const buttonStyle = { display: 'flex', paddingTop: '10px' };
    const { accommodation, locations } = this.props;

    const allowedRoles = ['admin', 'manager', 'requester', 'super-admin'];
    const token = localStorage.getItem('token');
    if (token) {
      const {
        payload: { role, id },
      } = jwt_decode(token);
      if (allowedRoles.includes(role)) {
        if (role === 'requester') {
          return <div></div>;
        }
        if (role === 'manager' && id === accommodation.host_id) {
          return (
            <div style={buttonStyle}>
              <Popup
                trigger={
                  <div>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.getAccommodation(accommodation)}
                    >
                      Edit
                    </button>
                  </div>
                }
                modal
              >
                {(close) => (
                  <div className="model form-container">
                    <button
                      className="button"
                      onClick={() => {
                        window.location.replace(
                          `/accommodations/${accommodation.id}`
                        );
                        close();
                      }}
                    >
                      &times;
                    </button>
                    <div className="header">
                      <h2>Edit accommodation</h2>
                    </div>
                    <div className="content">
                      <form className="form-group" onSubmit={this.handleSubmit}>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Name"
                          name="name"
                          onChange={this.handleChange}
                          value={this.state.name}
                        />
                        <textarea
                          className="form-input"
                          type="text"
                          placeholder="Description"
                          name="description"
                          onChange={this.handleChange}
                          value={this.state.description}
                        />
                        <input
                          className="form-input"
                          type="file"
                          multiple
                          id="images"
                          onChange={this.imageChange}
                          value={this.state.image}
                        />
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Latitude"
                          name="lat"
                          onChange={this.handleChange}
                          value={this.state.lat}
                        />
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Longitude"
                          name="long"
                          onChange={this.handleChange}
                          value={this.state.long}
                        />
                        <select
                          onChange={this.handleChange}
                          required
                          className="form-input"
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
                          value={this.state.amenities}
                        />
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Services like breakfast (Separate with a comma)"
                          name="services"
                          onChange={this.handleChange}
                          value={this.state.services}
                        />
                        <button type="submit" className="btn btn-primary">
                          {' '}
                          Update
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </Popup>
              <Popup
                trigger={
                  <div>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: '10px' }}
                    >
                      Delete
                    </button>
                  </div>
                }
                modal
              >
                <p>
                  Are you sure you want to delete{' '}
                  <span
                    style={{ color: 'green' }}
                  >{`${accommodation.name}`}</span>{' '}
                  ?<p>You can click outside the box to cancel this action</p>{' '}
                </p>
                <p>Note: This action can not be undo!</p>
                <button
                  className="btn btn-danger"
                  onClick={() => this.onDelete(accommodation.id)}
                >
                  {' '}
                  Confirm{' '}
                </button>
              </Popup>
              <Popup
                trigger={
                  <div>
                    <button
                      className="btn btn-primary"
                      style={{ marginLeft: '10px' }}
                    >
                      Create Room
                    </button>
                  </div>
                }
                modal
              >
                {(close) => (
                  <div className="model form-container">
                    <button
                      className="button"
                      onClick={() => {
                        window.location.replace(
                          `/accommodations/${accommodation.id}`
                        );
                        close();
                      }}
                    >
                      &times;
                    </button>
                    <div className="header">
                      <h2>Create Room</h2>
                    </div>
                    <div className="content">
                      <form className="form-group" onSubmit={this.submitRoom}>
                        <input
                          className="form-input"
                          placeholder="Room price"
                          onChange={this.handleChange}
                          name="price"
                        />
                        <input
                          className="form-input"
                          placeholder="Room detail"
                          onChange={this.handleChange}
                          name="details"
                        />
                        <input
                          className="form-input"
                          type="file"
                          multiple
                          id="roomImages"
                          onChange={this.imageChange}
                        />
                        <button type="submit" className="btn btn-primary">
                          Add Room
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          );
        }
      }
    }
    return <div></div>;
  }
  getAccommodation(fetching) {
    if (fetching) {
      this.setState({ name: fetching.name });
      this.setState({ description: fetching.description });
      this.setState({ images: fetching.image });
      this.setState({ location_id: fetching.location_id });
      this.setState({ lat: fetching.lat });
      this.setState({ long: fetching.long });
      this.setState({ amenities: fetching.amenities });
      this.setState({ services: fetching.services });
    }
  }
  componentDidUpdate(prevProps) {
    const { updateError, message, createRoom, createRoomError } = this.props;
    if (
      updateError !== prevProps.error ||
      message !== prevProps.message ||
      createRoom !== prevProps.room ||
      createRoomError !== prevProps.error
    ) {
      if (updateError) {
        return toast.error(updateError);
      }
      if (message) {
        return toast.success(message);
      }
      if (createRoom) {
        return toast.success(createRoom);
      }
      if (createRoomError) {
        return toast.error(createRoomError);
      }
    }
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
    const { accommodation, error, pending } = this.props;
    if (pending) return <Spinner type="border" color="danger" size="5rem" />;
    const acc = accommodation;
    let description,
      amenity = [],
      service = [],
      room;
    if (Object.keys(acc).length !== 0 && acc.constructor === Object) {
      const allRoams = acc.rooms;
      room = enhanceRooms(allRoams);
      amenity = acc.amenities;
      service = acc.services;
      description = acc.description;
    }
    return (
      <div className="details">
        {error ? (
          <p style={errorStyle}> {error.message}</p>
        ) : (
          <div className="single-container">
            <div className="acc">
              <h1>{acc.name}</h1>
              <Gallery imageUrl={acc.images} />
              <p style={{ lineHeight: '1.2', padding: '1rem 0' }}>
                {description}
              </p>
              <hr />
              <div className="amenser">
                {' '}
                <Amenities amenities={amenity} services={service} />
              </div>
              <hr />
              <div className="rooms">
                <h1>Rooms Available</h1>
                <div>
                  {room?.length > 0 ? (
                    <div>{room}</div>
                  ) : (
                    <p>No rooms available for now!</p>
                  )}
                </div>{' '}
              </div>
              <p>{this.displayButton()}</p>
            </div>{' '}
            <div></div>
          </div>
        )}
      </div>
    );
  }
}
// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch) => ({
  getOneAccommodation: (accommodationId) =>
    dispatch(fetchSingleAccommodation(accommodationId)),
  deleteAccommodationAction: (id) => dispatch(deleteAccommodation(id)),
  editAccommodationAction: (accommodationId, data) =>
    dispatch(editAccommodation(accommodationId, data)),
  fetchLocationAction: () => dispatch(fetchLocation()),
  createRoomAction: (id, data) => dispatch(createRoom(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accomodations);
