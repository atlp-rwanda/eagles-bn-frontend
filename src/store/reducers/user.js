import * as types from '../action-types/action-types';

const initialState = { user: null, error: null, pending: false };
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CURRENT_USER_PENDING:
      return { ...state, pending: true };
    case types.FETCH_CURRENT_USER_SUCCESS:
      return { ...state, pending: false, user: action.user };
    case types.FETCH_CURRENT_USER_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
export const getUser = (state) => state.user.user;
export const getUserPending = (state) => state.user.pending;
export const getUserError = (state) => state.user.error;
