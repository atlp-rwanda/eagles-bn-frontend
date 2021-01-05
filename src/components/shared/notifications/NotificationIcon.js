/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from '../../badge/badge';
import fetchAllNotifications from '../../../store/actions/notifications';
import '../../styles/NotificationIcon.scss';

const NotificationIcon = ({ unread, onClick }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (unread) {
      if (!document.title.includes(') ')) {
        document.title = `(${unread}) ${document.title}`;
      } else document.title = `(${unread}) ${document.title.split(') ')[1]}`;
    } else if (document.title.includes(') ')) {
      const [, newTitle] = document.title.split(') ');
      document.title = newTitle;
    }
  }, [unread]);
  React.useEffect(() => dispatch(fetchAllNotifications()), []);
  return (
    <div onClick={onClick} className="notification-icon">
      <i className={`fas fa-bell ${unread <= 0 ? 'light-icon' : ''}`} />
      {unread > 0 && <Badge type="danger">{unread}</Badge>}
    </div>
  );
};

NotificationIcon.propTypes = {
  unread: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

export default NotificationIcon;
