/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-confusing-arrow */
import useSound from 'use-sound';
import io from 'socket.io-client';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import blankProfile from '../assets/blank-profile-picture.png';
import NotificationIcon from './notifications/NotificationIcon';
import NotificationPane from './notifications/NotificationPane';
import { newNotification } from '../../store/actions/notifications';
import notificationSound from '../../assets/sounds/notification-sound.mp3';
import logo from '../assets/logo.png';
import '../styles/Navbar.scss';

const token = localStorage.getItem('token');
const socket = io(process.env.BASE_URL.split('/api')[0], {
  query: `auth_token=${token}`,
});

const ProfilePane = ({ onClick }) => (
  <div className="profile-pane">
    <NavLink to="/profile" onClick={onClick}>Profile</NavLink>
    <NavLink to="/logout">Logout</NavLink>
  </div>
);

ProfilePane.propTypes = { onClick: propTypes.func.isRequired };

const Navbar = () => {
  const dispatch = useDispatch();
  const [pane, setPane] = useState('');
  const [playSound] = useSound(notificationSound);
  const { user } = useSelector((state) => state.user);
  const { unread, notifications } = useSelector((state) => state.notifications);
  const handlePane = (nPane) => (pane !== nPane) ? setPane(nPane) : setPane('');
  useEffect(() => socket.on('new-notification', (notification) => {
    if (user && user.id === notification.receiver_id) {
      dispatch(newNotification(notification));
      playSound();
    }
  }), [user]);
  return (
    <>
      <nav className="navbar" data-testid="navbar">
        <NavLink to="/" className="navbar__logo">
          <img src={logo} alt="app-logo" />
        </NavLink>
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NotificationIcon onClick={() => handlePane('notifications')} unread={unread} /></li>
          <li className="profile-menu">
            <img src={user && user.profile_image ? user.profile_image : blankProfile} alt="profile" onClick={() => handlePane('profiles')} />
          </li>
        </ul>
      </nav>
      {pane === 'notifications' && <NotificationPane onClick={() => handlePane('notifications')} unread={unread} notifications={notifications} />}
      {pane === 'profiles' && <ProfilePane onClick={() => handlePane('profiles')} />}
      <button type="button" className={`panes-container ${pane}`} onClick={() => setPane('')}>p</button>
    </>
  );
};

export default Navbar;
