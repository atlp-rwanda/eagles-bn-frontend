/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import authReducer from "./auth";
import loadingReducer from "./loading";

const allReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer
});
export default allReducer;
