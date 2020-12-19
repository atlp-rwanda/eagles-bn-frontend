import * as types from '../action-types/action-types';

const initialState = { trips: [], error: null, pending: false };
export const latestTripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LATEST_TRIPS_PENDING:
      return { ...state, pending: true };
    case types.FETCH_LATEST_TRIPS_SUCCESS:
      return { ...state, pending: false, trips: action.trips };
    case types.FETCH_LATEST_TRIPS_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
export const getLatestTrips = (state) => state.latest_trips.trips;
export const getLatestTripsPending = (state) => state.latest_trips.pending;
export const getLatestTripsError = (state) => state.latest_trips.error;
