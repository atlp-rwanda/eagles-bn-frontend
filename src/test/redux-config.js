import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import allReducers from '../store/reducers';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';

export default function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(allReducers, reduxState || null, applyMiddleware(thunk));
  return render(<Provider store={store}>{ui}</Provider>);
}
