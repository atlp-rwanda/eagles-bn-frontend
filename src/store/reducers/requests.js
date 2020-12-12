import * as types from '../action-types/action-types';

const initialState = { requests: [], error: null, pending: false };
export const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUESTS_PENDING:
      return { ...state, pending: true };
    case types.FETCH_REQUEST_SUCCESS:
      return { ...state, pending: false, requests: action.requests };
    case types.FETCH_REQUEST_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
export const getRequests = (state) => state.request.requests;
export const getRequestsPending = (state) => state.request.pending;
export const getRequestsError = (state) => state.request.error;
