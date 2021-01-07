import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import allReducers from '../store/reducers';

// const defaultSate = 

export default function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(allReducers, reduxState || {}, applyMiddleware(thunk));
  return render(<Provider store={store}>{ui}</Provider>);
}
