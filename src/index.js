import { applyMiddleware, compose, createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './App';
import allReducers from './store/reducers';
import axiosConfig from './config/axiosConfig';
import React from 'react';

axiosConfig(axios);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
