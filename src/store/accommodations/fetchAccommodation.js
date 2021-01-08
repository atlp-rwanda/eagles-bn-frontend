/* eslint-disable linebreak-style */
import axios from 'axios';
import { fetchAccommodationFailure, fetchAccommodationPending, fetchAccommodationSuccess,fetchSingleAccommodationFailure, fetchSingleAccommodationPending, fetchSingleAccommodationSuccess } from '../actions/accommodation';
const url = '/accommodations'
export const fetchAllAccommodations = () => (dispatch) => {
  dispatch(fetchAccommodationPending());
  axios.get(url)
    .then((accommodations) => {
      if (accommodations.error) {
        throw error;
      }
      dispatch(fetchAccommodationSuccess(accommodations.data.data));
      return accommodations.data.data;
    })
    .catch((error) => {
      dispatch(fetchAccommodationFailure(error.response.data));
    });
};
export const fetchSingleAccommodation = (accommodationId) => (dispatch) => {
  dispatch(fetchSingleAccommodationPending());
  axios.get(`${url}/${accommodationId}`)
    .then((res) => {
      if (res.error) {
        throw error;
      }
      dispatch(fetchSingleAccommodationSuccess(res.data.data));
      return res.data.data;
    })
    .catch((error) => {
      dispatch(fetchSingleAccommodationFailure(error.response.data));
    });
};
