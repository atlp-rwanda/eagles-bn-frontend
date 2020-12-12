import axios from 'axios';
import * as types from '../action-types/action-types';
import { setLoading } from './loading';

// eslint-disable-next-line import/prefer-default-export
export function fetchCurrentUser() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_CURRENT_USER_PENDING });
    dispatch(setLoading(true));
    axios.get('/user/current')
      .then(({ data }) => {
        dispatch(setLoading(false));
        dispatch({ type: types.FETCH_CURRENT_USER_SUCCESS, user: data.data });
      })
      .catch(({ response }) => {
        dispatch({
          type: types.FETCH_CURRENT_USER_ERROR,
          error: { status: response.status, message: response.data },
        });
        dispatch(setLoading(false));
      });
  };
}
