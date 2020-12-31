import axios from 'axios';
import { REQUEST_UPDATE_TRIP_STATUS, UPDATE_TRIP_STATUS_SUCCESS, UPDATE_TRIP_STATUS_FAILURE } from './types';

export const updatingTripStatus = () => ({
  type: REQUEST_UPDATE_TRIP_STATUS,
});
export const updatedTripStatus = (message) => ({
  type: UPDATE_TRIP_STATUS_SUCCESS,
  payload: message,
});
export const updateTripStatusError = (error) => ({
  type: UPDATE_TRIP_STATUS_FAILURE,
  payload: error,
});

export const updateTripStatus = (trip,id) => (dispatch) => {
    const config ={
        headers:{
            'auth-token':localStorage.getItem('token')
        }
    }
  dispatch(updatingTripStatus());
  axios.patch(`/trips/${id}/status`,trip).then((res) => {
    dispatch(updatedTripStatus(res.data.message));
  }).catch((err) => {
    dispatch(updateTripStatusError(err.response.data.error));
  });
};
