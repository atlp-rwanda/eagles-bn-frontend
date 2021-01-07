/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import loadingReducer from './loading';
import { signupReducer } from '../signup/reducer';
import { requestsReducer } from './requests';
import { tripStatusReducer } from '../tripStatus/reducer';
import { authReducer } from './auth';
import { userReducer } from './user';
import profileReducer from './profile';
import oauthReducer from './oauthReducer';
import notificationsReducer from './notifications';
import accommodations from '../accommodations/accommodationReducer';

const allReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  request: requestsReducer,
  user: userReducer,
  signupReducer,
  tripStatusReducer,
  profile: profileReducer,
  socialLogin: oauthReducer,
  payload: accommodations,
  notifications: notificationsReducer,
});

export default allReducer;
