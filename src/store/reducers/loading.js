import * as types from "../action-types/action-types"

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case types.SET_LOADING:
             return action.payload
        default:
            return state
    }
}
export default loadingReducer
