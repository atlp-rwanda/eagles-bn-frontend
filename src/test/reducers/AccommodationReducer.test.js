import accommodationReducer from '../../store/accommodations/accommodationReducer';
import {
  FETCH_ACCOMMODATION_FAILURE,
  FETCH_ACCOMMODATION_PENDING,
  FETCH_ACCOMMODATION_SUCCESS,
  FETCH_SINGLE_ACCOMMODATION_FAILURE,
  FETCH_SINGLE_ACCOMMODATION_PENDING,
  FETCH_SINGLE_ACCOMMODATION_SUCCESS,
  ROOM_BOOKING_PENDING,
  ROOM_BOOKING_SUCCESS,
  ROOM_BOOKING_FAILURE,
} from '../../store/action-types/action-types';

const defaultState = {
  pending: false,
  accommodations: [],
  error: null,
  accommodation: {},
  bookSuccessMessage: '',
};

test('Accommodation Reducer <FETCH_ACCOMMODATION_PENDING>', () => {
  const state = accommodationReducer(defaultState, { type: FETCH_ACCOMMODATION_PENDING });
  expect(state).toHaveProperty('pending', true);
});

test('Accommodation Reducer <FETCH_SINGLE_ACCOMMODATION_PENDING>', () => {
  const state = accommodationReducer(defaultState, { type: FETCH_SINGLE_ACCOMMODATION_PENDING });
  expect(state).toHaveProperty('pending', true);
});

test('Accommodation Reducer <ROOM_BOOKING_PENDING>', () => {
  const state = accommodationReducer(defaultState, { type: ROOM_BOOKING_PENDING });
  expect(state).toHaveProperty('pending', true);
});

test('Accommodation Reducer <FETCH_ACCOMMODATION_FAILURE>', () => {
  const state = accommodationReducer(defaultState, { type: FETCH_ACCOMMODATION_FAILURE, payload: 'Geberic Error' });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', 'Geberic Error');
});

test('Accommodation Reducer <FETCH_SINGLE_ACCOMMODATION_FAILURE>', () => {
  const state = accommodationReducer(defaultState, { type: FETCH_SINGLE_ACCOMMODATION_FAILURE, payload: 'Geberic Error' });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', 'Geberic Error');
});

test('Accommodation Reducer <ROOM_BOOKING_FAILURE>', () => {
  const state = accommodationReducer(defaultState, { type: ROOM_BOOKING_FAILURE, payload: 'Geberic Error' });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('error', 'Geberic Error');
});

test('Accommodation Reducer <FETCH_ACCOMMODATION_SUCCESS>', () => {
  const state = accommodationReducer(defaultState, {
    type: FETCH_ACCOMMODATION_SUCCESS,
    payload: [{ id: 1 }, { id: 2 }],
  });
  expect(state).toHaveProperty('pending', false);
  expect(state.accommodations.length).toStrictEqual(2);
});

test('Accommodation Reducer <ROOM_BOOKING_SUCCESS>', () => {
  const state = accommodationReducer(defaultState, { type: ROOM_BOOKING_SUCCESS, payload: 'my msg' });
  expect(state).toHaveProperty('pending', false);
  expect(state).toHaveProperty('bookSuccessMessage', 'my msg');
});
test('Accommodation Reducer <FETCH_SINGLE_ACCOMMODATION_SUCCESS>', () => {
  const state = accommodationReducer(defaultState, {
    type: FETCH_SINGLE_ACCOMMODATION_SUCCESS,
    payload: { id: 1 },
  });
  expect(state).toHaveProperty('pending', false);
});
