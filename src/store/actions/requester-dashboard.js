import axios from 'axios';
import * as types from '../action-types/action-types';
import { setLoading } from './loading';

export default function fetchRequesterDashboard() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_REQUESTER_DASHBOARD_PENDING });
    dispatch(setLoading(true));
    axios.get('/user/dashboard/requester')
      .then(({ data }) => {
        dispatch({ type: types.FETCH_REQUESTER_DASHBOARD_SUCCESS, data: data.data });
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_REQUESTER_DASHBOARD_ERROR, error: err.response.data });
        dispatch(setLoading(false));
      });
  };
}
