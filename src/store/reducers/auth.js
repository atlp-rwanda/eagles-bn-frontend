import * as types from "../action-types/action-types"

const authReducer = (state = {is_logged_in: false}, action) => {
    switch (action.type) {
        case types.SET_LOGGED_IN:
            return {
                is_logged_in: action.payload
            }
        default:
            return state
    }
}
export default authReducer
