/* eslint-disable max-len */
import axios from 'axios';
import {
  FETCH_ACCOMMODATION_REQUEST,
  FETCH_ACCOMMODATION_FAIL,
  FETCH_ACCOMMODATION_SUCCESS,
} from '../action-types/action_types';

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
