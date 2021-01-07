import {
  CREATE_ACCOMMODATION_FAILURE,
  CREATE_ACCOMMODATION_REQUEST,
  CREATE_ACCOMMODATION_SUCCESS,
  DELETE_ACCOMMODATION_FAILURE,
  DELETE_ACCOMMODATION_SUCCESS,
  DELETE_ACCOMMODATION_START,
  EDIT_ACCOMMODATION_FAILURE,
  EDIT_ACCOMMODATION_SUCCESS,
  EDIT_ACCOMMODATION_START,
} from '../action-types/accommodations';
// import {initialState} from './initialState'
const initialState = {
  accommodation: [],
  pending: false,
  error: null,
  message: '',
};

// CREATE AN ACCOMMODATION REDUCER

export const accommodationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOMMODATION_REQUEST:
    case DELETE_ACCOMMODATION_START:
    case EDIT_ACCOMMODATION_START:
      return {
        ...state,
        pending: true,
      };
    case CREATE_ACCOMMODATION_SUCCESS:
    case DELETE_ACCOMMODATION_SUCCESS:
    case EDIT_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        pending: false,
        accommodation: action.payload,
        message: action.message,
      };
    case CREATE_ACCOMMODATION_FAILURE:
    case DELETE_ACCOMMODATION_FAILURE:
    case EDIT_ACCOMMODATION_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
