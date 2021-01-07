import {
  GET_ALL_ROOMS_SUCCESS,
  GET_ALL_ROOMS_START,
  GET_ALL_ROOMS_FAIL,
  CREATE_ROOM_FAIL,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_REQUEST,
} from './room-actionType';
const initialState = {
  pending: false,
  rooms: [],
  error: null,
  roomMessage: '',
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROOMS_START:
    case CREATE_ROOM_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_ROOMS_SUCCESS:
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        rooms: action.rooms,
        pending: false,
        roomMessage: action.room,
      };
    case GET_ALL_ROOMS_FAIL:
    case CREATE_ROOM_FAIL:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};
