import * as types from "../action-types/action-types"

export function setLoading(payload) {
    return {type: types.SET_LOADING, payload}
}
