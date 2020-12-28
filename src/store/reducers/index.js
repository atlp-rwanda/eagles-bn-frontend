/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import loadingReducer from './loading';
import { signupReducer } from '../signup/reducer';
import { requestsReducer } from './requests';
import { authReducer } from './auth';
import { userReducer } from './user';
import profileReducer from './profile';
import oauthReducer from './oauthReducer';

const allReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  request: requestsReducer,
  user: userReducer,
  signupReducer,
  profile: profileReducer,
  socialLogin: oauthReducer,
});

export default allReducer;
