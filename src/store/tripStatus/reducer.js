import { REQUEST_UPDATE_TRIP_STATUS, UPDATE_TRIP_STATUS_SUCCESS, UPDATE_TRIP_STATUS_FAILURE } from './types';

const initialState = {
  isLoading: false,
  error: '',
  message: '',
};

export const tripStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_TRIP_STATUS:
      return {
        isLoading: true,
        error:'',
        message:''
      };
    case UPDATE_TRIP_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case UPDATE_TRIP_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
