/* eslint-disable linebreak-style */
import { OAUTH_FAILURE, OAUTH_SUCCESS, AUTH_MESSAGE } from '../../action-types/action-types';

const createAction = (payload) => {
  const { token, error, message } = payload;
  if (token) {
    localStorage.setItem('token', token);
    return { type: OAUTH_SUCCESS, payload: { token } };
  } if (error) {
    return { type: OAUTH_FAILURE, payload: { error } };
  }
  return { type: AUTH_MESSAGE, payload: { message } };
};

export default createAction;
