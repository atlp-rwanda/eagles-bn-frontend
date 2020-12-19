/* eslint-disable max-len */
import axios from 'axios';
import {
  REQUEST_TRIP,
  REQUEST_TRIP_SUCCESS,
  REQUEST_TRIP_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_FAIL,
  FETCH_LOCATION_SUCCESS,
  FETCH_ACCOMMODATION_REQUEST,
  FETCH_ACCOMMODATION_FAIL,
  FETCH_ACCOMMODATION_SUCCESS,
} from '../action-types/action_types';

export const fetchlocationRequest = () => ({
  type: FETCH_LOCATION_REQUEST,
});
export const fetchLocationFail = (error) => ({
  type: FETCH_LOCATION_FAIL,
  payload: error,
});
export const fetchLocationsuccess = (data) => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: data,
});
export const creatTripRequest = () => ({
  type: REQUEST_TRIP,
});
const creatTripSuccess = (trip) => ({
  type: REQUEST_TRIP_SUCCESS,
  payload: trip,
});
const creatTripFail = (tripError) => ({
  type: REQUEST_TRIP_ERROR,
  payload: tripError,
});

export const fetchaccommodationRequest = () => ({
  type: FETCH_ACCOMMODATION_REQUEST,
});
export const fetchaccommodationFail = (error) => ({
  type: FETCH_ACCOMMODATION_FAIL,
  payload: error,
});
export const fetchaccommodationsuccess = (data) => ({
  type: FETCH_ACCOMMODATION_SUCCESS,
  payload: data,
});

export const CreateTrip = (postdata) => (dispatch) => {
  const config = {
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  };
  dispatch(creatTripRequest());
  axios.post('http://localhost:5000/api/trips', postdata, config)
    .then((trip) => {
      dispatch(creatTripSuccess(trip));
    })
    .catch((tripError) => {
      console.log(tripError.response);
      dispatch(creatTripFail(tripError.response.data.error));
    });
};

export const FectchLocation = () => (dispatch) => {
  dispatch(fetchlocationRequest());
  axios.get('locations/location')
    .then((res) => {
      dispatch(fetchLocationsuccess(res.data.data));
    }).catch((error) => {
      dispatch(fetchLocationFail(error));
    });
};

export const FectchAccommodation = () => (dispatch) => {
  dispatch(fetchaccommodationRequest());
  axios.get('/accommodations')
    .then((res) => {
      console.log(res.data.data);
      dispatch(fetchaccommodationsuccess(res.data.data));
    }).catch((error) => {
      dispatch(fetchaccommodationFail(error));
    });
};
