import {
  FETCH_NOTIFICATIONS_ERROR,
  FETCH_NOTIFICATIONS_PENDING,
  FETCH_NOTIFICATIONS_SUCCESS,
  READ_NOTIFICATION_ERROR,
  READ_NOTIFICATION_PENDING,
  READ_NOTIFICATION_SUCCESS,
  READ_ALL_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS,
} from '../action-types/action-types';

const defaultState = {
  loading: false,
  notifications: [],
  unread: 0,
  error: null,
};

const notificationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case READ_NOTIFICATION_PENDING:
    case FETCH_NOTIFICATIONS_PENDING:
      return { ...state, loading: true };
    case FETCH_NOTIFICATIONS_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case READ_ALL_NOTIFICATIONS:
      return { ...state, loading: false, unread: 0, notifications: [] };
    case UPDATE_NOTIFICATIONS:
      return { ...state, loading: false, unread: state.unread + 1, notifications: [action.payload, ...state.notifications] };
    case READ_NOTIFICATION_SUCCESS:
      return { ...state, loading: false, unread: state.unread - 1, notifications: state.notifications.filter((n) => n.id !== action.payload) };
    case READ_NOTIFICATION_ERROR:
    case FETCH_NOTIFICATIONS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default notificationsReducer;
