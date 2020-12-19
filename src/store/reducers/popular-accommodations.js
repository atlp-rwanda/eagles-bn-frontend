import * as types from '../action-types/action-types';

const initialState = { accommodations: [], error: null, pending: false };
export const popularAccommodationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POPULAR_ACCOMMODATIONS_PENDING:
      return { ...state, pending: true };
    case types.FETCH_POPULAR_ACCOMMODATIONS_SUCCESS:
      return { ...state, pending: false, accommodations: action.accommodations };
    case types.FETCH_POPULAR_ACCOMMODATIONS_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
export const getPopularAccommodations = (state) => state.popular_accommodations.accommodations;
export const getPopularAccommodationsPending = (state) => state.popular_accommodations.pending;
export const getPopularAccommodationsError = (state) => state.popular_accommodations.error;
