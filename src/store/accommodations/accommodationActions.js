import axios from 'axios';
import {
  createAccommodationFailure,
  createAccommodationRequest,
  createAccommodationSuccess,
  deleteAccommodationFailure,
  deleteAccommodationRequest,
  deleteAccommodationSuccess,
  editAccommodationRequest,
  editAccommodationFailure,
  editAccommodationSuccess,
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationFailure,
} from '../actions/accommodations';

export const createAccommodation = (data) => {
  return (dispatch) => {
    dispatch(createAccommodationRequest());
    axios
      .post('/accommodations', data)
      .then((res) => {
        dispatch(createAccommodationSuccess(res.data.message));
        return res.data.message;
      })
      .catch((error) => {
        dispatch(createAccommodationFailure(error.response.data.error));
      });
  };
};
export const deleteAccommodation = (accommodationId) => {
  return (dispatch) => {
    dispatch(deleteAccommodationRequest());
    axios
      .delete(`/accommodations/${accommodationId}`)
      .then((res) => {
        dispatch(deleteAccommodationSuccess(res.data.message));
        return res.data.message;
      })
      .catch((error) => {
        dispatch(deleteAccommodationFailure(error.response.error));
      });
  };
};
export const editAccommodation = (accommodationId, data) => {
  return (dispatch) => {
    dispatch(editAccommodationRequest());
    axios
      .put(`/accommodations/${accommodationId}`, data)
      .then((res) => {
        dispatch(editAccommodationSuccess(res.data.message));
        return res.data.message;
      })
      .catch((error) => {
        dispatch(editAccommodationFailure(error.response.data.error));
      });
  };
};
// location

export const fetchLocation = () => {
  return (dispatch) => {
    dispatch(fetchLocationStart());
    axios
      .get('/locations')
      .then((loc) => {
        dispatch(fetchLocationSuccess(loc.data.data));
        return loc.data.data;
      })
      .catch((error) => {
        dispatch(fetchLocationFailure(error));
      });
  };
};
