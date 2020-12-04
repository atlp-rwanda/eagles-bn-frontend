import * as types from "../action-types/action-types"

export function authStatus(payload) {
    return {type: types.SET_LOGGED_IN, payload}
}
