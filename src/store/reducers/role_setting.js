import {ROLE_CHANGE_PENDING,ROLE_CHANGE_SUCCESS,ROLE_CHANGE_ERROR} from '../actions/role_setting';

const initialState = {
    pending: false,
    user: null,
    error: null
}

export function roleSettingReducer(state = initialState, action) {

    switch(action.type) {
        case ROLE_CHANGE_PENDING: 
            return {
                ...state,
                pending: true
            }
        case ROLE_CHANGE_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.user
            }
        case ROLE_CHANGE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}


