import axios from 'axios';
import { ROOM_BOOKING_PENDING, ROOM_BOOKING_SUCCESS,ROOM_BOOKING_FAILURE} from '../action-types/action-types';

export const requestBooking = () => ({
  type: ROOM_BOOKING_PENDING,
});
export const roomBooked = (message) => ({
  type: ROOM_BOOKING_SUCCESS,
  payload: message,
});
export const roomBookingFailed = (error) => ({
  type: ROOM_BOOKING_FAILURE,
  payload: error,
});

export const roomBooking = (booking,id) => (dispatch) => {
    const config ={
        headers:{
            'auth-token':localStorage.getItem('token')
        }
    }
  dispatch(requestBooking());
  axios.post(`/rooms/${id}/booking`,booking).then((res) => {
    dispatch(roomBooked(res.data.message));
  }).catch((err) => {
    dispatch(roomBookingFailed(err.response.data.error));
  });
};
