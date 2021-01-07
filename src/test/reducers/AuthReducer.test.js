import { authReducer as AuthReducer } from '../../store/reducers/auth';
import {
  SET_AUTH_ERROR,
  SET_AUTH_PENDING,
  SET_AUTH_SUCCESS,
  AUTH_LOGOUT,
} from '../../store/action-types/action-types';

const defaultState = { pending: false, login_success: false, error: null };

test('Auth Reducer <AUTH_LOGOUT>', () => {
  const state = AuthReducer(defaultState, { type: AUTH_LOGOUT });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('login_success', false);
  expect(state).toHaveProperty('error', null);
});

test('Auth Reducer <SET_AUTH_PENDING>', () => {
  const state = AuthReducer(defaultState, { type: SET_AUTH_PENDING });
  expect(state).toHaveProperty('pending', true);
  expect(state).toHaveProperty('error', null);
});

test('Auth Reducer <SET_AUTH_SUCCESS>', () => {
  const state = AuthReducer(defaultState, { type: SET_AUTH_SUCCESS });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', null);
  expect(state).toHaveProperty('login_success', true);
});

test('Auth Reducer <SET_AUTH_ERROR>', () => {
  const state = AuthReducer(defaultState, { type: SET_AUTH_ERROR, error: 'test2' });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', 'test2');
});
