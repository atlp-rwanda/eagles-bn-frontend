import {SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAILURE} from './types'

const initialState = {
    isLoading:false,
    error:"",
    message:""
}

export const signupReducer =(state=initialState,action)=>{
    switch(action.type){
        case SIGNUP_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                message:action.payload
            }
         case SIGNUP_FAILURE:
             return{
                 ...state,
                 isLoading:false,
                 error:action.payload
             }
        default:
            return state   
    }
}