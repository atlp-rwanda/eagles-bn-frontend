import NotificationReducer from '../../store/reducers/notifications';
import {
  FETCH_NOTIFICATIONS_ERROR,
  FETCH_NOTIFICATIONS_PENDING,
  FETCH_NOTIFICATIONS_SUCCESS,
  READ_NOTIFICATION_ERROR,
  READ_NOTIFICATION_PENDING,
  READ_NOTIFICATION_SUCCESS,
  READ_ALL_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS,
} from '../../store/action-types/action-types';

const defaultState = {
  loading: false,
  notifications: [],
  unread: 0,
  error: null,
};

test('Notification Reducer <FETCH_NOTIFICATIONS_PENDING>', () => {
  const state = NotificationReducer(defaultState, { type: FETCH_NOTIFICATIONS_PENDING });
  expect(state).toHaveProperty('loading', true);
  expect(state).toHaveProperty('error', null);
});

test('Notification Reducer <FETCH_NOTIFICATIONS_ERROR>', () => {
  const state = NotificationReducer(defaultState, { type: FETCH_NOTIFICATIONS_ERROR, payload: 'error' });
  expect(state).toHaveProperty('loading', false);
  expect(state).toHaveProperty('error', 'error');
});

test('Notification Reducer <FETCH_NOTIFICATIONS_SUCCESS>', () => {
  const state = NotificationReducer(defaultState, {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: { notifications: ['Hey', 'World'], unread: 2 },
  });
  expect(state).toHaveProperty('loading', false);
  expect(state).toHaveProperty('error', null);
  expect(state).toHaveProperty('unread', state.notifications.length);
});

test('Notification Reducer <READ_NOTIFICATION_ERROR>', () => {
  const state = NotificationReducer(defaultState, { type: READ_NOTIFICATION_ERROR, payload: 'test2' });
  expect(state).toHaveProperty('loading', false);
  expect(state).toHaveProperty('error', 'test2');
});

test('Notification Reducer <READ_NOTIFICATION_PENDING>', () => {
  const state = NotificationReducer(defaultState, { type: READ_NOTIFICATION_PENDING });
  expect(state).toHaveProperty('loading', true);
  expect(state).toHaveProperty('error', null);
});

test('Notification Reducer <READ_NOTIFICATION_SUCCESS>', () => {
  const state = NotificationReducer({
    ...defaultState,
    unread: 2,
    notifications: [{ id: 1, content: 'fake' }, { id: 2, content: 'faker' }],
  }, {
    type: READ_NOTIFICATION_SUCCESS,
    payload: 1,
  });
  expect(state).toHaveProperty('loading', false);
  expect(state).toHaveProperty('error', null);
  expect(state).toHaveProperty('unread', 1);
  expect(state.notifications[0]).toHaveProperty('id', 2);
  expect(state.notifications[0]).toHaveProperty('content', 'faker');
});

test('NOtification Reducer <READ_ALL_NOTIFICATIONS>', () => {
  const state = NotificationReducer({
    ...defaultState,
    unread: 2,
    notifications: [{ id: 1, content: 'fake' }, { id: 2, content: 'faker' }],
  }, { type: READ_ALL_NOTIFICATIONS });
  expect(state).toHaveProperty('loading', false);
  expect(state).toHaveProperty('error', null);
  expect(state).toHaveProperty('unread', 0);
  expect(state.notifications).toStrictEqual([]);
});

test('NOtification Reducer <UPDATE_NOTIFICATIONS>', () => {
  const state = NotificationReducer({
    ...defaultState,
    unread: 2,
    notifications: [{ id: 1, content: 'fake' }, { id: 2, content: 'faker' }],
  }, { type: UPDATE_NOTIFICATIONS, payload: { id: 12, content: 'fakest' } });
  expect(state).toHaveProperty('loading', false);
  expect(state).toHaveProperty('error', null);
  expect(state).toHaveProperty('unread', 3);
  expect(state.notifications[0]).toStrictEqual({ id: 12, content: 'fakest' });
});
