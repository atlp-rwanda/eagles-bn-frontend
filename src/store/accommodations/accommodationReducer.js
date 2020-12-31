/* eslint-disable linebreak-style */
import {
  // eslint-disable-next-line max-len
  FETCH_ACCOMMODATION_FAILURE, FETCH_ACCOMMODATION_PENDING, FETCH_ACCOMMODATION_SUCCESS, FETCH_SINGLE_ACCOMMODATION_FAILURE, FETCH_SINGLE_ACCOMMODATION_PENDING, FETCH_SINGLE_ACCOMMODATION_SUCCESS
} from '../action-types/action-types';
import {initialState} from './initialState'

const accommodationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATION_PENDING:
    case FETCH_SINGLE_ACCOMMODATION_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ACCOMMODATION_SUCCESS:
    case FETCH_SINGLE_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        pending: false,
        accommodations: action.payload,
        accommodation: action.payload,
      };
    case FETCH_ACCOMMODATION_FAILURE:
    case FETCH_SINGLE_ACCOMMODATION_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default accommodationReducer;
