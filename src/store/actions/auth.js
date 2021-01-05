import axios from 'axios';
import * as types from '../action-types/action-types';
import { setLoading } from './loading';

// eslint-disable-next-line import/prefer-default-export
export function loggingIn(payload) {
  return (dispatch) => {
    dispatch({ type: types.SET_AUTH_PENDING });
    dispatch(setLoading(true));
    axios
      .post('/user/login', payload)
      .then(({ data }) => {
        localStorage.setItem('token', data.accessToken);
        dispatch(setLoading(false));
        dispatch({ type: types.SET_AUTH_SUCCESS });
      })
      .catch(({ response }) => {
        if (response && response.status !== 500) {
          dispatch({
            type: types.SET_AUTH_ERROR,
            error: {
              status: response.status,
              message: 'Invalid login credentials',
            },
          });
        }
        dispatch(setLoading(false));
      });
  };
}

export const logoutUser = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: types.AUTH_LOGOUT });
};
