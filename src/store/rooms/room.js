import {
  getAllRommsStart,
  getAllRoomsFail,
  getAllRoomsSuccess,
  createRoomFail,
  createRoomRequest,
  createRoomSuccess,
} from './room-actionCreator';
import axios from 'axios';

export const createRoom = (id, data) => {
  return (dispatch) => {
    dispatch(createRoomRequest());
    axios
      .post(`/accommodation/${id}/rooms`, data)
      .then((room) => {
        dispatch(createRoomSuccess(room.data.message));
        return room.data.message;
      })
      .catch((error) => {
        console.log('create room error: ', error.response.data.error);
        dispatch(createRoomFail(error.response.data.error));
      });
  };
};
