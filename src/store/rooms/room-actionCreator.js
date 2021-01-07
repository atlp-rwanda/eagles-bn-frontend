import {GET_ALL_ROOMS_SUCCESS, GET_ALL_ROOMS_START, GET_ALL_ROOMS_FAIL, CREATE_ROOM_FAIL, CREATE_ROOM_REQUEST, CREATE_ROOM_SUCCESS} from './room-actionType';

export const getAllRommsStart = ()=>{
    return {
        type: GET_ALL_ROOMS_START
    }
}
export const getAllRoomsSuccess = (rooms) =>{
   return {
       type: GET_ALL_ROOMS_SUCCESS,
       rooms
   }
}
export const getAllRoomsFail = (error) =>{
    return {
        type: GET_ALL_ROOMS_FAIL,
        error
    }
}
// CREATE ROOM
export const createRoomRequest = ()=>{
    return {
        type: CREATE_ROOM_REQUEST
    }
}
export const createRoomSuccess = (room) =>{
   return {
       type: CREATE_ROOM_SUCCESS,
       room
   }
}
export const createRoomFail = (error) =>{
    return {
        type: CREATE_ROOM_FAIL,
        error
    }
}