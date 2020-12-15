/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './App';
import allReducers from './store/reducers';
import axios from 'axios';
const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = "http://localhost:4000/api/";
}
else{
  axios.defaults.baseURL = "http://eagles-bn-backend-staging.herokuapp.com/api/";
}



export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middleware)));
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
