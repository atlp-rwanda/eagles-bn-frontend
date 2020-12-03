/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('Simple component test', () => {
  const store = mockStore({});

  const wrapper = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );

  store.dispatch = jest.fn();

  it('should render with initial state', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
