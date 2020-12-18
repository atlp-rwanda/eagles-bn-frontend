/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import loadingReducer from './loading';
import { signupReducer } from '../signup/reducer';
import { requestsReducer } from './requests';
import {tripStatusReducer} from '../tripStatus/reducer'
import { authReducer } from './auth';
import { userReducer } from './user';
import profileReducer from './profile';

const allReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  request: requestsReducer,
  user: userReducer,
  signupReducer,
  tripStatusReducer,
  profile: profileReducer,
});

export default allReducer;
