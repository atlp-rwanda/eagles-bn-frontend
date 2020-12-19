/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import loadingReducer from './loading';
import { signupReducer } from '../signup/reducer';
import { requestsReducer } from './requests';
import { authReducer } from './auth';
import { userReducer } from './user';
import { TripReducer, Accommodation } from './trip';

const allReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  request: requestsReducer,
  user: userReducer,
  signupReducer,
  TripReducer,
  Accommodation,
});
export default allReducer;
