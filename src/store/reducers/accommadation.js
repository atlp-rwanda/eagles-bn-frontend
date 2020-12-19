/* eslint-disable import/prefer-default-export */
/* eslint-disable import/named */
/* eslint-disable max-len */
import {
  FETCH_ACCOMMODATION_REQUEST,
  FETCH_ACCOMMODATION_FAIL,
  FETCH_ACCOMMODATION_SUCCESS,
} from '../action-types/action_types';

const initialState = {
  loading: false,
  accommodations: [],
  error: '',
};

// eslint-disable-next-line func-names
export const Accommodation = (state = initialState, action) => {
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
