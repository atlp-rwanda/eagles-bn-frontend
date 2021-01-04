import axios from 'axios'
export const ROLE_CHANGE_PENDING = 'ROLE_CHANGE_PENDING';
export const ROLE_CHANGE_SUCCESS = 'ROLE_CHANGE_SUCCESS';
export const ROLE_CHANGE_ERROR = 'ROLE_CHANGE_ERROR';


export function roleSetting(id,role) 
{    
    return dispatch => {
        dispatch({type: ROLE_CHANGE_PENDING});
        axios.put(`user/roles/${id}`,{role})
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch({
                type:ROLE_CHANGE_SUCCESS,
                user: res.data
            })
           return res.data
        })
        .catch(error => {
            dispatch({
                type: ROLE_CHANGE_ERROR,
                error: error
            });
        })
    }
}
