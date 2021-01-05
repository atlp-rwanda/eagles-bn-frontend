import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../../store/actions/auth';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser());
    if (document.title.includes(') ')) {
      const [, newTitle] = document.title.split(') ');
      document.title = newTitle;
    }
  });
  localStorage.clear();
  return <Redirect to="/login" />;
};

export default Logout;
