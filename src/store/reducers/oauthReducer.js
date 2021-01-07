/* eslint-disable linebreak-style */
import {
  OAUTH_FAILURE,
  OAUTH_SUCCESS,
  AUTH_MESSAGE,
  AUTH_LOGOUT,
} from '../action-types/action-types';

const initialState = {
  token: '',
  authMessage: '',
  oauthErrors: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGOUT: return { ...initialState, token: '' };
    case OAUTH_SUCCESS:
      return {
        ...state,
        oauthErrors: null,
        token: payload.token,
      };
    case OAUTH_FAILURE:
      return { ...state, oauthErrors: payload.error };
    case AUTH_MESSAGE:
      return { ...state, authMessage: payload.message };
    default:
      return state;
  }
};
