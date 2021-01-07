/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  readAll,
  readNotification,
} from '../../../store/actions/notifications';
import blankProfile from '../../assets/blank-profile-picture.png';
import Tooltip from '../Tooltip';
import '../../styles/NotificationPane.scss';

const createNotificationLink = (notification) => {
  const { tripId, description } = notification;
  switch (description) {
    default:
      return `/requests?id=${tripId}`;
  }
};

const Single = (notification) => {
  const { onClick, id: noticeId, creator_id: creatorId, receiver_id: receiverId, creator: { profile_image: image, first_name: fName, last_name: lName }, description, createdAt } = notification;
  const dispatch = useDispatch();
  const handleNotificationRead = (id) => { dispatch(readNotification(id)); onClick(); };
  const name = creatorId !== receiverId && `${fName} ${lName}`;
  return (
    <Link
      onClick={() => handleNotificationRead(noticeId)}
      to={createNotificationLink(notification)}
      className="notification-container"
    >
      <li className="notification">
        <img src={image || blankProfile} alt="notification" />
        <span>{`${name || 'You'} ${description}`}</span>
      </li>
      <span className="notification-date">{moment(createdAt).fromNow()}</span>
    </Link>
  );
};

const NotificationPane = ({ onClick, unread, notifications: notices }) => {
  const dispatch = useDispatch();
  const handleReadAll = () => {
    dispatch(readAll());
    onClick();
  };
  return (
    <ul className="notification-pane">
      <div className="notification-pane__title">
        <span>Notifications</span>
        <span style={{ flex: 1 }} />
        {unread > 0 && (
          <Tooltip onClick={handleReadAll} content="Mark all as read">
            <i className="fas fa-check-double" />
          </Tooltip>
        )}
        <Tooltip content="Settings">
          <i className="fas fa-cog" />
        </Tooltip>
      </div>
      <div className="notification-pane__body">
        {unread === 0 && <p className="empty">No unread notifications</p>}
        {unread > 0 && notices.map((n) => <Single onClick={onClick} key={n.id} {...n} />)}
      </div>
      {unread > 0 && (
        <footer className="notification-pane__footer">
          <button type="button" onClick={handleReadAll}>
            Mark all notifications as read
          </button>
        </footer>
      )}
    </ul>
  );
};

NotificationPane.propTypes = {
  onClick: propTypes.func.isRequired,
  unread: propTypes.number.isRequired,
  notifications: propTypes.array.isRequired,
};

export default NotificationPane;
