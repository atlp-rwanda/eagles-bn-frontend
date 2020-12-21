
import axios from 'axios';
// import AuthService from '../../services/auth.service';
import { FIND_USER, RESET_PASSWORD } from '../action-types/action-types';
import { setLoading } from './loading';
import {successMsg} from '../../utils/helpers/success'

export const findUser = (payload) => ({
  type: FIND_USER,
  payload,
});

export const sendEmail = (data) => async (dispatch) => {
  dispatch({type: FIND_USER})
  try {
    const response = await axios.post('/user/forgetPassword', data);
    console.log("hhhhhhhhh", response.data.message)
    return successMsg.handle(response.data.message);
    // return dispatch(findUser(response.data.message));
  } catch (error) {
    // Errors.handle(error);
    return dispatch(findUser(error.response.data));
  }
};



export const resetPassword = (payload) => ({
  type: RESET_PASSWORD,
  payload,
});

export const updatePassword = (data) => async (dispatch) => {
  dispatch({type: RESET_PASSWORD});
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    const email = urlParams.get('email');
    const response = await axios.put(`/user/resetPassword/${token}/${email}`, data); 
    successMsg.handle(response.data.message);
    return dispatch(resetPassword(response.data.message));
  } catch (error) {
  
    return dispatch(resetPassword(error.response.data));
  }
};

export default sendEmail;