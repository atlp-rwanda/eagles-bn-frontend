import {SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAILURE} from './types'
import axios from 'axios'
export const userCreation =()=>{
    return {
        type:SIGNUP_REQUEST
    }
}
export const userCreated =(message)=>{
    return {
        type:SIGNUP_SUCCESS,
        payload:message
    }
}
export const signupError =(error)=>{
    return {
        type:SIGNUP_FAILURE,
        payload:error
    }
}

export const userSignup =  newUser => dispatch => {
    console.log("User registration...")
    dispatch(userCreation())
    axios.post('/user/signup',newUser).then(res=>{
        dispatch(userCreated(res.data.message))
    }).catch(err=>{
        dispatch(signupError(err.response.data.error))
    })
}