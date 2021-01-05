/* eslint-disable no-nested-ternary */
import api from '../api/notifications';
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
import { handleCatch } from '../api/fetchProfile';

// const handleAsyncErrors = (func) => (...params) => Promise
//   .resolve(func(params))
//   .catch((error) => {
//     const [dispatch] = params;
//     console.log(error, params);
//     let err = error.message;
//     if (error.request) err = JSON.parse(error.request.response).error;
//     if (error.response && error.response.data.message) {
//       err = error.response.data.message;
//     }
//     if (err !== 'Token is incorrect or expired!' || err !== 'Unauthorized') {
//       toast.error(err);
//     }
//     dispatch({ type: FETCH_NOTIFICATIONS_ERROR, payload: err });
//   });

const fetchAllNotifications = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_NOTIFICATIONS_PENDING });
    const notifications = await api.fetchNotifications();
    dispatch({ type: FETCH_NOTIFICATIONS_SUCCESS, payload: notifications });
  } catch (error) {
    handleCatch(dispatch, (payload) => ({ type: FETCH_NOTIFICATIONS_ERROR, payload }), error);
  }
};

export const readNotification = (id) => async (dispatch) => {
  try {
    dispatch({ type: READ_NOTIFICATION_PENDING });
    const message = await api.readNotification(id);
    if (message === '1 marked as read') dispatch({ type: READ_NOTIFICATION_SUCCESS, payload: id });
  } catch (error) {
    handleCatch(dispatch, (payload) => ({ type: READ_NOTIFICATION_ERROR, payload }), error);
  }
};

export const readAll = () => async (dispatch) => {
  await api.readAllNotifications();
  dispatch({ type: READ_ALL_NOTIFICATIONS });
};

export const newNotification = (payload) => (dispatch) => dispatch({
  type: UPDATE_NOTIFICATIONS,
  payload,
});

export default fetchAllNotifications;
