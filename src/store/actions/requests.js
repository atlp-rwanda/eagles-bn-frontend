import axios from 'axios';
import * as types from '../action-types/action-types';
import { setLoading } from './loading';

export default function fetchRequests() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_REQUESTS_PENDING });
    dispatch(setLoading(true));
    axios.get('/trips')
      .then(({ data }) => {
        dispatch({ type: types.FETCH_REQUEST_SUCCESS, requests: data.data });
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_REQUEST_ERROR, error: err.response.data });
        dispatch(setLoading(false));
      });
  };
}
