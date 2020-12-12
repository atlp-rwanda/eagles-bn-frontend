import * as types from '../action-types/action-types';

// eslint-disable-next-line max-len
export const authReducer = (state = { pending: false, login_success: false, error: null }, action) => {
  switch (action.type) {
    case types.SET_AUTH_PENDING:
      return {
        ...state, pending: true,
      };
    case types.SET_AUTH_SUCCESS:
      return { ...state, pending: false, login_success: true };
    case types.SET_AUTH_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
export const getIsLoggedIn = (state) => state.auth.login_success;
export const getLoginPending = (state) => state.auth.pending;
export const getLoginError = (state) => state.auth.error;
