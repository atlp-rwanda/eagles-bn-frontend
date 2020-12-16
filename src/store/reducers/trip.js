/* eslint-disable import/prefer-default-export */
/* eslint-disable import/named */
/* eslint-disable max-len */
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

const initialState = {
  loading: false,
  trips: [],
  error: '',
};
const startingState = {
  loading: false,
  accommodations: [],
  error: '',
};

// eslint-disable-next-line func-names
export const TripReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TRIP:
    case FETCH_LOCATION_REQUEST:
    case FETCH_ACCOMMODATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: action.payload,
      };
    case FETCH_LOCATION_SUCCESS:
      return {
        loading: false,
        trips: action.payload,
        error: '',
      };
    case FETCH_ACCOMMODATION_SUCCESS:
      return {
        loading: false,
        trips: action.payload,
        error: '',
      };
    case REQUEST_TRIP_ERROR:
    case FETCH_LOCATION_FAIL:
    case FETCH_ACCOMMODATION_FAIL:
      return {
        trips: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const Accommodation = (state = startingState, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ACCOMMODATION_SUCCESS:
      return {
        loading: false,
        accommodations: action.payload,
        error: '',
      };
    case FETCH_ACCOMMODATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
