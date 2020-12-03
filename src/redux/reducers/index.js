/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import counterReducer from './counter';

const allReducer = combineReducers({
  counter: counterReducer,
});
export default allReducer;
