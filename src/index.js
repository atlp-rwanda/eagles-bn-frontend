import '@babel/polyfill';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './App';
import allReducers from './store/reducers';
import axiosConfig from './config/axiosConfig';

axiosConfig(axios);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
