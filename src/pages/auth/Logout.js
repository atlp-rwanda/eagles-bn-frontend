import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleTitleChange } from '../../components/shared/notifications/NotificationIcon';
import { logoutUser } from '../../store/actions/auth';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser());
    handleTitleChange(0);
  });
  localStorage.clear();
  return <Redirect to="/login" />;
};

export default Logout;
