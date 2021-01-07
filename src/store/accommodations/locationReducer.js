import {
  // eslint-disable-next-line max-len
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_START,
} from '../action-types/accommodations';

import { initialState } from './initialState';

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_START:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        locations: action.locations,
      };
    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default locationReducer;
