import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

export const userCreation = () => ({
  type: SIGNUP_REQUEST,
});
export const userCreated = (message) => ({
  type: SIGNUP_SUCCESS,
  payload: message,
});
export const signupError = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const userSignup = (newUser) => (dispatch) => {
  console.log('User registration...');
  dispatch(userCreation());
  axios.post('/user/signup', newUser).then((res) => {
    dispatch(userCreated(res.data.message));
  }).catch((err) => {
    dispatch(signupError(err.response.data.error));
  });
};
