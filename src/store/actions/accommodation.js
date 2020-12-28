/* eslint-disable linebreak-style */
import {
  // eslint-disable-next-line max-len
  FETCH_ACCOMMODATION_FAILURE, FETCH_ACCOMMODATION_PENDING, FETCH_ACCOMMODATION_SUCCESS, FETCH_SINGLE_ACCOMMODATION_FAILURE, FETCH_SINGLE_ACCOMMODATION_PENDING, FETCH_SINGLE_ACCOMMODATION_SUCCESS,
} from '../action-types/action-types';

export const fetchAccommodationPending = () => ({
  type: FETCH_ACCOMMODATION_PENDING,
});
export const fetchAccommodationSuccess = (data) => ({
  type: FETCH_ACCOMMODATION_SUCCESS,
  payload: data,
});
export const fetchAccommodationFailure = (error) => ({
  type: FETCH_ACCOMMODATION_FAILURE,
  error,
});

// FOR SINGLE ACCOMMODATION
export const fetchSingleAccommodationPending = () => ({
  type: FETCH_SINGLE_ACCOMMODATION_PENDING,
});
export const fetchSingleAccommodationSuccess = (data) => ({
  type: FETCH_SINGLE_ACCOMMODATION_SUCCESS,
  payload: data,
});
export const fetchSingleAccommodationFailure = (error) => ({
  type: FETCH_SINGLE_ACCOMMODATION_FAILURE,
  error,
});
