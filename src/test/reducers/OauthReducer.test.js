import OAuthReducer from '../../store/reducers/oauthReducer';
import {
  OAUTH_FAILURE,
  OAUTH_SUCCESS,
  AUTH_MESSAGE,
  AUTH_LOGOUT,
} from '../../store/action-types/action-types';

const defaultState = {
  token: '',
  authMessage: '',
  oauthErrors: null,
};

test('Auth Reducer <AUTH_LOGOUT>', () => {
  const state = OAuthReducer(defaultState, { type: AUTH_LOGOUT });
  expect(state).toHaveProperty('token', '');
});

test('Auth Reducer <AUTH_MESSAGE>', () => {
  const state = OAuthReducer(defaultState, { type: AUTH_MESSAGE, payload: { message: 'testMsg' } });
  expect(state).toHaveProperty('authMessage', 'testMsg');
});

test('Auth Reducer <OAUTH_SUCCESS>', () => {
  const state = OAuthReducer(defaultState, { type: OAUTH_SUCCESS, payload: { token: 'testToken' } });
  expect(state).toHaveProperty('token', 'testToken');
  expect(state).toHaveProperty('oauthErrors', null);
  // expect(state).toHaveProperty('authMessage', '');
});

test('Auth Reducer <OAUTH_FAILURE>', () => {
  const state = OAuthReducer(defaultState, { type: OAUTH_FAILURE, payload: { error: ['test2'] } });
  expect(state).toHaveProperty('oauthErrors', ['test2']);
});
