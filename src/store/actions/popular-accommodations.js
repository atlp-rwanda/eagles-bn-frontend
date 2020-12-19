import axios from 'axios';
import * as types from '../action-types/action-types';
import { setLoading } from './loading';

export default function fetchPopularAccommodation() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_POPULAR_ACCOMMODATIONS_PENDING });
    dispatch(setLoading(true));
    axios.get('/accommodations/popular')
      .then(({ data }) => {
        dispatch({ type: types.FETCH_POPULAR_ACCOMMODATIONS_SUCCESS, accommodations: data.data });
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_POPULAR_ACCOMMODATIONS_ERROR, error: err.response.data });
        dispatch(setLoading(false));
      });
  };
}
