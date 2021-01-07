import ProfileReducer from '../../store/reducers/profile';
import {
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_PENDING,
  FETCH_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_PROFILE_PENDING,
  UPDATE_PROFILE_SUCCESS,
} from '../../store/actions/profileActions';

const defaultState = {
  pending: false,
  profile: {
    where_you_live: '',
    preferred_currency: '',
    preferred_language: '',
    phone_number: '',
    profile_image: '',
    father_name: '',
    mother_name: '',
    first_name: '',
    last_name: '',
    marital_status: '',
    nationality: '',
    birth_date: '',
    gender: '',
  },
  error: null,
};

test('Profile Reducer <FETCH_PROFILE_PENDING>', () => {
  const state = ProfileReducer(defaultState, { type: FETCH_PROFILE_PENDING });
  expect(state).toHaveProperty('pending', true);
  expect(state).toHaveProperty('error', null);
});

test('Profile Reducer <UPDATE_PROFILE_PENDING>', () => {
  const state = ProfileReducer(defaultState, { type: UPDATE_PROFILE_PENDING });
  expect(state).toHaveProperty('pending', true);
  expect(state).toHaveProperty('error', null);
});

test('Profile Reducer <UPDATE_PROFILE_ERROR>', () => {
  const state = ProfileReducer(defaultState, { type: UPDATE_PROFILE_ERROR, error: 'test' });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', 'test');
});

test('Profile Reducer <FETCH_PROFILE_ERROR>', () => {
  const state = ProfileReducer(defaultState, { type: FETCH_PROFILE_ERROR, error: 'test2' });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', 'test2');
});

test('Profile Reducer <FETCH_PROFILE_SUCCESS>', () => {
  const state = ProfileReducer(defaultState, {
    type: FETCH_PROFILE_SUCCESS,
    payload: { first_name: 'John', last_name: 'Doe' },
  });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', null);
  expect(state.profile).toHaveProperty('first_name', 'John');
  expect(state.profile).toHaveProperty('last_name', 'Doe');
});

test('Profile Reducer <UPDATE_PROFILE_SUCCESS>', () => {
  const state = ProfileReducer(defaultState, {
    type: UPDATE_PROFILE_SUCCESS,
    payload: { first_name: 'John', last_name: 'Doe' },
  });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', null);
  expect(state.profile).toHaveProperty('first_name', 'John');
  expect(state.profile).toHaveProperty('last_name', 'Doe');
});

test('Profile Reducer <UPDATE_PROFILE_IMAGE_SUCCESS>', () => {
  const state = ProfileReducer(defaultState, {
    type: UPDATE_PROFILE_IMAGE_SUCCESS,
    payload: 'new Image.fake',
  });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', null);
  expect(state.profile).toHaveProperty('profile_image', 'new Image.fake');
});
