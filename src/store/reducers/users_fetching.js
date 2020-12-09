import * as types from "../action-types/users_fetching"
import axios from "axios";

import {FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../actions/users_fetching';

const initialState = {
    pending: false,
    users: [],
    error: null
}

export function roleReducer(state = initialState, action) {

    switch(action.type) {
        case FETCH_USERS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                errorFetchingUsers: action.payload
            }
        default: 
            return state;
    }
}



