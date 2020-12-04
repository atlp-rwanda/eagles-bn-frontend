/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import authReducer from "./auth";
import loadingReducer from "./loading";
import { signupReducer} from '../signup/reducer'
const allReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  signupReducer
});
export default allReducer;
