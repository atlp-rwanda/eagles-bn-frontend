import axios from 'axios';
import * as types from '../action-types/action-types';
import { setLoading } from './loading';

export default function fetchLatestTrips() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_LATEST_TRIPS_PENDING});
    dispatch(setLoading(true));
    axios.get('/trips/latest')
      .then(({ data }) => {
        dispatch({ type: types.FETCH_LATEST_TRIPS_SUCCESS, trips: data.data });
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_LATEST_TRIPS_ERROR, error: err.response.data });
        dispatch(setLoading(false));
      });
  };
}
