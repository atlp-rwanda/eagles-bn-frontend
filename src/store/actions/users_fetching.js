import axios from 'axios'
import { setLoading } from './loading';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';


export function fetchUsers() {
    return dispatch => {
        dispatch({type: FETCH_USERS_PENDING});
        dispatch(setLoading(true))
        axios.get("/user/users")
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: res.data.message
            })
            dispatch(setLoading(false)); 
            
        })
        .catch(error => {
            dispatch({
                type: FETCH_USERS_ERROR,
                payload: error
            });
           dispatch(setLoading(false));
        })
    }
}
